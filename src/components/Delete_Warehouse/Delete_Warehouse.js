import "./Delete_Warehouse.scss";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";

//import images
import Close from "../../assets/Icons/close-24px.svg";

//import JSON files
import Inventory_Json from "../../assets/JSON Data/inventories.json";
import Warehouse_Json from "../../assets/JSON Data/warehouses.json";

function Delete_Warehouse() {
  let { warehouseID } = useParams();

  //useState variable
  const [WarehousesJson, setWarehousesJson] = useState(Warehouse_Json);
  const [CurrentWarehouseJson, setCurrentWarehouseJson] = useState([]);

  useEffect(() => {
    let current_warehouse = WarehousesJson.filter((x) => x.id === warehouseID);
    setCurrentWarehouseJson(current_warehouse);
  }, [warehouseID]);

  console.log(CurrentWarehouseJson[0]?.name);

  return (
    <>
      <div className="Delete_Warehouse__page">
        <NavLink className="delete_x" to={`/`}>
          <img src={Close} />
        </NavLink>

        <p className="delete_warehouse-header">
          Delete {CurrentWarehouseJson[0]?.name} warehouse?
        </p>
        <p className="delete_warehouse-confirmation">
          Please confirm that you'd like to delete Television from the inventory
          list. You won't be able to undo this action
        </p>
        <div className="delete_warehouse--buttons">
          <button className="delete_warehouse--cancelButton">Cancel</button>

          <button className="delete_warehouse--deleteButton">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Delete_Warehouse;
