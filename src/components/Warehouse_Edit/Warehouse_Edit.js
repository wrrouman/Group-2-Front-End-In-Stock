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
                    <NavLink to={"/warehouse_details/123"} className="Warehouse-Edit__header--arrowbackicon-link">
                    {/* <NavLink to={`/warehouse_details/${warehouseID}`}> */}
                        <img src={Arrow_Back} className="Warehouse-Edit__header--arrowbackicon"/>
                    </NavLink>

                    <p className="Warehouse-Edit__header--title">Edit Warehouse</p>
                </div>

                <form className="Warehouse-Edit__form">
                    <div className="Warehouse-Edit__block">
                        <div className="Warehouse-Edit__formblock--warehouse-details">
                            <p className="Warehouse-Edit__formblock--title">Warehouse Details</p>

                            <label className="Warehouse-Edit__warehouse-details--title">Warehouse Name</label>
                            <input placeholder="Washington" className="Warehouse-Edit__warehouse-details--input"/>

                            <label className="Warehouse-Edit__warehouse-details--title">Street Address</label>
                            <input placeholder="33 Pearl Street SW" className="Warehouse-Edit__warehouse-details--input"/>

                            <label className="Warehouse-Edit__warehouse-details--title">City</label>
                            <input placeholder="Washington" className="Warehouse-Edit__warehouse-details--input"/>

                            <label className="Warehouse-Edit__warehouse-details--title">Country</label>
                            <input placeholder="USA" className="Warehouse-Edit__warehouse-details--input"/>
                        </div>

                        <div className="Warehouse-Edit__formblock--contact-details">
                            <p className="Warehouse-Edit__formblock--title">Contact Details</p>

                            <label className="Warehouse-Edit__contact-details--title">Contact Name</label>
                            <input placeholder="Graeme Lyon" className="Warehouse-Edit__contact-details--input"/>

                            <label className="Warehouse-Edit__contact-details--title">Position</label>
                            <input placeholder="Warehouse Manager" className="Warehouse-Edit__contact-details--input"/>

                            <label className="Warehouse-Edit__contact-details--title">Phone Number</label>
                            <input placeholder="+1 (647) 504-0911" className="Warehouse-Edit__contact-details--input"/>

                            <label className="Warehouse-Edit__contact-details--title">Email</label>
                            <input placeholder="glyon@instock.com" className="Warehouse-Edit__contact-details--input"/>
                        </div>

                    </div>
                    

                    <div className="Warehouse-Edit__buttonblock">
                        <button className="Warehouse-Edit__cancelbutton">Cancel</button>
                        <button className="Warehouse-Edit__savebutton">Save</button>
                    </div>

                </form>
                <footer> footer is here</footer>
            </div>
            
        </>
    );
}

export default Warehouse_Edit;