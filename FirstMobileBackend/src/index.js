const express = require("express");
const app = express();
const port = 3005;
const morgan = require("morgan"); //HTTP request logger middleware
const path = require("path");
const route = require("./routes/mainRouter.js");
const db = require("./config/db/index");
const cors = require("cors");
// require("dotenv").config();

//res.body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//use morgan
app.use(morgan("combined"));

//connect to mongo database
db.connect();

//CORS
app.use(
  cors({
    origin: "exp://192.168.1.251:19000",
    credentials: true,
  })
);

//routing init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
