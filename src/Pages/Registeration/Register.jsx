import React, { useEffect, useRef, useState} from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from '../../API/axios';


const Register = () => {
    
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const errRef = useRef();

    useEffect(()=>{
        setErrMsg("");
    }, [username, password])

    const REGISTER_URL = '/register';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ userName: username, passWord: password }),
            {
                /**headers: { "Content-Type": "application/json" },
                withCredentials: true,**/
            }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            setUserName("");
            setPassword("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");   
            } 
            else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } 
            else if (!username || !password || !email){
                setErrMsg("Please! Fill in all fields")
            }
            else {
                setErrMsg("Registration Failed");
            }
            }
        };
        

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
            <p ref={errRef} className={errMsg ? "errMessage" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit} className="register">
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