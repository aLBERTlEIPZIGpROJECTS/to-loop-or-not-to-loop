const users = [
  {
    name: 'Alice Smith',
    address: [{street: 'Main Street'}, {number: 123} ],
  },
  {
    name: 'John Doe',
    address: [{street: 'Oak Avenue'}, {number: 456 }],
  },
  {
    name: 'Samantha Lee',
    address: [{street: 'Maple Drive'}, {number: 789} ],
  },
  {
    name: 'David Kim',
    address: [{ street: 'Elm Street'}],
  },
  {
    name: 'Emily Jones',
    address: [{ street: 'Cedar Lane'},{ number: 654 }],
  },
  {
    name: 'Michael Chen',
    address: [{ street: 'Pine Street'}, {number: 987 }],
  },
  {
    name: 'Lauren Davis',
    address: [{ number: 246 }],
  },
  {
    name: 'William Brown',
    address: [{ street: 'Willow Lane' }],
  },
  {
    name: 'Ashley Nguyen',
    address: [{ street: 'Spruce Avenue'}, {number: 864 }],
  },
  {
    name: 'James Wilson',
    address: [{ street: 'Holly Boulevard' }],
  },
];

const printNumbers = (userArray) => {
    userArray.forEach(user => {
       user?.address.forEach(value => {
        value.number && console.log(value.number)
       })
    })
}

printNumbers(users)