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

let nodeList = [coil, ligthbulb];

nodeList.forEach((node) => {
  pp.createLinkwebV3(linkweb, node);
});

console.log(pp.findInputNode("electricity", linkweb));
