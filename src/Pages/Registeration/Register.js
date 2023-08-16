import React, { useState } from "react";
import "./Register.css"
import { Link } from "react-router-dom";


const Register = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
    }

    return (
        <div className="registerDiv" >
            <div className="registerIntro">
                <h1>Register to <span>Workout...</span> </h1>
            </div>
            <form onSubmit={handleSubmit} className="register">
                <label>Full Name:</label>
                <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>E-mail Address:</label>
                <input 
                type="text" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone Number:</label>
                <input 
                type="text" 
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
    )
}

export default Register;