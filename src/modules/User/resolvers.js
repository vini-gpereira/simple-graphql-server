const { users, posts } = require('../../utils/mocks');

function getUsers() { return users }

function getUser(_, { id, email }) {
    if (id) {
        return users.find(user => user._id === id);
    }

    if (email) {
        return users.find(user => user.email === email);
    }

    return null;
}

function createUser(_, { name, email }) {
    const newUser = {
        _id: String(users.length),
        posts: [],
        name,
        email,
    }
    users.push(newUser);
    return newUser;
}

const resolvers = {
    Query: {
        users: getUsers,
        getUser,
    },
    Mutation: {
        createUser,
    },
    User: {
        posts(user) {
            return user.posts.map(userPost => posts.find(post => userPost === post._id));
        },
    },
};

module.exports = resolvers
