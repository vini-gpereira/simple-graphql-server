const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User!]!
        posts: [Post!]!
        getUser(id: ID, email: String): User
        getPost(id: ID!): Post
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
        createPost(title: String!, content: String!, authorId: ID!): Post!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        posts: [Post!]
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
