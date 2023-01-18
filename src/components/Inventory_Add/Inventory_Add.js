import "./Inventory_Add.scss";
import { NavLink, useParams } from "react-router-dom";

//import images
import Arrow_back from "../../assets/Icons/arrow_back-24px.svg";

function Inventory_Add() {
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

        <form className="Inventory-Edit__form">
          <div className="Inventory-Edit__block">
            <div className="Inventory-Edit__block--item-details">
              <p className="Inventory-Edit__formblock--title">Item Details</p>

              <label className="Inventory-Edit__item-details--title">
                Item Name
              </label>
              <input
                placeholder="Item Name"
                className="Inventory-Edit__item-details--input"
              />

              <label className="Inventory-Edit__item-details--title">
                Description
              </label>
              <textarea
                placeholder="Please enter a breif description..."
                className="Inventory-Edit__item-details--textarea"
              />

              <label className="Inventory-Edit__item-details--title">
                Category
              </label>
              <select className="Inventory-Edit__item-details--select">
                <option value="electronics" selected>
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
                    for="instock"
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
                    for="outofstock"
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
              <select className="Inventory-Edit__item-availability--select">
                <option value="manhattan" selected>
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
            <button className="Inventory-Edit__editbutton--save">Save</button>
          </div>
        </form>
        <footer>footer is here</footer>
      </div>
    </>
  );
}

export default Inventory_Add;
