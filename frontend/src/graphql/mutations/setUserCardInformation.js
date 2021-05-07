import { gql } from "@apollo/client";

export default gql`
  mutation SetUserCardInformation(
    $email: String!
    $fullname: String!
    $validThru: String!
    $cardNr: String!
    $cvv: Int!
  ) {
    setUserCardInformation(
      email: $email
      fullname: $fullname
      validThru: $validThru
      cardNr: $cardNr
      cvv: $cvv
    )
  }
`;
