import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cetegory from "./pages/Cetegory/Cetegory";
import Product from "./pages/Product/Product";
function App() {
  return (
    <div className="min-h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cetegory" element={<Cetegory />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
