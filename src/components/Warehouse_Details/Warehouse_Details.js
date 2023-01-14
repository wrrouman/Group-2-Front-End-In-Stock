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
                    <img src={Arrow_back}/>
                    <p>Washington (Warehouse_Title)</p>
                    <div className="Warehouse-Details__header--edit">
                        <NavLink to={`/edit_warehouse/123`}>
                        {/* <NavLink to={`/edit/${warehouseID}`}> */}
                            <img src={Edit}/>
                        </NavLink>
                    </div>
                </div>

                <div className="Warehouse-Details__block">
                    <div className="Warehouse-Details__block--address">
                        <p>WAREHOUSE ADDRESS:</p>
                        <p>33 Pearl Street SW, Washington, USA</p>
                    </div>
                        
                    <div className="Warehouse-Details__block--contact">
                        <div>
                            <p>CONTACT NAME:</p>
                            <p>Graeme Lyon</p>
                            <p>Warehouse Manager</p>
                        </div>

                        <div>
                            <p>CONTACT INFORMATION:</p>
                            <p>+1 (647) 504-0911</p>
                            <p>glyon@instock.com</p>
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