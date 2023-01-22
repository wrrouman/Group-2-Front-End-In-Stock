import './Warehouse_Edit.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

//import images
import Arrow_Back from "../../assets/Icons/arrow_back-24px.svg"; 

function Warehouse_Edit() {
    let { warehouseID } = useParams();
    const [ClickSave, setClickSave] = useState(false);
    const [EditWarehouseInfo, setEditWarehouseInfo] = useState({
        id: warehouseID,
        name: null,
        address: null,
        city: null,
        country: null,
        contact: {
            name: null,
            position: null,
            phone: null,
            email: null
        }
    });

    //
    useEffect(() => {
        if (ClickSave === true) {
          axios.put(`http://localhost:8080/warehouses/${warehouseID}`, EditWarehouseInfo)
          .then(res => {
            console.log(res);
            setClickSave(false);
          })
          .catch(err => console.log(err));
        }
  
    }, [ClickSave])

    const ClickedonSave = (event) => {
        // event.preventDefauls();
        let form = document.getElementById("Warehouse-Edit__form");

        let edit_warehousename = document.getElementById("Warehouse-Edit__input--warehousename").value;
        let edit_warehouseaddress = document.getElementById("Warehouse-Edit__input--warehouseaddress").value;
        let edit_warehousecity = document.getElementById("Warehouse-Edit__input--warehousecity").value;
        let edit_warehousecountry = document.getElementById("Warehouse-Edit__input--warehousecountry").value;
        let edit_contactname = document.getElementById("Warehouse-Edit__input--contactname").value;
        let edit_contactposition = document.getElementById("Warehouse-Edit__input--contactposition").value;
        let edit_contactphone = document.getElementById("Warehouse-Edit__input--contactphone").value;
        let edit_contactemail = document.getElementById("Warehouse-Edit__input--contactemail").value;

        let editedwarehousecontactobj = {name:edit_contactname, position:edit_contactposition, phone:edit_contactphone, email:edit_contactemail};
        let editedwarehouseobj = {...EditWarehouseInfo, name:edit_warehousename, address:edit_warehouseaddress, city:edit_warehousecity, country:edit_warehousecountry, contact:editedwarehousecontactobj};
        console.log(editedwarehouseobj);
        console.log(event);
        setEditWarehouseInfo(editedwarehouseobj);
        setClickSave(true);
        // form.reset();
    }

    return (
        <>
            {/* <p>{ warehouseID }</p> */}
            <div className="Warehouse-Edit__page">
                <div className="Warehouse-Edit__header">
                    <NavLink to={`/warehouse_details/${warehouseID}`} className="Warehouse-Edit__header--arrowbackicon-link">
                        <img src={Arrow_Back} className="Warehouse-Edit__header--arrowbackicon"/>
                    </NavLink>

                    <p className="Warehouse-Edit__header--title">Edit Warehouse</p>
                </div>

                <form className="Warehouse-Edit__form" id="Warehouse-Edit__form">
                    <div className="Warehouse-Edit__block">
                        <div className="Warehouse-Edit__formblock--warehouse-details">
                            <p className="Warehouse-Edit__formblock--title">Warehouse Details</p>

                            <label className="Warehouse-Edit__warehouse-details--title">Warehouse Name</label>
                            <input placeholder="Washington" className="Warehouse-Edit__warehouse-details--input" id="Warehouse-Edit__input--warehousename"/>

                            <label className="Warehouse-Edit__warehouse-details--title">Street Address</label>
                            <input placeholder="33 Pearl Street SW" className="Warehouse-Edit__warehouse-details--input" id="Warehouse-Edit__input--warehouseaddress"/>

                            <label className="Warehouse-Edit__warehouse-details--title">City</label>
                            <input placeholder="Washington" className="Warehouse-Edit__warehouse-details--input" id="Warehouse-Edit__input--warehousecity"/>

                            <label className="Warehouse-Edit__warehouse-details--title">Country</label>
                            <input placeholder="USA" className="Warehouse-Edit__warehouse-details--input" id="Warehouse-Edit__input--warehousecountry"/>
                        </div>

                        <div className="Warehouse-Edit__formblock--contact-details">
                            <p className="Warehouse-Edit__formblock--title">Contact Details</p>

                            <label className="Warehouse-Edit__contact-details--title">Contact Name</label>
                            <input placeholder="Graeme Lyon" className="Warehouse-Edit__contact-details--input" id="Warehouse-Edit__input--contactname"/>

                            <label className="Warehouse-Edit__contact-details--title">Position</label>
                            <input placeholder="Warehouse Manager" className="Warehouse-Edit__contact-details--input" id="Warehouse-Edit__input--contactposition"/>

                            <label className="Warehouse-Edit__contact-details--title">Phone Number</label>
                            <input placeholder="+1 (647) 504-0911" className="Warehouse-Edit__contact-details--input" id="Warehouse-Edit__input--contactphone"/>

                            <label className="Warehouse-Edit__contact-details--title">Email</label>
                            <input placeholder="glyon@instock.com" className="Warehouse-Edit__contact-details--input" id="Warehouse-Edit__input--contactemail"/>
                        </div>

                    </div>
                    

                    <div className="Warehouse-Edit__buttonblock">
                        <NavLink to={`/warehouse_details/${warehouseID}`}>
                            <button className="Warehouse-Edit__cancelbutton">Cancel</button>
                        </NavLink>
                        <button className="Warehouse-Edit__savebutton">Save</button>
                    </div>

                </form>
            </div>
            
        </>
    );
}

export default Warehouse_Edit;