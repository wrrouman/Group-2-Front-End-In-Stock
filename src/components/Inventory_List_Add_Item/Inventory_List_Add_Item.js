import "../Inventory_List_Add_New_Inventory/Inventory_List_Add_New_Inventory.scss";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//import images
import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function Inventory_List_Add_Item(props) {
    return(
        <>
            <section className="inventory-list">
                <div className="inventory-list__details-container">
                    <aside className="inventory-list__details-container--left">
                        <div>
                            <h2>INVENTORY ITEM</h2>
                            <div className="inventory-list__item-name-container">
                                <Link path="Inventory_Item_Details/:/inventory/:inventoryid">
                                    <h3>{props.SingleInventoryInfo.itemName}</h3>
                                </Link>
                                <img src={LessThanIcon}></img>
                            </div>
                        </div>
                        <div>
                            <h2>CATEGORY</h2>
                            <p>{props.SingleInventoryInfo.category}</p>
                        </div>
                    </aside>
                    <aside className="inventory-list__details-container--right">
                        <div>
                            <h2>STATUS</h2>
                            <button>{props.SingleInventoryInfo.status}</button>
                        </div>
                        <div>
                            <h2>QTY</h2>
                            <p>{props.SingleInventoryInfo.quantity}</p>
                        </div>
                        <div>
                            <h2>WAREHOUSE</h2>
                            <p>{props.SingleInventoryInfo.warehouseName}</p>
                        </div>
                    </aside>
                </div>
                <div className="inventory-list__buttons-container">
                    <img src={TrashIcon} alt="TrashIcon"></img>
                    <img src={PencilIcon} alt="PencilIcon"></img>
                </div>
            </section>
        </>
    );
}

export default Inventory_List_Add_Item;