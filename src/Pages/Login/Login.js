import React from "react";
import "./Login.css"

const Login = () => {
    return(
        <div className="logIn">
            <h1>Login</h1>
            <form className="loginForm">
                
                
                <input 
                type="text" 
                required
                placeholder="Email or Phone Number"
                />
                
                <input type="password"
                required
                placeholder="Password"
                />
                <button>Log In</button>
                <ul>
                    <li className="forgotPassword">Forgot password?</li>
                </ul>
            </form>
        </div>

    )



}

export default Login;