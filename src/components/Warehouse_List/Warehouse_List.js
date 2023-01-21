import "./Warehouse_List.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TrashIcon from "../../assets/Icons/delete_outline-24px.svg";
import PencilIcon from "../../assets/Icons/edit-24px.svg";
import LessThanIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

import Warehouse_Item from "../Warehouse_Item/Warehouse_Item";

function Warehouse_List(props) {

    return (
        <>
            <section className="warehouse-list">{props.AllWarehousesInfo.map(warehouse => (
                <Warehouse_Item SingleWarehouseInfo={warehouse}/>
            ))}
            </section>
        </>
    );
}
export default Warehouse_List;
