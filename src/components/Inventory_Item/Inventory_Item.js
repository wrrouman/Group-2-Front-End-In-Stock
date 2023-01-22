import "./Inventory_Item.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//import images
import Chevron_Right from "../../assets/Icons/chevron_right-24px.svg";
import Delete_Outline from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";

//import components
import Inventory_Delete from "../Inventory_Delete/Inventory_Delete";

function Inventory_Item(props) {
    //Delete Popup
    const [ShowDeletePopup, setShowDeletePopup] = useState(false);
    const OpenDeletePopup = () => {
        setShowDeletePopup(true);
    };
    const CloseDeletePopup = () => {
        setShowDeletePopup(false);
    };

    return (
        <>
            <div className="Inventory-Item__page">
                <div className="Inventory-Item__allinfo">
                    <div className="Inventory-Item__allinfo--info">
                        <div className="Inventory-Item__allinfo--infoblock  Inventory-Item__tablettitle--inventoryitem">
                            <p className="Inventory-Item__allinfo--mobiletitle">
                                INVENTORY ITEM
                            </p>
                            <div className="Inventory-Item__allinfo--name">
                                <p className="Inventory-Item__allinfo--info Inventory-Item__allinfo--itemName">
                                    {props.Inventory_ItemInfo.itemName}
                                </p>
                                <img
                                    src={Chevron_Right}
                                    className="Inventory-Item__allinfo--chevronrighticon"
                                />
                            </div>
                        </div>

                        <div className="Inventory-Item__allinfo--infoblock Inventory-Item__tablettitle--category">
                            <p className="Inventory-Item__allinfo--mobiletitle">
                                CATEGORY
                            </p>
                            <p className="Inventory-Item__allinfo--info">
                                {props.Inventory_ItemInfo.category}
                            </p>
                        </div>
                    </div>

                    <div className="Inventory-Item__allinfo--info">
                        <div className="Inventory-Item__allinfo--infoblock Inventory-Item__tablettitle--status">
                            <p className="Inventory-Item__allinfo--mobiletitle">
                                STATUS
                            </p>
                            <p className="Inventory-Item__allinfo--info">
                                {props.Inventory_ItemInfo.status}
                            </p>
                        </div>

                        <div className="Inventory-Item__allinfo--infoblock Inventory-Item__tablettitle--qty">
                            <p className="Inventory-Item__allinfo--mobiletitle">
                                QTY
                            </p>
                            <p className="Inventory-Item__allinfo--info">
                                {props.Inventory_ItemInfo.quantity}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Item__action">
                    <div className="Inventory-Item__action--icongroup">
                        <img
                            src={Delete_Outline}
                            className="Inventory-Item__action--deleteicon"
                            onClick={OpenDeletePopup}
                        />

                        <NavLink
                            to={`/edit_inventoryitems/${props.Inventory_ItemInfo.id}`}
                        >
                            <img
                                src={Edit}
                                className="Inventory-Item__action--editicon"
                            />
                        </NavLink>
                    </div>
                </div>
                <div>
                    {ShowDeletePopup ? (
                        <Inventory_Delete
                            Inventory_ItemInfo={props.Inventory_ItemInfo}
                            CloseDeletePopup={CloseDeletePopup}
                        />
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Inventory_Item;
