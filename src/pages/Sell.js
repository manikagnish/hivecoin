import React from "react";
import Navbar from "../components/nav/Navbar";
import * as GiIcons from "react-icons/gi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Button,
} from "reactstrap";

function Sell() {
  return (
    <>
      <Navbar
        name="Sell"
        icon={<GiIcons.GiBuyCard className="navbar-icon" />}
      />
      <div className="center">
        <Form className="buy-form">
          <FormGroup>
            <Label for="exampleEmail">To</Label>
            <Input type="number" />
            <FormText>Recipient Address</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Amount</Label>
            <Input type="number" />
            {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
            <FormText>Balance: 6969.00</FormText>
          </FormGroup>
          <Button block className="buy-form__btn">
            SEND
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Sell;
