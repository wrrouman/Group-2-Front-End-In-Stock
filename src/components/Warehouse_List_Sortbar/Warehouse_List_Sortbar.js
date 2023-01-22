import "./Warehouse_List_Sortbar.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function Warehouse_List({ getURL }) {
    const [warehouse_List_SortbarState, setWarehouse_List_SortbarState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            // setWarehouse_List_SortbarState(request.data);
        }
        fetchData();
    }, [getURL]);

    return (
        <>
        <section className="warehouse-list-sortbar">
            <nav className="warehouse-list-sortbar__options-container">
                <div className="warehouse-list-sortbar__sort-options">
                    <h2>WAREHOUSE</h2>
                    <img className="" src={SortIcon} alt='SortIcon'></img>
                </div>
                <div className="warehouse-list-sortbar__sort-options">
                    <h2>ADDRESS</h2>
                    <img src={SortIcon}></img>
                </div>
                <div className="warehouse-list-sortbar__sort-options">
                    <h2>CONTACT NAME</h2>
                    <img src={SortIcon}></img>
                </div>
                <div className="warehouse-list-sortbar__sort-options">
                    <h2>CONTACT INFORMATION</h2>
                    <img src={SortIcon}></img>
                </div>
                <div className="warehouse-list-sortbar__sort-options">
                    <h2>ACTIONS</h2>
                </div>
            </nav>
        </section>
        </>
    );
}
export default Warehouse_List;
