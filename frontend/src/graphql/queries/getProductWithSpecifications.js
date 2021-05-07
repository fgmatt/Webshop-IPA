import { gql } from "@apollo/client";

export default gql`
  query GetProductWithSpecifications(
    $productName: String!
    $department: String!
  ) {
    getProductWithSpecifications(
      productName: $productName
      department: $department
    ) {
      productName
      imageUrl
      price
      specifications {
        name
        value
      }
    }
  }
`;
