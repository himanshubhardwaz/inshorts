import React from 'react';
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";

function Navbar({ setCategory }) {
    return (
        <div className="navbar sticky">
            <div className="icon">
                <Sidebar setCategory={setCategory} />
            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="icon"></img>
        </div>
    )
}

export default Navbar
