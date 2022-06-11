const nFibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  console.log(nFibonacci(n - 1));
  console.log(nFibonacci(n - 2));

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

function List() {
  this.head = null;
  this.lenght = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

List.prototype.add = function (value) {
  const node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.lenght++;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.lenght++;
  return node;
};

//borra el elemento que le paso, cualquiera sea y no te desconecta la lista
List.prototype.remove = function (value) {
  if (!this.head) {
    return;
  }

  if (this.head.value === value) {
    this.head = this.head.next;
    this.lenght--;
    return;
  }
  if (this.head.next) {
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.lenght--;
        return;
      }
      current = current.next;
    }
  }
};

List.prototype.countValuePosirtion = function (value) {
  let count = 0;
  let current = this.head;
  while (current) {
    if (current.value === value) {
      count++;
    }
    current = current.next;
  }
  return console.log(count);
};

List.prototype.getAll = function () {
  let current = this.head;
  if (!current) {
    return console.log('Lista vacia');
  }

  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

List.prototype.search = function (callback = undefined, value = undefined) {
  let current = this.head;
  if (!current) {
    return console.log('Lista vacia'); // no existe devuelve
  }

  if (callback) {
    while (current) {
      if (callback(current.value)) {
        let myvalue = current.value;
        if (myvalue === value) {
          return true;
        }
      }
      current = current.next;
    }
  }
  if (value) {
    while (current) {
      // si no hay funcion checkea el valor
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }
};

const mylist = new List();

mylist.add('Lorenzo');
mylist.add('pepe');
mylist.add('alfo');
mylist.getAll();
console.log('-----');
mylist.remove('Lorenzo');
mylist.remove('pepe');
mylist.remove('alfo');

mylist.getAll();
console.log('-----');

this.set = function (key, value) {
  let index = this.hash(key);
  this.buckets[index].add({ key, value });
  this.length++;
};

this.get = function (key) {
  let index = this.hash(key);
  return this.buckets[index].search(key);
};

this.hash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
};

/* !!!!!!COMENTA/DESCOMENTA CON ALT+SHIFT+A!!!!!!! */

// ---- Linked List ----
//EJERCICIO 1
// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]

function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.length++;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
  return node;
};

