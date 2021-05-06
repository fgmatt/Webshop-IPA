// libraries
import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

// client
import client from "./apollo-client";

// main component
import App from "./components/App";

// rendering react app
ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain="dev-wxrp0w4g.eu.auth0.com"
      clientId="jlgHqYkmS9B1Q1xJb5CLpqvFeghWtAmv"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
