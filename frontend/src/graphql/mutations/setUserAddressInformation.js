import { gql } from "@apollo/client";

export default gql`
  mutation SetUserAddressInformation(
    $email: String!
    $firstname: String!
    $lastname: String!
    $street: String!
    $postcode: Int!
    $locality: String!
    $country: String!
  ) {
    setUserAddressInformation(
      email: $email
      firstname: $firstname
      lastname: $lastname
      street: $street
      postcode: $postcode
      locality: $locality
      country: $country
    ) {
      firstname
      lastname
      street
      postcode
      locality
      country
    }
  }
`;
