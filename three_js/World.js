import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCameraControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { basicControls } from "./systems/basicControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";

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

let delta,gui;

let mobile = false;
if (/Android|iPhone/i.test(navigator.userAgent)) {
  mobile = true;
}

   
class World {
  constructor() {     
    // camera.layers.enable(1);
    this.container = container;    

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
    //scene.background=new THREE.Color(0.5,0.5,0.5);     
    scene.background=background0
    //scene.environment.position.set(1,0,0)
    //scene.environment.center.x=-10
    let ambientLightSun = new AmbientLight();
    ambientLightSun.color = new THREE.Color(0xffffff);
    ambientLightSun.intensity = 2;
    scene.add(ambientLightSun);    
  } 
  //LoadRoom
  async loadGLTF() {
    delta = clock.getDelta();    
    let { gltfData } = await gltfLoad(assets.Room[0].URL,renderer);
    let loadedmodel = gltfData.scene;        
    
    scene.add(loadedmodel)          
    let Point_Light=scene.getObjectByName("Point_Light");
    Point_Light.intensity=10; 
    Point_Light.castShadow=true;
                       
    Point_Light.shadow.mapSize.width = 2048; 
    Point_Light.shadow.mapSize.height = 2048;
     /*Point_Light.shadow.camera.near = 0.1; 
    Point_Light.shadow.camera.far = 1000; */   
  
  if(gui)gui.destroy()                 
  gui = new GUI();  
  gui.add( gltfData, 'Material Variants', {
    'Red': 0,
    'Green': 1,
    'Black': 2,    
  } ).onChange( function ( value ) {
    let i= parseInt( value );
    gltfData.functions.selectVariant(gltfData.scene,gltfData.userData.variants[i] );             
  } );
   
   gui.add( Point_Light, 'Light', {
    'On': 10,
    'Off': 0,       
  } ).onChange( function ( value ) {    
    Point_Light.intensity=parseInt( value );
  } ); 

  console.log(gltfData)  

    renderer.render(scene, camera);           
  }    
//CreatePostProcess Effects
  createPostProcess() {   
    scene.traverse(function (child) {              
      if (child.isMesh ) {        
        if(child.name=="Plane" || child.name=="Plane_1" ){
          child.castShadow = false;
          child.receiveShadow = true;                  
        }else{
        child.castShadow = true; 
        child.receiveShadow = true;                
        }                                      
      }          
  })
       
    const renderPass = new RenderPass(scene, camera);        
    composer.addPass(renderPass);                
  //SSR
        let groundReflector,ssrPass,geometry,selects         
          const params = {
            enableSSR: true,      
            groundReflector: true,
          };                    
            geometry = new THREE.PlaneGeometry( 3, 3);
            groundReflector = new ReflectorForSSRPass( geometry, {
              clipBias: 0.0003,
              textureWidth: window.innerWidth,
              textureHeight: window.innerHeight,
              color: 0x888888,
              useDepthTexture: true,
            } );
            groundReflector.material.depthWrite = false;
            groundReflector.rotation.x = - Math.PI / 2;            
            groundReflector.position.z=0.25;
            groundReflector.position.x=0.5;                        
         
           let Floor = scene.getObjectByName('Plane_1');  
           Floor.material.opacity=0.7;   
           Floor.material.transparent=true;                   
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
                scene.add( groundReflector ); 
     
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
