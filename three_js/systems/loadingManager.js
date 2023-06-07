import { LoadingManager } from "three";

const manager = new LoadingManager();

manager.onLoad = function () {
  // console.log("Loading complete!");
  // loadingText.innerHTML = "Loading complete!";
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
  // console.log("Loading");
};

manager.onError = function (url) {
  console.log("There was an error loading " + url);
};

export { manager };
