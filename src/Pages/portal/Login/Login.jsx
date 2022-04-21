import React from "react";
import { Input, FormGroup, Label, Container, Button } from "reactstrap";
import AuthContainer from "../../../Layouts/portal/AuthContainer/AuthContainer";
import { Main } from "../../../Layouts/portal/index";
const Login = () => {
  return (
    <Main>
      <AuthContainer title={"Department of Agriculture Regional Field Office 2 Portal"}>
        <Container className="p-5">
          <h2 className="text-center">Login</h2>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input id="exampleEmail" name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input id="examplePassword" name="password" type="password" />
          </FormGroup>
          <FormGroup>
            <Input id="chkRemember" name="remember_me" type="checkbox" />
            &nbsp;
            <Label for="chkRemember">Remember me</Label>
          </FormGroup>
          <FormGroup>
            <Button className='bg-light-green' block>Submit</Button>
          </FormGroup>
        </Container>
      </AuthContainer>
    </Main>
  );
};

export default Login;
