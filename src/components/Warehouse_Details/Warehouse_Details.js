import './Warehouse_Details.scss';
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

    return (
        <>
            <p>{warehouseID}</p>
            <div className="Warehouse-Details__page">
                <div className="Warehouse-Details__header">
                    <img src={Arrow_back} className="Warehouse-Details__header--arrowbackicon"/>
                    <p className="Warehouse-Details__header--warehouse-name">Washington</p>
                    <div className="Warehouse-Details__header--edit">
                        <NavLink to={`/edit_warehouse/123`} className="Warehouse-Details__header--editicon-link">
                        {/* <NavLink to={`/edit/${warehouseID}`}> */}
                            <img src={Edit} className="Warehouse-Details__header--editicon"/>
                            <p className="Warehouse-Details__header--editicon-description">Edit</p>
                            
                        </NavLink>
                    </div>
                </div>

                <div className="Warehouse-Details__block">
                    <div className="Warehouse-Details__block--address">
                        <p className="Warehouse-Details__block--title">WAREHOUSE ADDRESS:</p>
                        <p className="Warehouse-Details__block--content">33 Pearl Street SW, Washington, USA</p>
                    </div>
                        
                    <div className="Warehouse-Details__block--contact">
                        <div className="Warehouse-Details__block--contact-name">
                            <p className="Warehouse-Details__block--title">CONTACT NAME:</p>
                            <p className="Warehouse-Details__block--content">Graeme Lyon</p>
                            <p className="Warehouse-Details__block--content">Warehouse Manager</p>
                        </div>

                        <div className="Warehouse-Details__block--contact-info">
                            <p className="Warehouse-Details__block--title">CONTACT INFORMATION:</p>
                            <p className="Warehouse-Details__block--content">+1 (647) 504-0911</p>
                            <p className="Warehouse-Details__block--content">glyon@instock.com</p>
                        </div>
                    </div>

                </div>

                <Inventory_List/>

                <footer> footer is here</footer>
            </div>
            
        </>
    );
    

}

export default Warehouse_Details;