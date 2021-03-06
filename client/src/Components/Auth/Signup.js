import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import { Navigate, Link } from "react-router-dom";

function Signup({ setCurrentUser, currentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignup(e) {
    // e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.email) {
          setCurrentUser(r);
        } else {
          alert(r.errors);
          setCurrentUser();
        }
      });
  }

  return (
    <div className="body-of-form">
      {currentUser ? <Navigate to="/Home" /> : null}
      <Container>
        <div className="pt-5">
          <Form className="outer sign-up-inner">
            <br></br>
            <h2 className="account-text">Register Account</h2>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="first_name"
                value={firstName}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="last_name"
                value={lastName}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                value={email}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                value={username}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Control
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                type="password"
                id="password"
                value={passwordConfirmation}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <br></br>
            <Button onClick={handleSignup} variant="primary">
              Create Account
            </Button>
            <br></br>
            <div className="already-have-account">
              Already have an account? <Link to="/">Sign In</Link>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
