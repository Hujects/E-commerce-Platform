import Header from "../../components/header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const cartItems = [
  {
    id: 1,
    image: "/jacket-1.jpg",
    category: "JACKET",
    name: "Mens Winter Leathers Jackets",
    color: "Olive Green",
    size: "L",
    price: 48.0,
    quantity: 1,
  },
  {
    id: 2,
    image: "/jacket-2.jpg",
    category: "JACKET",
    name: "Mens Winter Leathers Jackets",
    color: "Brown",
    size: "M",
    price: 48.0,
    quantity: 1,
  },
  {
    id: 3,
    image: "/jacket-3.jpg",
    category: "JACKET",
    name: "Mens Winter Leathers Jackets",
    color: "Dark Gray",
    size: "XL",
    price: 48.0,
    quantity: 1,
  },
  {
    id: 4,
    image: "/jacket-5.jpg",
    category: "JACKET",
    name: "Mens Winter Leathers Jackets",
    color: "Black",
    size: "L",
    price: 48.0,
    quantity: 1,
  },
];
export default function ViewCart() {
  const [Cart, setCart] = useState(cartItems);
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <Header />

      <main className="w-full max-w-[var(--max-width)] py-5">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-3 mb-5 text-[length:var(--fs-7)] text-[var(--sonic-silver)] pb-[10px]">
          <a href="#" className="hover:text-[var(--primary)] transition-colors">
            Home
          </a>

          <span>›</span>

          <span className="text-[var(--primary)] font-medium">Cart</span>
        </div>

        {/* PAGE TITLE */}
        <div className="mb-5">
          <h1 className="text-2xl font-[var(--weight-700)] text-[var(--eerie-black)]">
            My Cart{" "}
            <span className="text-lg font-[var(--weight-600)]">(4 Items)</span>
          </h1>
        </div>

        {/* CART + SUMMARY */}
        <div className="grid grid-cols-[1fr_350px] gap-7 items-start">
          {/* CART TABLE */}
          <div>
            <div className="border border-[var(--cultured)] rounded-[var(--border-radius-medium)]">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[70px_1fr_140px_150px_100px] items-center h-[56px] border-b border-[var(--cultured)] text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                <div></div>

                <div>Product</div>

                <div>Price</div>

                <div>Quantity</div>

                <div>Total</div>
              </div>

              {/* CART ITEMS */}
              {Cart.length > 0 ? (
                Cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[70px_1fr_140px_150px_100px] items-center min-h-[126px] border-b border-[var(--cultured)] last:border-b-0"
                  >
                    {/* CHECKBOX */}
                    <div className="flex justify-center">
                      <label className="cursor-pointer group">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="hidden peer"
                        />

                        <span className=" w-5 h-5 rounded-[4px] border border-[var(--cultured)] flex items-center justify-center text-[var(--white)] transition-all peer-checked:bg-[var(--primary)] peer-checked:border-[var(--primary)]">
                          <i className="bi bi-check text-sm"></i>
                        </span>
                      </label>
                    </div>
                    {/* PRODUCT */}
                    <div className="flex items-center gap-5">
                      <div className="w-[108px] h-[100px] rounded-lg bg-[var(--cultured)] overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] text-[var(--primary)] font-[var(--weight-600)]">
                          {item.category}
                        </span>

                        <h3 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                          {item.name}
                        </h3>

                        <p className="text-xs text-[var(--sonic-silver)]">
                          Color:{" "}
                          <span className="text-[var(--onyx)]">
                            {item.color}
                          </span>
                        </p>

                        <p className="text-xs text-[var(--sonic-silver)]">
                          Size:{" "}
                          <span className="text-[var(--onyx)]">
                            {item.size}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="text-sm font-[var(--weight-500)] text-[var(--eerie-black)]">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* QUANTITY */}
                    <div>
                      <div className="w-[105px] h-[40px] border border-[var(--cultured)] rounded-lg flex items-center justify-between px-3">
                        <button className="text-[var(--sonic-silver)] hover:text-[var(--primary)] cursor-pointer">
                          −
                        </button>

                        <span className="text-sm">{item.quantity}</span>

                        <button className="text-[var(--sonic-silver)] hover:text-[var(--primary)] cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-10 text-center text-[var(--sonic-silver)]">
                  Your cart is empty.
                </div>
              )}
            </div>

            {/* CART ACTIONS */}
            <div className="flex items-center justify-between mt-5">
              <Link
                to="/"
                className="h-[45px] px-6 border border-[var(--primary)] rounded-lg text-sm text-[var(--primary)] flex items-center gap-3 hover:bg-[var(--primary)] hover:text-[var(--white)] transition-all cursor-pointer"
              >
                <i className="bi bi-arrow-left"></i>
                Continue Shopping
              </Link>

              <button
                onClick={() => {
                  setCart([]);
                }}
                className="h-[45px] px-6 bg-[#fff1f1] border border-[#ffd5d5] rounded-lg text-sm text-[var(--primary)] flex items-center gap-3 hover:bg-[var(--primary)] hover:text-[var(--white)] transition-all cursor-pointer"
              >
                <i className="bi bi-trash3"></i>
                Clear Cart
              </button>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="border border-[var(--cultured)] rounded-[var(--border-radius-medium)] overflow-hidden">
            <div className="p-5">
              <h2 className="text-xl font-[var(--weight-700)] text-[var(--eerie-black)] mb-6">
                Order Summary
              </h2>

              {/* SUBTOTAL */}
              <div className="flex items-center justify-between mb-5 text-sm">
                <span className="text-[var(--sonic-silver)]">
                  Subtotal (4 items)
                </span>

                <span className="text-[var(--onyx)]">$192.00</span>
              </div>

              {/* DISCOUNT */}
              <div className="flex items-center justify-between mb-5 text-sm">
                <span className="text-[var(--sonic-silver)]">Discount</span>

                <span className="text-[#20a968]">-$19.20</span>
              </div>

              <div className="border-t border-[var(--cultured)] pt-5">
                {/* TOTAL */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-[var(--weight-700)] text-[var(--eerie-black)]">
                    Total
                  </span>

                  <span className="text-2xl font-[var(--weight-700)] text-[var(--primary)]">
                    $172.80
                  </span>
                </div>

                <p className="text-xs text-[var(--sonic-silver)] mb-6">
                  <i className="bi bi-tag mr-2"></i>
                  You saved{" "}
                  <span className="text-[#20a968] font-medium">$19.20</span> on
                  this order
                </p>

                {/* CHECKOUT */}
                <button className="w-full h-[45px] bg-[var(--primary)] text-[var(--white)] rounded-lg text-sm font-[var(--weight-600)] flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer">
                  Proceed to Checkout
                  <i className="bi bi-arrow-right"></i>
                </button>

                {/* ANON PAY */}
                <button className="w-full h-[45px] mt-3 border border-[var(--primary)] text-[var(--eerie-black)] rounded-lg text-sm font-[var(--weight-600)] flex items-center justify-center gap-2 hover:bg-[#fff5f5] transition-all cursor-pointer">
                  Checkout with
                  <span className="text-[var(--primary)]">
                    <i className="bi bi-bag-heart"></i> Anon Pay
                  </span>
                </button>
              </div>
            </div>

            {/* SERVICE INFO */}
            <div className="border-t border-[var(--cultured)] p-5 flex flex-col gap-5">
              {/* SECURE CHECKOUT */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#fff4f4] flex items-center justify-center text-[var(--primary)] text-xl">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                    Secure Checkout
                  </h4>

                  <p className="text-xs text-[var(--sonic-silver)] mt-1">
                    100% protected payment
                  </p>
                </div>
              </div>

              {/* EASY RETURNS */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#fff4f4] flex items-center justify-center text-[var(--primary)] text-xl">
                  <i className="bi bi-arrow-counterclockwise"></i>
                </div>

                <div>
                  <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                    Easy Returns
                  </h4>

                  <p className="text-xs text-[var(--sonic-silver)] mt-1">
                    30-day return policy
                  </p>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#fff4f4] flex items-center justify-center text-[var(--primary)] text-xl">
                  <i className="bi bi-headset"></i>
                </div>

                <div>
                  <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                    24/7 Support
                  </h4>

                  <p className="text-xs text-[var(--sonic-silver)] mt-1">
                    We're here to help
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="w-full mt-8 px-8 py-6 bg-[#fff7f7] rounded-xl grid grid-cols-4 gap-8">
          {/* FREE SHIPPING */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center text-[var(--primary)] text-2xl">
              <i className="bi bi-truck"></i>
            </div>

            <div>
              <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                Free Shipping
              </h4>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                On orders over $50
              </p>
            </div>
          </div>

          {/* RETURNS */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center text-[var(--primary)] text-2xl">
              <i className="bi bi-arrow-counterclockwise"></i>
            </div>

            <div>
              <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                30 Days Returns
              </h4>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                Hassle free returns
              </p>
            </div>
          </div>

          {/* SECURE PAYMENT */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center text-[var(--primary)] text-2xl">
              <i className="bi bi-bag-check"></i>
            </div>

            <div>
              <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                Secure Payment
              </h4>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                100% secure payment
              </p>
            </div>
          </div>

          {/* BEST QUALITY */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center text-[var(--primary)] text-2xl">
              <i className="bi bi-award"></i>
            </div>

            <div>
              <h4 className="text-sm font-[var(--weight-600)] text-[var(--eerie-black)]">
                Best Quality
              </h4>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                Premium products only
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
