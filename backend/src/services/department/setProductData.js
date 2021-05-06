// libraries
const axios = require("axios");
const { UserInputError } = require("apollo-server-express");

// api_key
const { rainforest_api_key } = require("../../keys");

// service
const Department = require("./departmentService");

const setProductData = async ({ department }) => {
  if (!department) {
    throw new UserInputError("You must provide a department");
  }

  let params = {
    api_key: rainforest_api_key,
    type: "search",
    amazon_domain: "amazon.com",
    search_term: department,
  };

  const data = await axios
    .get("https://api.rainforestapi.com/request", { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // catch and print the error
      console.log(error);
    });

  const newDepartment = await new Department({
    department,
    products: [],
  });

  const length = await data.search_results.length;

  for (let i = 0; i < length; i++) {
    let data1 = await data.search_results[i];
    let asin = await data1.asin;

    params = {
      api_key: rainforest_api_key,
      type: "product",
      amazon_domain: "amazon.com",
      asin,
    };

    let product = await axios
      .get("https://api.rainforestapi.com/request", {
        params,
      })
      .then((response) => {
        // print the JSON response from Rainforest API
        return response.data;
      })
      .catch((error) => {
        // catch and print the error
        console.log(error);
      });

    newDepartment.products.push({
      productName: data1.title,
      imageUrl: data1.image,
      price: data1.price.raw,
      specifications: product.product.specifications,
    });
  }

  await newDepartment.save();

  return newDepartment;
};

module.exports = setProductData;
