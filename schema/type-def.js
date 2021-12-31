const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [Friends]
  }
  type Friends {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
    friend: [Friends]
    user(id:ID!): User! 
  }
`;

module.exports = { typeDefs };
