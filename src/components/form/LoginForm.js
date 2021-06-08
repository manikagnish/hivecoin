import React, { useState } from "react";
import "./Form.css";
import FormLogin from "./FormLogin";
import FormSuccess from "./FormSuccess";
import bee1 from "../../images/bee1.svg";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={bee1} alt="bee" />
        </div>
        {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default LoginForm;
