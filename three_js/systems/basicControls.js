import {MOUSE} from "three";
import useSpinner from '../../use-spinner';
import '../../use-spinner/assets/use-spinner.css';
let container_3d=document.getElementById("3dcontainer");

function basicControls(scene,camera,controls,renderer) {  

  controls.enableZoom = true;
  controls.enablePan=true;
  controls.enableRotate=true;
  
  // controls.minPolarAngle=controls.maxPolarAngle=1

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
