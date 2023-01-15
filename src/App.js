import "./App.scss";
// import './styles/global.scss';
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
// import Footer from "./components/footer/Footer";
import Delete_Warehouse from "./components/Delete_Warehouse/Delete_Warehouse";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Add" element={<Add_Warehouse />} />
          <Route path="Delete_Warehouse/:warehouseID" element={<Delete_Warehouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
