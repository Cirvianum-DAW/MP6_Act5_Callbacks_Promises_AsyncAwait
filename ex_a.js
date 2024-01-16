const findOne = (list, { name }, { onSuccess, onError }) => {
  setTimeout(() => {
    const element = list.find((e) => e.name === name);
    element ? onSuccess(element) : onError('Element not found');
  }, 2000);
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
findOne(users, { name: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { name: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
