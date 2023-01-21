import './Warehouse_Details.scss';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_back from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';

//import json files
import Inventory_json from "../../server/data/inventories.json";
import Warehouse_json from "../../server/data/warehouses.json";

//import components
import Inventory_List from '../Inventory_List/Inventory_List.js';

function Warehouse_Details (props) {
    let { warehouseID } = useParams();
    const [CurrentWarehouse, setCurrentWarehouse] = useState([]);

    useEffect(() => {
        let CurrentWarehouseDetails = props.AllWarehousesInfo.find(warehouse => warehouse.id === warehouseID);
        setCurrentWarehouse(CurrentWarehouseDetails);
    }, [warehouseID])

    

    return (
        <>
            {/* <p>{warehouseID}</p> */}
            <div className="Warehouse-Details__page">
                <div className="Warehouse-Details__header">
                    <NavLink to={`/`}>
                        <img src={Arrow_back} className="Warehouse-Details__header--arrowbackicon"/>
                    </NavLink>
                    <p className="Warehouse-Details__header--warehouse-name">{CurrentWarehouse.name}</p>
                    <div className="Warehouse-Details__header--edit">
                        <NavLink to={`/edit_warehouse/${warehouseID}`} className="Warehouse-Details__header--editicon-link" onClick={props.UpdateCurrentWarehouseId(warehouseID)}>
                            <div className="editicon Warehouse-Details__header--editicon"></div>
                            <p className="Warehouse-Details__header--editicon-description">Edit</p>
                            
                        </NavLink>
                    </div>
                </div>

                <div className="Warehouse-Details__block">
                    <div className="Warehouse-Details__block--address">
                        <p className="Warehouse-Details__block--title">WAREHOUSE ADDRESS:</p>
                        <p className="Warehouse-Details__block--content">{CurrentWarehouse.address}</p>
                    </div>
                        
                    <div className="Warehouse-Details__block--contact">
                        <div className="Warehouse-Details__block--contact-name">
                            <p className="Warehouse-Details__block--title">CONTACT NAME:</p>
                            <p className="Warehouse-Details__block--content">{CurrentWarehouse.contact?.name}</p>
                            <p className="Warehouse-Details__block--content">{CurrentWarehouse.contact?.position}</p>
                        </div>

                        <div className="Warehouse-Details__block--contact-info">
                            <p className="Warehouse-Details__block--title">CONTACT INFORMATION:</p>
                            <p className="Warehouse-Details__block--content">{CurrentWarehouse.contact?.phone}</p>
                            <p className="Warehouse-Details__block--content">{CurrentWarehouse.contact?.email}</p>
                        </div>
                    </div>

                </div>

                <Inventory_List AllInventoriesInfo={props.AllInventoriesInfo}  warehouseID={warehouseID}/>
            </div>
            
        </>
    );
    

}

export default Warehouse_Details;