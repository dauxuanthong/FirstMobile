const user = require("../models/User");

class UserController {
  register = async (req, res) => {
    try {
      //check is exited
      const userNameIsExist = await user.findOne({ userName: req.body.userName });
      if (userNameIsExist) {
        return res.json({ errMessage: "User name already existed" });
      }
      const EmailIsExist = await user.findOne({ email: req.body.email });
      if (EmailIsExist) {
        return res.json({ errMessage: "Email already existed" });
      }
      const data = new user({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
      });
      data.save();
      return res.json({ successMessage: "Register Success" });
    } catch (error) {
      console.log(error);
      return res.json({ errMessage: "Register failure" });
    }
  };
}

module.exports = new UserController();
