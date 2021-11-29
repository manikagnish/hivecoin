import React from "react";
import Navbar from "../components/nav/Navbar";
import { HiCash } from "react-icons/hi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Button,
} from "reactstrap";

function Buy() {
  return (
    <>
      <Navbar name="Buy" icon={<HiCash className="navbar-icon" />} />
      <div className="center">
        <Form className="buy-form">
          <FormGroup>
            <Label for="exampleEmail">Input</Label>
            <Input type="number" />
            <FormText>Some text here.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Output</Label>
            <Input type="number" />
            {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
            <FormText>Balance: 0.00</FormText>
          </FormGroup>
          <Button block className="buy-form__btn">
            BUY
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Buy;
