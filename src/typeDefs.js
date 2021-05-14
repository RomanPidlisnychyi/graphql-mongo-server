const { gql } = require('apollo-server');

module.exports.typeDefs = gql`
  type Query {
    articles: [Article!]!
    themes: [Theme!]!
  }
  type Mutation {
    createArticle(name: String!): Article!
    createSection(name: String!, articleId: String!): Section!
    createTheme(name: String!, sectionId: String!): Theme!
  }
  type Article {
    id: ID!
    name: String!
    sections: [Section!]!
  }
  type Section {
    id: ID!
    name: String!
    articleId: String!
    themes: [Theme!]!
  }
  type Theme {
    id: ID!
    name: String!
    sectionId: String!
  }
`;
