// libraries
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Instance of ApolloClient with cache configuration
const client = new ApolloClient({
  uri: "http://localhost:3250/graphql",
  cache: new InMemoryCache(),
});

export default client;
