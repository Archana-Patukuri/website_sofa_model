import { World } from "./three_js/World.js";

async function main() {  
  const world = new World();  
  world.loadBackground();  
  world.loadRoomGLTF();
  world.createPostProcess();  
  world.start();
}

main().catch((err) => {
  console.error(err);
});


