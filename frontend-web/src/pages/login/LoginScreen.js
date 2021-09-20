import React, { useState, useEffect } from 'react'

import { Button, Form } from 'react-bootstrap'

import './_LoginScreen.css'

function LoginScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function login(e) {
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
            <h2>Login</h2>
            <Form>
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
              <Button variant="primary" type="submit" onClick={login}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
