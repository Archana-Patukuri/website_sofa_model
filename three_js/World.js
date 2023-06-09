import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCameraControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { basicControls } from "./systems/basicControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { gltfLoad } from "./components/gltf_loader/gltfLoad.js";
import { hdriLoad } from "./components/hdri_loader/hdri_loader.js";
import { Debug } from "./systems/Debug.js";
// import { SSAARenderPass } from 'three/addons/postprocessing/SSAARenderPass.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import {
  Clock,
  Vector3,
  AmbientLight ,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader,
  UniformsUtils, 
  AnimationMixer,
  LoopOnce
} from "three";
import * as THREE from 'three';
import { createEffectComposer } from "./systems/effectComposer.js";
import { GammaCorrectionShader } from '../node_modules/three/examples/jsm/shaders/GammaCorrectionShader.js'; 
import { RenderPass } from '../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from '../node_modules/three/examples/jsm/postprocessing/ShaderPass.js';
import { SubsurfaceScatteringShader } from "three/examples/jsm/shaders/SubsurfaceScatteringShader.js";
import { SSRPass } from 'three/addons/postprocessing/SSRPass.js';
import { ReflectorForSSRPass } from 'three/addons/objects/ReflectorForSSRPass.js';
import assets from "./dataBase/assets.json" assert { type: "json" };
import { TAARenderPass } from '../node_modules/three/examples/jsm/postprocessing/TAARenderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
const container = document.querySelector("#scene-container");

let camera;
let renderer;
let scene;
let cameraControls;
let debug;
let clock;
let composer;
let ambientLightSun;

let delta,gui;
let animationClips = [],mixer;

let mobile = false;
if (/Android|iPhone/i.test(navigator.userAgent)) {
  mobile = true;
}

   
class World {
  constructor() {         
    this.container = container;    

    scene = createScene();
    renderer = createRenderer();
    renderer.info.autoReset = false;
    composer = createEffectComposer(renderer);          

    camera = createCamera(); 
    scene.add(camera);                             

    clock = new Clock();  
    debug = new Debug();

    //WINDOW RESIZER
    const resizer = new Resizer(container, camera, renderer, composer);
    container.append(renderer.domElement);
    //Orbit Controlls for Camera
    cameraControls = createCameraControls(camera, renderer.domElement);
    camera.position.set(-1.91,2.165,3.53);      
    camera.updateMatrixWorld();
    camera.name="PerspectiveCamera"    
     basicControls(scene,camera,cameraControls,renderer);                      
 
  }
  async loadBackground() {
    const { background0,background1,hdri0, hdri1 } = await hdriLoad();    
    scene.environment = hdri1;          
    scene.background=background0
    //scene.environment.position.set(1,0,0)
    //scene.environment.center.x=-10
   /*  ambientLightSun = new AmbientLight();
    ambientLightSun.color = new THREE.Color(0xffffff);
    ambientLightSun.intensity = 1;
    scene.add(ambientLightSun);   */  
  } 
  //LoadRoom
  async loadGLTF() {     
    let { gltfData } = await gltfLoad(assets.Room[0].URL,renderer);
    let loadedmodel = gltfData.scene;             
    scene.add(loadedmodel)          
    let Point_Light=scene.getObjectByName("Point_Light");
    Point_Light.intensity=5; 
    Point_Light.castShadow=true;     
    Point_Light.shadow.mapSize.width = 2048; 
    Point_Light.shadow.mapSize.height = 2048;         
    Point_Light.shadow.camera.near = 0.01; 
    Point_Light.shadow.camera.far = 1000;
     mixer = new AnimationMixer(loadedmodel);  

     let param={
      'Light':10,
      'Animations':1,
      'Material Variants':0
     }
  if(gui)gui.destroy()                 
  gui = new GUI(); 
  gui.add( param, 'Light', {
    'On': 10,
    'Off': 0,       
  } ).onChange( function ( value ) {    
    Point_Light.intensity=parseInt( value ); 
    if(value==0)  {
      renderer.toneMappingExposure = 0.1;      
    }else{
      renderer.toneMappingExposure = 1;      
    }   
  } );  
  
  gui.add( param, 'Animations', {
    'Recline': 0,
    'Normal': 1,    
  } ).onChange( function ( value ) {
    let i= parseInt( value );  
    if(i==0){      
    animationClips[i] = mixer.clipAction(gltfData.animations[i]);
    animationClips[i].setLoop(LoopOnce);    
    animationClips[i].clampWhenFinished = true;            
    animationClips[i].play(); 
    }else{
      mixer.stopAllAction();
    }
  } );
  gui.add( param, 'Material Variants', {
    'Red': 0,
    'Green': 1,
    'Blue': 2,    
  } ).onChange( function ( value ) {
    let i= parseInt( value );    
    gltfData.functions.selectVariant(gltfData.scene,gltfData.userData.variants[i] );              
  } );

   
  
  gui.close();  
 //SSS(Sub surface scattering effect)
 if(Point_Light.intensity>0){    
  let LampTop = scene.getObjectByName("Mesh0080_6");
  let texLoader = new TextureLoader();
  let subTexture = texLoader.load("textures/subSurface.jpg");
  subTexture.wrapS = RepeatWrapping;
  subTexture.wrapT = RepeatWrapping;
  subTexture.repeat.set(4, 4);

  const shader = SubsurfaceScatteringShader;
  const uniforms = UniformsUtils.clone(shader.uniforms);
  uniforms["diffuse"].value = new Vector3(0.8, 0.3, 0.2);
  uniforms["shininess"].value = 10;

  uniforms["thicknessMap"].value = subTexture;
  uniforms["thicknessColor"].value = new Vector3(0.1, 0, 0);
  uniforms["thicknessDistortion"].value = 0.1;
  uniforms["thicknessAmbient"].value = 0.4;
  uniforms["thicknessAttenuation"].value = 0.7;
  uniforms["thicknessPower"].value = 10.0;
  uniforms["thicknessScale"].value = 1;

  var subMaterial = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader,
    lights: true,
  });

