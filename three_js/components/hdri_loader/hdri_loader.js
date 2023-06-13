import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import { EquirectangularReflectionMapping, sRGBEncoding } from "three";
import { TextureLoader } from "three";

import { manager } from "../../systems/loadingManager";

async function hdriLoad() {
  const hdriLoader = new RGBELoader(manager).setPath("/hdri/");
  const textureLoader = new TextureLoader(manager).setPath("/hdri/");
  
  const [background0, background1, hdri0, hdri1] = await Promise.all([
    textureLoader.loadAsync("background.jpg"),
    textureLoader.loadAsync("lythwood_room_1k.jpg"),
    hdriLoader.loadAsync("cyclorama_hard_light_1k.hdr"),
    hdriLoader.loadAsync("lythwood_room_1k.hdr"),
  ]);

  background0.encoding = background1.encoding = sRGBEncoding;
  background0.mapping = background1.mapping = EquirectangularReflectionMapping;
  hdri0.mapping = hdri1.mapping = EquirectangularReflectionMapping;

  return { background0, background1, hdri0, hdri1 };
}

export { hdriLoad };
