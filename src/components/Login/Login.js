import React, { useState } from "react";
import PropTypes from "prop-types";
import { loginUser } from "../../services/login";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    console.log(token);
    setToken(token);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form action="" onSubmit={handleSubmit}>
              <Form.Group id="username" className="mt-2 mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="username"
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="password"
                  required
                />
              </Form.Group>
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
