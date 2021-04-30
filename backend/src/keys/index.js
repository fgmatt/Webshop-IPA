// library
require("dotenv").config();

// export env variables
module.exports = {
  port: process.env.PORT,
  url_mongodb: process.env.URL_MONGODB,
  url_mongodb_testing: process.env.URL_MONGODB_TESTING,
  jwt_secret: process.env.JWT_SECRET,
  rainforest_api_key: process.env.RAINFOREST_API_KEY,
};
