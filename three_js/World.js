import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCameraControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { basicControls } from "./systems/basicControls.js";

import { hdriLoad } from "./components/hdri_loader/hdri_loader.js";
import { Debug } from "./systems/Debug.js";
import {
  Box3,
  Box3Helper, 
  Clock,
  Group, 
  Vector3,
  AmbientLight 
} from "three";
import * as THREE from 'three';
import { createEffectComposer } from "./systems/effectComposer.js";

import { GammaCorrectionShader } from '../node_modules/three/examples/jsm/shaders/GammaCorrectionShader.js'; 
import { RenderPass } from '../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from '../node_modules/three/examples/jsm/postprocessing/ShaderPass.js';
import { TAARenderPass } from '../node_modules/three/examples/jsm/postprocessing/TAARenderPass.js';


import { OutlinePass } from '../node_modules/three/examples/jsm/postprocessing/OutlinePass.js';
import { SSRPass } from 'three/addons/postprocessing/SSRPass.js';
import { ReflectorForSSRPass } from 'three/addons/objects/ReflectorForSSRPass.js';

import { gltfLoad } from "./components/gltf_loader/gltfLoad.js";

import assets from "./dataBase/assets.json" assert { type: "json" };

import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import useSpinner from '../use-spinner';
import '../use-spinner/assets/use-spinner.css';

let prompt=document.getElementById("ar-prompt");

const container = document.querySelector("#scene-container");


let ambientLightSun
let shadowLight=0;
let camera;
let renderer;
let scene;
let cameraControls;
let debug;
let clock;
let composer;

let selectableObjects = [];

let box, boxhelper, model;

let UIContainer;
let delta;

let mobile = false;
if (/Android|iPhone/i.test(navigator.userAgent)) {
  mobile = true;
}

   
class World {
  constructor() {     
    // camera.layers.enable(1);
    this.container = container;
    UIContainer = container;   

    scene = createScene();
    renderer = createRenderer();
    renderer.info.autoReset = false;
    composer = createEffectComposer(renderer);          

    camera = createCamera(); 
    scene.add(camera);    
    
       
    const grid = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid.material.opacity = .5;
    grid.position.y = - 0.02;
    grid.material.transparent = true;
    scene.add( grid );          
      
    box = new Box3();
    boxhelper = new Box3Helper(box, 0xffff00);
 

    clock = new Clock();
    //Parent Object where the loaded GLTF Models will be added
   
    //for adding Helpers and FPS
    debug = new Debug();
    // debug.createHelpers(scene);

    //WINDOW RESIZER
    const resizer = new Resizer(container, camera, renderer, composer);
    container.append(renderer.domElement);
    //Orbit Controlls for Camera
    cameraControls = createCameraControls(camera, renderer.domElement);
    camera.position.set(-1.91,2.165,3.53);      
    camera.updateMatrixWorld();
    camera.name="PerspectiveCamera"    
     basicControls(scene,camera,cameraControls,renderer);       
    // resetAndHelp(camera);            
 
  }
  async loadBackground() {
    const { background0,background1,hdri0, hdri1 } = await hdriLoad();    
    scene.environment = hdri1;  
    scene.background=new THREE.Color(0.5,0.5,0.5); 
    //scene.environment.position.set(1,0,0)
    //scene.environment.center.x=-10
    let ambientLightSun = new AmbientLight();
    ambientLightSun.color = new THREE.Color(0xffffff);
    ambientLightSun.intensity = 2;
    scene.add(ambientLightSun);
    console.log(scene.environment.center)
  } 
  //LoadRoom
  async loadRoomGLTF() {
    delta = clock.getDelta();    
    let { gltfData } = await gltfLoad(assets.Room[0].URL,renderer);
    let loadedmodel = gltfData.scene;        
    
    scene.add(loadedmodel)          
    let Point_Light=scene.getObjectByName("Point_Light");
    Point_Light.intensity=10; 
    Point_Light.castShadow=true;
                       
    scene.traverse(function (child) {              
      if (child.isMesh ) {
        if(child.name=="Plane"){
          child.material.color=new THREE.Color(0.3,0.3,0.3)          
        }
        
        if(child.name=="Plane" || child.name=="Plane_1" ){
          child.castShadow = false;
          child.receiveShadow = true; 
          child.material.transparent=true  
          child.material.opacity=0.7;          
        }else{
        child.castShadow = true; 
        child.receiveShadow = true;                
        }                           
      }          
  })
    renderer.render(scene, camera);           
  }    
//CreatePostProcess Effects
  createPostProcess() {   
    console.log(scene.children)    
    const renderPass = new RenderPass(scene, camera);        
    composer.addPass(renderPass);                

    let groundReflector,ssrPass,geometry,selects
         
          const params = {
            enableSSR: true,      
            groundReflector: true,
          };          
          
          geometry = new THREE.PlaneGeometry( 3.88, 3.88 );

            groundReflector = new ReflectorForSSRPass( geometry, {
              clipBias: 0.0003,
              textureWidth: window.innerWidth,
              textureHeight: window.innerHeight,
              color: 0x888888,
              useDepthTexture: true,
            } );
            groundReflector.material.depthWrite = false;
            groundReflector.rotation.x = - Math.PI / 2;
            groundReflector.position.y = -0.01;
            groundReflector.position.z=0.43;
            groundReflector.position.x=0.08; 

            //groundReflector.visible = true;
           
         
          //  let Floor = scene.getObjectByName('Plane_1');  
           // Floor.material.opacity=0.7;   
       //Floor.material.transparent=true; 
            scene.add( groundReflector );
      
            ssrPass = new SSRPass( {
              renderer,
              scene,
              camera,
              width: innerWidth,
              height: innerHeight,
              groundReflector: params.groundReflector ? groundReflector : null,
              selects: params.groundReflector ? selects : null
            } );
      
            composer.addPass( ssrPass );
                           
                ssrPass.groundReflector = groundReflector,
                ssrPass.selects = selects;
                        
                ssrPass.groundReflector = null,
                ssrPass.selects = null;
                            
            ssrPass.thickness = 0.018;           
            ssrPass.opacity = 1;
            groundReflector.opacity = ssrPass.opacity;                              

          console.log(composer)
       
     //GammaCorrectionShader for the Colour fixing
    const copyPass2 = new ShaderPass(GammaCorrectionShader);    
    composer.addPass(copyPass2); 
       
   

  }
 

  start() {
    renderer.setAnimationLoop(function () {
      cameraControls.update();      
      composer.render();
      camera.updateMatrixWorld()                     

      //DEBUG      
      debug.update(renderer);
      TWEEN.update()               
      //console.log(localStorage)
    });  
       
    //Spinner Remove after starting to render the scene
    let loadingSpinner = document.getElementById("loadingSpinner");   
    loadingSpinner.remove();                 
    renderer.render(scene, camera);
    //DEBUG
    debug.displayStats();         
  }
  
}

export { World };
