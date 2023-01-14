import "./Inventory_Edit.scss";
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_back from "../../assets/Icons/arrow_back-24px.svg";

function Inventory_Edit() {
    let { inventoryID } = useParams();

    return(
        <>
            <p>{ inventoryID }</p>
            <div className="Inventory-Edit__page">
                <div className="Inventory-Edit__header">
                    <NavLink to={`/warehouse_details/123`}>
                    {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                        <img src={Arrow_back}/>
                    </NavLink>

                    <p>Edit Inventory</p>
                </div>

                <form>
                    <div className="Inventory-Edit__block">
                        <div className="Inventory-Edit__block--item-details">
                            <p>Item Details</p>

                            <label>Item Name</label>
                            <input placeholder="Television"/>

                            <label>Description</label>
                            <textarea placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'/>

                            <label>Category</label>
                            <select>
                                <option value="electronics">Electronics</option>
                                <option value="gear">Gear</option>
                                <option value="apparel">Apparel</option>
                                <option value="accessories">Accessories</option>
                                <option value="health">Health</option>
                            </select>
                        </div>
                        
                        <div className="Inventory-Edit__block--item-availability">
                            <p>Item Availability</p>

                            <label>Status</label>
                            <div className="Inventory-Edit__block--status">
                                <div>
                                    <input type="radio" id="instock" name="stockstatus" value="In stock"></input>
                                    <label for="instock">In stock</label>
                                </div>

                                <div>
                                    <input type="radio" id="outofstocks" name="stockstatus" value="Out of stock"></input>
                                    <label for="outofstock">Out of stock</label>
                                </div>
                            </div>



                            <label>Warehouse</label>
                            <select>
                                <option value="manhattan">Manhattan</option>
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
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>

                </form>
                <footer>footer is here</footer>
            </div>
            

        </>
    );
}

export default Inventory_Edit;