  LampTop.material = subMaterial;      
}

let Floor=scene.getObjectByName("Plane001_1")
let geometry = new THREE.PlaneGeometry( 3, 3);  
  let groundMirror = new Reflector( geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x888888,
    multisample:4,
    } );           
    groundMirror.rotation.x = - Math.PI / 2;            
    groundMirror.position.z=0.25;
    groundMirror.position.y=-0.01;            
    groundMirror.position.x=0.5;     
    Floor.material.opacity=0.7;             
    Floor.material.transparent=true;                
    scene.add( groundMirror );  


    renderer.render(scene, camera);           
  }    
//CreatePostProcess Effects
  createPostProcess() { 
    //SHADOWS  
    scene.traverse(function (child) {              
      if (child.isMesh ) {                          
        if(child.name=="Plane001_1" || child.name=="Plane001"){          
          child.receiveShadow = true;                  
        }else{          
        child.castShadow = true;                  
        } 
                                                    
      }          
  }) 

    const renderPass = new RenderPass(scene, camera); 
    // renderPass.enabled = false;       
    composer.addPass(renderPass);     
    
     const taaRenderPass = new TAARenderPass(scene, camera);
    taaRenderPass.unbiased = true;
    taaRenderPass.sampleLevel = 1;        
    composer.addPass(taaRenderPass);  
   

  //SSR   
       /*  let groundReflector,ssrPass,geometry,selects         
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
            groundReflector.position.y=0.001;            
            groundReflector.position.x=0.5;                        
                     
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
        */              
    const copyPass2 = new ShaderPass(GammaCorrectionShader);    
    composer.addPass(copyPass2); 
       
   

  }
 

  start() {
    renderer.setAnimationLoop(function () {
      cameraControls.update();      
      composer.render();
      // renderer.render(scene, camera);
      camera.updateMatrixWorld()                     

      const delta = clock.getDelta();       
     if(mixer) mixer.update(delta)
      //DEBUG      
      debug.update(renderer);                          
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
