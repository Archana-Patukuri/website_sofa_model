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
let prompt=document.getElementById("ar-prompt");

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

    renderer.domElement.addEventListener( 'pointermove', (e) => {
      prompt.style.display="none";
    }); 
    
    clock = new Clock();  
    debug = new Debug();

    //WINDOW RESIZER
    const resizer = new Resizer(container, camera, renderer, composer);
    container.append(renderer.domElement);
    //Orbit Controlls for Camera
    cameraControls = createCameraControls(camera, renderer.domElement);
    camera.position.set(-3.1,2.165,5.53);      
    camera.updateMatrixWorld();
    camera.name="PerspectiveCamera"    
     basicControls(scene,camera,cameraControls,renderer);                      
 
  }
  async loadBackground() {
    const { background0,background1,hdri0, hdri1 } = await hdriLoad();    
    scene.environment = hdri1;          
     scene.background = new THREE.Color(0xf5f5f5);         
  } 
  //LoadRoom
  async loadGLTF() {     
    let { gltfData } = await gltfLoad(assets.Room[0].URL,renderer);
    let loadedmodel = gltfData.scene;             
    scene.add(loadedmodel)          
    let Point_Light=scene.getObjectByName("Point_Light");
    Point_Light.intensity=10; 
    Point_Light.castShadow=true;     
    Point_Light.shadow.mapSize.width = 2048; 
    Point_Light.shadow.mapSize.height = 2048;         
    Point_Light.shadow.camera.near = 0.01; 
    Point_Light.shadow.camera.far = 1000;
     mixer = new AnimationMixer(loadedmodel);  
    let controlsContainer=document.getElementById("controlsContainer")
    let controls_label=document.getElementById("controls-label")
    controls_label.addEventListener("click",function(e){
      if(controlsContainer.style.display!="block"){
      controlsContainer.style.display="block";
      }else{
        controlsContainer.style.display="none";
      }
    })
  let light=document.getElementById("light")
  light.addEventListener("click",function(e){
    if(e.target.checked){
      Point_Light.intensity=10; 
      renderer.toneMappingExposure = 1;      
    }else{
      renderer.toneMappingExposure = 0.1;      
      Point_Light.intensity=0; 
    }   
  })
  let animation=document.getElementById("animation");
  animation.addEventListener("click",function(e){
    if(e.target.checked){
      animationClips[0] = mixer.clipAction(gltfData.animations[0]);
      animationClips[0].setLoop(LoopOnce);    
      animationClips[0].clampWhenFinished = true;            
      animationClips[0].play(); 
    }else{
      mixer.stopAllAction();
    }
  })
  let button=document.querySelectorAll(".button") 
  for(let i=0;i<3;i++){
    button[i].addEventListener("click",function(){   
      gltfData.functions.selectVariant(gltfData.scene,gltfData.userData.variants[i] );                  
  })
  }        
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
let geometry = new THREE.PlaneGeometry( 2.8, 2.74);  
  let groundMirror = new Reflector( Floor.geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x888888,   
    } );        
    console.log(groundMirror)   
    groundMirror.scale.x=1.5
    groundMirror.scale.z=1.5
    // groundMirror.rotation.x = - Math.PI / 2;            
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
            if(child.name=="Mesh0080_3"){
              child.castShadow=false
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
    prompt.style.display="block";               
    renderer.render(scene, camera);
    //DEBUG
    debug.displayStats();         
  }
  
}

export { World };
