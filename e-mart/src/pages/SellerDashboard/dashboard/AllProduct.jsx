import { useState } from "react";
const Products1 = [
  {
    id: 1,
    Pname: "Nike Air Max 270",
    category: "Footwear",
    price: 120,
    stock: 25,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
  {
    id: 2,
    Pname: "Men's Hoodie",
    category: "Clothing",
    price: 45,
    stock: 40,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
  {
    id: 3,
    Pname: "Smart Watch",
    category: "Electronics",
    price: 85,
    stock: 12,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
  {
    id: 4,
    Pname: "Travel Backpack",
    category: "Bags",
    price: 60,
    stock: 8,
    status: "Inactive",
    image: "/jewellery-1.jpg",
  },
  {
    id: 5,
    Pname: "Sunglasses",
    category: "Accessories",
    price: 30,
    stock: 15,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
  {
    id: 6,
    Pname: "Digital Camera",
    category: "Electronics",
    price: 250,
    stock: 6,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
  {
    id: 7,
    Pname: "Water Bottle",
    category: "Home & Living",
    price: 18,
    stock: 0,
    status: "Out of Stock",
    image: "/jewellery-1.jpg",
  },
  {
    id: 8,
    Pname: "Baseball Cap",
    category: "Accessories",
    price: 22,
    stock: 18,
    status: "Active",
    image: "/jewellery-1.jpg",
  },
];
export default function AllProduct() {
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("All Categories");
  const [Status, setStatus] = useState("All Status");

  const [Products, setProducts] = useState(Products1);

  const FilteredProducts = Products.filter((product) => {
    const matchSearch = product.Pname.toLowerCase().includes(
      Search.toLowerCase(),
    );

    const matchCategory =
      Category === "All Categories" || product.category === Category;

    const matchStatus = Status === "All Status" || product.status === Status;

    return matchSearch && matchCategory && matchStatus;
  });

  // pagination feature
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = FilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(FilteredProducts.length / productsPerPage);

  const handleEdit = (id) => {
    console.log("Edit Product:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Product:", id);
  };

  const handleView = (id) => {
    console.log("View Product:", id);
  };

  const handleDuplicate = (id) => {
    let product = Products.find((P) => P.id === id);
    if (product) {
      let newProduct = {
        ...product,
        id: Products.length + 1,
      };
      console.log("Duplicate Product:", newProduct);
      setProducts([...Products, newProduct]);
    }
  };

  return (
    <section className="w-full h-full flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
            All Products
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage your store products, edit details, track stock and more.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
        >
          <i className="bi bi-plus-lg"></i>
          Add New Product
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-4 mb-5">
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

            <input
              type="text"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
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

          {/* Status */}
          <select
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-[160px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Out of Stock</option>
          </select>

          <div className="relative">
            <button
              type="button"
              className="h-11 px-5 flex items-center gap-2 border border-[var(--cultured)] rounded-lg text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
            >
              <i className="bi bi-funnel"></i>
              Filter
            </button>

            <div className="absolute right-0 top-13 z-50 w-64 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-4">
              <p className="text-sm font-medium text-[var(--eerie-black)] mb-3">
                Filter
              </p>

              {/* Status */}
              <div className="mb-3">
                <label className="block text-xs text-[var(--sonic-silver)] mb-1">
                  Status
                </label>

                <select
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full h-10 px-3 border border-[var(--cultured)] rounded-lg text-sm outline-none"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              {/* Status */}
              <div className="mb-3">
                <label className="block text-xs text-[var(--sonic-silver)] mb-1">
                  Filter
                </label>

                <select
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full h-10 px-3 border border-[var(--cultured)] rounded-lg text-sm outline-none"
                >
                  <option>Filter Ascending orders</option>
                  <option>Filter Descending orders</option>
                  <option>Fillter by Prices</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-[var(--white)] flex-1 border border-[var(--cultured)] rounded-lg overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-auto">
          <table className="w-full min-w-[900px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[var(--cultured)]/40 border-b border-[var(--cultured)]">
                <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                  Product
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
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
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
                            alt={product.Pname}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[var(--eerie-black)]">
                            {product.Pname}
                          </h3>

                          <p className="text-xs text-[var(--sonic-silver)] mt-1">
                            ID: #PRD
                            {String(product.id).padStart(3, "0")}
                          </p>
                        </div>
                      </div>
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
                        className={`text-sm font-medium ${
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
                      {product.status === "Active" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Active
                        </span>
                      )}

                      {product.status === "Inactive" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                          Inactive
                        </span>
                      )}

                      {product.status === "Out of Stock" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          Out of Stock
                        </span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleEdit(product.id)}
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--cultured)] hover:bg-[var(--primary)] hover:text-[var(--white)] transition"
                          title="Edit Product"
                        >
                          <i className="bi bi-pencil text-sm"></i>
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => handleDelete(product.id)}
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-[var(--white)] transition"
                          title="Delete Product"
                        >
                          <i className="bi bi-trash text-sm"></i>
                        </button>

                        {/* More */}
                        <div className="relative group">
                          <button
                            type="button"
                            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
                            title="More"
                          >
                            <i className="bi bi-three-dots-vertical text-lg"></i>
                          </button>

                          {/* Dropdown */}
                          <div className="absolute right-0 top-10 z-20 w-44 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-1 hidden group-hover:block">
                            <button
                              type="button"
                              onClick={() => handleView(product.id)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                            >
                              <i className="bi bi-eye"></i>
                              View Product
                            </button>

                            <button
                              type="button"
                              onClick={() => handleEdit(product.id)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                            >
                              <i className="bi bi-pencil"></i>
                              Edit Product
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDuplicate(product.id)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                            >
                              <i className="bi bi-copy"></i>
                              Duplicate
                            </button>

                            <div className="my-1 border-t border-[var(--cultured)]"></div>

                            <button
                              type="button"
                              onClick={() => handleDelete(product.id)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
                            >
                              <i className="bi bi-trash"></i>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
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

        {/* Pagination */}
        <div className="flex shrink-0 items-center justify-between px-5 py-4 border-t border-[var(--cultured)]">
          <p className="text-sm text-[var(--sonic-silver)]">
            Showing 1–{currentProducts.length} of {Products.length} products
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

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
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
