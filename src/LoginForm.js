import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import "./style.css";

function LoginForm() {
  // URL parameters
  const [getParam, setParam] = useSearchParams()
  let data = {}
  // console.log(getParam.get("name"))
  data["name"] = getParam.get("name")
  data["phone"] = getParam.get("phone")
  data["email"] = getParam.get("email")
  data["dept"] = getParam.get("dept")
  data["year"] = getParam.get("year")
  data["event"] = getParam.get("event")

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // console.log()
  // User Login info
  const database = [
    {
      username: "admin",
      password: "abit2022"
    }    
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <App data={data}/> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;