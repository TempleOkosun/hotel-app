import React, { useState, useEffect } from 'react'

import { Button, Form } from 'react-bootstrap'

import './_RegisterScreen.css'

function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function register(e) {
    e.preventDefault()
    if (password === confirmPassword) {
      const user = {
        name,
        email,
        password,
        confirmPassword,
      }
      console.log(user)
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5">
        <div className="box-shadow">
          <div>
            <h2>Register</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={register}>
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
