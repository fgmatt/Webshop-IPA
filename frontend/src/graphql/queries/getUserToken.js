import { gql } from "@apollo/client";

export default gql`
  query GetUserToken($email: String!) {
    getUserToken(email: $email) {
      token
    }
  }
`;
