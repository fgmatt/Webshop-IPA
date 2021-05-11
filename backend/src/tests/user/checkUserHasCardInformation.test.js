// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { query } = createTestClient(server);

// query
const checkUserHasCardInformation = `query CheckUserHasCardInformation($email: String!) {
    checkUserHasCardInformation(email: $email)
  }`;

describe("tests if checkUserHasCardInformation properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: checkUserHasCardInformation,
      variables: { department: "monitors" },
    });

    expect(res).toMatchObject({
      data: { getDepartmentWithProducts: { department: "monitors" } },
    });
  });

  it("not existing department", async () => {
    const res = await query({
      query: checkUserHasCardInformation,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty email string", async () => {
    const res = await query({
      query: checkUserHasCardInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
