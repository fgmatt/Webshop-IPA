// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { query } = createTestClient(server);

// query
const getDepartmentWithProducts = `query GetDepartmentWithProduct($department: String!) {
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

describe("tests if getDepartmentWithProducts properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: getDepartmentWithProducts,
      variables: { department: "monitors" },
    });

    expect(res).toMatchObject({
      data: { getDepartmentWithProducts: { department: "monitors" } },
    });
  });

  it("not existing department", async () => {
    const res = await query({
      query: getDepartmentWithProducts,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty string", async () => {
    const res = await query({
      query: GET_DEPARTMENT,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
