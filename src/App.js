import './App.scss';
import './styles/partials/_global.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
import Warehouse_Details from './components/Warehouse_Details/Warehouse_Details.js';
import Warehouse_Edit from './components/Warehouse_Edit/Warehouse_Edit.js';

function App() {
    return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Warehouse_Details/>} />
            <Route path="edit" element={<Warehouse_Edit/>} />
          </Routes>
        </BrowserRouter>


      </>
    );
}

export default App;
