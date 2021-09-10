const loginValidation = (email, password) => {
  let obj = {
    email: "",
    password: "",
  };

  let regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email == "") {
    obj = {
      ...obj,
      email: "Please fill Email Address",
    };
  }

  if (email !== "" && !regex.test(email)) {
    obj = {
      ...obj,
      email: "Please fill Email Address Correctly",
    };
  }

  if (password == "") {
    obj = {
      ...obj,
      password: "Please fill password",
    };
  }

  if (email !== "" && regex.test(email) && password != "") {
    obj = {
      email: "",
      password: "",
    };
  }

  return obj;
};

module.exports = {
  loginValidation,
};
