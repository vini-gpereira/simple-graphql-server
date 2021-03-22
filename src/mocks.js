const { v4: uuidv4 } = require('uuid');

const users = [
    { _id: uuidv4(), name: 'Vinicius', email: 'vinicius@email.com' },
    { _id: uuidv4(), name: 'Gabriel', email: 'gabriel@email.com' },
    { _id: uuidv4(), name: 'Regis', email: 'regis@email.com' },
    { _id: uuidv4(), name: 'Rafael', email: 'rafael@email.com' },
];

const posts = [
    { _id: uuidv4(), title: 'Receita de Bolo', content: 'Para começar o bolo...', author: users[0] },
    { _id: uuidv4(), title: 'Tutorial', content: 'Neste tutorial, vou ensinar...', author: users[2] },
];

module.exports = {
    users,
    posts,
}
