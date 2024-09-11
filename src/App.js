import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Brochure from "./Pages/Brochure";
import Parking from "./Pages/Parking";
import Navigate from "./Pages/Navigate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="Parking" element={<Parking />} />
            <Route path="Brochure" element={<Brochure />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
