import React from "react";
import "./Form.css";
import Mello from "../../images/mello_otq1.svg";
import Wd from "../../images/well_done_i2wr.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">
        Congratulations! Your account is successfully created.
      </h1>
      <img className="form-img-2" src={Wd} alt="successImage" />
      <span className="form-input-login form-input-login-position">
        You can Login <a href="#">here</a>
      </span>
    </div>
  );
};

export default FormSuccess;
