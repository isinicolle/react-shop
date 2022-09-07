import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  return (

            <div classNameName="Login">
                <div classNameName="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" classNameName="logo"/>

                <h1 classNameName="title">Create a new password</h1>
                <p classNameName="subtitle">Enter a new passwrd for yue account</p>

                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>

                    <label for="new-password" classNameName="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" classNameName="input input-password"/>

                    <input type="submit" value="Confirm" className="primary-button Login-button"/>
                </form>
                </div>
            </div>
            
            
        )
}

export default Login;