import { World } from "./three_js/World.js";

async function main() {  
  const world = new World();
  world.loadBackground();
  await Promise.all([    
    //await world.loadRoomGLTF(),    
    await world.loadRoom(),    
    await world.loadLamp(),    
    await world.loadSofa(),    
  ]);  
  world.createPostProcess(),  
  world.start();
}

main().catch((err) => {
  console.error(err);
});


