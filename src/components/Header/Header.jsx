import React from "react";
import './Header.scss';
function Header() {
    return(
        <header className="header">
            <a href="#" className="logo">
               <img src={require("../images/MuzicLogo.png")} alt="" />
            </a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Performer">Performer</a>
                <a href="/Contact">Contact</a>
                <a href="/Blog">Blog</a>
            </nav>


            <div className="btn-contact">
                <button className="signUp">Sign Up</button>
                <button className="logIn">Log In</button>
            </div>
            
        </header>
    )
}

export default Header