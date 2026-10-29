import { useState } from "react";

const ordersData = [
  {
    id: "#ORD-1007",
    customer: "James Miller",
    email: "james@example.com",
    avatar: "/3.jpg",
    product: "Casual Cotton T-Shirt",
    image: "/shirt-1.jpg",
    quantity: 3,
    date: "Sep 25, 2026",
    time: "09:10 AM",
    payment: "Paid",
    amount: 72,
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    customer: "Sarah Smith",
    email: "sarah@example.com",
    avatar: "/2.jpg",
    product: "Women's Summer Dress",
    image: "/party-wear-1.jpg",
    quantity: 2,
    date: "Sep 28, 2026",
    time: "09:17 AM",
    payment: "Paid",
    amount: 96,
    status: "Delivered",
  },
  {
    id: "#ORD-1011",
    customer: "Daniel Clark",
    email: "daniel@example.com",
    avatar: "/3.jpg",
    product: "Classic Leather Belt",
    image: "/belt.jpg",
    quantity: 1,
    date: "Sep 23, 2026",
    time: "11:30 AM",
    payment: "Pending",
    amount: 35,
    status: "Delivered",
  },
  {
    id: "#ORD-1004",
    customer: "Emily Johnson",
    email: "emily@example.com",
    avatar: "/4.jpg",
    product: "Leather Travel Bag",
    image: "/bag.png",
    quantity: 1,
    date: "Sep 27, 2026",
    time: "12:18 PM",
    payment: "Paid",
    amount: 85,
    status: "Delivered",
  },
  {
    id: "#ORD-1015",
    customer: "Mia Taylor",
    email: "mia@example.com",
    avatar: "/2.jpg",
    product: "Women's Perfume",
    image: "/perfume.jpg",
    quantity: 2,
    date: "Sep 21, 2026",
    time: "02:15 PM",
    payment: "Paid",
    amount: 90,
    status: "Delivered",
  },
  {
    id: "#ORD-1001",
    customer: "John Doe",
    email: "john@example.com",
    avatar: "/1.jpg",
    product: "Men's Winter Leathers Jackets",
    image: "/jacket-1.jpg",
    quantity: 1,
    date: "Sep 28, 2026",
    time: "10:24 AM",
    payment: "Paid",
    amount: 48,
    status: "Delivered",
  },
  {
    id: "#ORD-1013",
    customer: "Noah Anderson",
    email: "noah@example.com",
    avatar: "/1.jpg",
    product: "Sports Running Shoes",
    image: "/sports-1.jpg",
    quantity: 1,
    date: "Sep 22, 2026",
    time: "04:45 PM",
    payment: "Paid",
    amount: 78,
    status: "Delivered",
  },
  {
    id: "#ORD-1008",
    customer: "Sophia Anderson",
    email: "sophia@example.com",
    avatar: "/4.jpg",
    product: "Premium Sunglasses",
    image: "/glasses.png",
    quantity: 1,
    date: "Sep 24, 2026",
    time: "02:36 PM",
    payment: "Pending",
    amount: 55,
    status: "Delivered",
  },
  {
    id: "#ORD-1010",
    customer: "William Thomas",
    email: "william@example.com",
    avatar: "/3.jpg",
    product: "Classic Wrist Watch",
    image: "/watch-2.jpg",
    quantity: 1,
    date: "Sep 23, 2026",
    time: "01:20 PM",
    payment: "Paid",
    amount: 110,
    status: "Delivered",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    avatar: "/3.jpg",
    product: "Classic Running Shoes",
    image: "/shoe-1.jpg",
    quantity: 1,
    date: "Sep 27, 2026",
    time: "04:32 PM",
    payment: "Pending",
    amount: 72,
    status: "Delivered",
  },
  {
    id: "#ORD-1016",
    customer: "Isabella Moore",
    email: "isabella@example.com",
    avatar: "/4.jpg",
    product: "Elegant Jewellery Set",
    image: "/jewellery-3.jpg",
    quantity: 1,
    date: "Sep 20, 2026",
    time: "10:40 AM",
    payment: "Paid",
    amount: 145,
    status: "Delivered",
  },
  {
    id: "#ORD-1006",
    customer: "Olivia Davis",
    email: "olivia@example.com",
    avatar: "/2.jpg",
    product: "Women's Handbag",
    image: "/jewellery-2.jpg",
    quantity: 1,
    date: "Sep 25, 2026",
    time: "11:22 AM",
    payment: "Paid",
    amount: 64,
    status: "Delivered",
  },
  {
    id: "#ORD-1012",
    customer: "Ethan White",
    email: "ethan@example.com",
    avatar: "/1.jpg",
    product: "Men's Casual Shorts",
    image: "/shorts-1.jpg",
    quantity: 2,
    date: "Sep 22, 2026",
    time: "03:05 PM",
    payment: "Paid",
    amount: 58,
    status: "Delivered",
  },
  {
    id: "#ORD-1005",
    customer: "David Wilson",
    email: "david@example.com",
    avatar: "/1.jpg",
    product: "Smart Watch Series 5",
    image: "/watch-1.jpg",
    quantity: 1,
    date: "Sep 26, 2026",
    time: "03:45 PM",
    payment: "Paid",
    amount: 120,
    status: "Delivered",
  },
  {
    id: "#ORD-1014",
    customer: "Ava Martin",
    email: "ava@example.com",
    avatar: "/2.jpg",
    product: "Women's Winter Coat",
    image: "/coat.png",
    quantity: 1,
    date: "Sep 21, 2026",
    time: "09:50 AM",
    payment: "Pending",
    amount: 135,
    status: "Delivered",
  },
  {
    id: "#ORD-1009",
    customer: "Lucas Harris",
    email: "lucas@example.com",
    avatar: "/3.jpg",
    product: "Men's Casual Jacket",
    image: "/jacket-3.jpg",
    quantity: 1,
    date: "Sep 24, 2026",
    time: "05:12 PM",
    payment: "Paid",
    amount: 88,
    status: "Delivered",
  },
];

