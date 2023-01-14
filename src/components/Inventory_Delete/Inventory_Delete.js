import "./Inventory_Delete.scss";
import { NavLink, useParams } from 'react-router-dom';

//import images
import Close from "../../assets/Icons/close-24px.svg";

function Inventory_Delete() {
    let { inventoryID } = useParams();

    return(
        <>
            <div className="Inventory-Delete__page">
                <p>{inventoryID}</p>
                <NavLink to={`/warehouse_details/123`}>
                {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                    <img src={Close}/>
                </NavLink>

                <p>Delete (Television) inventory item?</p>
                <p>Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action</p>
                <button>Cancel</button>
                <button>Delete</button>
            </div>

        </>
    );
}

export default Inventory_Delete;