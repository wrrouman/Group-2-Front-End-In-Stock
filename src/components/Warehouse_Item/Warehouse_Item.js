// remove later
import "../Warehouse_List/Warehouse_List.scss";

import "./Warehouse_Item.scss";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function Warehouse_Item(props) {
    return(
        <>
            <div className="warehouse-list__details-container">
                    <aside className="warehouse-list__details-container--left">
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>WAREHOUSE</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <div className="warehouse-list__location-container">
                                <NavLink to={`/warehouse_details/${props.SingleWarehouseInfo.id}`} className="warehouse-list__location-containerlink">
                                    <h3>{props.SingleWarehouseInfo.name}</h3>
                                    <img src={LessThanIcon}></img>
                                </NavLink>

                            </div>
                        </div>
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>ADDRESS</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <p>{props.SingleWarehouseInfo.address}</p>
                        </div>
                    </aside>
                    <aside className="warehouse-list__details-container--right">
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>CONTACT NAME</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <h3>{props.SingleWarehouseInfo.contact.name}</h3>
                        </div>
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>CONTACT INFORMATION</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <p>{props.SingleWarehouseInfo.contact.email}</p>
                            <p>{props.SingleWarehouseInfo.contact.phone}</p>
                        </div>
                    </aside>
                </div>
                <div>
                    <div className="warehouse-list__buttons-container">
                        <img src={PencilIcon} alt="PencilIcon"></img>
                        <img src={TrashIcon} alt="TrashIcon"></img>
                    </div>
                </div>
        </>
    );
}

export default Warehouse_Item;