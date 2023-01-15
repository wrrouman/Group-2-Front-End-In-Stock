import "./App.scss";
import "./styles/partials/_global.scss";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header/Header.js";
import Add_Warehouse from "./components/Add_Warehouse/Add_Warhouse";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* return here to correct paths */}
                    <Route path="placeholder1" element={<Header />} />
                    <Route path="Add" git element={<Add_Warehouse />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
