import "./Header.scss";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";

function Header({ getURL }) {
    const [headerState, setHeaderState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            // setState(request.data);
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            <header className="header">
                <nav className="header__nav-menu">
                    <div className="header__nav-logos-container">
                        <NavLink to={"/"}>
                            <img
                                className="header__nav-logo"
                                src={Logo}
                                alt="sync-icon"
                            ></img>
                        </NavLink>

                    </div>
                    <div className="header__nav-buttons-container">
                        <NavLink to={"/"}>
                            <button className="header__nav-buttons--warehouse ">
                                Warehouse
                            </button>
                        </NavLink>
                        <Link to={"Inventory_List_Add_New_Inventory"}>
                            <button className="header__nav-buttons--inventory">
                                Inventory
                            </button>
                        </Link>
                    </div>
                </nav>
                {/* <section className="header__sub-menu">
                    <h1 className="header__sub-menu-title">Warehouses</h1>
                    <div>
                        <input
                            className="header__sub-menu-search"
                            type="text"
                            placeholder="Search..."
                            // OnChange={handleChange}
                            // value={searchInput}
                        />
                        <button className="header__sub-menu-button">
                            + Add New Warehouse
                        </button>
                    </div>
                </section> */}
            </header>
        </>
    );
}
export default Header;
