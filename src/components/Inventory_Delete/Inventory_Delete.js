import "./Inventory_Delete.scss";
import { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Close from "../../assets/Icons/close-24px.svg";

//import JSON files
import Inventory_Json from "../../server/data/inventories.json";
import Warehouse_Json from "../../server/data/warehouses.json";

function Inventory_Delete(props) {
    // let { inventoryID } = useParams();

    // //useState variable
    // const [InventoryJson, setInventoryJson] = useState(Inventory_Json);
    // const [CurrentInventoryJson, setCurrentInventoryJson] = useState([]);

    // useEffect(() => {
    //     let current_inventory = InventoryJson.filter(x => x.id === inventoryID);
    //     setCurrentInventoryJson(current_inventory);
    // }, [inventoryID]);

    // console.log(CurrentInventoryJson[0]?.itemName);

    return(
        <>
            <div className="Inventory-Delete__page">
                <img src={Close} className="Inventory-Delete__closeicon" onClick={props.CloseDeletePopup}/>

                <div className="Inventory-Delete__block">
                    <p className="Inventory-Delete__block--title">Delete {props.Inventory_ItemInfo.itemName} inventory item?</p>
                    <p className="Inventory-Delete__block--description">Please confirm that you'd like to delete {props.Inventory_ItemInfo.itemName} from the inventory list.</p>
                    <p className="Inventory-Delete__block--description">You won't be able to undo this action</p>
                </div>

                <div className="Inventory-Delete__block--button">
                        <button className="Inventory-Delete__block--button-cancel" onClick={props.CloseDeletePopup}>Cancel</button>
                        <button className="Inventory-Delete__block--button-delete">Delete</button>
                </div>

            </div>

        </>
    );
}

export default Inventory_Delete;