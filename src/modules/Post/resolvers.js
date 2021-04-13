const { users, posts } = require('../../utils/mocks');

function getPosts() { return posts }

function getPost(_, { id }) {
    if (id) {
        return posts.find(post => post._id === id);
    }

    return null;
}

function createPost(_, { title, content, authorId }) {
    const newPost = {
        _id: String(posts.length),
        author: authorId,
        title,
        content,
    }
    author = users.find(user => user._id === authorId)
    author.posts.push(newPost._id)
    posts.push(newPost);
    return newPost
}

const resolvers = {
    Query: {
        posts: getPosts,
        getPost,
    },
    Mutation: {
        createPost,
    },
    Post: {
        author(post) {
            return users.find(user => user._id === post.author);
        }
    }
}

module.exports = resolvers
