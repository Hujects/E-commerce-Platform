import { useState } from "react";
import Dashboard from "./dashboard/dashboard";
import AllProduct from "./dashboard/AllProduct";
import AddProduct from "./dashboard/AddProduct";
import Categories from "./dashboard/Categories";
import AllOrder from "./dashboard/AllOrder";
import PendingOrder from "./dashboard/PendingOrder";
import ProcessingOrder from "./dashboard/ProcessingOrder";
import ShippedOrder from "./dashboard/ShippedProduct";
import DeliveredOrders from "./dashboard/DeliveredOrders";
import CanceledOrders from "./dashboard/CanceledOrders";
import Customers from "./dashboard/Customers";
import Reviews from "./dashboard/Reviews";
import Discounts from "./dashboard/Discounts";
import MyStore from "./dashboard/MyStore";
import Setting from "./dashboard/Setting";
import Inventory from "./dashboard/Inventory";

export default function SellerDashboard() {
  const [MenuOpen, setMenuOpen] = useState([false, false]);
  const [CurrentContent, setCurrentContent] = useState("dashboard");

  return (
    <section className="w-full h-screen flex flex-col bg-[var(--cultured)]">
      {/* Header */}
      <header className="w-full h-[70px] shrink-0 bg-[var(--white)] border-b border-[var(--cultured)]">
        <div className="w-full h-full mx-auto flex items-center justify-between px-5">
          {/* Logo */}
          <div className="text-2xl font-bold text-[var(--primary)]">Anon</div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <button type="button">
              <i className="bi bi-bell text-xl cursor-pointer"></i>
            </button>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--white)]">
                <i className="bi bi-person"></i>
              </div>

              <div>
                <p className="text-sm font-medium">ShopEase Store</p>

                <p className="text-xs text-[var(--sonic-silver)]">Seller</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="w-full flex-1 flex gap-5 p-5 overflow-hidden">
        {/* Sidebar */}
        <div className="max-w-[230px] w-full shrink-0 flex flex-col justify-between bg-[var(--white)] rounded-lg p-4">
          <div className="flex flex-col gap-6">
            {/* Main */}
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--sonic-silver)] mb-3">
                Main
              </p>

              <nav className="space-y-1">
                {/* Dashboard */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("dashboard")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "dashboard"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-house-door"></i>
                  <span>Dashboard</span>
                </button>

                {/* Products */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen((prev) => [!prev[0], prev[1]]);
                      setCurrentContent("allproducts");
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                      [
                        "allproducts",
                        "addproduct",
                        "category",
                        "inventory",
                      ].includes(CurrentContent)
                        ? "bg-[var(--primary)] text-[var(--white)]"
                        : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                    } hover:cursor-pointer transition-colors text-sm`}
                  >
                    <span className="flex items-center gap-3">
                      <i className="bi bi-box-seam"></i>
                      <span>Products</span>
                    </span>

                    <i
                      className={`bi bi-chevron-down text-xs transition-transform duration-200 ${
                        MenuOpen[0] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>

                  {/* Products Submenu */}
                  {MenuOpen[0] && (
                    <div className="mt-1 ml-3 pl-6 border-l border-[var(--cultured)] space-y-1">
                      {/* All Products */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("allproducts")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "allproducts"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        All Products
                      </button>

                      {/* Add Product */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("addproduct")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "addproduct"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Add Product
                      </button>

                      {/* Categories */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("category")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "category"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Categories
                      </button>

                      {/* Inventory */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("inventory")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "inventory"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Inventory
                      </button>
                    </div>
                  )}
                </div>

                {/* Orders */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen((prev) => [prev[0], !prev[1]]);
                      setCurrentContent("allorder");
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                      [
                        "allorder",
                        "pendingorder",
                        "processingorder",
                        "shippedorder",
                        "deliveredorder",
                        "canceledorder",
                      ].includes(CurrentContent)
                        ? "bg-[var(--primary)] text-[var(--white)]"
                        : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                    } hover:cursor-pointer transition-colors text-sm`}
                  >
                    <span className="flex items-center gap-3">
                      <i className="bi bi-bag-check"></i>
                      <span>Orders</span>
                    </span>

                    <i
                      className={`bi bi-chevron-down text-xs transition-transform duration-200 ${
                        MenuOpen[1] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>

                  {/* Orders Submenu */}
                  {MenuOpen[1] && (
                    <div className="mt-1 ml-3 pl-6 border-l border-[var(--cultured)] space-y-1">
                      {/* All Orders */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("allorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "allorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        All Orders
                      </button>

                      {/* Pending */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("pendingorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "pendingorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Pending
                      </button>

                      {/* Processing */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("processingorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "processingorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Processing
                      </button>

                      {/* Shipped */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("shippedorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "shippedorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Shipped
                      </button>

                      {/* Delivered */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("deliveredorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "deliveredorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Delivered
                      </button>

                      {/* Canceled */}
                      <button
                        type="button"
                        onClick={() => setCurrentContent("canceledorder")}
                        className={`w-full text-left px-3 py-2 rounded-md text-xs ${
                          CurrentContent === "canceledorder"
                            ? "text-[var(--primary)] bg-[var(--primary)]/15"
                            : "text-[var(--davys-gray)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/15"
                        } hover:cursor-pointer transition-colors`}
                      >
                        Canceled
                      </button>
                    </div>
                  )}
                </div>

                {/* Customers */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("customers")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "customers"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-people"></i>
                  <span>Customers</span>
                </button>

                {/* Reviews */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("reviews")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "reviews"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-star"></i>
                  <span>Reviews</span>
                </button>

                {/* Discounts */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("discount")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "discount"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-tag"></i>
                  <span>Discounts</span>
                </button>
              </nav>
            </div>

            {/* Store */}
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--sonic-silver)] mb-3">
                Store
              </p>

              <nav className="space-y-1">
                {/* My Store */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("mystore")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "mystore"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-shop"></i>
                  <span>My Store</span>
                </button>

                {/* Settings */}
                <button
                  type="button"
                  onClick={() => setCurrentContent("setting")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[var(--onyx)] ${
                    CurrentContent === "setting"
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--white)]"
                  } hover:cursor-pointer transition-colors text-sm`}
                >
                  <i className="bi bi-gear"></i>
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Logout */}
          <div className="pt-4 border-t border-[var(--cultured)]">
            <button
              type="button"
              onClick={() => setCurrentContent("logout")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-red-500 hover:bg-red-50 hover:cursor-pointer transition-colors text-sm"
            >
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Dashboard content */}
        {CurrentContent === "dashboard" && <Dashboard />}
        {CurrentContent === "allproducts" && <AllProduct />}
        {CurrentContent === "addproduct" && <AddProduct />}
        {CurrentContent === "category" && <Categories />}
        {CurrentContent === "inventory" && <Inventory />}
        {CurrentContent === "allorder" && <AllOrder />}
        {CurrentContent === "pendingorder" && <PendingOrder />}
        {CurrentContent === "processingorder" && <ProcessingOrder />}
        {CurrentContent === "shippedorder" && <ShippedOrder />}
        {CurrentContent === "deliveredorder" && <DeliveredOrders />}
        {CurrentContent === "canceledorder" && <CanceledOrders />}
        {CurrentContent === "customers" && <Customers />}
        {CurrentContent === "reviews" && <Reviews />}
        {CurrentContent === "discount" && <Discounts />}
        {CurrentContent === "mystore" && <MyStore />}
        {CurrentContent === "setting" && <Setting />}
      </main>
    </section>
  );
}
