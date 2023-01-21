import "./Inventory_List.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';

//import images
import Sort from "../../assets/Icons/sort-24px.svg";

//import components
import Inventory_Item from '../Inventory_Item/Inventory_Item.js';


function Inventory_List(props) {
    // const [InventoryJson, setInventoryJson] = useState(Inventory_Json); 
    // const [CurrentWarehouse, setCurrentWarehouse] = useState("Washington");
    const [CurrentWarehouseInventory, setCurrentWarehouseInventory] = useState([]);

    // useEffect(() => {
    //     const current_inventory = props.AllInventoriesInfo.filter(x => x.warehouseId === props.CurrentWarehouse.id);
    //     console.log(CurrentWarehouseInventory);
    //     setCurrentWarehouseInventory(current_inventory);
    // }, [props.CurrentWarehouse])

    // useEffect - Get-Inventories-From-A-Warehouse
    useEffect(() => {
        function GetInventoriesFromAWarehouseInfo() {
            return axios.get(`http://localhost:8080/inventories/${props.warehouseID}`)
            .then((element) => {
                let inventories_for_a_warehouse_info = element.data;
                setCurrentWarehouseInventory(inventories_for_a_warehouse_info);
            })
        }
            
        GetInventoriesFromAWarehouseInfo();

    }, [props.warehouseID])

    return(
        <>
            <div className="Inventory-List__allinfo--tablettitlegroup">
                <div className="Inventory-List__allinfo--tablettitle-block Inventory-List__tablettitle--inventoryitem">
                    <div className="Inventory-List__allinfo--tablettitle">INVENTORY ITEM</div>
                    <img src={Sort}/>
                </div>

                <div className="Inventory-List__allinfo--tablettitle-block Inventory-List__tablettitle--category">
                    <div className="Inventory-List__allinfo--tablettitle">CATEGORY</div>
                    <img src={Sort}/>
                </div>

                <div className="Inventory-List__allinfo--tablettitle-block Inventory-List__tablettitle--status">
                <div className="Inventory-List__allinfo--tablettitle">STATUS</div>
                        <img src={Sort}/>
                </div>

                <div className="Inventory-List__allinfo--tablettitle-block Inventory-List__tablettitle--qty">
                    <div className="Inventory-List__allinfo--tablettitle">QTY</div>
                    <img src={Sort}/>
                </div>

                <div className="Inventory-List__allinfo--tablettitle-block Inventory-List__tablettitle--action">
                    <div className="Inventory-List__allinfo--tablettitle">ACTIONS</div>
                </div>
            </div>

            <section>{
                CurrentWarehouseInventory.map((inventory) => (
                    <Inventory_Item Inventory_ItemInfo={inventory} />
                ))
            }</section>

        </>
    );
}

export default Inventory_List;