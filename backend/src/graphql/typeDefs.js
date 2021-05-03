// library
const { gql } = require("apollo-server-express");

// schema definition
const typeDefs = gql`
  type Query {
    getDepartmentAndProducts(department: String!): Department!
    getProductWithSpecifications(
      productName: String!
      department: String!
    ): Product!
    getUserAddressInformation(email: String!): AddressInformation!
    getUserToken(email: String!): Token!
    checkUserHasCardInformation(email: String!): Boolean!
  }

  type Mutation {
    setUserWithToken(email: String!): String!
    setUserCardInformation(
      email: String!
      fullname: String!
      validThru: String!
      cardNr: String!
      cvv: Int!
    ): String!
    setUserAddressInformation(
      email: String!
      firstname: String!
      lastname: String!
      street: String!
      postcode: Number!
      locality: String!
      country: String!
    ): AddressInformation!
  }

  # custom types

  type Department {
    department: String!
    products: [Product!]!
  }

  type Product {
    _id: String!
    productName: String!
    imageUrl: String!
    price: String!
    specifications: [Specification!]
  }

  type Specification {
    name: String!
    value: String!
  }

  type Token {
    token: String!
  }

  type AddressInformation {
    firstname: String!
    lastname: String!
    street: String!
    postcode: Int!
    locality: String!
    country: String!
  }

  type CardInformation {
    fullname: String!
    validThru: String!
    cardNr: String!
    cvv: Int!
  }
`;

module.exports = typeDefs;
