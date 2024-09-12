import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Parking from "./Pages/Parking";
import Navigate from "./Pages/Navigate";
import Brochure1 from "./Pages/Brochure1";
import Brochure2 from "./Pages/Brochure2";
import Brochure3 from "./Pages/Brochure3";
import Brochure4 from "./Pages/Brochure4";
import Brochure5 from "./Pages/Brochure5";
import Brochure6 from "./Pages/Brochure6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="Parking" element={<Parking />} />
            <Route path="Brochure1" element={<Brochure1 />} />
            <Route path="Brochure2" element={<Brochure2 />} />
            <Route path="Brochure3" element={<Brochure3 />} />
            <Route path="Brochure4" element={<Brochure4 />} />
            <Route path="Brochure5" element={<Brochure5 />} />
            <Route path="Brochure6" element={<Brochure6 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
