import React, { useState, useEffect } from 'react'

function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function register() {
    if (password === confirmPassword) {
      const user = {
        name,
        email,
        password,
        confirmPassword,
      }
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div>
            <h1>Register</h1>
            <input
              type="text"
              className=" form control"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
            <input type="text" className=" form control" placeholder="Email" />
            <input type="text" className=" form control" placeholder="Password" />
            <input type="text" className=" form control" placeholder="Confirm Password" />

            <button className="btn btn-primary" onChange={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
