import { World } from "./three_js/World.js";

async function main() {  
  const world = new World();
  await Promise.all([
    await world.loadBackground(), 
    await world.loadGLTF(),    
  ]);  
  world.createPostProcess(),  
  world.start();
}

main().catch((err) => {
  console.error(err);
});


