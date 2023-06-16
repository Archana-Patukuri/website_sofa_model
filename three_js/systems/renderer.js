import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  LinearToneMapping,
  sRGBEncoding,
  PCFSoftShadowMap,
} from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.8;
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;
   renderer.xr.enabled = true;
  return renderer;
}
export { createRenderer };
