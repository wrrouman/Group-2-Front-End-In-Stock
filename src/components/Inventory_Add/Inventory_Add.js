import "./Inventory_Add.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { v9 } from "uuid";

//import images
import Arrow_back from "../../assets/Icons/arrow_back-24px.svg";

function Inventory_Add() {

  let { warehouseID, inventoryID } = useParams();
  const [ClickInventorySave, setClickInventorySave] = useState(false);
  const [AddInventoryInfo, setAddInventoryInfo] = useState({
      id: inventoryID,
      warehouseID: warehouseID,
      warehouseName: null,
      itemName: null,
      description: null,
      category: null,
      status: null,
      quantity: null
  });

  //
  useEffect(() => {
      if (ClickInventorySave === true) {
          axios.post(`http://localhost:8080/inventory/`, AddInventoryInfo)
          .then(res => {
              console.log(res);
              setClickInventorySave(false);
          })
          .catch(err => console.log(err));
      }
  
  }, [ClickInventorySave])

  const InventoryAddClickedonSave = (event) => {
      event.preventDefault();
      let form = document.getElementById("Inventory-Add__form")

      let add_inventoryname = document.getElementById("Inventory-Add__input--inventoryname").value;
      let add_inventorydescription = document.getElementById("Inventory-Add__input--inventorydescription").value;
      let add_inventorycategory = document.getElementById("Inventory-Add__input--inventorycategory").value;
      // let edit_inventorystatus = document.getElementById("Warehouse-Edit__input--warehousecountry").value;
      let add_inventorywarehouse = document.getElementById("Inventory-Add__input--inventorywarehouse").value;

      let addedinventoryobj = {...AddInventoryInfo, warehouseName:add_inventorywarehouse, itemName:add_inventoryname, description:add_inventorydescription, category:add_inventorycategory};
      console.log(addedinventoryobj);
      console.log(event);
      setAddInventoryInfo(addedinventoryobj);
      setClickInventorySave(true);
      form.reset();
  }


  return (
    <>
      <div className="Inventory-Edit__page">
        <div className="Inventory-Edit__header">
          <NavLink className="Inventory-Edit__header--arrowbackicon-link">
            {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
            <img
              src={Arrow_back}
              className="Inventory-Edit__header--arrowbackicon"
            />
          </NavLink>

          <p className="Inventory-Edit__header--title">
            Add New Inventory Item
          </p>
        </div>

        <form className="Inventory-Edit__form" id="Inventory-Add__form">
          <div className="Inventory-Edit__block">
            <div className="Inventory-Edit__block--item-details">
              <p className="Inventory-Edit__formblock--title">Item Details</p>

              <label className="Inventory-Edit__item-details--title">
                Item Name
              </label>
              <input
                placeholder="Item Name"
                className="Inventory-Edit__item-details--input"
                id="Inventory-Add__input--inventoryname"
              />

              <label className="Inventory-Edit__item-details--title">
                Description
              </label>
              <textarea
                placeholder="Please enter a breif description..."
                className="Inventory-Edit__item-details--textarea"
                id="Inventory-Add__input--inventorydescription"
              />

              <label className="Inventory-Edit__item-details--title">
                Category
              </label>
              <select className="Inventory-Edit__item-details--select" id="Inventory-Add__input--inventorycategory">
                <option value="electronics">
                  Please Select
                </option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="health">Health</option>
                <option value="Electonics">Electronics</option>
              </select>
            </div>

            <div className="Inventory-Edit__block--item-availability">
              <p className="Inventory-Edit__formblock--title">
                Item Availability
              </p>

              <label className="Inventory-Edit__item-availability--title">
                Status
              </label>
              <div className="Inventory-Edit__block--status">
                <div className="Inventory-Edit__block--status-block">
                  <input
                    type="radio"
                    id="instock"
                    name="stockstatus"
                    value="In stock"
                    className="Inventory-Edit__block--status-input"
                  ></input>
                  <label
                    htmlFor="instock"
                    className="Inventory-Edit__block--status-label"
                  >
                    In stock
                  </label>
                </div>

                <div className="Inventory-Edit__block--status-block">
                  <input
                    type="radio"
                    id="outofstocks"
                    name="stockstatus"
                    value="Out of stock"
                    className="Inventory-Edit__block--status-input"
                  ></input>
                  <label
                    htmlFor="outofstock"
                    className="Inventory-Edit__block--status-label"
                  >
                    Out of stock
                  </label>
                </div>
              </div>
              <label className="Inventory-Edit__item-details--title">
                Quantity
              </label>
              <input
                placeholder="0"
                className="Inventory-Edit__item-details--input"
              />

              <label className="Inventory-Edit__item-availability--title">
                Warehouse
              </label>
              <select className="Inventory-Edit__item-availability--select" id="Inventory-Add__input--inventorywarehouse">
                <option value="manhattan">
                  Please Select
                </option>
                <option value="Washington">Washington</option>
                <option value="Jersey">Jersey</option>
                <option value="San_fran">San_fran</option>
                <option value="Santa_monica">Santa_monica</option>
                <option value="Seattle">Seattle</option>
                <option value="Miami">Miami</option>
                <option value="Manhattan">Manhattan</option>
              </select>
            </div>
          </div>

          <div className="Inventory-Edit__block--editbutton">
            <button className="Inventory-Edit__editbutton--cancel">
              Cancel
            </button>
            <button className="Inventory-Edit__editbutton--save" onClick={InventoryAddClickedonSave}>+ Add Item</button>
          </div>
        </form>
       
      </div>
    </>
  );
}

export default Inventory_Add;
