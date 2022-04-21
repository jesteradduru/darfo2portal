import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const AuthContainer = ({ title, children }) => {
  return (
    <Card className="w-50 center-element p-0">
      <CardBody>
        <Row>
          <Col md="7">{children}</Col>
          <Col md="5" className="bg-light-green m-0">
            <h2 className="p-5 text-light">
              {title}
            </h2>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default AuthContainer;
