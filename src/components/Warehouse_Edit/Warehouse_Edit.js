import './Warehouse_Edit.scss';

//import images
import Arrow_Back from "../../assets/Icons/arrow_back-24px.svg"; 

function Warehouse_Edit() {
    return (
        <>
            <div className="warehouse_edit_popup">
                <div className="warehouse_edit_header">
                    <img src={Arrow_Back}/>
                    <p>Edit Warehouse</p>
                </div>

                <form className="warehouse_edit_form">
                    <div className="warehouse_edit_block">
                        <div className="warehouse_edit_block1">
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

                        <div className="warehouse_edit_block2">
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
                    

                    <div className="warehouse_editbutton_block">
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