import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    40, // fov = Field Of View
    window.innerWidth/window.innerHeight, // aspect ratio (dummy value)
    0.1, // near clipping plane
    1000 // far clipping plane);
  );
  //camera.position.set(0.2, 1.5, 9);
  return camera;
}
export { createCamera };
