import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@xyz.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Sagar',
    email: 'sagar@xyz.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Pragya',
    email: 'pragya@xyz.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Abhishek',
    email: 'abhi@xyz.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
]

export default users;