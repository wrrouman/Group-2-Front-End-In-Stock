import "./Add_Warehouse.scss"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


//import images
import Arrow_Back from "../../assets/Icons/arrow_back-24px.svg";


function Add_Warehouse() {

  let { warehouseID } = useParams();
  const [ClickSave, setClickSave] = useState(false);
  const [AddWarehouseInfo, setAddWarehouseInfo] = useState({
      id: warehouseID,
      name: null,
      address: null,
      city: null,
      country: null,
      contact: {
          name: null,
          position: null,
          phone: null,
          email: null
      }
  });

  //
  useEffect(() => {
      if (ClickSave === true) {
        axios.post(`http://localhost:8080/warehouses/`, AddWarehouseInfo)
        .then(res => {
          console.log(res);
          setClickSave(false);
        })
        .catch(err => console.log(err));
      }

  }, [ClickSave])

  const ClickedonSave = (event) => {
      // event.preventDefauls();
      let form = document.getElementById("Warehouse-Add__form");

      let add_warehousename = document.getElementById("Warehouse-Add__input--warehousename").value;
      let add_warehouseaddress = document.getElementById("Warehouse-Add__input--warehouseaddress").value;
      let add_warehousecity = document.getElementById("Warehouse-Add__input--warehousecity").value;
      let add_warehousecountry = document.getElementById("Warehouse-Add__input--warehousecountry").value;
      let add_contactname = document.getElementById("Warehouse-Add__input--contactname").value;
      let add_contactposition = document.getElementById("Warehouse-Add__input--contactposition").value;
      let add_contactphone = document.getElementById("Warehouse-Add__input--contactphone").value;
      let add_contactemail = document.getElementById("Warehouse-Add__input--contactemail").value;

      let addedwarehousecontactobj = {name:add_contactname, position:add_contactposition, phone:add_contactphone, email:add_contactemail};
      let addedwarehouseobj = {...AddWarehouseInfo, name:add_warehousename, address:add_warehouseaddress, city:add_warehousecity, country:add_warehousecountry, contact:addedwarehousecontactobj};
      console.log(addedwarehouseobj);
      console.log(event);
      setAddWarehouseInfo(addedwarehouseobj);
      setClickSave(true);
      // form.reset();
  }

  return (
    <>
      {/* <p>{Warehouse_Add}</p> */}
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
              <input type="text" placeholder="Warehouse Name" id= "Warehouse-Add__input--warehousename" required />

              <label>Street Address</label>
              <input type="text" placeholder="Street Address" id="Warehouse-Add__input--warehouseaddress" required />

              <label>City</label>
              <input type="text" placeholder="City" id= "Warehouse-Add__input--warehousecity" required/>

              <label>Country</label>
              <input type="text" placeholder="Country" id="Warehouse-Add__input--warehousecountry" required />
            </div>

            <div className="warehouse_add_block2">
              <p className="contact_details">Contact Details</p>

              <label>Contact Name</label>
              <input type="text" placeholder="Contact Name" id="Warehouse-Add__input--contactname" required/>

              <label>Position</label>
              <input type="text" placeholder="Position" id="Warehouse-Add__input--contactposition" required />

              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number"  id="Warehouse-Add__input--contactphone" required />

              <label>Email</label>
              <input type="text" placeholder="Email" id="Warehouse-Add__input--contactemail" required  />
            </div>
          </div>

          <div className="warehouse_addbutton_block">
            <button className="button_white">Cancel</button>
            <button className="button_color" onClick={ClickedonSave}>+Add Warehouse</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add_Warehouse;
