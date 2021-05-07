import { gql } from "@apollo/client";

export default gql`
  mutation SetUserWithToken($email: String!) {
    setUserWithToken(email: $email)
  }
`;
