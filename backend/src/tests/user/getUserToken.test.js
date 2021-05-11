// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { query } = createTestClient(server);

// query
const getUserToken = `query GetUserToken($email: String!) {
    getUserToken(email: $email) {
      token
    }
  }`;

describe("tests if checkUserHasCardInformation properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: getUserToken,
      variables: { department: "monitors" },
    });

    expect(res).toMatchObject({
      data: { getUserToken: { department: "monitors" } },
    });
  });

  it("not existing user (email)", async () => {
    const res = await query({
      query: getUserToken,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty email string", async () => {
    const res = await query({
      query: getUserToken,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
