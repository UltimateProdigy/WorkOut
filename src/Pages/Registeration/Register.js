import React, { useRef, useState, useEffect } from "react";
import "./Register.css"
import { Link } from "react-router-dom";
import axios from '../../API/axios'


const Register = () => {
    
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errMsg, setErrMsg] = ("");
    const [success, setSuccess] = useState(false);

    const REGISTER_URL = '/Register';

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({username});
        console.log({password});
        if (!username || !password || !email) {
            setErrMsg("Invalid Entry");
        }
        
    }
    
    return (
        <>
        {success ? (
            <section className="success">
                <h1>Registered Successfully!!!</h1>
                <p>
                    <Link to="/login">
                    <a href="">Sign In</a>
                    </Link>
                    
                </p>
            </section>
        ):(
        <div className="registerDiv" >
            <div className="registerIntro">
                <h1>Register to <span>Workout...</span> </h1>
            </div>
            
            <form onSubmit={handleSubmit} className="register">
            <p className="errMessage">{errMsg}</p>
                <label>Username:</label>
                <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                />
                <label>E-mail Address:</label>
                <input 
                type="text" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <div className="submitDiv">
                <button className="registerSubmitButton">Register</button>
                </div>
                <Link to="/login">
                <p>Already registered, log in?</p>
                </Link>
                
            </form>
        </div>
        )}
        </>
    )
}

export default Register;