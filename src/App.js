import "./App.scss";
import "./styles/partials/_global.scss";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
// import Footer from "./components/footer/Footer";
import Delete_Warehouse from "./components/Delete_Warehouse/Delete_Warehouse";
import Inventory_Add from "./components/Inventory_Add/Inventory_Add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Add" element={<Add_Warehouse />} />
          <Route
            path="delete_Warehouse/:warehouseID"
            element={<Delete_Warehouse />}
          />
          <Route path="add_inventoryitems" element={<Inventory_Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