LinkedList.prototype.getAll = function () {
  let current = this.head;
  if (!current) {
    return console.log('Lista vacia');
  }

  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

LinkedList.prototype.orderList = function () {
  let current = this.head;
  let previous = null;
  let next = null;
  while (current) {
    next = current.next;
    if (previous && previous.value > current.value) {
      previous.next = next;
      current.next = this.head;
      this.head = current;
    }
    previous = current;
    current = next;
  }
};

console.log('-----1------');

const myLinkedList = new LinkedList();
myLinkedList.add(4);
myLinkedList.add(5);
myLinkedList.add(1);
myLinkedList.getAll();
console.log('-----');
myLinkedList.orderList();
myLinkedList.getAll();
console.log('-----');

const myLinkedList2 = new LinkedList();
myLinkedList2.add(10);
myLinkedList2.add(11);
myLinkedList2.add(12);
myLinkedList2.getAll();

// EJERCICIO 2
// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]

LinkedList.prototype.reverseLinkedList = function () {
  let current = this.head;
  let previous = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

console.log('-----2-----');
myLinkedList.reverseLinkedList();
myLinkedList.getAll();
console.log('-----');

// EJERCICIO 3
// Implementar la función joinLinkedLists que, a partir de dos listas simplemente enlazadas
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> [2] --> [8] --> [22] --> null
//    Lista 2: Head --> [6] --> [15] --> [4] --> null
//    joinLinkedList(linkedListOne, linkedListTwo)
//    Head --> [2] --> [6] --> [8] --> [15] --> [22] --> [4] --> null

LinkedList.prototype.joinLinkedLists = function (linkedListOne, linkedListTwo) {
  let current = linkedListOne.head;
  while (current) {
    this.add(current.value);
    current = current.next;
  }
  current = linkedListTwo.head;
  while (current) {
    this.add(current.value);
    current = current.next;
  }
};

console.log('-----3-----');

const twoLinkedList = new LinkedList();
twoLinkedList.joinLinkedLists(myLinkedList, myLinkedList2);
twoLinkedList.getAll();

// ---- Arboles Binarios ----
// EJERCICIO 4
// Implementar la función searchMin que busque en nuestro arbol binario, el valor minimo.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
//  Debería retornarnos 2

BinarySearchTree.prototype.searchMin = function () {
  let current = this.root;
  while (current.left) {
    current = current.left;
  }
  return console.log(current.value);
};

// EJERCICIO 5
// Implementar la función createBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree.
// Ejemplo:
//    - Array[16,6,23,2,17,31,14,5];
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

function BinarySearchTree() {
  this.root = null;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.add = function (value) {
  const node = new Node(value);
  if (!this.root) {
    this.root = node;
  } else {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
};

function createBST(array) {
  const bst = new BinarySearchTree();
  array.forEach((element) => {
    bst.add(element);
  });
  return bst;
}

console.log('-----5-----');
const myBST = createBST([16, 6, 23, 2, 17, 31, 14, 5]);
console.log(myBST);

console.log('-----4-----');

myBST.searchMin();

// EJERCICIO 6
// Implementar la función passport que recibe como parámetro:
//  - Una edad mínima para que las personas puedan ingresar a un país
//  - El país en cuestión
// La función passport retorna una función isAllowed, la cual recibirá un arreglo de personas que
//quieren ingresar al país, y retornará un nuevo arreglo con los admitidos (aquellos que cumplan con la
//edad requerida).

function passport(minAge, country) {
  let admitidos = [];
  return function isAllowed(people) {
    for (let i = 0; i < people.length; i++) {
      if (people[i].age >= minAge && people[i].country === country) {
        admitidos.push(people[i]);
      }
    }
    return console.log(admitidos);
  };
}

const passportArgentina = passport(20, 'Argentina');
const people = [
  { name: 'Juan', age: 25, country: 'Argentina' },
  { name: 'Pedro', age: 20, country: 'Brasil' },
  { name: 'María', age: 21, country: 'Argentina' },
  { name: 'Lucas', age: 15, country: 'Argentina' },
];

console.log('-----6 -----');
passportArgentina(people);

// ---- Recursión ----
// EJERCICIO 7
// La función countDeep recibe por parámetro un arreglo que contiene números y/o arreglos
//(estos últimos contienen, a su vez, más números y/o arreglos), y retorna la cantidad de arreglos
//que hay en total, incluyendo al padre.
// Ejemplo:
// countDeep( [ 1, 2, 3, [ 4, [ 5, 6 ] ], 7, [ 8 ], 9] ) ----> Debería retornar 4

function countDeep(array) {
  let count = 1;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      count += countDeep(element);
    }
  });
  return count;
}

console.log('------7------');

console.log(countDeep([1, 2, 3, [4, [5, 6]], 7, [8], 9]));

// EJERCICIO 8
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente
// forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]

function isAncestor(genealogyTree, ancestor, descendant) {
  let anAnsestor = false;
  if (genealogyTree[ancestor]) {
    genealogyTree[ancestor].forEach((element) => {
      if (element === descendant) {
        anAnsestor = true;
      }
      anAnsestor = anAnsestor || isAncestor(genealogyTree, element, descendant);
    });
  }
  return anAnsestor;
}

console.log('------8------');

const genealogyTree = {
  'Mona Simpson': [],
  'Marge Simpson': ['Lisa Simpson', 'Maggie Simpson'],
  'Jacqueline Bouvier': ['Patty Bouvier', 'Marge Simpson', 'Selma Bouvier'],
  'Patty Bouvier': [],
  'Selma Bouvier': ['Ling Bouvier'],
  Edwina: ['Abigail Simpson'],
  'Lisa Simpson': [],
  'Maggie Simpson': [],
  'Ling Bouvier': [],
};

console.log(isAncestor(genealogyTree, 'Jacqueline Bouvier', 'Maggie Simpson'));
console.log(isAncestor(genealogyTree, 'Jacqueline Bouvier', 'Abigail Simpson'));

// ---- Queue ----
// EJERCICIO 9
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.

function cardGame(playerOne, playerTwo) {
  let playerOneCastle = 100;
  let playerTwoCastle = 100;

  while (playerOne.length > 0 && playerTwo.length > 0) {
    const playerOneCard = playerOne.shift();
    const playerTwoCard = playerTwo.shift();

    const playerOneAttack = playerOneCard.attack;
    const playerTwoDefense = playerTwoCard.defense;

    const playerOneDefense = playerOneCard.defense;
    const playerTwoAttack = playerTwoCard.attack;

    if (playerOneAttack > playerTwoDefense) {
      playerTwoCastle -= playerOneAttack - playerTwoDefense;
    }

    if (playerTwoAttack > playerOneDefense) {
      playerOneCastle -= playerTwoAttack - playerOneDefense;
    }

    if (playerOneCastle <= 0 || playerTwoCastle <= 0) {
      break;
    }

    if (playerOneCastle === playerTwoCastle) {
      return console.log('TIE');
    }

    if (playerOneCastle > playerTwoCastle) {
      return console.log('PLAYER ONE');
    }

    if (playerTwoCastle > playerOneCastle) {
      return console.log('PLAYER TWO');
    }
  }
}

console.log('------9------');

cardGame(
  [
    { attack: 100, defense: 26 },
    { attack: 5, defense: 26 },
  ],
  [
    { attack: 50, defense: 2 },
    { attack: 60, defense: 50 },
  ]
);

// ---- Algoritmos ----
// EJERCICIO 10
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar la función va a recibir como parámetro una función
// que va a retornar 1 sí no hay que ordenarlo y -1 en el caso de que si haya que ordenarlo.
// Ejemplo:
// var array = [
//   {name: 'Cristian', age: 26, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
//   {name: 'Joaquin', age: 25, height: 1.77},
// ]
// specialSort(array, swapFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Cristian', age: 26, height: 1.77},
//   {name: 'Joaquin', age: 25, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
// ]

function specialSort(array, swapFunction) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (swapFunction(array[i], array[j]) === -1) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function swapFunction(a, b) {
  if (a.name < b.name) {
    return console.log(-1);
  }
  if (a.name > b.name) {
    return console.log(1);
  }
  return console.log(0);
}

console.log('------10------');

const array = [
  { name: 'Cristian', age: 26, height: 1.77 },
  { name: 'Joaquin', age: 25, height: 1.85 },
  { name: 'Dylan', age: 30, height: 1.75 },
];

console.log(specialSort(array, swapFunction));
