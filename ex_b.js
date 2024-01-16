// Amb les Promeses hem de tenir clar d'entrada la sintaxi:
// Ex:
// const promesa = new Promise((resolve, reject) => {
//   // Codi a executar
//   // ...
//   // Si tot va bé:
//   resolve('Tot ha anat bé');
//   // Si hi ha error:
//   reject('Hi ha hagut un error');
// });
//

const findOne = (list, { name }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((e) => e.name === name);
      element ? resolve(element) : reject('Element not found');
    }, 2000);
  });
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
findOne(users, { name: 'Carlos' }).then(onSuccess).catch(onError);

console.log('findOne error');
findOne(users, { name: 'Fermin' }).then(onSuccess).catch(onError);

/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
