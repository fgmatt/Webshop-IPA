// libraries
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

import { rHome } from "../routes-name";

import { setUserCardInformation } from "../graphql";

const CardInformation = () => {
  // use history of react router
  const history = useHistory();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    history.push(rHome);
  }

  // state values
  const [fullName, setFullName] = useState();
  const [validThru, setValidThru] = useState();
  const [cardNr, setCardNr] = useState();
  const [cvv, setCvv] = useState();

  // setUserCardInformation mutation
  const [setCardInformation, { loading, error, data }] = useMutation(
    setUserCardInformation,
    {
      variables: {
        email: user.email,
        fullname: fullName,
        validThru,
        cardNr,
        cvv,
      },
    }
  );

  // set changing values of fields
  function handleChangeFullName(event) {
    setFullName(event.target.value);
  }

  function handleChangeValidThru(event) {
    setValidThru(event.target.value);
  }

  function handleCardNr(event) {
    setCardNr(event.target.value);
  }

  function handleCVV(event) {
    setCvv(event.target.value);
  }

  function handleSkipButton() {
    history.push(rHome);
  }

  // handling by submitting
  function handleSubmit(event) {
    event.preventDefault();
    setCardInformation();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {loading && <p></p>}
        {error && <p className="errorMessage">{error.errors[0].message}</p>}
        <label>
          full name
          <input
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => handleChangeFullName(e)}
          />
        </label>
        <label>
          valid thru
          <input
            name="validThru"
            type="text"
            value={validThru}
            onChange={(e) => handleChangeValidThru(e)}
          />
        </label>
        <label>
          card nr.
          <input
            name="cardNr"
            type="text"
            value={cardNr}
            onChange={(e) => handleCardNr(e)}
          />
        </label>
        <label>
          CVV
          <input
            name="cvv"
            type="text"
            value={cvv}
            onChange={(e) => handleCVV(e)}
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

export default CardInformation;
