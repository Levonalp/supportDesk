const asyncHandler = require("express-async-handler");

// @desc Register a  new user
// @route /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please include all fields");
  }
  res.send("Register Route");
});

// @desc login a  new user
// @route /api/users
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  res.send("login Route");
});

//orgnize login a new user

module.exports = {
  registerUser,
  loginUser,
};
