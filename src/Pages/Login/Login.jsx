import React, { useState, useRef, useContext } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import axios from '../../API/axios';

const Login = () => {

    const {setAuth} = useContext(AuthContext);

    const LOGIN_URL = "/login";

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const errRef = useRef();

    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ userName: username, passWord: password }),
            {/**{
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }**/}
            );
            console.log(JSON.stringify(response?.data));
            {/**const accessToken = response?.data?.accessToken;**/}
            {/**const roles = response?.data?.roles;**/}
            setAuth ({username, password})
            setSuccess(true);
            setUserName("");
            setPassword("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");   
            } 
            else if (err.response?.status === 409) {
                setErrMsg("Missing Username or Password");
            }
            else if (err.response?.status === 400) {
                setErrMsg("Unauthorized")
            }
            else if (!username || !password){
                setErrMsg("Please! Fill in all fields")
            }
            else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
            }


    }

    return(
        <>
        {success ? (
            <section className="success">
                <h1>You are Logged In!</h1>
                <p>
                    <Link to="/">
                    <a href="">Go to Home</a>
                    </Link>
                    
                </p>
                </section>

                    ):(

            <div onSubmit={handleSubmit} className="logIn">
            
            <h1>Login</h1>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="loginForm">
                <input 
                type="text" 
                required
                placeholder="Username"
                value={username}
                onChange={(e)=> setUserName(e.target.value)}
                />
                
                <input 
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}

                />
                <button>Log In</button>
                <ul>
                    <li className="forgotPassword">Forgot password?</li>
                    <Link to="/register"><li className="signUp">Sign Up?</li></Link>
                </ul>
            </form>
        </div>

        )}
        </>
    )
}


export default Login;