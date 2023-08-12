import React from "react";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    
    const Click = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <nav className='navbar'>
                <h1 className='titleName'>WORKOUT</h1>
                    <ul className='links'>
                    <li>ABOUT</li>
                    <li>PRICING</li>
                    <li>REGISTER</li>
                    <li onClick={Click} >LOGIN</li>
                </ul>
            </nav>
            <div style={{display: toggle ? 'block' : 'none'}} className="toggleList">
                <ul className="toggleListItem">
                    <li>ABOUT</li>
                    <li>PRICING</li>
                    <li>REGISTER</li>
                    <li>LOGIN</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

