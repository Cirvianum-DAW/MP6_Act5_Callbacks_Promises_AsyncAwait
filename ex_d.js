//Anem a veure també de quina manera podem cridar a la funció findOne DE MANERA
//RECURSIVA I EN PARAL·LEL

// Tenim la nostra funció findOne que retorna una promesa

const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Buscant ${value}`);
      const element = list.find((e) => e[key] === value);
      element
        ? resolve(element)
        : reject(`Element not found, ${value} is not in the list!`);
    }, 2000);
  });
};

// I tenim una llista de users
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher',
  },
  {
    name: 'Ana',
    rol: 'Boss',
  },
];

// Com hauríem de fer ús del Promise.all. Exemple:

// let p1 = Promise.resolve(3);
// let p2 = 1337;
// let p3 = new Promise((resolve, reject) => {
//   setTimeout({ resolve(“foo”) }, 1000);
// });

// Promise.all([p1, p2, p3]).then((values) => {
//    console.log(values); // [3, 1337, "foo"]
//  });

// Per tal de fer aquesta comprovació en paral·lel necessitem Promise.all

// Promise.all rep un array de promeses i retorna una promesa que s'executa quan totes
// les promeses que rep s'han resolt. Només que una de les promeses falli, la promesa
// retornada per Promise.all també fallarà.

// Una funció que

async function buscaUsuari() {
  try {
    const user = await Promise.all([
      findOne(users, { key: 'name', value: 'Carlos' }),
      findOne(users, { key: 'name', value: 'Fermin' }),
      findOne(users, { key: 'name', value: 'Ana' }),
    ]);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

buscaUsuari();

// També existeix promise.allSettled que retorna una promesa que s'executa quan totes
// les promeses que rep s'han resolt, independentment de si han fallat o no.
// Aquesta promesa retorna un array amb els resultats de totes les promeses que ha rebut.

async function buscaUsuari2() {
  try {
    const user = await Promise.allSettled([
      findOne(users, { key: 'name', value: 'Carlos' }),
      findOne(users, { key: 'name', value: 'Fermin' }),
      findOne(users, { key: 'name', value: 'Ana' }),
    ]);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

buscaUsuari2();
