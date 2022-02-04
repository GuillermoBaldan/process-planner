const pp = require("./process-planner_functions");
const ppClasses = require("./process-planner_classes");

let linkweb = []; //array of nodes of class nodeProcess interrelated

let ligthbulb = new ppClasses.nodeProcess(
  "ligthbulb",
  ["electricity"],
  ["light"],
  []
);

let coil = new ppClasses.nodeProcess(
  "coil",
  ["mechanical movement"],
  ["electricity"],
  []
);

let camera = new ppClasses.nodeProcess("camera", ["light"], ["image"], []);

let nodeList = [coil, ligthbulb, camera];

let path;

nodeList.forEach((node) => {
  pp.createLinkwebV3(linkweb, node);
});

console.log(pp.findInputNode("electricity", linkweb));
console.log(pp.findOutputNode("image", linkweb));
console.log(linkweb);
path = pp.pathFinderFatherSon(coil, camera, linkweb);
console.log("--------PATH--------");
console.log("Path:");
console.log(`path.length: ${path.length}`);
path.forEach((node) => {
  console.log(node);
  console.log("--------------------");
});
