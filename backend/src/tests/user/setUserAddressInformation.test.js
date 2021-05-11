// library
const { createTestClient } = require("apollo-server-testing");

// apollo server
const server = require("../../graphQL/apollo-server");

// database
require("../db");

// query hook
const { mutation } = createTestClient(server);

// query
const setUserAddressInformation = `mutation SetUserAddressInformation($email: String!, $firstname: String!, $lastname: String!, $street: String!, $postcode: Int!, $locality: String!, $country: String!) {
    setUserAddressInformation(email: $email, firstname: $firstname, lastname: $lastname, street: $street, postcode: $postcode, locality: $locality, country: $country) {
      firstname
      lastname
      street
      postcode
      locality
      country
    }
  }
  `;

describe("tests if checkUserHasCardInformation properly works", () => {
  it("correct values", async () => {
    const res = await query({
      query: setUserAddressInformation,
      variables: { department: "monitors" },
    });

    expect(res).toMatchObject({
      data: { getUserToken: { department: "monitors" } },
    });
  });

  it("not existing user (email)", async () => {
    const res = await query({
      query: setUserAddressInformation,
      variables: { department: "softice" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "Department do not exists" }],
    });
  });

  it("empty email string", async () => {
    const res = await query({
      query: setUserAddressInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });

  it("firstname has more than 70 digits", async () => {
    const res = await query({
      query: setUserAddressInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });

  it("firstname has special characters", async () => {
    const res = await query({
      query: setUserAddressInformation,
      variables: { department: "" },
    });
    expect(res).toMatchObject({
      errors: [{ message: "You must provide a department" }],
    });
  });
});
