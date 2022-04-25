import React, { useState } from "react";
import { Input, FormGroup, Label, Container, Button, Form } from "reactstrap";
import AuthContainer from "../../../Layouts/portal/AuthContainer/AuthContainer";
import { Main } from "../../../Layouts/portal/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const userCredentials = {
    username: username,
    password: password,
    rememberMe: rememberMe,
  }

  const onFormChanged = (e) => {
    const fielId = e.target.getAttribute("id");

    switch (fielId) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "chkRemember":
        setRememberMe(!rememberMe);
        break;
      default:
        break;
    }
  };

  return (
    <Main>
      <AuthContainer
        title={"Department of Agriculture Regional Field Office 2 Portal"}
      >
        <Container className="p-5">
          <Form>
            <h2 className="text-center">Login</h2>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={onFormChanged}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onFormChanged}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="chkRemember"
                name="remember_me"
                type="checkbox"
                onClick={onFormChanged}
              />
              &nbsp;
              <Label for="chkRemember">Remember me</Label>
            </FormGroup>
            <FormGroup>
              <Button className="bg-light-green" block type="submit">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </AuthContainer>
    </Main>
  );
};

export default Login;
