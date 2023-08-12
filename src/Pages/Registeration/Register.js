import React, { useState } from "react";
import "./Register.css"


const Register = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

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
            </form>
        </div>
    )
}

export default Register;