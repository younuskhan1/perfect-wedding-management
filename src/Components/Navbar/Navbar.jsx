import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/wedding.png";

const Navbar = () => {


const [toggle, setToggle] = useState(false);
const handleToggle = () =>{
  setToggle(!toggle);
}

    return (
        <nav className={toggle? "navbar expanded" : "navbar"}>
         <img className='logo' src={logo} alt="" />
         <ul className="links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "" }>Home</NavLink></li>
            <li><NavLink to="/aboutUs" className={({ isActive }) => isActive ? "active" : "" }>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "" }>Contact</NavLink></li>
            <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : "" }>Login</NavLink></li>
            <li><NavLink to="/logout" className={({ isActive }) => isActive ? "active" : "" }>Logout</NavLink></li>
         </ul>
         <div className="toggle-icon" onClick={handleToggle}>
            {toggle? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
         </div>
        </nav>
    );
};

export default Navbar;