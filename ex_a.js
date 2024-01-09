const findOne = (list, {}, {}) => {
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
