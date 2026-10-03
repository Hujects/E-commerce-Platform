import { useEffect, useState } from "react";

const customersData = [
  {
    id: "#CUS-1001",
    customer: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8901",
    avatar: "/1.jpg",
    totalOrders: 12,
    totalSpent: 842,
    date: "Jan 15, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1002",
    customer: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 234 567 8902",
    avatar: "/2.jpg",
    totalOrders: 8,
    totalSpent: 531,
    date: "Feb 03, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 234 567 8903",
    avatar: "/3.jpg",
    totalOrders: 15,
    totalSpent: 1240,
    date: "Dec 12, 2024",
    status: "Active",
  },
  {
    id: "#CUS-1004",
    customer: "Emily Johnson",
    email: "emily@example.com",
    phone: "+1 234 567 8904",
    avatar: "/4.jpg",
    totalOrders: 6,
    totalSpent: 420,
    date: "Mar 20, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1005",
    customer: "David Wilson",
    email: "david@example.com",
    phone: "+1 234 567 8905",
    avatar: "/1.jpg",
    totalOrders: 14,
    totalSpent: 1050,
    date: "Feb 18, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1006",
    customer: "Olivia Davis",
    email: "olivia@example.com",
    phone: "+1 234 567 8906",
    avatar: "/2.jpg",
    totalOrders: 9,
    totalSpent: 678,
    date: "Jan 30, 2025",
    status: "Inactive",
  },
  {
    id: "#CUS-1007",
    customer: "James Miller",
    email: "james@example.com",
    phone: "+1 234 567 8907",
    avatar: "/3.jpg",
    totalOrders: 3,
    totalSpent: 215,
    date: "Apr 05, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1008",
    customer: "Sophia Anderson",
    email: "sophia@example.com",
    phone: "+1 234 567 8908",
    avatar: "/4.jpg",
    totalOrders: 11,
    totalSpent: 790,
    date: "Jan 22, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1009",
    customer: "William Thomas",
    email: "william@example.com",
    phone: "+1 234 567 8909",
    avatar: "/1.jpg",
    totalOrders: 5,
    totalSpent: 360,
    date: "Mar 14, 2025",
    status: "Inactive",
  },
  {
    id: "#CUS-1010",
    customer: "Mia Taylor",
    email: "mia@example.com",
    phone: "+1 234 567 8910",
    avatar: "/2.jpg",
    totalOrders: 9,
    totalSpent: 678,
    date: "Jan 30, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1011",
    customer: "Noah Anderson",
    email: "noah@example.com",
    phone: "+1 234 567 8911",
    avatar: "/3.jpg",
    totalOrders: 7,
    totalSpent: 495,
    date: "Apr 05, 2025",
    status: "Inactive",
  },
  {
    id: "#CUS-1012",
    customer: "Isabella Moore",
    email: "isabella@example.com",
    phone: "+1 234 567 8912",
    avatar: "/4.jpg",
    totalOrders: 13,
    totalSpent: 920,
    date: "Feb 28, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1013",
    customer: "Daniel Clark",
    email: "daniel@example.com",
    phone: "+1 234 567 8913",
    avatar: "/3.jpg",
    totalOrders: 10,
    totalSpent: 740,
    date: "May 12, 2025",
    status: "Active",
  },
  {
    id: "#CUS-1014",
    customer: "Ava Martin",
    email: "ava@example.com",
    phone: "+1 234 567 8914",
    avatar: "/2.jpg",
    totalOrders: 4,
    totalSpent: 290,
    date: "Jun 18, 2025",
    status: "Inactive",
  },
  {
    id: "#CUS-1015",
    customer: "Lucas Harris",
    email: "lucas@example.com",
    phone: "+1 234 567 8915",
    avatar: "/1.jpg",
    totalOrders: 16,
    totalSpent: 1380,
    date: "Aug 08, 2025",
    status: "Active",
  },
];

