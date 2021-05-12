import { gql } from "@apollo/client";

export default gql`
  query GetDepartmentWithProducts($department: String!) {
    getDepartmentWithProducts(department: $department) {
      department
      products {
        imageUrl
        productName
        price
      }
    }
  }
`;
