// Anem a veure com resoldre el mateix problema amb async/await:
// Async/Await NO SUBSTITUEIX LES PROMESES!!!, sinó que és una forma de gestionar-les

const findOne = (list, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((e) => e.name === name);
      element ? resolve(element) : reject('Element not found');
    }, 2000);
  });
};

// Canviem la gestió de les promeses amb then i catch per async/await i l'ús de try/catch
// La funció findOne retorna una promesa, per tant, la podem gestionar amb async/await
// findOne ja és una funció async per defecte ja que retorna una promesa.
// Podem crearnos una variable que cridi a la funció findOne i que definir aquesta com async
const findUsers = async (list, name) => {
  try {
    const user = await findOne(list, name);
    onSuccess(user);
  } catch (err) {
    onError(err);
  }
};

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

const onSuccess = ({ name }) => console.log(`Usuari ${name} trobat!`);
const onError = (err) => console.log(err);

console.log('findOne success');
findUsers(users, 'Carlos');

console.log('findOne error');
findUsers(users, 'Fermin');

/*
    findOne success
    findOne error
     //wait 2 seconds
    user: Carlos
    ERROR: Element Not Found
    */

// La principal raó per utilitzar async/await és que el codi queda molt més
// llegible i mantenible. Això és especialment important quan tenim molts nivells de promeses encadenades

// promesa1()
//   .then((resultat1) => {
//     return promesa2(resultat1);
//   })
//   .then((resultat2) => {
//     return promesa3(resultat2);
//   })
//   .then((resultat3) => {
//     return promesa4(resultat3);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Async/Await

// // Async/Await
// const resultat1 = await promesa1();
// const resultat2 = await promesa2(resultat1);
// const resultat3 = await promesa3(resultat2);
// const resultat4 = await promesa4(resultat3);
