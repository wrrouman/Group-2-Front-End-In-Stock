import './App.scss';
import './styles/partials/_global.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//import JSON files
import Inventory_json from "./server/data/inventories.json";
import Warehouse_json from "./server/data/warehouses.json";

//import components
import Warehouse_Details from './components/Warehouse_Details/Warehouse_Details.js';
import Warehouse_Edit from './components/Warehouse_Edit/Warehouse_Edit.js';
import Inventory_Delete from './components/Inventory_Delete/Inventory_Delete';

function App() {
    return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/warehouse_details/:warehouseID" element={<Warehouse_Details Warehouse_json={Warehouse_json}/>} />
            <Route path="/edit/:warehouseID" element={<Warehouse_Edit/>} />
            <Route path="/inventory_delete/:inventoryID" element={<Inventory_Delete/>}/>
          </Routes>
        </BrowserRouter>


      </>
    );
}

export default App;
