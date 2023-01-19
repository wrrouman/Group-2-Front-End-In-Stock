import "./App.scss";
import "./styles/partials/_global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
    return (
        <>
        <Header/>



            <BrowserRouter>
                <Routes>
                    {/* return here to correct paths */}
                    <Route path="placeholder1" element={<Header />} />
                    <Route path="Add" git element={<Add_Warehouse />} />

                    {/* Howard's Component */}
                    <Route
                        path="/warehouse_details/:warehouseID"
                        element={
                            <Warehouse_Details
                                Warehouse_json={Warehouse_json}
                            />
                        }
                    />
                    <Route
                        path="/edit_warehouse/:warehouseID"
                        element={<Warehouse_Edit />}
                    />
                    <Route
                        path="/edit_inventoryitems/:inventoryID"
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
