import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import WhatDo from "./Components/WhatDo";
import HomeData from "./Components/HomeData";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
        <Routes>
          <Route path="/" element={<HomeData />} />

          <Route path="/Portfolio" element={<Portfolio />} />

          <Route path="/WhatIDo" element={<WhatDo />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
