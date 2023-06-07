
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '../../../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

import { manager } from "../../systems/loadingManager";
import GLTFMeshGpuInstancingExtension from "../../../node_modules/three-gltf-extensions/loaders/EXT_mesh_gpu_instancing/EXT_mesh_gpu_instancing.js";

import GLTFMaterialsVariantsExtension from "three-gltf-extensions/loaders/KHR_materials_variants/KHR_materials_variants.js";
import { KTX2Loader } from '../../../node_modules/three/examples/jsm/loaders/KTX2Loader.js';


async function gltfLoad(modelURL,renderer) {
  

  const loader = new GLTFLoader(manager);
  
  //Draco Loader
  const dracoLoader = new DRACOLoader(manager);
  dracoLoader.setDecoderPath("decoder/draco/");
  loader.setDRACOLoader(dracoLoader);
  
  const ktx2Loader = new KTX2Loader(manager)
            .setTranscoderPath( 'decoder/basis/' )
            .detectSupport( renderer );
  loader.setKTX2Loader( ktx2Loader );       
  
  //MeshGPU Instancing
  loader.register((parser) => new GLTFMeshGpuInstancingExtension(parser));
  //Material Variants
  loader.register((parser) => new GLTFMaterialsVariantsExtension(parser));
  //Draco Loader

  const gltfData = await loader.loadAsync(`${modelURL}`);      
  
  return { gltfData };
}

export { gltfLoad };
