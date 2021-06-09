import React from "react"
import "../Styles/Navbar.css"

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Omega</div>
        <div className='navbar__item_Demo'>Demo</div>
        <div className='navbar__item'>Pages</div>
        <div className='navbar__item'>Support</div>  
        <button className='BG'>Get Started</button>      
    </header>
);



export default NavBar