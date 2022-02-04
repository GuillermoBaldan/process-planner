const pp = require("./process-planner_functions");
const ppClasses = require("./process-planner_classes");

let linkweb = []; //array of nodes of class nodeProcess interrelated

let ligthbulb = new ppClasses.nodeProcess(
  "ligthbulb",
  ["electricity"],
  ["light"],
  []
);

let engine = new ppClasses.nodeProcess(
  "engine",
  ["mechanical movement"],
  ["electricity"],
  []
);

let nodeList = [engine, ligthbulb];

nodeList.forEach((node) => {
  pp.createLinkwebV3(linkweb, node);
});

console.log(ligthbulb);
console.log(engine);
