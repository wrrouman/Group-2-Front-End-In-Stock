import "./App.scss";
import "./styles/partials/_global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//import JSON files
import Inventory_json from "./server/data/inventories.json";
import Warehouse_json from "./server/data/warehouses.json";

//import components
import Warehouse_Details from "./components/Warehouse_Details/Warehouse_Details.js";
import Warehouse_Edit from "./components/Warehouse_Edit/Warehouse_Edit.js";
import Inventory_Delete from "./components/Inventory_Delete/Inventory_Delete";
import Inventory_Edit from "./components/Inventory_Edit/Inventory_Edit";

//import components
import Header from "./components/Header/Header.js";
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Footer from "./components/footer/Footer";
import Warehouse_List from "./components/Warehouse_List/Warehouse_List";
import Warehouse_List_Sortbar from "./components/Warehouse_List_Sortbar/Warehouse_List_Sortbar";
import Inventory_Item_Details from "./components/Inventory_Item_Details/Inventory_Item_Details";
import Inventory_List_Add_New_Inventory from "./components/Inventory_List_Add_New_Inventory/Inventory_List_Add_New_Inventory";

function App() {
    const [RequiredVideoLoading, setRequiredVideoLoading] = useState(true);

    // useState - All Warehouses Info
    const [AllWarehousesInfo, setAllWarehousesInfo] = useState([]);

    // useState - All Inventory Info
    const [AllInventoriesInfo, setAllInventoriesInfo] = useState([]);

    // useState - currentWarehouse
    const [CurrentWarehouseId, setCurrentWarehouseId] = useState("000");

    // useEffect - GetAllWarehousesInfo
    useEffect(() => {
        function GetAllWarehousesInfo() {
            return axios
                .get(`http://localhost:8080/warehouses`)
                .then((element) => {
                    let warehouses_info = element.data;
                    setAllWarehousesInfo(warehouses_info);
                    setRequiredVideoLoading(false);
                });
        }
        if (RequiredVideoLoading === true) {
            GetAllWarehousesInfo();
        }
    }, [AllWarehousesInfo, RequiredVideoLoading]);

    // useEffect - GetAllInventoriesInfo
    useEffect(() => {
        function GetAllInventoriesInfo() {
            return axios
                .get(`http://localhost:8080/inventories`)
                .then((element) => {
                    let inventories_info = element.data;
                    setAllInventoriesInfo(inventories_info);
                    setRequiredVideoLoading(false);
                });
        }
        if (RequiredVideoLoading === true) {
            GetAllInventoriesInfo();
        }
    }, [AllInventoriesInfo]);

    function UpdateCurrentWarehouseId(UpdateWarehouseId) {
        setCurrentWarehouseId(UpdateWarehouseId);
        console.log(CurrentWarehouseId);
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* return here to correct paths */}
                    {/* <Route path="placeholder1" element={<Header />} />
                    <Route path="Add" element={<Add_Warehouse />} /> */}
                    
                    <Route
                        path="/"
                        element={
                            <Warehouse_List
                                AllWarehousesInfo={AllWarehousesInfo}
                            />
                        }
                    />

                    {/* Howard's Component */}
                    <Route
                        path="/warehouse_details/:warehouseID"
                        element={
                            <Warehouse_Details
                                AllInventoriesInfo={AllInventoriesInfo}
                                AllWarehousesInfo={AllWarehousesInfo}
                                UpdateCurrentWarehouseId={
                                    UpdateCurrentWarehouseId
                                }
                            />
                        }
                    />
                    <Route
                        path="/edit_warehouse/:warehouseID"
                        element={<Warehouse_Edit />}
                    />
                    <Route 
                        path="/inventories/:warehouseID/:inventoryID" 
                        element={<Inventory_Item_Details/>}
                    />
                    <Route
                        path="/edit_inventoryitems/:warehouseID/:inventoryID"
                        element={<Inventory_Edit />}
                    />
                    {/* End of Howard's Component */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
