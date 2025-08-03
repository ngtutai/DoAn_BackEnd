import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// ========== Link Web User ========== //
import Home from "./users/pages/Home";
import Product from "./users/pages/Product";
import Cart from "./users/pages/Cart";
import Login from "./users/auth/Login";
// ========== Link Web Admin ========== //
// ========== Link Lỗi Error ========== //

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ========== Link Web User ========== */}
          <Route path="" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          {/* ========== Link Web Admin ========== */}
          {/* ========== Link Error ========== */}
        </Routes>
      </Router>

      {/* 🔔 Toast Thông báo */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        pauseOnHover
        closeOnClick
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
