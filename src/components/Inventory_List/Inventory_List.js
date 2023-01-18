import "./Inventory_List.scss";
import { useEffect, useState } from 'react';

//import images
import Sort from "../../assets/Icons/sort-24px.svg";

//import components
import Inventory_Item from '../Inventory_Item/Inventory_Item.js';

//import inventories json files
import Inventory_Json from '../../server/data/inventories.json';

function Inventory_List() {
    const [InventoryJson, setInventoryJson] = useState(Inventory_Json); 
    const [CurrentWarehouse, setCurrentWarehouse] = useState("Washington");
    const [CurrentInventoryJson, setCurrentInventoryJson] = useState([]);

    useEffect(() => {
        const current_inventory = InventoryJson.filter(x => x.warehouseName === CurrentWarehouse);
        setCurrentInventoryJson(current_inventory);
    }, [CurrentWarehouse])

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
                CurrentInventoryJson.map((inventory) => (
                    <Inventory_Item Inventory_ItemInfo={inventory} />
                ))
            }</section>

        </>
    );
}

export default Inventory_List;