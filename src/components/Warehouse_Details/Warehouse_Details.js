import './Warehouse_Details.scss';
import { NavLink } from 'react-router-dom';

//import images
import Arrow_back from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';

//import components
import Inventory_List from '../Inventory_List/Inventory_List.js';

function Warehouse_Details () {

    return (
        <>
            <div className="warehouse_detail_popup">
                <div className="warehouse_header">
                    <img src={Arrow_back}/>
                    <p>Washington (Warehouse_Title)</p>
                    <div className="warehouse_hearder_edit">
                        <NavLink to={`/edit`}>
                        {/* <NavLink to={`/edit/${warehouseID}`}> */}
                            <img src={Edit}/>
                        </NavLink>
                    </div>
                </div>

                <div className="warehouse_info_block">
                    <div className="warehouse_info_1">
                        <p>WAREHOUSE ADDRESS:</p>
                        <p>33 Pearl Street SW, Washington, USA</p>
                    </div>
                        
                    <div className="warehouse_info_2">
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
                <div className="warehouse_detailsborder"></div>

                <Inventory_List/>

                <footer> footer is here</footer>
            </div>
            
        </>
    );
}

export default Warehouse_Details;