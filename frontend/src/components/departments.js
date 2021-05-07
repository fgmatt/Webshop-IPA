import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import NavBar from "./elements/navBar";

import {
  rDesktopPcs,
  rLaptops,
  rMonitors,
  rProductDetails,
} from "../routes-name";

import { getDepartmentAndProducts } from "../graphql";

const Department = ({ department, rDepartment }) => {
  const history = useHistory();

  const { loading, error, data } = useQuery(getDepartmentAndProducts, {
    variables: { department },
  });

  let products;
  if (data) {
    products = data.getDepartmentAndProducts.products;
  }

  const handleProductDetails = (productName) => {
    sessionStorage.setItem("department", department);
    sessionStorage.setItem("productName", productName);
    history.push(rDepartment + rProductDetails);
  };

  return (
    <div>
      {" "}
      <NavBar />
      <div className="gridProducts">
        {data &&
          products.map((product) => (
            <div
              onClick={() => handleProductDetails(product.productName)}
              className="product"
            >
              <img
                className="productImage"
                src={product.imageUrl}
                alt="product image"
              />
              <p className="productName">{product.productName}</p>
              <p className="productPrice">{product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const DesktopPCs = () => {
  return <Department department="desktop_pc" rDepartment={rDesktopPcs} />;
};

const Laptops = () => {
  return <Department department="laptop" rDepartment={rLaptops} />;
};

const Monitors = () => {
  return <Department department="monitor" rDepartment={rMonitors} />;
};

export default { DesktopPCs, Laptops, Monitors };
