// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { query } = createTestClient(server);

// query
const setUserWithToken = `mutation SetUserWithToken($email: String!) {
    setUserWithToken(email: $email)
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
