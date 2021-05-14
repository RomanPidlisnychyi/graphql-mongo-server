require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { initDatabase } = require('./helpers/initDatabase');

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await initDatabase();
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
