import React, { useState, useEffect } from "react";
import "../MasterCss/inputGenerator.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { loginValidation } from "../Validations/LoginValidation";
import Notiflix from "notiflix";
import { useHistory } from "react-router-dom";

const InputGenerator = ({
  Titleheading,
  arraysValue,
  height,
  width,
  SubmitbuttonType,
  Btnwidth,
  innerWidth,
  Editid,
}) => {
  let history = useHistory();
  let obj = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let alignMents = {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
    padding: "10px",
  };

  let BBheight = {
    height: height ? `${height}px` : 400,
    width: width ? `${width}px` : 400,
    padding: "50px",
  };

  let ButtonHeight = {
    width: Btnwidth ? `${Btnwidth}px` : 400,
    background: "linear-gradient(to right, #5bc4e2 0%, #971ce9 100%)",
    border: "none",
    height: "40px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
  };

  let linearIng = {
    color: "#5bc4e2",
  };

  let linearIng2 = {
    color: "#5bc4e2",
    marginLeft: "10px",
  };

  let obj2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };

  const [values, setValues] = useState({});

  useEffect(() => {
    let obj = {};
    if (arraysValue && arraysValue.length && SubmitbuttonType == "Login") {
      for (let i = 0; i < arraysValue.length; i++) {
        obj[arraysValue[i].toLowerCase()] = "";
      }
      if (Object.keys(obj).length > 0) {
        setValues(obj);
      }
    }

    if (arraysValue && arraysValue.length && SubmitbuttonType == "Edit") {
      const filterData = JSON.parse(localStorage.getItem("list")).filter(
        (item) => item.id === Editid
      );

      for (let i = 0; i < arraysValue.length; i++) {
        obj[arraysValue[i].toLowerCase()] = filterData[0].name;
      }
      if (Object.keys(obj).length > 0) {
        setValues(obj);
      }
    }
  }, []);
  console.log(values);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    if (Titleheading === "Login Form") {
      let { email, password } = values;
      let errors = loginValidation(email, password);
      if (errors.email.length > 0) {
        Notiflix.Notify.failure(errors.email);
      }

      if (errors.password.length > 0) {
        Notiflix.Notify.failure(errors.password);
      }

      if (errors.password.length == 0 && errors.email.length == 0) {
        localStorage.setItem("data", JSON.stringify(values));
        Notiflix.Notify.success("Login Successfully");
        history.push("/Home");
      }
    }

    if (Titleheading === "Edit Form" && values && values.edit !== "") {
      let mappedData = JSON.parse(localStorage.getItem("list"));
      mappedData.map((item) => {
        if (item.id == Editid) {
          return (item.name = values.edit);
        } else {
          return item;
        }
      });

      localStorage.setItem("list", JSON.stringify(mappedData));
      window.location.href = "/Home";
    } else {
      Notiflix.Notify.warning("Please fill the name");
    }
  };

  return (
    <div style={obj2}>
      <div style={obj}>
        <div style={BBheight} className="BackGroundInputGenerator">
          <div className="BackGroundTitleLogo">
            {Titleheading && Titleheading}
          </div>
          <div style={{ width: `${innerWidth}px` }}>
            {arraysValue &&
              arraysValue.length > 0 &&
              arraysValue.map((item) => {
                return (
                  <FormGroup className="p-3">
                    <Label for="exampleEmail" className="mr-sm-2">
                      {item}
                    </Label>
                    <Input
                      type={item.toLowerCase()}
                      name={item.toLowerCase()}
                      id="exampleEmail"
                      placeholder={item}
                      value={values && values.edit && values?.edit}
                      onChange={(e) => handleChange(e)}
                    />
                    {item == "Password" && (
                      <div className="pt-2">
                        <p style={linearIng}>Forget password ?</p>
                      </div>
                    )}
                  </FormGroup>
                );
              })}
            <div style={obj}>
              <button
                style={ButtonHeight}
                className="SubmitBtn"
                onClick={handleSubmit}
              >
                {SubmitbuttonType}
              </button>
            </div>
            {SubmitbuttonType == "Login" && (
              <div style={obj}>
                <div style={alignMents}>
                  <p>Not a Member? </p>
                  {"   "}
                  <p style={linearIng2}>Signup now</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGenerator;
