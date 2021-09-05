const user = require("./user");
function route(app) {
  // http://localhost:3005/user
  app.use("/user", user);
}

module.exports = route;
