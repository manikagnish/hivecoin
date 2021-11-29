import React from "react";
import Navbar from "../../components/nav/Navbar";
import * as RiIcons from "react-icons/ri";
import "./Dashboard.scss";
import { Container, Row, Col } from "reactstrap";

import BalanceCard from "./BalanceCard";
import ActivityCard from "./ActivityCard";
import DealsCard from "./DealsCard";
import StatsCard from "./StatsCard";
import RecipientCard from "./RecipientCard";

function Dashboard() {
  return (
    <>
      <Navbar
        name="Wallet"
        icon={<RiIcons.RiDashboardLine className="navbar-icon" />}
      />
      <div className="dashboard">
        <Container className="dashboard__container">
          <Row>
            <Col xs="12" lg="6">
              <BalanceCard
                theme="dashboard__card-balance--orange dashboard__card dashboard__card-balance"
                heading="0.00379971 HCT"
                subheading="Wallet balance"
              />
            </Col>
            <Col xs="12" lg="6">
              <BalanceCard
                theme="dashboard__card-balance--white dashboard__card dashboard__card-balance"
                heading="0.00257087 HCT"
                subheading="Unconfirmed balance"
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <ActivityCard />
            </Col>
            <Col xs="12" lg="6">
              <DealsCard />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <StatsCard />
            </Col>
            <Col xs="12" lg="6">
              <RecipientCard />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
