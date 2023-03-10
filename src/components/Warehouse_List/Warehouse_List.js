import "./Warehouse_List.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

import Warehouse_Item from "../Warehouse_Item/Warehouse_Item";

function Warehouse_List(props) {
    return (
        <>
        {/* <section className="warehouse-list">
                <div className="warehouse-list__details-container">
                    <aside className="warehouse-list__details-container--left">
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>WAREHOUSE</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <div className="warehouse-list__location-container">
                                <h3>Placeholder City/State</h3>
                                <img src={LessThanIcon}></img>
                            </div>
                        </div>
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>ADDRESS</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <p>Placeholder street address</p>
                        </div>
                    </aside>
                    <aside className="warehouse-list__details-container--right">
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>CONTACT NAME</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <h3>Placeholder name</h3>
                        </div>
                        <div className="warehouse-list__menu-quadrants">
                            <div className="warehouse-list__menu-options">
                                <h2>CONTACT INFORMATION</h2>
                                <img className="warehouse-list__sort-icon" src={SortIcon} alt='SortIcon'></img>
                            </div>
                            <p>Placeholder email/phone</p>
                        </div>
                    </aside>
                </div>
                <div className="warehouse-list__buttons-container">
                    <img src={TrashIcon} alt="TrashIcon"></img>
                    <img src={PencilIcon} alt="PencilIcon"></img>
                </div>
            </section> */}
            
            <section className="warehouse-list">{props.AllWarehousesInfo.map(warehouse => (
                <Warehouse_Item SingleWarehouseInfo={warehouse}/>
            ))}
            </section>

        </>
    );
};
export default Warehouse_List;
