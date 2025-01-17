import bcrypt from 'bcryptjs';

//const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'John@example.com',
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync("123456", 10),
  }
]

//module.exports = users;
export default users;