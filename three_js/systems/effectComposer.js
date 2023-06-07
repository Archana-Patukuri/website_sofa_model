import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

function createEffectComposer(renderer) {
  const composer = new EffectComposer(renderer);

  return composer;
}
export { createEffectComposer };
