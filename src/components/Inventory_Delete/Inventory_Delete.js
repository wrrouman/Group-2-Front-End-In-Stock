import "./Inventory_Delete.scss";
import { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Close from "../../assets/Icons/close-24px.svg";

//import JSON files
import Inventory_Json from "../../server/data/inventories.json";
import Warehouse_Json from "../../server/data/warehouses.json";

function Inventory_Delete() {
    let { inventoryID } = useParams();

    //useState variable
    const [InventoryJson, setInventoryJson] = useState(Inventory_Json);
    const [CurrentInventoryJson, setCurrentInventoryJson] = useState([]);

    useEffect(() => {
        let current_inventory = InventoryJson.filter(x => x.id === inventoryID);
        setCurrentInventoryJson(current_inventory);
    }, [inventoryID]);

    console.log(CurrentInventoryJson[0]?.itemName);

    return(
        <>
            <div className="Inventory-Delete__page">
                <p>{inventoryID}</p>
                <NavLink to={`/warehouse_details/123`}>
                {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                    <img src={Close}/>
                </NavLink>

                <p>Delete ({CurrentInventoryJson[0]?.itemName}) inventory item?</p>
                <p>Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action</p>
                <button>Cancel</button>
                <button>Delete</button>
            </div>

        </>
    );
}

export default Inventory_Delete;