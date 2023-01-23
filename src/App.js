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



//Will's Added components
import Delete_Warehouse from "./components/Delete_Warehouse/Delete_Warehouse";
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Inventory_Add from "./components/Inventory_Add/Inventory_Add";

//import components
import Header from "./components/Header/Header.js";
// import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Footer from "./components/footer/Footer";
import Warehouse_List from "./components/Warehouse_List/Warehouse_List";
import Warehouse_List_Sortbar from "./components/Warehouse_List_Sortbar/Warehouse_List_Sortbar";
import Inventory_Item_Details from "./components/Inventory_Item_Details/Inventory_Item_Details";
import Inventory_List_Add_New_Inventory from "./components/Inventory_List_Add_New_Inventory/Inventory_List_Add_New_Inventory";

function App() {
    const [RequiredReLoading, setRequiredReLoading] = useState(true);

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
                    setRequiredReLoading(false);
                });
        }
        if (RequiredReLoading === true) {
            GetAllWarehousesInfo();
        }
    }, [AllWarehousesInfo, RequiredReLoading]);

    // useEffect - GetAllInventoriesInfo
    useEffect(() => {
        function GetAllInventoriesInfo() {
            return axios
                .get(`http://localhost:8080/inventories`)
                .then((element) => {
                    let inventories_info = element.data;
                    setAllInventoriesInfo(inventories_info);
                    setRequiredReLoading(false);
                });
        }
        if (RequiredReLoading === true) {
            GetAllInventoriesInfo();
        }
    }, [AllInventoriesInfo]);

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

                    {/* Will's Components */}
                    <Route path ="/delete_warehouse/:warehouseID"
                        element={<Delete_Warehouse/>}/>

                   <Route path="add_warehouse" element={<Add_Warehouse/>}/>

                   <Route path="add_inventoryitem" element={<Inventory_Add />}/>


                    <Route
                        path="/warehouse_details/:warehouseID"
                        element={
                            <Warehouse_Details
                                AllInventoriesInfo={AllInventoriesInfo}
                                AllWarehousesInfo={AllWarehousesInfo}
                            />
                        }
                    />
                    <Route
                        path="/edit_warehouse/:warehouseID"
                        element={<Warehouse_Edit />}
                    />

                    {/* Edit Inventory Item */}
                    <Route
                        path="/edit_inventoryitems/:warehouseID/:inventoryID"
                        element={<Inventory_Edit />}
                    />

                    {/* Inventory Details  */}
                    <Route 
                        path="/inventories/:warehouseID/:inventoryID" 
                        element={
                            <Inventory_Item_Details
                                AllWarehousesInfo={AllWarehousesInfo}
                                AllInventoriesInfo={AllInventoriesInfo}
                            />
                        }
                    />

                    <Route 
                        path="Inventory_List_Add_New_Inventory"
                        element={<Inventory_List_Add_New_Inventory />}
                    />

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
