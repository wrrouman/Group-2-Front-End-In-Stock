import "./Inventory_List.js";
import { useEffect, useState } from 'react';

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
            <section>{
                CurrentInventoryJson.map((inventory) => (
                    <Inventory_Item Inventory_ItemInfo={inventory} />
                ))
            }</section>

        </>
    );
}

export default Inventory_List;