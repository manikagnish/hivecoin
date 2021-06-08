import React from "react";
import "./Form.css";
import Mello from "../../images/mello_otq1.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src={Mello} alt="successImage" />
    </div>
  );
};

export default FormSuccess;
