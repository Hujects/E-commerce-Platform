import { useState } from "react";
import Header from "../../components/header/Header";
import TitleCetegoryPriceCard from "../../components/UIKIT/TitleCetegoryPriceCard";
import MainProductCard from "../../components/UIKIT/MainProductCard";
export default function Cetegory() {
  let [IsSidebarMenuOpen, setIsSidebarMenuOpen] = useState(Array(6).fill(true));
  let [IfGridView, setIfGridView] = useState(false);
  const toggleSidebarMenu = (index) => {
    setIsSidebarMenuOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : item)),
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <Header />

      <main className="w-full max-w-[var(--max-width)] py-5">
        {/* Breadcrumb */}
        <div className="w-full flex items-center gap-2 mb-7 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
          <a href="#" className="hover:text-[var(--primary)]">
            Home
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Categories
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Men
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Clothing
          </a>

          <span>›</span>

          <span className="text-[var(--primary)] font-medium">Jackets</span>
        </div>

        {/* Category Header */}
        <div className="w-full flex items-end justify-between mb-3">
          {/* heading */}
          <div>
            <h1 className="text-[length:var(--fs-1)] text-[var(--eerie-black)] font-[var(--weight-700)]">
              Jackets
            </h1>
          </div>
          {/* Sort + View Buttons */}
          <div className="flex items-center gap-3">
            {/* Sort Section */}
            <div className="relative w-[230px]">
              <select
                className="w-full h-[44px] px-4 pr-10 border border-[var(--cultured)] rounded-[var(--border-radius-small)] bg-[var(--white)] text-[length:var(--fs-8)] text-[var(--davys-gray)] font-[var(--weight-600)] outline-none cursor-pointer hover:border-[var(--primary)] focus:border-[var(--primary)] transition-all duration-[var(--transition-timing)]"
                defaultValue="popularity"
              >
                <option value="popularity">Sort by: Popularity</option>
                <option value="latest">Sort by: Latest</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Sort by: Rating</option>
              </select>
            </div>
            {/* view Button */}
            <div className="flex items-center border border-[var(--cultured)] rounded-[var(--border-radius-small)] overflow-hidden">
              <button
                onClick={() => {
                  setIfGridView(true);
                }}
                className={`w-[48px] h-[42px] flex items-center justify-center ${IfGridView ? "text-[var(--primary)] bg-[#fffafa]" : "text-[var(--sonic-silver)] hover:text-[var(--primary)]"} border-r border-[var(--cultured)] cursor-pointer`}
              >
                <i className="bi bi-grid text-[18px]"></i>
              </button>

              <button
                onClick={() => {
                  setIfGridView(false);
                }}
                className={`w-[48px] h-[42px] flex items-center justify-center ${!IfGridView ? "text-[var(--primary)] bg-[#fffafa]" : "text-[var(--sonic-silver)] hover:text-[var(--primary)]"} cursor-pointer`}
              >
                <i className="bi bi-list text-[20px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Main Section */}

        <div className="w-full flex gap-8">
          {/* ================= Left Sidebar ================= */}

          <aside className="w-[250px] shrink-0 border border-[var(--cultured)] rounded-[var(--border-radius-medium)] p-5 h-fit">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--cultured)]">
              <h2 className="text-[length:var(--fs-5)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                Filters
              </h2>

              <button className="text-[length:var(--fs-9)] text-[var(--primary)] font-[var(--weight-600)] hover:underline cursor-pointer">
                Reset All
              </button>
            </div>

            {/* Sidebar Category */}

            <div
              onClick={() => {
                toggleSidebarMenu(0);
              }}
              className="py-3 border-b border-[var(--cultured)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Category
                </h3>

                <i className="bi bi-chevron-up text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[0] ? "flex" : "hidden"} flex-col gap-3`}
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[var(--primary)]"
                  />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    All Jackets (84)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--primary)]" />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    Leather Jackets (24)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--primary)]" />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    Winter Jackets (32)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--primary)]" />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    Bomber Jackets (18)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--primary)]" />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    Denim Jackets (10)
                  </span>
                </label>
              </div>
            </div>

            {/* Sidebar Price Range */}

            <div
              onClick={() => {
                toggleSidebarMenu(1);
              }}
              className="py-3 border-b border-[var(--cultured)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Price Range
                </h3>

                <i className="bi bi-chevron-down text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[1] ? "flex" : "hidden"} w-full flex items-center gap-2`}
              >
                <div className="w-1/2 h-[36px] flex items-center gap-2 px-3 border border-[var(--cultured)] rounded-[var(--border-radius-small)]">
                  <label className="text-[length:var(--fs-9)] text-[var(--sonic-silver)]">
                    $
                  </label>
                  <input
                    className="w-full text-[length:var(--fs-9)] text-[var(--sonic-silver)]"
                    type="number"
                    value={20}
                  />
                </div>

                <span className="text-[length:var(--fs-9)] text-[var(--sonic-silver)]">
                  to
                </span>

                <div className="w-1/2 h-[36px] flex items-center gap-2 px-3 border border-[var(--cultured)] rounded-[var(--border-radius-small)]">
                  <label className="text-[length:var(--fs-9)] text-[var(--sonic-silver)]">
                    $
                  </label>

                  <input
                    className="w-full text-[length:var(--fs-9)] text-[var(--sonic-silver)]"
                    type="number"
                    value={100}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Size */}

            <div
              onClick={() => {
                toggleSidebarMenu(2);
              }}
              className="py-3 border-b border-[var(--cultured)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Size
                </h3>

                <i className="bi bi-chevron-down text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[2] ? "flex" : "hidden"} flex-col gap-3`}
              >
                {["S (12)", "M (28)", "L (30)", "XL (10)", "XXL (4)"].map(
                  (size) => (
                    <label
                      key={size}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--primary)]"
                      />

                      <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                        {size}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Sidebar Color */}

            <div
              onClick={() => {
                toggleSidebarMenu(3);
              }}
              className="py-3 border-b border-[var(--cultured)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Color
                </h3>

                <i className="bi bi-chevron-up text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[3] ? "flex" : "hidden"} items-center gap-2`}
              >
                <button className="w-6 h-6 rounded-full bg-black ring-2 ring-offset-2 ring-transparent hover:ring-[var(--primary)] cursor-pointer"></button>

                <button className="w-6 h-6 rounded-full bg-[#444] ring-2 ring-offset-2 ring-transparent hover:ring-[var(--primary)] cursor-pointer"></button>

                <button className="w-6 h-6 rounded-full bg-[#7a4d32] ring-2 ring-offset-2 ring-transparent hover:ring-[var(--primary)] cursor-pointer"></button>

                <button className="w-6 h-6 rounded-full bg-[#263d66] ring-2 ring-offset-2 ring-transparent hover:ring-[var(--primary)] cursor-pointer"></button>

                <button className="w-6 h-6 rounded-full bg-[#737329] ring-2 ring-offset-2 ring-transparent hover:ring-[var(--primary)] cursor-pointer"></button>

                <button className="w-7 h-7 rounded-full border border-[var(--cultured)] flex items-center justify-center text-[var(--sonic-silver)] hover:text-[var(--primary)] cursor-pointer">
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

            {/* Sidebar Brand */}

            <div
              onClick={() => {
                toggleSidebarMenu(4);
              }}
              className="py-3 border-b border-[var(--cultured)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Brand
                </h3>

                <i className="bi bi-chevron-up text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[4] ? "flex" : "hidden"} flex-col gap-3`}
              >
                {[
                  "Anon (32)",
                  "Zara (12)",
                  "H&M (10)",
                  "Jack & Jones (8)",
                  "Levi's (6)",
                ].map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-[var(--primary)]"
                    />

                    <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                      {brand}
                    </span>
                  </label>
                ))}
                <button className="mt-4 text-[length:var(--fs-8)] text-[var(--davys-gray)] hover:text-[var(--primary)] cursor-pointer">
                  + Show More
                </button>
              </div>
            </div>

            {/* Sidebar Rating */}

            <div
              onClick={() => {
                toggleSidebarMenu(5);
              }}
              className="pt-3"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                  Rating
                </h3>

                <i className="bi bi-chevron-down text-[var(--sonic-silver)] text-[12px]"></i>
              </div>

              <div
                className={`${IsSidebarMenuOpen[5] ? "flex" : "hidden"} flex-col gap-3`}
              >
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-[var(--primary)]"
                    />

                    <div className="flex items-center gap-[2px] text-[var(--sandy-brown)]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={
                            star <= rating
                              ? "bi bi-star-fill"
                              : "bi bi-star text-[var(--sonic-silver)]"
                          }
                        ></i>
                      ))}
                    </div>

                    <span className="text-[length:var(--fs-9)] text-[var(--davys-gray)]">
                      & Up
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>
          {/* ================= Product Section ================= */}
          <section className="flex-1">
            <div
              className={`${!IfGridView ? "grid" : "hidden"} grid-cols-2 gap-5`}
            >
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
              <TitleCetegoryPriceCard />
            </div>
            <div
              className={`${IfGridView ? "grid" : "hidden"} grid-cols-3 gap-5`}
            >
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
