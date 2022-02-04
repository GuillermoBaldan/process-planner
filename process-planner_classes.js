class process {
  constructor(name, entries, exits) {
    this.name = name;
    this.entries = entries;
    this.exits = exits;
  }
}

class nodeProcess {
  constructor(name, input, output, child) {
    this.name = name; //string
    this.child = child; //Array of nodes of class nodeProcess
    this.input = input; //Array of strings
    this.output = output; //Array of strings
  }
}

module.exports = { process, nodeProcess };
