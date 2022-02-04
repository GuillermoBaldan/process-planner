const pp = require("./process-planner_functions");
const ppClasses = require("../process-planner_classes");
let engine = {
  name: "engine",
  entries: ["mechanical movement"],
  exits: ["electricity"],
};

let lightbulb = {
  name: "lightbulb",
  entries: ["electricity"],
  exits: ["light"],
};

let nodeList = [engine, lightbulb];

let linkweb = []; //array of nodes of class nodeProcess interrelated

let ligthbulb = new ppClasses.nodeProcess(
  ligthbulb,
  ["electricity"],
  ["light"],
  []
);
console.log(ligthbulb);
//console.log(pp.testSum(1, 5));
