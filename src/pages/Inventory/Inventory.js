import "./Inventory.scss";
import "../../styles/partials/_global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//import components
import Header from "../../components/Header/Header.js";
import InventoryListAddNewInventory from "../../components/Inventory_List_Add_New_Inventory/Inventory_List_Add_New_Inventory";

function Inventory(props) {

    return (
        <>
            <Header />
            
            <InventoryListAddNewInventory />
        </>
    );
}

export default Inventory;









// import './Header.scss';
// import { NavLink, Navigate} from 'react-router-dom';
// import BrainFlix_logo from '../../assets/logos/BrainFlix-logo.svg';
// import Upload_icon from '../../assets/icons/upload.svg';
// import User_img from '../../assets/images/Mohan-muruge.jpg';

// function Header(props) {
//     const BacktoDefaultVideo = (event) => {
//         props.UpdateCurrentVideoId(props.defaultVideoId);
//     }

//     return (
//         <>
//             <div className="Header">
//                 <div className="Header__logo">
//                     <NavLink to={`/`} className="Header__logo--link">
//                         <img className= "Header__logo--img" src={BrainFlix_logo} alt="BrainFlix Logo" onClick={BacktoDefaultVideo} />
//                     </NavLink>
//                 </div>

//                 <div className="Header__navbar">
                    
//                     <input type="text" className="Header__search--input" placeholder="Search"/>
                    
//                     <NavLink to="/upload" id="upload__button" className="Header__upload--button">
//                             <img className="upload__section--icon" src={Upload_icon} alt="Upload Icon"/>
//                             <span className="upload__section--placeholder">UPLOAD</span>
//                     </NavLink>

//                     <div className="Header__profileimg">
//                         <img src={User_img} alt="User img" className="user__icon"/>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;