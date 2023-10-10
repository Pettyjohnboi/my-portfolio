import React from 'react'; 
import { NavLink } from 'react-router-dom';
import Image from '../assets/images/icon.jpg';


function Navbar(){
    return(
        <div class="navbar-main"> 
            <div className='navbar-logo-container'>
                <img class="navbar-logo" src={Image} alt="This is me"></img>
            </div>
            <div class="navlink-container"> 
                <NavLink to="/" className="inactive navlink" activeClassName="active">Projects</NavLink> 
                <NavLink to="/about-me" className="inactive navlink" activeClassName="active">About Me</NavLink> 
                <NavLink to="/resume" className="inactive navlink" activeClassName="active">Resume</NavLink>
            </div>
        </div>
    );
}



export default Navbar;