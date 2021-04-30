// libraries
const { ApolloServer } = require("apollo-server-express");

// schema
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// apollo server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server;
