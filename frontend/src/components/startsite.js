import React from "react";

import { useQuery } from "@apollo/client";

import NavBar from "./elements/navBar";

import getDepartmentAndProducts from "../graphql/queries/getDepartmentAndProducts";

const Startsite = () => {
  const i = Math.floor(Math.random() * 3);
  const j = Math.floor(Math.random() * 16);

  const departmentArray = ["desktop_pc", "laptop", "monitor"];

  const { loading, error, data } = useQuery(getDepartmentAndProducts, {
    variables: { department: departmentArray[i] },
  });

  let randomProduct;
  if (data) {
    randomProduct = data.getDepartmentAndProducts.products[j];
  }

  return (
    <div>
      <NavBar />
      <div className="product">
        {data && (
          <div>
            <p>{randomProduct.productName}</p>
            <p>{randomProduct.price}</p>
            <img src={randomProduct.imageUrl} alt="a random product" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Startsite;
