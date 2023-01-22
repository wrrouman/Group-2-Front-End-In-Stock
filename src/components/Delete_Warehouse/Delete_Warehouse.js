import "./Delete_Warehouse.scss";
import axios from 'axios';
import { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Close from "../../assets/Icons/close-24px.svg";

//import JSON files
import Inventory_Json from "../../server/data/inventories.json";
import Warehouse_Json from "../../server/data/warehouses.json";

function Delete_Warehouse(props) {
    let { warehouseID } = useParams();
    const [ClickedDelete, setClickedDelete] = useState(false);

    //useState variable
    const [WarehouseJson, setWarehouseJson] = useState(Warehouse_Json);
    const [CurrentWarehouseJson, setCurrentWarehouseJson] = useState([]);

    useEffect(() => {
        let current_warehouse = WarehouseJson.filter(x => x.id === warehouseID);
        setCurrentWarehouseJson(current_warehouse);
    }, [warehouseID]);

    console.log(CurrentWarehouseJson[0]?.warehouseName);

    // Delete an Inventory
    useEffect(() => {
        if (ClickedDelete === true) {
            axios.delete(`http://localhost:8080/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0`)
            .then(res => {
                console.log(props.CurrentwarehouseId);
                console.log(res.status);
                setClickedDelete(false);
            })
            // .catch(err => console.log(err));
            
        }
    }, [ClickedDelete])

    const ClickDeleteButton = (event) => {
        event.preventDefault();
        console.log(event);
        setClickedDelete(true);
        props.CloseDeletePopup();
    }

    console.log(props.CurrentwarehouseId);


    return(
        <>
            <div className="Inventory-Delete__page">
                <img src={Close} className="Inventory-Delete__closeicon" onClick={props.CloseDeletePopup}/>

                <div className="Inventory-Delete__block">
                    <p className="Inventory-Delete__block--title">Delete  Warehouse?</p>
                    <p className="Inventory-Delete__block--description">Please confirm that you'd like to delete from the inventory list.</p>
                    <p className="Inventory-Delete__block--description">You won't be able to undo this action</p>
                </div>

                <div className="Inventory-Delete__block--button">
                        <button className="Inventory-Delete__block--button-cancel" onClick={props.CloseDeletePopup}>Cancel</button>
                        <button className="Inventory-Delete__block--button-delete" onClick={props.ClickDeleteButton}>Delete</button>
                </div>

            </div>

        </>
    );
}

export default Delete_Warehouse
