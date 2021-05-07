import { gql } from "@apollo/client";

export default gql`
  query GetDepartmentAndProduct($department: String!) {
    getDepartmentAndProducts(department: $department) {
      department
      products {
        imageUrl
        productName
        price
      }
    }
  }
`;
