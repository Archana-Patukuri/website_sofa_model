import {MOUSE} from "three";
function basicControls(scene,camera,controls,renderer) {  

  controls.enableZoom = true;
  controls.enablePan=true;
  controls.enableRotate=true;
  
  controls.minPolarAngle=controls.maxPolarAngle=1

  controls.listenToKeyEvents( window );  

  controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.DOLLY,
    RIGHT: MOUSE.PAN
  }    
                    
   controls.maxDistance=10;  
  controls.update();
  
}

export { basicControls };
