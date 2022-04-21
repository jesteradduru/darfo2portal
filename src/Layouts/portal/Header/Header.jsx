import React from "react";
import oneda from "../../../Assets/portal/images/OneDA-Slogan.png";
import dalogo from "../../../Assets/portal/images/da_logo.png";
import ph_logo from "../../../Assets/portal/images/philippines_logo.png";
import { Row, Col, Container } from "reactstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="1">
          <img src={dalogo} alt="DA-Logo" className="img-fluid" />
        </Col>
        <Col md="1">
          <img src={ph_logo} alt="ph-Logo" className="img-fluid" />
        </Col>
        <Col md="5" className="d-flex flex-column justify-content-center">
          <h2>DEPARTMENT OF AGRICULTURE</h2>
        </Col>
        <Col md="5">
          <img src={oneda} alt="ph-Logo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
