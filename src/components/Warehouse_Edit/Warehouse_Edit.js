import './Warehouse_Edit.scss';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_Back from "../../assets/Icons/arrow_back-24px.svg"; 

function Warehouse_Edit() {
    let { warehouseID } = useParams();

    return (
        <>
            <p>{ warehouseID }</p>
            <div className="Warehouse-Edit__page">
                <div className="Warehouse-Edit__header">
                    <NavLink to={"/warehouse_details/123"}>
                    {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                        <img src={Arrow_Back}/>
                    </NavLink>

                    <p>Edit Warehouse</p>
                </div>

                <form className="Warehouse-Edit__form">
                    <div className="Warehouse-Edit__block">
                        <div className="Warehouse-Edit__formblock--warehouse-details">
                            <p>Warehouse Details</p>

                            <label >Warehouse Name</label>
                            <input placeholder="Washington" />

                            <label>Street Address</label>
                            <input placeholder="33 Pearl Street SW" />

                            <label>City</label>
                            <input placeholder="Washington"/>

                            <label>Country</label>
                            <input placeholder="USA" />
                        </div>

                        <div className="Warehouse-Edit__formblock--contact-details">
                            <p>Contact Details</p>

                            <label>Contact Name</label>
                            <input placeholder="Graeme Lyon" />

                            <label>Position</label>
                            <input placeholder="Warehouse Manager" />

                            <label>Phone Number</label>
                            <input placeholder="+1 (647) 504-0911" />

                            <label>Email</label>
                            <input placeholder="glyon@instock.com" />
                        </div>

                    </div>
                    

                    <div className="Warehouse-Edit__buttonblock">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>

                </form>
                <footer> footer is here</footer>
            </div>
            
        </>
    );
}

export default Warehouse_Edit;