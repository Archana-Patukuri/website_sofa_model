import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import { EquirectangularReflectionMapping, sRGBEncoding } from "three";
import { TextureLoader } from "three";

import { manager } from "../../systems/loadingManager";

async function hdriLoad() {
  const hdriLoader = new RGBELoader(manager).setPath("/hdri/");
  const textureLoader = new TextureLoader(manager).setPath("/hdri/");
  
  const [background0, hdri0] = await Promise.all([
    textureLoader.loadAsync("background.jpg"), 
    hdriLoader.loadAsync("cyclorama_hard_light_1k.hdr"),    
  ]);

  background0.encoding  = sRGBEncoding;
  background0.mapping =  EquirectangularReflectionMapping;
  hdri0.mapping = EquirectangularReflectionMapping;

  return { background0, hdri0 };
}

export { hdriLoad };
