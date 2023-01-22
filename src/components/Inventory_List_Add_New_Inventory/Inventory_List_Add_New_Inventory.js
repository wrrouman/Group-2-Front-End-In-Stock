import "./Inventory_List_Add_New_Inventory.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//import images
import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function InventoryListAddNewInventory({ getURL }) {
    const [inventoryListState, setInventoryListState] = useState(
        []
    );

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            // setState(request.data);
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            <section className="inventory-list">
                <div className="inventory-list__details-container">
                    <aside className="inventory-list__details-container--left">
                        <div>
                            <h2>INVENTORY ITEM</h2>
                            <div className="inventory-list__item-name-container">
                                <h3>Placeholder Item</h3>
                                <img src={LessThanIcon}></img>
                            </div>
                        </div>
                        <div>
                            <h2>CATEGORY</h2>
                            <p>Placeholder Category</p>
                        </div>
                    </aside>
                    <aside className="inventory-list__details-container--right">
                        <div>
                            <h2>STATUS</h2>
                            <button>IN STOCK</button>
                        </div>
                        <div>
                            <h2>QTY</h2>
                            <p>Placeholder Number</p>
                        </div>
                        <div>
                            <h2>WAREHOUSE</h2>
                            <p>Placeholder Warehouse</p>
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
export default InventoryListAddNewInventory;
