import { click } from "@testing-library/user-event/dist/click";
import React from "react";
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
                    <li>EXERCISES</li>
                    <li>TRAINERS</li>
                    <li>PRICING</li>
                    <li onClick={Click} >LOGIN</li>
                </ul>
            </nav>
            <div style={{display: toggle ? 'block' : 'none'}} className="toggleList">
                <ul className="toggleListItem">
                    <li>EXERCISES</li>
                    <li>TRAINERS</li>
                    <li>PRICING</li>
                    <li>LOGIN</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

