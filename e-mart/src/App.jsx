import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cetegory from "./pages/Cetegory/Cetegory";
import Product from "./pages/Product/Product";
import Login from "./pages/Login Signup ResetPassword/Login";
import Signup from "./pages/Login Signup ResetPassword/Signup";
function App() {
  return (
    <div className="min-h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cetegory" element={<Cetegory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cetegory" element={<Cetegory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
