import { useEffect, useState } from "react";
const ordersData = [
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
    status: "Processing",
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
    status: "Pending",
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
    status: "Shipped",
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
    status: "Cancelled",
  },
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
    status: "Processing",
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
    payment: "Paid",
    amount: 55,
    status: "Shipped",
  },
];
export default function AllOrders() {
  const [Search, setSearch] = useState("");
  const [Status, setStatus] = useState("All Status");
  const [Payment, setPayment] = useState("All Payments");
  const [Orders, setOrders] = useState(ordersData);
  const [Sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [OpenMenu, setOpenMenu] = useState(null);

  const ordersPerPage = 10;

  // Filter Handler

  const FilteredOrders = Orders.filter((order) => {
    const searchValue = Search.toLowerCase();

    const matchSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.customer.toLowerCase().includes(searchValue) ||
      order.email.toLowerCase().includes(searchValue) ||
      order.product.toLowerCase().includes(searchValue);

    const matchStatus = Status === "All Status" || order.status === Status;

    const matchPayment =
      Payment === "All Payments" || order.payment === Payment;

    return matchSearch && matchStatus && matchPayment;
  }).sort((a, b) => {
    if (Sort === "newest") return b.id - a.id;
    if (Sort === "oldest") return a.id - b.id;
    if (Sort === "amount-asc") return a.price - b.price;
    if (Sort === "amount-desc") return b.price - a.price;

    return 0;
  });

  // Pagination Handler

  const totalPages = Math.ceil(FilteredOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;

  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentOrders = FilteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder,
  );

  const showingFrom = FilteredOrders.length === 0 ? 0 : indexOfFirstOrder + 1;

  const showingTo = Math.min(indexOfLastOrder, FilteredOrders.length);

  // Orders Summary
  const TotalOrders = Orders.length;

  const PendingOrders = Orders.filter(
    (order) => order.status === "Pending",
  ).length;

  const ProcessingOrders = Orders.filter(
    (order) => order.status === "Processing",
  ).length;

  const DeliveredOrders = Orders.filter(
    (order) => order.status === "Delivered",
  ).length;

  // Action Handlers
  const handleViewOrder = (id) => {
    console.log("View Order:", id);
    setOpenMenu(null);
  };

  const handleUpdateStatus = (id) => {
    console.log("Update Status:", id);
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
      <div className="shrink-0 flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
            All Orders
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage and track all orders from your store.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
        >
          <i className="bi bi-download"></i>
          Export Orders
        </button>
      </div>

      {/* Order Summary */}
      <div className="shrink-0 grid grid-cols-4 gap-4 mb-5">
        {/* Total */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">Total Orders</p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                128
              </h2>

              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <i className="bi bi-arrow-up"></i>
                +12% this month
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <i className="bi bi-bag text-blue-500 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="flex items-start justify-between bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div>
            <p className="text-xs text-[var(--sonic-silver)]">Pending Orders</p>

            <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
              {PendingOrders}
            </h2>

            <p className="text-xs text-yellow-600 mt-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              Need attention
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
            <i className="bi bi-clock text-yellow-500 text-lg"></i>
          </div>
        </div>

        {/* Processing */}
        <div className="flex items-start justify-between bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div>
            <p className="text-xs text-[var(--sonic-silver)]">
              Processing Orders
            </p>

            <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
              {ProcessingOrders}
            </h2>

            <p className="text-xs text-purple-600 mt-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              In progress
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
            <i className="bi bi-gear text-purple-500 text-lg"></i>
          </div>
        </div>

        {/* Delivered */}
        <div className="flex items-start justify-between bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div>
            <p className="text-xs text-[var(--sonic-silver)]">
              Delivered Orders
            </p>

            <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
              {DeliveredOrders}
            </h2>

            <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Completed
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
            <i className="bi bi-check-circle text-green-500 text-lg"></i>
          </div>
        </div>
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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search orders by ID, customer or product..."
              className="w-full h-11 pl-11 pr-4 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] focus:border-[var(--primary)]"
            />
          </div>

          {/* Status */}

          <select
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-[170px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          {/* Payment */}

          <select
            value={Payment}
            onChange={(e) => setPayment(e.target.value)}
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
            onChange={(e) => setSort(e.target.value)}
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
              {/* TABLE HEADER */}
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

              {/* TABLE BODY */}
              <tbody>
                {currentOrders.length > 0 ? (
                  currentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="relative border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/20 transition"
                    >
                      {/* Order */}
                      <td className="px-4">
                        <div>
                          <p className="text-xs text-[var(--sonic-silver)] mt-1">
                            {order.id}
                          </p>
                        </div>
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
                        {order.status === "Delivered" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Delivered
                          </span>
                        )}

                        {order.status === "Processing" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            Processing
                          </span>
                        )}

                        {order.status === "Pending" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Pending
                          </span>
                        )}

                        {order.status === "Shipped" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            Shipped
                          </span>
                        )}

                        {order.status === "Cancelled" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            Cancelled
                          </span>
                        )}
                      </td>

                      {/* Action Menu */}
                      <td className="relative group flex justify-end px-4">
                        <button
                          type="button"
                          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
                          title="More"
                        >
                          <i className="bi bi-three-dots-vertical text-lg"></i>
                        </button>
                        <div
                          className={` absolute right-0 top-10 z-30 w-48 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-1 hidden group-hover:block`}
                        >
                          {/* View Order */}
                          <button
                            type="button"
                            onClick={() => handleViewOrder(order.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-eye"></i>
                            View Order
                          </button>

                          {/* Update Status */}
                          {order.status !== "Delivered" &&
                            order.status !== "Cancelled" && (
                              <button
                                type="button"
                                onClick={() => handleUpdateStatus(order.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                              >
                                <i className="bi bi-arrow-repeat"></i>
                                Update Status
                              </button>
                            )}

                          {/* Contact Customer */}
                          <button
                            type="button"
                            onClick={() => handleContactCustomer(order.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-chat-dots"></i>
                            Contact Customer
                          </button>

                          {/* Print Invoice */}
                          <button
                            type="button"
                            onClick={() => handlePrintInvoice(order.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-printer"></i>
                            Print Invoice
                          </button>

                          {/* Cancel Order */}
                          {order.status !== "Delivered" &&
                            order.status !== "Cancelled" && (
                              <>
                                <div className="my-1 border-t border-[var(--cultured)]"></div>

                                <button
                                  type="button"
                                  onClick={() => handleCancelOrder(order.id)}
                                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
                                >
                                  <i className="bi bi-x-circle"></i>
                                  Cancel Order
                                </button>
                              </>
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
                      No orders found.
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
            Showing {showingFrom}–{showingTo} of {FilteredOrders.length} orders
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
