const { v4: uuidv4 } = require('uuid');

const userId1 = uuidv4();
const userId2 = uuidv4();
const userId3 = uuidv4();
const userId4 = uuidv4();
const postId1 = uuidv4();
const postId2 = uuidv4();

const users = [
    { _id: userId1, name: 'Vinicius', email: 'vinicius@email.com', posts: [postId1] },
    { _id: userId2, name: 'Gabriel', email: 'gabriel@email.com', posts: [] },
    { _id: userId3, name: 'Regis', email: 'regis@email.com', posts: [] },
    { _id: userId4, name: 'Rafael', email: 'rafael@email.com', posts: [postId2] },
];

const posts = [
    { _id: postId1, title: 'Receita de Bolo', content: 'Para começar o bolo...', author: userId1 },
    { _id: postId2, title: 'Tutorial', content: 'Neste tutorial, vou ensinar...', author: userId4 },
];

module.exports = {
    users,
    posts,
}
