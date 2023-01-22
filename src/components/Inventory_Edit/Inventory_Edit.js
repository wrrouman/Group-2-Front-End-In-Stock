import "./Inventory_Edit.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_back from "../../assets/Icons/arrow_back-24px.svg";

function Inventory_Edit(props) {
    let { warehouseID, inventoryID } = useParams();
    const [ClickInventorySave, setClickInventorySave] = useState(false);
    const [EditInventoryInfo, setEditInventoryInfo] = useState({
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
            axios.put(`http://localhost:8080/inventory/${inventoryID}`, EditInventoryInfo)
            .then(res => {
                console.log(res);
                setClickInventorySave(false);
            })
            .catch(err => console.log(err));
        }
    
    }, [ClickInventorySave])

    const InventoryClickedonSave = (event) => {
        // event.preventDefauls();
        let form = document.getElementById("Inventory-Edit__form");

        let edit_inventoryname = document.getElementById("Inventory-Edit__input--inventoryname").value;
        let edit_inventorydescription = document.getElementById("Inventory-Edit__input--inventorydescription").value;
        let edit_inventorycategory = document.getElementById("Inventory-Edit__input--inventorycategory").value;
        let edit_inventorystatus = document.querySelector(`input[name='stockstatus']:checked`).value;
        let edit_inventorywarehouse = document.getElementById("Inventory-Edit__input--inventorywarehouse").value;

        let editedinventoryobj = {...EditInventoryInfo, warehouseName:edit_inventorywarehouse, itemName:edit_inventoryname, description:edit_inventorydescription, category:edit_inventorycategory, status:edit_inventorystatus};
        console.log(editedinventoryobj);
        console.log(event);
        setEditInventoryInfo(editedinventoryobj);
        setClickInventorySave(true);
        form.reset();
    }

    return(
        <>
            {/* <p>{ inventoryID }</p> */}
            <div className="Inventory-Edit__page">
                <div className="Inventory-Edit__header">
                    <NavLink to={`/warehouse_details/${warehouseID}`} className="Inventory-Edit__header--arrowbackicon-link">
                    {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                        <img src={Arrow_back} className="Inventory-Edit__header--arrowbackicon"/>
                    </NavLink>

                    <p className="Inventory-Edit__header--title">Edit Inventory Item</p>
                </div>

                <form className="Inventory-Edit__form" id="Inventory-Edit__form">
                    <div className="Inventory-Edit__block">
                        <div className="Inventory-Edit__block--item-details">
                            <p className="Inventory-Edit__formblock--title">Item Details</p>

                            <label className="Inventory-Edit__item-details--title">Item Name</label>
                            <input placeholder="Television" className="Inventory-Edit__item-details--input" id="Inventory-Edit__input--inventoryname"/>

                            <label className="Inventory-Edit__item-details--title">Description</label>
                            <textarea placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.' className="Inventory-Edit__item-details--textarea" id="Inventory-Edit__input--inventorydescription"/>

                            <label className="Inventory-Edit__item-details--title">Category</label>
                            <select className="Inventory-Edit__item-details--select" id="Inventory-Edit__input--inventorycategory">
                                <option value="electronics" selected>Electronics</option>
                                <option value="gear">Gear</option>
                                <option value="apparel">Apparel</option>
                                <option value="accessories">Accessories</option>
                                <option value="health">Health</option>
                            </select>
                        </div>
                        
                        <div className="Inventory-Edit__block--item-availability">
                            <p className="Inventory-Edit__formblock--title">Item Availability</p>

                            <label className="Inventory-Edit__item-availability--title">Status</label>
                            <div className="Inventory-Edit__block--status">
                                <div className="Inventory-Edit__block--status-block">
                                    <input type="radio" id="instock" name="stockstatus" value="In stock" className="Inventory-Edit__block--status-input"></input>
                                    <label for="instock" className="Inventory-Edit__block--status-label">In stock</label>
                                </div>

                                <div className="Inventory-Edit__block--status-block">
                                    <input type="radio" id="outofstocks" name="stockstatus" value="Out of stock" className="Inventory-Edit__block--status-input"></input>
                                    <label for="outofstock" className="Inventory-Edit__block--status-label">Out of stock</label>
                                </div>
                            </div>



                            <label className="Inventory-Edit__item-availability--title">Warehouse</label>
                            <select className="Inventory-Edit__item-availability--select" id="Inventory-Edit__input--inventorywarehouse">
                                <option value="manhattan" selected>Manhattan</option>
                                <option value="washington">Washington</option>
                                <option value="jersey">Jersey</option>
                                <option value="san_fran">San Fran</option>
                                <option value="santa_monica">Santa Monica</option>
                                <option value="seattle">Seattle</option>
                                <option value="miami">Miami</option>
                            </select>
                        </div>
                        
                    </div>
                    
                    <div className="Inventory-Edit__block--editbutton">
                        <NavLink to={`/warehouse_details/${warehouseID}`}>
                            <button className="Inventory-Edit__editbutton--cancel">Cancel</button>
                        </NavLink>
                        <button className="Inventory-Edit__editbutton--save" onClick={InventoryClickedonSave}>Save</button>
                    </div>

                </form>
            </div>
            

        </>
    );
}

export default Inventory_Edit;