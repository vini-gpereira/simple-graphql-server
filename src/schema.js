const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User!]!
        getUser(id: ID, email: String): User
        getPost(id: ID): Post
    }

    type User {
        _id: ID!
        name: String!
        email: String!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }
`;

module.exports = {
    typeDefs,
}
