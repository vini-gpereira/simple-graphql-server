const { users, posts } = require('./mocks');

function getUsers() { return users }

function getUser(_, { id, email }) {
    if (id) {
        return users.find(user => user.id === id);
    }

    if (email) {
        return users.find(user => user.email === email);
    }

    return null;
}

function getPost(_, { id }) {
    if (ìd) {
        return posts.find(post => post.id === id);
    }

    return null;
}

const resolvers = {
    Query: {
        users: getUsers,
        getUser,
        getPost,
    },
};

module.exports = {
    resolvers,
}
