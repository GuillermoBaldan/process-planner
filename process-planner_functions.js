function createLinkwebV3(linkweb, nodeProcess) {
  console.log("Se mete en la función createLinkwebV3");
  if (linkweb.length > 0) {
    linkweb.forEach((nodeWeb) => {
      if (nodeWeb.name == nodeProcess.name) {
        console.log("Ya existe el nodo");
      } else {
        //Se guarda el nodo
        //Caso-padre: Es un nodo padre? Si alguna de su salidas es una entrada de otro nodo
        if (isFather(nodeProcess, nodeWeb)) {
          nodeProcess.child.push(nodeWeb);
          sustitutionInArray(linkweb, nodeWeb, nodeProcess);
          console.log("Se ha creado el nodo como padre");
        } else if (isSon(nodeProcess, nodeWeb)) {
          //Caso-hijo: Es un nodo hijo?  Si alguna de sus entradas son una salida de otro nodo
          nodeWeb.child.push(nodeProcess);
          console.log("f: createLinkwebV3: Se ha creado el nodo como hijo");
        } else if (nodeWeb.child.length > 0) {
          //vemos si Nodeweb tiene hijos para buscar hacia abajo
          createLinkwebV3(nodeWeb.child, nodeProcess);
          console.log("Se va hacia la profundidad");
        } else {
          //Resulto que Nodeweb no tiene hijos y por lo tanto no es padre ni hijo entonces se añade al array de linkweb
          linkweb.push(nodeProcess);
          console.log(
            "Se ha añadido el nodo al array de los primeros, linkweb"
          );
        }
      }
    });
  } else {
    linkweb.push(nodeProcess);
    console.log("Se ha añadido el nodo al array de los primeros, linkweb");
  }
  // return linkweb; Creo que no hace falta devolver el array
}

//Sin terminar
function findInputNode(input, linkweb) {
  let result;
  linkweb.forEach((node) => {
    console.log(`f: findInputNode: node:${node.name}, input:${node.input}`);

    node.input.forEach((nodeInput) => {
      if (input == nodeInput) {
        console.log("Se hace match");
        result = node;
        return result;
      } else if (node.child.length > 0) {
        console.log("Se mete en el hijo de findInputNode");
        result = findInputNode(input, node.child);
      } else {
        console.log("Se ha llegado a un extremo en findInputNode");
      }
    });
  });
  return result;
}

function findOutputNode(Output, linkweb) {
  let result;
  linkweb.forEach((node) => {
    console.log(`f: findOutputNode: node:${node.name}, Output:${node.output}`);

    node.output.forEach((nodeOutput) => {
      if (Output == nodeOutput) {
        console.log("f: findOutputNode: Se hace match");
        result = node;
        return result;
      } else if (node.child.length > 0) {
        console.log("Se mete en el hijo de findOutputNode");
        result = findOutputNode(Output, node.child);
      } else {
        console.log("Se ha llegado a un extremo en findInputNode");
      }
    });
  });
  return result;
}

//Sin terminar
function pathFinder(nodeA, nodeB, linkweb) {
  let path = [];
  //Suponemos que nodeA es el nodo Padre y nodeB el nodo Hijo
  path = pathFinderFatherSon(nodeA, nodeB, linkweb);
  if (path.length == 0) {
    //Suponemos que nodeA es el nodo Hijo y nodeB el nodo Padre
    path = pathFinderFatherSon(nodeB, nodeA, linkweb);
  } else {
    path = -1;
  }
  return path;
}

function pathFinderFatherSon(nodeFather, nodeSon, linkweb) {
  let path = [];
  console.log(
    `f: pathFinderFatherson: nodeFather:${nodeFather.name}, childs:${nodeFather.child.length}`
  );
  if (nodeFather.child.length > 0) {
    nodeFather.child.forEach((nodeChild) => {
      if (nodeChild == nodeSon) {
        console.log(
          `f: pathFinderFatherson: Se hace match: nodeChild.name: ${nodeChild.name}`
        );
        path = path.concat(nodeFather);
        path = path.concat([nodeChild]);
        console.log(`path: ${path}`);
      } else if (nodeChild.child.length > 0) {
        path = path.concat(nodeFather);
        path = path.concat(pathFinderFatherSon(nodeChild, nodeSon, linkweb));
      } else {
        path = path.concat([]);
      }
    });
  }
  return path;
}

//Sin terminar
function input_outputPathfinder(input, output, linkweb) {
  let array;
}

function isFather(nodeFather, nodeChild) {
  let flag = false;
  nodeChild.input.forEach((inputChild) => {
    nodeFather.output.forEach((outputFather) => {
      if (inputChild == outputFather) {
        flag = true;
      }
    });
  });
  return flag;
}

function isSon(nodeSon, nodeFather) {
  let flag = false;
  nodeFather.output.forEach((outputFather) => {
    nodeSon.input.forEach((inputSon) => {
      if (outputFather == inputSon) {
        flag = true;
      }
    });
  });
  return flag;
}

function sustitutionInArray(array, oldItem, newItem) {
  let temp = oldItem;
  let index = array.IndexOf(oldItem);
  array[index] = newItem;
  return array;
}

function testSum(a, b) {
  return a + b;
}

module.exports = {
  testSum: testSum,
  createLinkwebV3: createLinkwebV3,
  isSon: isSon,
  isFather: isFather,
  sustitutionInArray: sustitutionInArray,
  findInputNode: findInputNode,
  findOutputNode: findOutputNode,
  pathFinderFatherSon: pathFinderFatherSon,
};
