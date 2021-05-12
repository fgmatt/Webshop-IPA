// libraries
import React from "react";
import { useQuery } from "@apollo/client";

// navigation
import NavBar from "./elements/navBar";

// query
import { getDepartmentWithProducts } from "../graphql";

const Startsite = () => {
  // create random product
  const i = Math.floor(Math.random() * 3);
  const j = Math.floor(Math.random() * 16);

  const departmentArray = ["desktop_pc", "laptop", "monitor"];

  const { loading, error, data } = useQuery(getDepartmentWithProducts, {
    variables: { department: departmentArray[i] },
  });

  // checking if data is recived
  let randomProduct;
  if (data) {
    randomProduct = data.getDepartmentWithProducts.products[j];
  }

  // jsx
  return (
    <div>
      <NavBar />
      <div className="product">
        {data && (
          <div>
            <p>{randomProduct.productName}</p>
            <p className="productPrice">{randomProduct.price}</p>
            <img src={randomProduct.imageUrl} alt="a random product" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Startsite;
