import "./Inventory_Item_Details.scss";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//import images
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function Inventory_Item_Details(props) {
    // const [inventoryItemDetailsState, setInventoryItemDetailsState] = useState(
    //     []
    // );

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(getURL);
    //         // setState(request.data);
    //     }
    //     fetchData();
    // }, [getURL]);

    var { warehouseID, inventoryID } = useParams();
    const [CurrentInventory, setCurrentInventory] = useState([]);

    useEffect(() => {
        // let CurrentWarehouseDetails = props.AllWarehousesInfo.find(warehouse => warehouse.id === warehouseID);
        // setCurrentWarehouse(CurrentWarehouseDetails);
        let CurrentInventoryDetails = props.AllInventoriesInfo.find(inventory => inventory.id === inventoryID);
        setCurrentInventory(CurrentInventoryDetails);
    }, [inventoryID])

    console.log(CurrentInventory);

    return (
        <>
            <section className="inventory-item-details">
                <div className="inventory-item-details__details-container">
                    <div className="inventory-item-details__details-container--header">
                        <Link to={`/warehouse_details/${warehouseID}`}>
                            <img src={ArrowBack} alt="Arrow Back"/>
                        </Link>

                        <h1>{CurrentInventory.itemName}</h1>
                        <Link to={`/edit_inventoryitems/${warehouseID}/${inventoryID}`}>
                            <img src={PencilIcon} alt="Pencil Icon"/>
                        </Link>
                    </div>

                    <aside className="inventory-item-details__details-container--left">
                        <div>
                            <h2>INVENTORY DESCRIPTION:</h2>
                            <p>{CurrentInventory.description}</p>
                        </div>
                        <div>
                            <h2>CATEGORY</h2>
                            <p>{CurrentInventory.category}</p>
                        </div>
                    </aside>
                    <aside className="inventory-item-details__details-container--right">
                        <div>
                            <h2>STATUS</h2>
                            <button>{CurrentInventory.status}</button>
                        </div>
                        <div>
                            <h2>QTY</h2>
                            <p>{CurrentInventory.quantity}</p>
                        </div>
                        <div>
                            <h2>WAREHOUSE</h2>
                            <p>{CurrentInventory.warehouseName}</p>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}
export default Inventory_Item_Details;
