import React from "react";
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {

    {/**const [toggle, setToggle] = useState(false);
    
    const Click = () => {
        setToggle(!toggle)
    }**/}

    return (
        <div className="navbarDiv">
            <nav className='navbar'>
                <h1 className='titleName'>WORKOUT</h1>
                    <ul className='links'>
                    <li>ABOUT</li>
                    <li>PRICING</li>
                    <Link to='/register'>
                    <li>REGISTER</li>
                    </Link>
                    <Link to='/login'>
                    <li>LOGIN</li>
                    </Link>
                </ul>
            </nav>
            {/**<div style={{display: toggle ? 'block' : 'none'}} className="toggleList">
                <ul className="toggleListItem">
                    <li>ABOUT</li>
                    <li>PRICING</li>
                    <li>REGISTER</li>
                    <li>LOGIN</li>
                </ul>
    </div>**/}
        </div>
    );
}

export default Navbar;

