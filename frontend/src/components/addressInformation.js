import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

import { rHome } from "../routes-name";

import { setUserAddressInformation } from "../graphql";

const AddressInformation = () => {
  // use history of react router
  const history = useHistory();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    history.push(rHome);
  }

  // state hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [locality, setLocality] = useState("");
  const [country, setCountry] = useState("");

  // setUserAddressInformation mutation
  const [setAddressInformation, { loading, error, data }] = useMutation(
    setUserAddressInformation,
    {
      variables: {
        email: user.email,
        firstname: firstName,
        lastname: lastName,
        street,
        postcode,
        locality,
        country,
      },
    }
  );

  // set state of fields
  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  function handleChangeStreet(event) {
    setStreet(event.target.value);
  }

  function handleChangePostcode(event) {
    setPostcode(event.target.value);
  }

  function handleChangeLocality(event) {
    setLocality(event.target.value);
  }

  function handleChangeCountry(event) {
    setCountry(event.target.value);
  }

  function handleSkipButton() {
    history.push(rHome);
  }

  // handling by submitting
  function handleSubmit(event) {
    event.preventDefault();
    setAddressInformation()
      .then(({}) => {
        history.push();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {loading && <p></p>}
        {error && <p className="errorMessage">{error.errors[0].message}</p>}
        <label>
          firstname
          <input
            className="inputField"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => handleChangeFirstName(e)}
          />
        </label>
        <label>
          lastname
          <input
            className="inputField"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => handleChangeLastName(e)}
          />
        </label>
        <label>
          street &amp; nr.
          <input
            className="inputField"
            name="street"
            type="text"
            value={street}
            onChange={(e) => handleChangeStreet(e)}
          />
        </label>
        <label>
          postcode
          <input
            className="inputField"
            name="postcode"
            type="text"
            value={postcode}
            onChange={(e) => handleChangePostcode(e)}
          />
        </label>
        <label>
          locality
          <input
            className="inputField"
            name="locality"
            type="text"
            value={locality}
            onChange={(e) => handleChangeLocality(e)}
          />
        </label>
        <label>
          country
          <input
            className="inputField"
            name="country"
            type="text"
            value={country}
            onChange={(e) => handleChangeCountry(e)}
          />
        </label>
        <div>
          <button className="" onClick={handleSkipButton}>
            Skip
          </button>
          <input className="inputButton" type="submit" value="PurchaseNow" />
        </div>
      </form>
    </div>
  );
};

export default AddressInformation;
