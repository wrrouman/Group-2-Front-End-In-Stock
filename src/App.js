import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Add" element={<Add_Warehouse />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
