import { useEffect, useState } from "react";

const Products1 = [
  {
    id: 1,
    name: "Nike Air Max 270",
    sku: "PRD001",
    category: "Footwear",
    price: 120,
    stock: 25,
    image: "/jewellery-1.jpg",
  },
  {
    id: 2,
    name: "Men's Hoodie",
    sku: "PRD002",
    category: "Clothing",
    price: 45,
    stock: 5,
    image: "/jewellery-1.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    sku: "PRD003",
    category: "Electronics",
    price: 85,
    stock: 0,
    image: "/jewellery-1.jpg",
  },
  {
    id: 4,
    name: "Travel Backpack",
    sku: "PRD004",
    category: "Bags",
    price: 60,
    stock: 8,
    image: "/jewellery-1.jpg",
  },
  {
    id: 5,
    name: "Sunglasses",
    sku: "PRD005",
    category: "Accessories",
    price: 30,
    stock: 15,
    image: "/jewellery-1.jpg",
  },
  {
    id: 6,
    name: "Digital Camera",
    sku: "PRD006",
    category: "Electronics",
    price: 250,
    stock: 6,
    image: "/jewellery-1.jpg",
  },
  {
    id: 7,
    name: "Water Bottle",
    sku: "PRD007",
    category: "Home & Living",
    price: 18,
    stock: 0,
    image: "/jewellery-1.jpg",
  },
  {
    id: 8,
    name: "Baseball Cap",
    sku: "PRD008",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 9,
    name: "Baseball Cap",
    sku: "PRD009",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 10,
    name: "Baseball Cap",
    sku: "PRD010",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 11,
    name: "Baseball Cap",
    sku: "PRD011",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 12,
    name: "Baseball Cap",
    sku: "PRD012",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 13,
    name: "Baseball Cap",
    sku: "PRD013",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 14,
    name: "Baseball Cap",
    sku: "PRD014",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 15,
    name: "Baseball Cap",
    sku: "PRD015",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 16,
    name: "Baseball Cap",
    sku: "PRD016",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 17,
    name: "Baseball Cap",
    sku: "PRD017",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 18,
    name: "Baseball Cap",
    sku: "PRD018",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 19,
    name: "Baseball Cap",
    sku: "PRD019",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 20,
    name: "Baseball Cap",
    sku: "PRD020",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 21,
    name: "Baseball Cap",
    sku: "PRD021",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 22,
    name: "Baseball Cap",
    sku: "PRD022",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 23,
    name: "Baseball Cap",
    sku: "PRD023",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 24,
    name: "Baseball Cap",
    sku: "PRD024",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
  {
    id: 25,
    name: "Baseball Cap",
    sku: "PRD025",
    category: "Accessories",
    price: 22,
    stock: 18,
    image: "/jewellery-1.jpg",
  },
];

export default function Inventory() {
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("All Categories");
  const [StockStatus, setStockStatus] = useState("All Stock Status");
  const [Products, setProducts] = useState(Products1);
  const [Sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return "Out of Stock";
    }

    if (stock <= 8) {
      return "Low Stock";
    }

    return "In Stock";
  };

  const FilteredProducts = Products.filter((product) => {
    const searchValue = Search.toLowerCase();

    const matchSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.sku.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    const matchCategory =
      Category === "All Categories" || product.category === Category;

    const matchStockStatus =
      StockStatus === "All Stock Status" ||
      getStockStatus(product.stock) === StockStatus;

    return matchSearch && matchCategory && matchStockStatus;
  }).sort((a, b) => {
    if (Sort === "newest") return b.id - a.id;
    if (Sort === "oldest") return a.id - b.id;
    if (Sort === "name-asc") return a.Pname.localeCompare(b.Pname);
    if (Sort === "name-desc") return b.Pname.localeCompare(a.Pname);
    if (Sort === "price-asc") return a.price - b.price;
    if (Sort === "price-desc") return b.price - a.price;
    if (Sort === "stock-asc") return a.stock - b.stock;
    if (Sort === "stock-desc") return b.stock - a.stock;

    return 0;
  });

  //  Pagination

  const totalPages = Math.ceil(FilteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = FilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const showingFrom =
    FilteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1;

  const showingTo = Math.min(indexOfLastProduct, FilteredProducts.length);

  // Summary Counts
  const TotalProducts = Products.length;

  const InStock = Products.filter((product) => product.stock > 8).length;

  const LowStock = Products.filter(
    (product) => product.stock > 0 && product.stock <= 8,
  ).length;

  const OutOfStock = Products.filter((product) => product.stock === 0).length;

  // update stock handler
  const handleUpdateStock = (id) => {
    console.log("Update Stock:", id);
  };

  return (
    <section className="w-full h-full min-h-0 flex flex-col overflow-hidden">
      {/* PAGE HEADER */}
      <div className="shrink-0 flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
            Inventory
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage your product stock and availability.
          </p>
        </div>
      </div>
      {/* INVENTORY SUMMARY */}
      <div className="shrink-0 grid grid-cols-4 gap-4 mb-5">
        {/* Total Products */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <i className="bi bi-box text-xl text-green-500"></i>
            </div>

            <div>
              <p className="text-sm text-[var(--sonic-silver)]">
                Total Products
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-1">
                {TotalProducts}
              </h2>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                In your store
              </p>
            </div>
          </div>
        </div>
        {/* In Stock */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <i className="bi bi-box-seam text-xl text-blue-500"></i>
            </div>

            <div>
              <p className="text-sm text-[var(--sonic-silver)]">In Stock</p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-1">
                {InStock}
              </h2>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                Available for sale
              </p>
            </div>
          </div>
        </div>
        {/* Low Stock */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
              <i className="bi bi-exclamation-triangle text-xl text-orange-500"></i>
            </div>

            <div>
              <p className="text-sm text-[var(--sonic-silver)]">Low Stock</p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-1">
                {LowStock}
              </h2>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                Need attention
              </p>
            </div>
          </div>
        </div>
        {/* Out of Stock */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
              <i className="bi bi-x-circle text-xl text-red-500"></i>
            </div>

            <div>
              <p className="text-sm text-[var(--sonic-silver)]">Out of Stock</p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-1">
                {OutOfStock}
              </h2>

              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                Not available
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN INVENTORY BOX */}
      <div className="flex-1 min-h-0 bg-[var(--white)] border border-[var(--cultured)] rounded-lg px-5 flex flex-col overflow-hidden">
        {/* FILTER AREA */}
        <div className="shrink-0 flex items-center gap-3 py-4">
          {/* Search */}
          <div className="relative flex-1">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

            <input
              type="text"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products by name, SKU or category..."
              className="w-full h-11 pl-11 pr-4 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] focus:border-[var(--primary)]"
            />
          </div>
          {/* Category */}
          <select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[180px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Categories</option>
            <option>Clothing</option>
            <option>Footwear</option>
            <option>Electronics</option>
            <option>Bags</option>
            <option>Accessories</option>
            <option>Home & Living</option>
          </select>
          {/* Stock Status */}
          <select
            value={StockStatus}
            onChange={(e) => setStockStatus(e.target.value)}
            className="w-[180px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Stock Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          {/* Filter */}
          <div className="">
            <select
              value={Sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-[160px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
            >
              <option value="">Sort Products</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name-asc">Name: A → Z</option>
              <option value="name-desc">Name: Z → A</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="stock-asc">Stock: Low → High</option>
              <option value="stock-desc">Stock: High → Low</option>
            </select>
          </div>
        </div>
        {/* TABLE SCROLL AREA */}
        <div className="flex-1 min-h-0 overflow-hidden border-t border-[var(--cultured)]">
          <div className="h-full overflow-auto">
            <table className="w-full min-w-[950px] border-collapse">
              {/* TABLE HEADER */}
              <thead className="sticky top-0 z-10 bg-[var(--white)]">
                <tr className="bg-[var(--cultured)]/40 border-b border-[var(--cultured)]">
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Product
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    SKU
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Category
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Price
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Stock
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Status
                  </th>

                  <th className="text-right px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* TABLE BODY */}
              <tbody>
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => {
                    const status = getStockStatus(product.stock);
                    return (
                      <tr
                        key={product.id}
                        className="border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/20 transition"
                      >
                        {/* Product */}
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-[var(--cultured)] overflow-hidden shrink-0">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-[var(--eerie-black)]">
                                {product.name}
                              </h3>

                              <p className="text-xs text-[var(--sonic-silver)] mt-1">
                                Product #{product.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        {/* SKU */}
                        <td className="px-4 py-4">
                          <span className="text-sm text-[var(--sonic-silver)]">
                            {product.sku}
                          </span>
                        </td>
                        {/* Category */}
                        <td className="px-4 py-4">
                          <span className="inline-flex px-3 py-1 rounded-full bg-[var(--cultured)] text-xs font-medium text-[var(--eerie-black)]">
                            {product.category}
                          </span>
                        </td>
                        {/* Price */}
                        <td className="px-4 py-4">
                          <span className="text-sm font-medium text-[var(--eerie-black)]">
                            ${product.price.toFixed(2)}
                          </span>
                        </td>
                        {/* Stock */}
                        <td className="px-4 py-4">
                          <span
                            className={`text-sm font-semibold ${
                              product.stock === 0
                                ? "text-red-500"
                                : product.stock <= 8
                                  ? "text-orange-500"
                                  : "text-[var(--eerie-black)]"
                            }`}
                          >
                            {product.stock}
                          </span>
                        </td>
                        {/* Status */}
                        <td className="px-4 py-4">
                          {status === "In Stock" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              In Stock
                            </span>
                          )}

                          {status === "Low Stock" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Low Stock
                            </span>
                          )}

                          {status === "Out of Stock" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Out of Stock
                            </span>
                          )}
                        </td>
                        {/* Actions */}
                        <td className="px-4 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleUpdateStock(product.id)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--cultured)] text-[var(--eerie-black)] text-xs font-medium hover:bg-[var(--primary)] hover:text-[var(--white)] transition"
                            >
                              <i className="bi bi-pencil"></i>
                              Update Stock
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-12 text-sm text-[var(--sonic-silver)]"
                    >
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* PAGINATION */}
        <div className="shrink-0 flex items-center justify-between px-1 py-4 border-t border-[var(--cultured)]">
          <p className="text-sm text-[var(--sonic-silver)]">
            Showing {showingFrom}–{showingTo} of {FilteredProducts.length}{" "}
            products
          </p>

          <div className="flex items-center gap-1">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              type="button"
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition ${
                    currentPage === page
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "text-[var(--eerie-black)] hover:bg-[var(--cultured)]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              type="button"
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
