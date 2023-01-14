import './Inventory_Item.scss';
import { NavLink } from 'react-router-dom';

//import images
import Chevron_Right from "../../assets/Icons/chevron_right-24px.svg";
import Delete_Outline from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";

//impor

function Inventory_Item(props) {
    return(
        <>
            <div className="inventory_itemblock">
                <div className="inventory_itemgroup">
                    <div className="inventory_item">
                        <div>
                            <p>INVENTORY ITEM</p>
                            <div className="inventory_itemname">
                                <p>{props.Inventory_ItemInfo.itemName}</p>
                                <img src={Chevron_Right}/>
                            </div>
                        </div>

                        <div>
                            <p>CATEGORY</p>
                            <p>{props.Inventory_ItemInfo.category}</p>
                        </div>
                    </div>

                    <div className="inventory_item">
                        <div>
                            <p>STATUS</p>
                            <p>{props.Inventory_ItemInfo.status}</p>
                            
                        </div>

                        <div>
                            <p>QTY</p>
                            <p>{props.Inventory_ItemInfo.quantity}</p>
                        </div>
                    </div>

                </div>

                <div className="inventory_actionitem">
                    <p className="inventory_title_action">Action</p>
                    <div className="inventory_actionitemicon">
                        <NavLink to={`/inventory_delete/${props.Inventory_ItemInfo.id}`}>
                            <img src={Delete_Outline} className="inventory_item_actionicon"/>
                        </NavLink>
                        <img src={Edit} className="inventory_item_actionicon"/>
                    </div>
                </div>

            </div>
            <div className="inventory_itemborder"></div>
        </>
    );
}

export default Inventory_Item;