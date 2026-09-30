
import { useMemo, useState } from "react";

const ordersData = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    email: "john@example.com",
    avatar: "/avatar-1.jpg",
    product: "Men's Winter Leathers Jackets",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-2.jpg",
    product: "Women's Summer Dress",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-3.jpg",
    product: "Classic Running Shoes",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-4.jpg",
    product: "Leather Travel Bag",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-5.jpg",
    product: "Smart Watch Series 5",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-6.jpg",
    product: "Women's Handbag",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-7.jpg",
    product: "Casual Cotton T-Shirt",
    image: "/jewellery-1.jpg",
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
    avatar: "/avatar-8.jpg",
    product: "Premium Sunglasses",
    image: "/jewellery-1.jpg",
    quantity: 1,
    date: "Sep 24, 2026",
    time: "02:36 PM",
    payment: "Paid",
    amount: 55,
    status: "Shipped",
  },
];

const statusStyles = {
  Delivered:
    "bg-green-50 text-green-600 border border-green-100",
  Processing:
    "bg-blue-50 text-blue-600 border border-blue-100",
  Pending:
    "bg-yellow-50 text-yellow-600 border border-yellow-100",
  Shipped:
    "bg-purple-50 text-purple-600 border border-purple-100",
  Cancelled:
    "bg-red-50 text-red-600 border border-red-100",
};

const statusIcons = {
  Delivered: "bi-check-circle-fill",
  Processing: "bi-arrow-repeat",
  Pending: "bi-clock-fill",
  Shipped: "bi-box-seam-fill",
  Cancelled: "bi-x-circle-fill",
};