export default function DeleveredOrders() {
  const [Search, setSearch] = useState("");
  const [Payment, setPayment] = useState("All Payments");
  const [Orders, setOrders] = useState(ordersData);
  const [Sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [OpenMenu, setOpenMenu] = useState(null);

  const ordersPerPage = 10;

  // Only Delivered Orders
  const DeliveredOrders = Orders.filter(
    (order) => order.status === "Delivered",
  );

  // Filter + Sort
  const FilteredOrders = DeliveredOrders.filter((order) => {
    const searchValue = Search.toLowerCase();

    const matchSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.customer.toLowerCase().includes(searchValue) ||
      order.email.toLowerCase().includes(searchValue) ||
      order.product.toLowerCase().includes(searchValue);

    const matchPayment =
      Payment === "All Payments" || order.payment === Payment;

    return matchSearch && matchPayment;
  }).sort((a, b) => {
    if (Sort === "newest") {
      return Number(b.id.replace(/\D/g, "")) - Number(a.id.replace(/\D/g, ""));
    }

    if (Sort === "oldest") {
      return Number(a.id.replace(/\D/g, "")) - Number(b.id.replace(/\D/g, ""));
    }

    if (Sort === "amount-asc") return a.amount - b.amount;
    if (Sort === "amount-desc") return b.amount - a.amount;

    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(FilteredOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentOrders = FilteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder,
  );

  const showingFrom = FilteredOrders.length === 0 ? 0 : indexOfFirstOrder + 1;

  const showingTo = Math.min(indexOfLastOrder, FilteredOrders.length);

  // Action Handlers
  const handleViewOrder = (id) => {
    console.log("View Order:", id);
    setOpenMenu(null);
  };

  const handleContactCustomer = (id) => {
    console.log("Contact Customer:", id);
    setOpenMenu(null);
  };

  const handlePrintInvoice = (id) => {
    console.log("Print Invoice:", id);
    setOpenMenu(null);
  };

  const handleCancelOrder = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order,
      ),
    );

    setOpenMenu(null);
  };

  return (
    <section className="w-full h-full min-h-0 flex flex-col overflow-hidden">
      {/* PAGE HEADER */}
      <div className="shrink-0 mb-6">
        <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
          Delivered Orders
        </h1>

        <p className="text-sm text-[var(--sonic-silver)] mt-1">
          View and manage orders that have been successfully delivered to
          customers.
        </p>
      </div>

      {/* MAIN ORDERS BOX */}
      <div className="flex-1 min-h-0 bg-[var(--white)] border border-[var(--cultured)] rounded-lg px-5 flex flex-col overflow-hidden">
        {/* FILTER AREA */}
        <div className="shrink-0 flex items-center gap-3 py-4">
          {/* Search */}
          <div className="relative flex-1">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

            <input
              type="text"
              value={Search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search delivered orders by ID, customer or product..."
              className="w-full h-11 pl-11 pr-4 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] focus:border-[var(--primary)]"
            />
          </div>

          {/* Payment Filter */}
          <select
            value={Payment}
            onChange={(e) => {
              setPayment(e.target.value);
              setCurrentPage(1);
            }}
            className="w-[170px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Payments</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>

          {/* Sort */}
          <select
            value={Sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="w-[160px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option value="">Sort Orders</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="amount-asc">Amount: Low → High</option>
            <option value="amount-desc">Amount: High → Low</option>
          </select>
        </div>

        {/* TABLE SCROLL AREA */}
        <div className="flex-1 min-h-0 overflow-hidden border-t border-[var(--cultured)]">
          <div className="h-full overflow-auto">
            <table className="w-full min-w-[1100px] border-collapse">
              <thead className="sticky top-0 z-10 bg-[var(--white)]">
                <tr className="bg-[var(--cultured)]/40 border-b border-[var(--cultured)]">
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Order
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Customer
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Product
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Date
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Payment
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Amount
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Status
                  </th>
                  <th className="text-right px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentOrders.length > 0 ? (
                  currentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/20 transition"
                    >
                      {/* Order */}
                      <td className="px-4 py-4">
                        <p className="text-xs text-[var(--sonic-silver)]">
                          {order.id}
                        </p>
                      </td>

                      {/* Customer */}
                      <td className="px-4 py-4">
                        <div>
                          <h3 className="text-sm font-medium text-[var(--eerie-black)]">
                            {order.customer}
                          </h3>
                          <p className="text-xs text-[var(--sonic-silver)] mt-1">
                            {order.email}
                          </p>
                        </div>
                      </td>

                      {/* Product */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-[var(--cultured)] overflow-hidden shrink-0">
                            <img
                              src={order.image}
                              alt={order.product}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-[var(--eerie-black)]">
                              {order.product}
                            </h3>
                            <p className="text-xs text-[var(--sonic-silver)] mt-1">
                              Qty: {order.quantity}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-4 whitespace-nowrap">
                        <p className="text-sm text-[var(--eerie-black)]">
                          {order.date}
                        </p>
                        <p className="text-[11px] text-[var(--sonic-silver)] mt-0.5">
                          {order.time}
                        </p>
                      </td>

                      {/* Payment */}
                      <td className="px-4 py-4">
                        {order.payment === "Paid" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Paid
                          </span>
                        ) : order.payment === "Pending" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Pending
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            Failed
                          </span>
                        )}
                      </td>

                      {/* Amount */}
                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold text-[var(--eerie-black)]">
                          ${order.amount.toFixed(2)}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          {order.status}
                        </span>
                      </td>

                      {/* Action Menu */}
                      <td className="relative px-4 py-4 text-right">
                        <div className="relative inline-block">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenu(
                                OpenMenu === order.id ? null : order.id,
                              )
                            }
                            className="w-9 h-9 inline-flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
                            title="More actions"
                          >
                            <i className="bi bi-three-dots-vertical text-lg"></i>
                          </button>

                          {OpenMenu === order.id && (
                            <div className="absolute right-0 top-10 z-30 w-48 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-1">
                              <button
                                type="button"
                                onClick={() => handleViewOrder(order.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                              >
                                <i className="bi bi-eye"></i>
                                View Order
                              </button>

                              <button
                                type="button"
                                onClick={() => handleContactCustomer(order.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                              >
                                <i className="bi bi-chat-dots"></i>
                                Contact Customer
                              </button>

                              <button
                                type="button"
                                onClick={() => handlePrintInvoice(order.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                              >
                                <i className="bi bi-printer"></i>
                                Print Invoice
                              </button>

                              <div className="my-1 border-t border-[var(--cultured)]"></div>

                              <button
                                type="button"
                                onClick={() => handleCancelOrder(order.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
                              >
                                <i className="bi bi-x-circle"></i>
                                Cancel Order
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-12 text-sm text-[var(--sonic-silver)]"
                    >
                      No delivered orders found.
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
            Showing {showingFrom}–{showingTo} of {FilteredOrders.length}{" "}
            delivered orders
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
              disabled={currentPage === totalPages || totalPages === 0}
              type="button"
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition ${
                currentPage === totalPages || totalPages === 0
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
