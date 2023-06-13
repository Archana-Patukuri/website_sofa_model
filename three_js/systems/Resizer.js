
const setSize = function (container, camera, renderer, composer,groundReflector) {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  let val = 1;

  //If Android/iPhone, Reduce the Pixel ratio for the performance
  if (/Android|iPhone/i.test(navigator.userAgent)) {
    val = 0.5;
    // loadingText.innerHTML = `mobiledevice`;
  }

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio * val);

  composer.setSize(container.clientWidth, container.clientHeight);
  composer.setPixelRatio(window.devicePixelRatio * val);
if(groundReflector){
  groundReflector.getRenderTarget().setSize( window.innerWidth, window.innerHeight );
  groundReflector.resolution.set( window.innerWidth, window.innerHeight );
  console.log("ground reflector")
}
 
};

class Resizer {
  constructor(container, camera, renderer, composer,groundReflector) {
    // set initial size
    setSize(container, camera, renderer, composer,groundReflector);

    window.addEventListener("resize", () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer, composer,groundReflector);
     
    });
  }
}

export { Resizer };