export default function PendingOrder() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [payment, setPayment] = useState("All Payments");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        order.id.toLowerCase().includes(searchValue) ||
        order.customer.toLowerCase().includes(searchValue) ||
        order.email.toLowerCase().includes(searchValue) ||
        order.product.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All Status" || order.status === status;

      const matchesPayment =
        payment === "All Payments" || order.payment === payment;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }, [search, status, payment]);

  const resetPage = () => {
    setCurrentPage(1);
  };

  return (
    <section className="w-full h-full min-h-0 flex flex-col overflow-hidden bg-[var(--cultured)]">

      {/* ================= HEADER ================= */}
      <div className="shrink-0 px-6 py-5 border-b border-[var(--cultured)] bg-[var(--white)] flex items-center justify-between">

        <div>
          <h1 className="text-xl font-semibold text-[var(--eerie-black)]">
            All Orders
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage and track all orders from your store.
          </p>
        </div>

        <button
          type="button"
          className="h-10 px-4 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
        >
          <i className="bi bi-box-arrow-up"></i>
          Export Orders
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <main className="flex-1 min-h-0 overflow-auto p-6">

        {/* ================= SUMMARY CARDS ================= */}
        <div className="grid grid-cols-4 gap-4 mb-5">

          {/* Total */}
          <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs text-[var(--sonic-silver)]">
                  Total Orders
                </p>

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
          <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs text-[var(--sonic-silver)]">
                  Pending Orders
                </p>

                <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                  12
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
          </div>

          {/* Processing */}
          <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs text-[var(--sonic-silver)]">
                  Processing Orders
                </p>

                <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                  18
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
          </div>

          {/* Delivered */}
          <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs text-[var(--sonic-silver)]">
                  Delivered Orders
                </p>

                <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                  84
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
        </div>

        {/* ================= FILTER ================= */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-3 mb-4">

          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative flex-1">

              <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetPage();
                }}
                placeholder="Search by order ID, customer, product..."
                className="w-full h-10 pl-9 pr-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm text-[var(--eerie-black)] outline-none focus:border-[var(--primary)] transition"
              />
            </div>

            {/* Status */}
            <div className="relative w-[150px]">

              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  resetPage();
                }}
                className="appearance-none w-full h-10 px-3 pr-8 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm text-[var(--eerie-black)] outline-none focus:border-[var(--primary)] cursor-pointer"
              >
                <option>All Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>

              <i className="bi bi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none"></i>
            </div>

            {/* Payment */}
            <div className="relative w-[150px]">

              <select
                value={payment}
                onChange={(e) => {
                  setPayment(e.target.value);
                  resetPage();
                }}
                className="appearance-none w-full h-10 px-3 pr-8 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm text-[var(--eerie-black)] outline-none focus:border-[var(--primary)] cursor-pointer"
              >
                <option>All Payments</option>
                <option>Paid</option>
                <option>Pending</option>
              </select>

              <i className="bi bi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none"></i>
            </div>

            {/* Date */}
            <button
              type="button"
              className="w-[150px] h-10 px-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm text-[var(--sonic-silver)] flex items-center justify-between hover:border-[var(--primary)] transition"
            >
              <span className="flex items-center gap-2">
                <i className="bi bi-calendar3"></i>
                Select Date
              </span>

              <i className="bi bi-chevron-down text-xs"></i>
            </button>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1050px] border-collapse">

              {/* TABLE HEADER */}
              <thead className="bg-[var(--white)] border-b border-[var(--cultured)]">

                <tr className="text-left">

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Order ID
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Customer
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Product
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Date
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Payment
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Amount
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)]">
                    Status
                  </th>

                  <th className="px-4 py-4 text-xs font-medium text-[var(--sonic-silver)] text-center">
                    Action
                  </th>

                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>

                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (

                    <tr
                      key={order.id}
                      className="border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/40 transition"
                    >

                      {/* Order ID */}
                      <td className="px-4 py-4">
                        <span className="text-sm font-medium text-[var(--eerie-black)]">
                          {order.id}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="px-4 py-4">

                        <div className="flex items-center gap-3">

                          <img
                            src={order.avatar}
                            alt={order.customer}
                            className="w-9 h-9 rounded-full object-cover bg-[var(--cultured)]"
                          />

                          <div>
                            <p className="text-sm font-medium text-[var(--eerie-black)]">
                              {order.customer}
                            </p>

                            <p className="text-[11px] text-[var(--sonic-silver)] mt-0.5">
                              {order.email}
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* Product */}
                      <td className="px-4 py-4">

                        <div className="flex items-center gap-3">

                          <img
                            src={order.image}
                            alt={order.product}
                            className="w-10 h-10 rounded-lg object-cover bg-[var(--cultured)]"
                          />

                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[var(--eerie-black)] max-w-[180px] truncate">
                              {order.product}
                            </p>

                            <p className="text-[11px] text-[var(--sonic-silver)] mt-0.5">
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

                        <span className="flex items-center gap-2 text-sm text-[var(--sonic-silver)]">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              order.payment === "Paid"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                          ></span>

                          {order.payment}
                        </span>

                      </td>

                      {/* Amount */}
                      <td className="px-4 py-4">

                        <span className="text-sm font-medium text-[var(--eerie-black)]">
                          ${order.amount.toFixed(2)}
                        </span>

                      </td>

                      {/* Status */}
                      <td className="px-4 py-4">

                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                        >
                          <i className={`bi ${statusIcons[order.status]}`}></i>
                          {order.status}
                        </span>

                      </td>

                      {/* Action */}
                      <td className="px-4 py-4 text-center">

                        <button
                          type="button"
                          className="w-8 h-8 rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] hover:text-[var(--eerie-black)] transition"
                        >
                          <i className="bi bi-three-dots-vertical"></i>
                        </button>

                      </td>

                    </tr>
                  ))

                ) : (

                  <tr>
                    <td colSpan="8" className="py-16 text-center">

                      <div className="flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-[var(--cultured)] flex items-center justify-center mb-3">
                          <i className="bi bi-receipt text-xl text-[var(--sonic-silver)]"></i>
                        </div>

                        <h3 className="text-sm font-medium text-[var(--eerie-black)]">
                          No orders found
                        </h3>

                        <p className="text-xs text-[var(--sonic-silver)] mt-1">
                          Try changing your search or filters.
                        </p>

                      </div>

                    </td>
                  </tr>

                )}

              </tbody>
            </table>
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="px-4 py-4 border-t border-[var(--cultured)] flex items-center justify-between">

            <p className="text-xs text-[var(--sonic-silver)]">
              Showing{" "}
              <span className="font-medium text-[var(--eerie-black)]">
                {filteredOrders.length}
              </span>{" "}
              of 128 orders
            </p>

            <div className="flex items-center gap-1">

              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                className="w-8 h-8 rounded-lg border border-[var(--cultured)] flex items-center justify-center text-[var(--sonic-silver)] hover:bg-[var(--cultured)] disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <i className="bi bi-chevron-left text-xs"></i>
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition ${
                    currentPage === page
                      ? "bg-[var(--primary)] text-[var(--white)]"
                      : "text-[var(--sonic-silver)] hover:bg-[var(--cultured)]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="w-8 h-8 flex items-center justify-center text-xs text-[var(--sonic-silver)]">
                ...
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage(13)}
                className="w-8 h-8 rounded-lg text-xs text-[var(--sonic-silver)] hover:bg-[var(--cultured)]"
              >
                13
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="w-8 h-8 rounded-lg border border-[var(--cultured)] flex items-center justify-center text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition"
              >
                <i className="bi bi-chevron-right text-xs"></i>
              </button>

            </div>
          </div>

        </div>
      </main>
    </section>
  );
}