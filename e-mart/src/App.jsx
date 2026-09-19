import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cetegory from "./pages/Cetegory/Cetegory";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="min-h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/cetegory" element={<Cetegory />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
