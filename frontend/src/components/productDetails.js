// libraries
import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

// navigation
import NavBar from "./elements/navBar";

// routes
import {
  rAddressInformation,
  rLaptops,
  rMonitors,
  rDesktopPcs,
} from "../routes-name";

// query
import { getProductWithSpecifications } from "../graphql";

const ProductDetails = () => {
  // history
  const history = useHistory();

  // get product with specifications
  const department = sessionStorage.getItem("department");
  const productName = sessionStorage.getItem("productName");

  const { loading, error, data } = useQuery(getProductWithSpecifications, {
    variables: { department, productName },
  });

  // checking if data is recived
  let product;
  if (data) {
    product = data.getProductWithSpecifications;
  }

  // go to address information
  const handlePurchase = () => {
    if (department === "desktop_pc") {
      history.push(rDesktopPcs + rAddressInformation);
    } else if (department === "laptop") {
      history.push(rLaptops + rAddressInformation);
    } else {
      history.push(rMonitors + rAddressInformation);
    }
  };

  // jsx
  return (
    <div>
      <NavBar />
      {data && (
        <div className="productDetails">
          <div>
            <img
              className="productImage"
              src={product.imageUrl}
              alt="product image"
            />
            <p className="">{product.productName}</p>
          </div>
          <p className="productPrice priceDetails">{product.price}</p>
          <div>
            <button onClick={() => handlePurchase()}>Purchase</button>
          </div>
          <div className="backgroundSpecifications">
            <h2 className="titleSpecifications">specifications</h2>
            <div className="backgroundSpecifications specifications">
              {product.specifications.map((specification) => (
                <div>
                  <b>{specification.name}:</b>
                  <p>{specification.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