export default function Customers() {
  const [Search, setSearch] = useState("");
  const [Status, setStatus] = useState("All Status");
  const [Customers, setCustomers] = useState(customersData);
  const [Sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [OpenMenu, setOpenMenu] = useState(null);

  const customersPerPage = 10;

  // Filter Handler

  const FilteredCustomers = Customers.filter((customer) => {
    const searchValue = Search.toLowerCase();

    const matchSearch =
      customer.id.toLowerCase().includes(searchValue) ||
      customer.customer.toLowerCase().includes(searchValue) ||
      customer.email.toLowerCase().includes(searchValue) ||
      customer.phone.toLowerCase().includes(searchValue);

    const matchStatus = Status === "All Status" || customer.status === Status;

    return matchSearch && matchStatus;
  }).sort((a, b) => {
    if (Sort === "newest") return b.id.localeCompare(a.id);
    if (Sort === "oldest") return a.id.localeCompare(b.id);
    if (Sort === "orders-asc") return a.totalOrders - b.totalOrders;
    if (Sort === "orders-desc") return b.totalOrders - a.totalOrders;
    if (Sort === "amount-asc") return a.totalSpent - b.totalSpent;
    if (Sort === "amount-desc") return b.totalSpent - a.totalSpent;

    return 0;
  });

  // Pagination Handler

  const totalPages = Math.ceil(FilteredCustomers.length / customersPerPage);

  const indexOfLastCustomer = currentPage * customersPerPage;

  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

  const currentCustomers = FilteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer,
  );

  const showingFrom =
    FilteredCustomers.length === 0 ? 0 : indexOfFirstCustomer + 1;

  const showingTo = Math.min(indexOfLastCustomer, FilteredCustomers.length);

  // Customers Summary

  const TotalCustomers = Customers.length;

  const ActiveCustomers = Customers.filter(
    (customer) => customer.status === "Active",
  ).length;

  const InactiveCustomers = Customers.filter(
    (customer) => customer.status === "Inactive",
  ).length;

  // Action Handlers

  const handleViewCustomer = (id) => {
    const customer = Customers.find((item) => item.id === id);

    if (!customer) return;

    window.alert(
      `Customer Details\n\nID: ${customer.id}\nName: ${customer.customer}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nTotal Orders: ${customer.totalOrders}\nTotal Spent: $${customer.totalSpent.toFixed(2)}\nJoin Date: ${customer.date}\nStatus: ${customer.status}`,
    );

    setOpenMenu(null);
  };

  const handleEditCustomer = (id) => {
    const customer = Customers.find((item) => item.id === id);

    if (!customer) return;

    const updatedName = window.prompt(
      "Enter customer name:",
      customer.customer,
    );

    if (updatedName === null || !updatedName.trim()) {
      setOpenMenu(null);
      return;
    }

    const updatedEmail = window.prompt("Enter customer email:", customer.email);

    if (updatedEmail === null || !updatedEmail.trim()) {
      setOpenMenu(null);
      return;
    }

    setCustomers((prevCustomers) =>
      prevCustomers.map((item) =>
        item.id === id
          ? {
              ...item,
              customer: updatedName.trim(),
              email: updatedEmail.trim(),
            }
          : item,
      ),
    );

    setOpenMenu(null);
  };

  const handleContactCustomer = (id) => {
    const customer = Customers.find((item) => item.id === id);

    if (customer) {
      window.location.href = `mailto:${customer.email}`;
    }

    setOpenMenu(null);
  };

  const handleToggleStatus = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: customer.status === "Active" ? "Inactive" : "Active",
            }
          : customer,
      ),
    );

    setOpenMenu(null);
  };

  const handleDeleteCustomer = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this customer?",
    );

    if (!confirmed) return;

    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== id),
    );

    setOpenMenu(null);
    setCurrentPage(1);
  };

  // Export Customers

  const handleExportCustomers = () => {
    const headers = [
      "Customer ID",
      "Customer",
      "Email",
      "Phone",
      "Total Orders",
      "Total Spent",
      "Join Date",
      "Status",
    ];

    const rows = FilteredCustomers.map((customer) => [
      customer.id,
      customer.customer,
      customer.email,
      customer.phone,
      customer.totalOrders,
      customer.totalSpent,
      customer.date,
      customer.status,
    ]);

    const escapeCSV = (value) => `"${String(value).replace(/"/g, '""')}"`;

    const csvContent = [
      headers.map(escapeCSV).join(","),
      ...rows.map((row) => row.map(escapeCSV).join(",")),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "customers.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="w-full h-full min-h-0 flex flex-col overflow-hidden">
      {/* PAGE HEADER */}

      <div className="shrink-0 flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
            Customers
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage your customers and view their purchase activity.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportCustomers}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
        >
          <i className="bi bi-download"></i>
          Export Customers
        </button>
      </div>

      {/* CUSTOMERS SUMMARY */}

      <div className="shrink-0 grid grid-cols-4 gap-4 mb-5">
        {/* Total Customers */}

        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">
                Total Customers
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                {TotalCustomers}
              </h2>

              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <i className="bi bi-people"></i>
                All registered customers
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <i className="bi bi-people text-blue-500 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Active Customers */}

        <div className="flex items-start justify-between bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div>
            <p className="text-xs text-[var(--sonic-silver)]">
              Active Customers
            </p>

            <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
              {ActiveCustomers}
            </h2>

            <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Currently active
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
            <i className="bi bi-person-check text-green-500 text-lg"></i>
          </div>
        </div>

        {/* Inactive Customers */}

        <div className="flex items-start justify-between bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div>
            <p className="text-xs text-[var(--sonic-silver)]">
              Inactive Customers
            </p>

            <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
              {InactiveCustomers}
            </h2>

            <p className="text-xs text-orange-600 mt-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Currently inactive
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
            <i className="bi bi-person-dash text-orange-500 text-lg"></i>
          </div>
        </div>
      </div>

      {/* MAIN CUSTOMERS BOX */}

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
              placeholder="Search customers by ID, name, email or phone..."
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
            <option>Active</option>
            <option>Inactive</option>
          </select>

          {/* Sort */}

          <select
            value={Sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-[170px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option value="">Sort Customers</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="orders-asc">Orders: Low → High</option>
            <option value="orders-desc">Orders: High → Low</option>
            <option value="amount-asc">Spending: Low → High</option>
            <option value="amount-desc">Spending: High → Low</option>
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
                    Customer ID
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Customer
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Contact
                  </th>

                  <th className="text-center px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Total Orders
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Total Spent
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Join Date
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
                {currentCustomers.length > 0 ? (
                  currentCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="relative border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/20 transition"
                    >
                      {/* Customer ID */}

                      <td className="px-4 py-4">
                        <p className="text-xs text-[var(--sonic-silver)]">
                          {customer.id}
                        </p>
                      </td>

                      {/* Customer */}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[var(--cultured)] overflow-hidden shrink-0">
                            <img
                              src={customer.avatar}
                              alt={customer.customer}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-[var(--eerie-black)] whitespace-nowrap">
                              {customer.customer}
                            </h3>

                            <p className="text-xs text-[var(--sonic-silver)] mt-1">
                              {customer.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}

                      <td className="px-4 py-4">
                        <div>
                          <p className="text-sm text-[var(--eerie-black)]">
                            {customer.phone}
                          </p>

                          <p className="text-xs text-[var(--sonic-silver)] mt-1">
                            {customer.email}
                          </p>
                        </div>
                      </td>

                      {/* Total Orders */}

                      <td className="px-4 py-4 text-center">
                        <span className="text-sm text-[var(--eerie-black)]">
                          {customer.totalOrders}
                        </span>
                      </td>

                      {/* Total Spent */}

                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold text-[var(--eerie-black)] whitespace-nowrap">
                          $
                          {customer.totalSpent.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </td>

                      {/* Join Date */}

                      <td className="px-4 py-4 whitespace-nowrap">
                        <p className="text-sm text-[var(--eerie-black)]">
                          {customer.date}
                        </p>
                      </td>

                      {/* Status */}

                      <td className="px-4 py-4">
                        {customer.status === "Active" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Active
                          </span>
                        )}

                        {customer.status === "Inactive" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Inactive
                          </span>
                        )}
                      </td>

                      {/* Action Menu */}

                      <td className="relative group flex justify-end px-4">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMenu(
                              OpenMenu === customer.id ? null : customer.id,
                            )
                          }
                          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
                          title="More"
                        >
                          <i className="bi bi-three-dots-vertical text-lg"></i>
                        </button>

                        <div
                          className={`absolute right-0 top-10 z-30 w-48 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-1 ${
                            OpenMenu === customer.id
                              ? "block"
                              : "hidden group-hover:block"
                          }`}
                        >
                          {/* View Customer */}

                          <button
                            type="button"
                            onClick={() => handleViewCustomer(customer.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-eye"></i>
                            View Customer
                          </button>

                          {/* Edit Customer */}

                          <button
                            type="button"
                            onClick={() => handleEditCustomer(customer.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-pencil-square"></i>
                            Edit Customer
                          </button>

                          {/* Contact Customer */}

                          <button
                            type="button"
                            onClick={() => handleContactCustomer(customer.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i className="bi bi-chat-dots"></i>
                            Contact Customer
                          </button>

                          {/* Update Status */}

                          <div className="my-1 border-t border-[var(--cultured)]"></div>

                          <button
                            type="button"
                            onClick={() => handleToggleStatus(customer.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                          >
                            <i
                              className={`bi ${
                                customer.status === "Active"
                                  ? "bi-person-dash"
                                  : "bi-person-check"
                              }`}
                            ></i>

                            {customer.status === "Active"
                              ? "Set Inactive"
                              : "Set Active"}
                          </button>

                          {/* Delete Customer */}

                          <button
                            type="button"
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
                          >
                            <i className="bi bi-trash3"></i>
                            Delete Customer
                          </button>
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
                      No customers found.
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
            Showing {showingFrom}–{showingTo} of {FilteredCustomers.length}{" "}
            customers
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
