// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { query } = createTestClient(server);

// query
const getProductWithSpecifications = `query GetProductWithSpecifications($productName: String!, $department: String!) {
    getProductWithSpecifications(productName: $productName, department: $department) {
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

describe("tests if getProductWithSpecifications properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: getProductWithSpecifications,
      variables: { department: "monitors", productName: "" },
    });

    expect(res).toMatchObject({
      data: { getProductWithSpecifications: { productName: "" } },
    });
  });

  it("not existing department", async () => {
    const res = await query({
      query: getProductWithSpecifications,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("not existing product", async () => {
    const res = await query({
      query: getProductWithSpecifications,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty department string", async () => {
    const res = await query({
      query: getProductWithSpecifications,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });

  it("empty productName string", async () => {
    const res = await query({
      query: getProductWithSpecifications,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
