import "./Header.scss";
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../assets/Logo/BrainFlix-logo.svg'

function Header() {
    return (
        <>
            <header className="header">
                <nav className="header__nav-menu">
                    <div className="header__nav-logos-container">
                        <img className="header__nav-logo--icon"></img>
                        <img className="header__nav-logo--text"></img>
                    </div>
                    <div className="header__nav-buttons-container">
                        <button className="header__nav-buttons--warehouses">Warehouse</button>
                        <button className="header__nav-buttons--inventory">Inventory</button>
                    </div>
                </nav>
                <section className="header__sub-menu">
                    <h1 className="header__sub-menu-title">Warehouses</h1>
                    <div>
                        <input className="header__sub-menu-search">search</input>
                        <button className="header__sub-menu-button">+ Add New Warehouse</button>
                    </div>
                </section>
            </header>
        </>
    );
}
export default Header;
