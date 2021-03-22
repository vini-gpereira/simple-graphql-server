const users = [
    { _id: "0", name: 'Vinicius', email: 'vinicius@email.com', posts: ["0"] },
    { _id: "1", name: 'Gabriel', email: 'gabriel@email.com', posts: [] },
    { _id: "2", name: 'Regis', email: 'regis@email.com', posts: [] },
    { _id: "3", name: 'Rafael', email: 'rafael@email.com', posts: ["1"] },
];

const posts = [
    { _id: "0", title: 'Receita de Bolo', content: 'Para começar o bolo...', author: "0" },
    { _id: "1", title: 'Tutorial', content: 'Neste tutorial, vou ensinar...', author: "3" },
];

module.exports = {
    users,
    posts,
}
