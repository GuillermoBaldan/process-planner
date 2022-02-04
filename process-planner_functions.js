function createLinkwebV3(linkweb, nodeProcess) {
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
        console.log("Se ha creado el nodo como hijo");
      } else if (nodeWeb.child.length > 0) {
        //vemos si Nodeweb tiene hijos para buscar hacia abajo
        createLinkwebV3(nodeWeb.child, nodeProcess);
        console.log("Se va hacia la profundidad");
      } else {
        //Resulto que Nodeweb no tiene hijos y por lo tanto no es padre ni hijo entonces se añade al array de linkweb
        linkweb.push(nodeProcess);
        console.log("Se ha añadido el nodo al array de los primeros, linkweb");
      }
    }
  });
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
};