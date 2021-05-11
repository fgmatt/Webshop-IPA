// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { mutation } = createTestClient(server);

// query
const setUserCardInformation = `mutation SetUserCardInformation($email: String!, $fullname: String!, $validThru: String!, $cardNr: String!, $cvv: Int!) {
    setUserCardInformation(email: $email, fullname: $fullname, validThru: $validThru, cardNr: $cardNr, cvv: $cvv)
  }
  `;

describe("tests if checkUserHasCardInformation properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: setUserCardInformation,
      variables: { department: "monitors" },
    });

    expect(res).toMatchObject({
      data: { getUserToken: { department: "monitors" } },
    });
  });

  it("not existing user (email)", async () => {
    const res = await query({
      query: setUserCardInformation,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty email string", async () => {
    const res = await query({
      query: setUserCardInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });

  it("firstname has more than 70 digits", async () => {
    const res = await query({
      query: setUserCardInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });

  it("name has special characters", async () => {
    const res = await query({
      query: setUserCardInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
