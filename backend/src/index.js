// libraries
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");

// apollo server
const server = require("./graphQL/apollo-server");

// mongoose connection
require("./db");

// keys
const { port } = require("./keys");

// calling express server
const app = express();

// applying apollo server to express
server.applyMiddleware({ app });

// rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// add middlewares to express
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(csurf());
app.use(limiter);

// start express
// port 3250
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
