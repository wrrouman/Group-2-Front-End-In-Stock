import "./App.scss";
import "./styles/partials/_global.scss";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header/Header.js";
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Footer from "./components/footer/Footer";
import Warehouse_List from "./components/Warehouse_List/Warehouse_List";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* return here to correct paths */}
                    <Route path="Add" git element={<Add_Warehouse />} />
                </Routes>
                <Header />
                <Warehouse_List />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
