import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cetegory from "./pages/Cetegory/Cetegory";
function App() {
  return (
      <div className="min-h-screen max-w-[var(--max-width)] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cetegory" element={<Cetegory />} />
        </Routes>
      </div>
  );
}

export default App;