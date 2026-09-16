import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cetegory from "./pages/Cetegory/Cetegory";
import Product from "./pages/Product/Product";
import Login from "./pages/Login Signup ResetPassword/Login";
import Signup from "./pages/Login Signup ResetPassword/Signup";
import ResetPassword from "./pages/Login Signup ResetPassword/ResetPassword/ResetPassword";
import CheckEmail from "./pages/Login Signup ResetPassword/ResetPassword/CheckEmail";
import ResetSuccess from "./pages/Login Signup ResetPassword/ResetPassword/ResetSuccese";
import SetNewPassword from "./pages/Login Signup ResetPassword/ResetPassword/SetNewPassword";
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
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
      </Routes>
    </div>
  );
}

export default App;
