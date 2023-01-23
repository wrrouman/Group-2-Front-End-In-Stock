import "./Inventory_List_Add_New_Inventory.scss";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//import images
import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

import Inventory_List_Add_Item from "../../components/Inventory_List_Add_Item/Inventory_List_Add_Item.js";

function InventoryListAddNewInventory(props) {
    // let { inventoryID } = useParams();
    // const [inventoryListState, setInventoryListState] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(getURL);
    //         setInventoryListState(request.data);
    //         console.log(request.data);
    //     }
    //     fetchData();
    // }, [getURL]);

    const [defaultInventory, setdefaultInventory] = useState([]);
    useEffect(() => {
        let DefaultInventoryDetail = props.AllInventoriesInfo.find(inv => inv.warehouseID === props.CurrentWarehouseId );
        setdefaultInventory(DefaultInventoryDetail);
    }, [])

    return (
        <>
            <section className="">{props.AllInventoriesInfo.map(inventory => (
                <Inventory_List_Add_Item SingleInventoryInfo={inventory}/>
            ))}
            </section>
        </>
    );
}
export default InventoryListAddNewInventory;
