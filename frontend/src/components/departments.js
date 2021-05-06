import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import NavBar from "./elements/navBar";

const Department = ({ department }) => {
  const { loading, error, data } = useQuery(GET_DEPARTMENT_AND_PRODUCTS, {
    variables: { department },
  });

  let products;
  if (data) {
    products = data.getDepartmentAndProducts.products;
  }

  return (
    <div>
      {" "}
      <NavBar />
      <div></div>
    </div>
  );
};

const DesktopPCs = () => {
  return <Department department="desktop_pc" />;
};

const Laptops = () => {
  return <Department department="laptop" />;
};

const Monitors = () => {
  return <Department department="monitor" />;
};

export default { DesktopPCs, Laptops, Monitors };
