import React from "react";
import Navbar from "../../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";
import "./Dashboard.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { GiTreeBeehive } from "react-icons/gi";

function Dashboard() {
  return (
    <>
      <Navbar
        name="Dashboard"
        icon={<RiIcons.RiDashboardLine className="navbar-icon" />}
      />
      <div className="dashboard">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <GiTreeBeehive />
                    <span>0.00023891 HCT </span>
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Wallet balance
                  </CardSubtitle>
                </CardBody>
                <img />
              </Card>
            </Col>
            <Col xs="12" md="6">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <GiTreeBeehive />
                    <span>0.00023891 HCT </span>
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Wallet balance
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
