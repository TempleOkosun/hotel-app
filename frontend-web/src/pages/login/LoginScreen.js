import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import Loader from '../../components/spinners/Loader'
import Error from '../../components/spinners/Error'

import './_LoginScreen.css'

function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function login(e) {
    e.preventDefault()
    const user = {
      email,
      password,
    }
    try {
      setLoading(true)
      const result = await axios.post('/api/users/login', user)
      setLoading(false)
      localStorage.setItem('currentUser', JSON.stringify(result.data))
      window.location.href = '/home'
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }

  return (
    <div>
      {loading && <Loader />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error && <Error message="Invalid credentials" />}
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
    </div>
  )
}

export default LoginScreen
