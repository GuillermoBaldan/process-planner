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

let database = [engine, lightbulb];

class process {
  constructor(name, entries, exits) {
    this.name = name;
    this.entries = entries;
    this.exits = exits;
  }
}

class node {
  constructor(name, child) {
    this.name = name;
    this.child = child; //Array de nodes
  }
}

let linkweb = []; //array of objects, not regular
//Creamos linkwebs
//1.2 Construimos el linkweb

function createLinkwebV2(linkweb, process) {
  let flag = false;

  //1 Buscamos el process en el linkweb
  //1.1 Lo recorremos en horizontal

  if (linkweb.length > 0) {
    linkweb.forEach((itemProcess) => {
      if (itemProcess.name === process.name) {
        //1.1.1 Si lo encontramos, devolvemos el linkweb tal y como está, Suponemos que dos procesos con el mismo nombre son iguales
        return true;
      }
    });
    if (flag === false) {
      //hacemos búsquedas anidadas
    }
  } else {
    //Si el linkweb está vacio creamos el primer proceso
    linkweb.push(new process(process.name, process.entries, process.exits));
  }

  //2 Si no hemos encontrado el process en el linkweb lo añadimos a la raíz del linkweb
  linkweb.push(new process(process.name, process.entries, process.exits));
}

// Suposiciones: No existen referencias circulares
//1.1 Recorremos la database
database.forEach((process) => {
  //Metemos el process en el linkweb;
});

/*         function createLinkwebV1(process) {

            //1 Buscamos el process en el linkweb
            //1.1 Lo recorremos en horizontal
            linkweb.forEach(itemProcess => {
                if (itemProcess.name === process.name) {
                    //1.1.1 Si lo encontramos, devovemos el linkweb tal y como está, Suponemos que dos procesos con el mismo nombre son iguales
                    return linkweb;
                } 
            });
            createLinkweb()
            //2 Si no hemos encontrado el process en el linkweb lo añadimos a la raíz del linkweb
            linkweb.push(new process(process.name, process.entries, process.exits));
        
        }
         */
