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
            <div className="Inventory-Item__page">
                <div className="Inventory-Item__allinfo">
                    <div className="Inventory-Item__allinfo--info">
                        <div>
                            <p>INVENTORY ITEM</p>
                            <div className="Inventory-Item__allinfo--name">
                                <p>{props.Inventory_ItemInfo.itemName}</p>
                                <img src={Chevron_Right}/>
                            </div>
                        </div>

                        <div>
                            <p>CATEGORY</p>
                            <p>{props.Inventory_ItemInfo.category}</p>
                        </div>
                    </div>

                    <div className="Inventory-Item__allinfo--info">
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

                <div className="Inventory-Item__action">
                    <p className="Inventory-Item__action--title">Action</p>
                    <div className="Inventory-Item__action--icongroup">
                        <NavLink to={`/inventory_delete/${props.Inventory_ItemInfo.id}`}>
                            <img src={Delete_Outline} className="Inventory-Item__action--icon"/>
                        </NavLink>
                        <img src={Edit} className="Inventory-Item__action--icon"/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Inventory_Item;