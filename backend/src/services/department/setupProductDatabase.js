// libraries
const axios = require("axios");

// database
require("../../db");

// api_key
const { rainforest_api_key } = require("../../keys");

// service
const Department = require("./departmentService");

const setupProductDatabase = async () => {
  const departments = ["desktop pc", "laptop", "monitor"];

  let newDepartment;

  for (const department of departments) {
    let params = {
      api_key: rainforest_api_key,
      type: "search",
      amazon_domain: "amazon.com",
      search_term: department,
    };

    axios
      .get("https://api.rainforestapi.com/request", { params })
      .then(async (response) => {
        let data = JSON.stringify(response.data, 0, 2);

        newDepartment = await new Department({
          department: data.request_parameters.search_term,
          products: [],
        });

        let lenght = await data.search_results.length;

        for (let i = 0; i < lenght; i++) {
          let data1 = data.search_results[i];
          let asin = data1.asin;

          let paramsSpecifications = {
            api_key: rainforest_api_key,
            type: "product",
            amazon_domain: "amazon.com",
            asin,
          };

          axios
            .get("https://api.rainforestapi.com/request", {
              paramsSpecifications,
            })
            .then((response) => {
              // print the JSON response from Rainforest API
              data = JSON.stringify(response.data, 0, 2);
            })
            .catch((error) => {
              // catch and print the error
              //console.log(error);
            });

          await newDepartment.products.push({
            productName: data1.title,
            imageUrl: data1.image,
            price: data1.price.raw,
            specifications: data.product.specifications,
          });
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  }
  return await newDepartment;
};

const saveData = async () => {
  const data = await setupProductDatabase();

  await data.save();
};

saveData();
