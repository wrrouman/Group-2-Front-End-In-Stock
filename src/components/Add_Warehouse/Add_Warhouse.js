import "./Add_Warehouse.scss";
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_Back from "../../assets/Icons/arrow_back-24px.svg";

function Warehouse_Add(){
    let {warehouseID} = useParams();
}

function Add_Warehouse() {
  return (
    <>
    <p>{Warehouse_Add}</p>
      <div className="warehouse_add_popup">
        <div className="warehouse_add_header">
          <img src={Arrow_Back} />
          <p>Add New Warehouse</p>
        </div>

        <form className="warehouse_add_form">
          <div className="warehouse_add_block">
            <div className="warehouse_add_block1">
              <p className="warehouse_details">Warehouse Details</p>

              <label>Warehouse Name</label>
              <input placeholder="Warehouse Name" />

              <label>Street Address</label>
              <input placeholder="Street Address" />

              <label>City</label>
              <input placeholder="City" />

              <label>Country</label>
              <input placeholder="Country" />
            </div>

            <div className="warehouse_add_block2">
              <p>Contact Details</p>

              <label>Contact Name</label>
              <input placeholder="Contact Name" />

              <label>Position</label>
              <input placeholder="Position" />

              <label>Phone Number</label>
              <input placeholder="Phone Number" />

              <label>Email</label>
              <input placeholder="Email" />
            </div>
          </div>

          <div className="warehouse_addbutton_block">
            <button className="button_white">Cancel</button>
            <button className="button_color">+Add Warehouse</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add_Warehouse;
