import React from 'react'
import '../css/LoginForm.css'
import Tilt from 'react-tilt'
const LoginForm = () => {
  return (
    <div className="LoginFormContainer">
        <h2>Login Form</h2>
        <div className="form-container">
        <Tilt>
        <input className='login-email' placeholder='Email'/>
        </Tilt>
        <Tilt>
        <input className='login-password' type='password' placeholder='Password'/>
        </Tilt>
        <button className="login-submit">Login</button>
        <text className="forgot">Forgot Password?</text>
        <text className="no-account">Don't have an account?</text>
        </div>
    </div>
  )
}

export default LoginForm
