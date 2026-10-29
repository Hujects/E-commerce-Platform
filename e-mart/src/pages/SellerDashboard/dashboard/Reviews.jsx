import { useEffect, useState } from "react";

const reviewsData = [
  {
    id: "#REV-1001",
    customer: "John Doe",
    email: "john@example.com",
    avatar: "/1.jpg",
    product: "Men's Casual Jacket",
    productImage: "/jacket-1.jpg",
    rating: 5,
    review: "Excellent quality and comfortable to wear. Highly recommended!",
    date: "Oct 02, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1002",
    customer: "Sarah Smith",
    email: "sarah@example.com",
    avatar: "/2.jpg",
    product: "Classic White Sneakers",
    productImage: "/sports-1.jpg",
    rating: 4,
    review: "Good product overall. Delivery was a little late.",
    date: "Oct 01, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    avatar: "/3.jpg",
    product: "Premium Cotton T-Shirt",
    productImage: "/shirt-1.jpg",
    rating: 3,
    review: "Average quality. The fabric could be better.",
    date: "Sep 30, 2026",
    status: "Pending",
  },
  {
    id: "#REV-1004",
    customer: "Emily Johnson",
    email: "emily@example.com",
    avatar: "/4.jpg",
    product: "Women's Handbag",
    productImage: "/bag-1.jpg",
    rating: 5,
    review: "Beautiful design and excellent finishing.",
    date: "Sep 29, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1005",
    customer: "David Wilson",
    email: "david@example.com",
    avatar: "/1.jpg",
    product: "Running Sports Shoes",
    productImage: "/sports-2.jpg",
    rating: 2,
    review: "The size was not as expected.",
    date: "Sep 28, 2026",
    status: "Rejected",
  },
  {
    id: "#REV-1006",
    customer: "Olivia Davis",
    email: "olivia@example.com",
    avatar: "/2.jpg",
    product: "Casual Denim Jeans",
    productImage: "/jeans-1.jpg",
    rating: 4,
    review: "Nice fit and good material for the price.",
    date: "Sep 27, 2026",
    status: "Pending",
  },
  {
    id: "#REV-1007",
    customer: "James Miller",
    email: "james@example.com",
    avatar: "/3.jpg",
    product: "Leather Wallet",
    productImage: "/wallet-1.jpg",
    rating: 5,
    review: "Compact, stylish and very useful.",
    date: "Sep 26, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1008",
    customer: "Sophia Anderson",
    email: "sophia@example.com",
    avatar: "/4.jpg",
    product: "Women's Summer Dress",
    productImage: "/dress-1.jpg",
    rating: 4,
    review: "Lovely color and comfortable fabric.",
    date: "Sep 25, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1009",
    customer: "William Thomas",
    email: "william@example.com",
    avatar: "/1.jpg",
    product: "Wireless Headphones",
    productImage: "/watch-1.jpg",
    rating: 1,
    review: "The product did not meet my expectations.",
    date: "Sep 24, 2026",
    status: "Pending",
  },
  {
    id: "#REV-1010",
    customer: "Mia Taylor",
    email: "mia@example.com",
    avatar: "/2.jpg",
    product: "Classic Sunglasses",
    productImage: "/jewellery-1.jpg",
    rating: 5,
    review: "Great design and excellent value.",
    date: "Sep 23, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1011",
    customer: "Noah Anderson",
    email: "noah@example.com",
    avatar: "/3.jpg",
    product: "Men's Casual Shirt",
    productImage: "/shirt-2.jpg",
    rating: 3,
    review: "The product is fine, but shipping took longer.",
    date: "Sep 22, 2026",
    status: "Pending",
  },
  {
    id: "#REV-1012",
    customer: "Isabella Moore",
    email: "isabella@example.com",
    avatar: "/4.jpg",
    product: "Travel Backpack",
    productImage: "/bag-2.jpg",
    rating: 5,
    review: "Spacious and perfect for everyday use.",
    date: "Sep 21, 2026",
    status: "Approved",
  },
  {
    id: "#REV-1013",
    customer: "Daniel Clark",
    email: "daniel@example.com",
    avatar: "/3.jpg",
    product: "Men's Running Shoes",
    productImage: "/sports-3.jpg",
    rating: 4,
    review: "Comfortable for daily walking and running.",
    date: "Sep 20, 2026",
    status: "Pending",
  },
  {
    id: "#REV-1014",
    customer: "Ava Martin",
    email: "ava@example.com",
    avatar: "/2.jpg",
    product: "Women's Handbag",
    productImage: "/bag-1.jpg",
    rating: 2,
    review: "The color was slightly different from the photos.",
    date: "Sep 19, 2026",
    status: "Rejected",
  },
  {
    id: "#REV-1015",
    customer: "Lucas Harris",
    email: "lucas@example.com",
    avatar: "/1.jpg",
    product: "Premium Cotton T-Shirt",
    productImage: "/shirt-1.jpg",
    rating: 5,
    review: "Very comfortable and exactly what I expected.",
    date: "Sep 18, 2026",
    status: "Approved",
  },
];

export default function Reviews() {
  const [Reviews, setReviews] = useState(reviewsData);
  const [Search, setSearch] = useState("");
  const [Status, setStatus] = useState("All Status");
  const [Rating, setRating] = useState("All Ratings");
  const [Sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [OpenMenu, setOpenMenu] = useState(null);
  const [SelectedReview, setSelectedReview] = useState(null);

  const reviewsPerPage = 10;

  // Filter + Search + Sort

  const FilteredReviews = Reviews.filter((review) => {
    const searchValue = Search.toLowerCase();

    const matchSearch =
      review.id.toLowerCase().includes(searchValue) ||
      review.customer.toLowerCase().includes(searchValue) ||
      review.email.toLowerCase().includes(searchValue) ||
      review.product.toLowerCase().includes(searchValue) ||
      review.review.toLowerCase().includes(searchValue);

    const matchStatus =
      Status === "All Status" || review.status === Status;

    const matchRating =
      Rating === "All Ratings" ||
      review.rating === Number(Rating);

    return matchSearch && matchStatus && matchRating;
  }).sort((a, b) => {
    if (Sort === "newest") return b.id.localeCompare(a.id);
    if (Sort === "oldest") return a.id.localeCompare(b.id);
    if (Sort === "rating-high") return b.rating - a.rating;
    if (Sort === "rating-low") return a.rating - b.rating;

    return 0;
  });

  // Pagination

  const totalPages = Math.ceil(FilteredReviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const currentReviews = FilteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );

  const showingFrom =
    FilteredReviews.length === 0 ? 0 : indexOfFirstReview + 1;

  const showingTo = Math.min(
    indexOfLastReview,
    FilteredReviews.length,
  );

  // Review Summary

  const TotalReviews = Reviews.length;

  const ApprovedReviews = Reviews.filter(
    (review) => review.status === "Approved",
  ).length;

  const PendingReviews = Reviews.filter(
    (review) => review.status === "Pending",
  ).length;

  const RejectedReviews = Reviews.filter(
    (review) => review.status === "Rejected",
  ).length;

  const AverageRating =
    Reviews.length > 0
      ? Reviews.reduce((total, review) => total + review.rating, 0) /
        Reviews.length
      : 0;

  // Action Handlers

  const handleViewReview = (review) => {
    setSelectedReview(review);
    setOpenMenu(null);
  };

  const handleUpdateStatus = (id, status) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, status } : review,
      ),
    );

    setOpenMenu(null);
    setSelectedReview(null);
  };

  const handleDeleteReview = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?",
    );

    if (!confirmed) return;

    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id),
    );

    setOpenMenu(null);
    setSelectedReview(null);
    setCurrentPage(1);
  };

  // Export Reviews

  const handleExportReviews = () => {
    const headers = [
      "Review ID",
      "Customer",
      "Email",
      "Product",
      "Rating",
      "Review",
      "Date",
      "Status",
    ];

    const escapeCSV = (value) =>
      `"${String(value).replace(/"/g, '""')}"`;

    const rows = FilteredReviews.map((review) => [
      review.id,
      review.customer,
      review.email,
      review.product,
      review.rating,
      review.review,
      review.date,
      review.status,
    ]);

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
    link.download = "reviews.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  // Reset Page When Filtering

  useEffect(() => {
    setCurrentPage(1);
  }, [Search, Status, Rating, Sort]);

  return (
    <section className="w-full h-full min-h-0 flex flex-col overflow-hidden">
      {/* PAGE HEADER */}

      <div className="shrink-0 flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--eerie-black)]">
            Reviews
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Manage customer reviews, ratings and product feedback.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportReviews}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
        >
          <i className="bi bi-download"></i>
          Export Reviews
        </button>
      </div>

      {/* SUMMARY CARDS */}

      <div className="shrink-0 grid grid-cols-4 gap-4 mb-5">
        {/* Total Reviews */}

        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">
                Total Reviews
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                {TotalReviews}
              </h2>

              <p className="text-xs text-blue-600 mt-3 flex items-center gap-1">
                <i className="bi bi-chat-square-text"></i>
                All customer reviews
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <i className="bi bi-chat-square-text text-blue-500 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Average Rating */}

        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">
                Average Rating
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                {AverageRating.toFixed(1)}
                <span className="text-sm font-normal text-[var(--sonic-silver)]">
                  {" "}
                  / 5
                </span>
              </h2>

              <div className="flex items-center gap-0.5 mt-3 text-amber-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`bi ${
                      index < Math.round(AverageRating)
                        ? "bi-star-fill"
                        : "bi-star"
                    } text-xs`}
                  ></i>
                ))}
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <i className="bi bi-star-fill text-amber-500 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Pending Reviews */}

        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">
                Pending Reviews
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                {PendingReviews}
              </h2>

              <p className="text-xs text-orange-600 mt-3 flex items-center gap-1">
                <i className="bi bi-clock"></i>
                Awaiting moderation
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
              <i className="bi bi-hourglass-split text-orange-500 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Approved Reviews */}

        <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--sonic-silver)]">
                Approved Reviews
              </p>

              <h2 className="text-2xl font-semibold text-[var(--eerie-black)] mt-2">
                {ApprovedReviews}
              </h2>

              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <i className="bi bi-check-circle"></i>
                Published reviews
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <i className="bi bi-patch-check text-green-500 text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN REVIEWS BOX */}

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
              placeholder="Search by review ID, customer or product..."
              className="w-full h-11 pl-11 pr-4 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] focus:border-[var(--primary)]"
            />
          </div>

          {/* Status Filter */}

          <select
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-[155px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

          {/* Rating Filter */}

          <select
            value={Rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-[145px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option>All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Sort */}

          <select
            value={Sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-[155px] h-11 px-3 border border-[var(--cultured)] rounded-lg outline-none text-sm text-[var(--eerie-black)] bg-[var(--white)] focus:border-[var(--primary)]"
          >
            <option value="">Sort Reviews</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="rating-high">Highest Rating</option>
            <option value="rating-low">Lowest Rating</option>
          </select>
        </div>

        {/* TABLE */}

        <div className="flex-1 min-h-0 overflow-hidden border-t border-[var(--cultured)]">
          <div className="h-full overflow-auto">
            <table className="w-full min-w-[1150px] border-collapse">
              {/* TABLE HEADER */}

              <thead className="sticky top-0 z-10 bg-[var(--white)]">
                <tr className="bg-[var(--cultured)]/40 border-b border-[var(--cultured)]">
                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Review ID
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Customer
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Product
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Rating
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Review
                  </th>

                  <th className="text-left px-4 py-4 text-xs font-semibold text-[var(--sonic-silver)] uppercase">
                    Date
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
                {currentReviews.length > 0 ? (
                  currentReviews.map((review) => (
                    <tr
                      key={review.id}
                      className="border-b border-[var(--cultured)] last:border-b-0 hover:bg-[var(--cultured)]/20 transition"
                    >
                      {/* Review ID */}

                      <td className="px-4 py-4">
                        <p className="text-xs text-[var(--sonic-silver)] whitespace-nowrap">
                          {review.id}
                        </p>
                      </td>

                      {/* Customer */}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[var(--cultured)] overflow-hidden shrink-0">
                            <img
                              src={review.avatar}
                              alt={review.customer}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-[var(--eerie-black)] whitespace-nowrap">
                              {review.customer}
                            </h3>

                            <p className="text-xs text-[var(--sonic-silver)] mt-1">
                              {review.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Product */}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--cultured)] overflow-hidden shrink-0">
                            <img
                              src={review.productImage}
                              alt={review.product}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <p className="text-sm text-[var(--eerie-black)] whitespace-nowrap">
                            {review.product}
                          </p>
                        </div>
                      </td>

                      {/* Rating */}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-0.5 text-amber-500 whitespace-nowrap">
                          {Array.from({ length: 5 }, (_, index) => (
                            <i
                              key={index}
                              className={`bi ${
                                index < review.rating
                                  ? "bi-star-fill"
                                  : "bi-star"
                              } text-xs`}
                            ></i>
                          ))}

                          <span className="text-xs text-[var(--sonic-silver)] ml-1">
                            ({review.rating})
                          </span>
                        </div>
                      </td>

                      {/* Review Text */}

                      <td className="px-4 py-4 max-w-[240px]">
                        <p
                          title={review.review}
                          className="text-sm text-[var(--sonic-silver)] line-clamp-2"
                        >
                          {review.review}
                        </p>
                      </td>

                      {/* Date */}

                      <td className="px-4 py-4 whitespace-nowrap">
                        <p className="text-sm text-[var(--eerie-black)]">
                          {review.date}
                        </p>
                      </td>

                      {/* Status */}

                      <td className="px-4 py-4">
                        {review.status === "Approved" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Approved
                          </span>
                        )}

                        {review.status === "Pending" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Pending
                          </span>
                        )}

                        {review.status === "Rejected" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            Rejected
                          </span>
                        )}
                      </td>

                      {/* ACTION MENU */}

                      <td className="relative px-4 py-3 text-right">
                        <div className="relative inline-block">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenu(
                                OpenMenu === review.id ? null : review.id,
                              )
                            }
                            className="w-9 h-9 inline-flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
                            title="More actions"
                          >
                            <i className="bi bi-three-dots-vertical text-lg"></i>
                          </button>

                          {OpenMenu === review.id && (
                            <div className="absolute right-0 top-10 z-30 w-48 bg-[var(--white)] border border-[var(--cultured)] rounded-lg shadow-lg p-1">
                              <button
                                type="button"
                                onClick={() => handleViewReview(review)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
                              >
                                <i className="bi bi-eye"></i>
                                View Review
                              </button>

                              {review.status !== "Approved" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleUpdateStatus(review.id, "Approved")
                                  }
                                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-green-600 hover:bg-green-50 transition"
                                >
                                  <i className="bi bi-check-circle"></i>
                                  Approve Review
                                </button>
                              )}

                              {review.status !== "Rejected" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleUpdateStatus(review.id, "Rejected")
                                  }
                                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-orange-600 hover:bg-orange-50 transition"
                                >
                                  <i className="bi bi-x-circle"></i>
                                  Reject Review
                                </button>
                              )}

                              <div className="my-1 border-t border-[var(--cultured)]"></div>

                              <button
                                type="button"
                                onClick={() => handleDeleteReview(review.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-500 hover:bg-red-50 transition"
                              >
                                <i className="bi bi-trash3"></i>
                                Delete Review
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
                      <div className="flex flex-col items-center gap-3">
                        <i className="bi bi-chat-square-text text-3xl"></i>
                        <p>No reviews found.</p>
                      </div>
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
            Showing {showingFrom}–{showingTo} of {FilteredReviews.length}{" "}
            reviews
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-[var(--sonic-silver)] hover:bg-[var(--cultured)] transition ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || totalPages === 0}
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

      {/* VIEW REVIEW MODAL */}

      {SelectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="w-full max-w-lg bg-[var(--white)] rounded-xl shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}

            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-semibold text-[var(--eerie-black)]">
                  Review Details
                </h2>

                <p className="text-sm text-[var(--sonic-silver)] mt-1">
                  {SelectedReview.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--cultured)] transition"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* Customer */}

            <div className="flex items-center gap-3 pb-5 border-b border-[var(--cultured)]">
              <div className="w-12 h-12 rounded-full bg-[var(--cultured)] overflow-hidden">
                <img
                  src={SelectedReview.avatar}
                  alt={SelectedReview.customer}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[var(--eerie-black)]">
                  {SelectedReview.customer}
                </h3>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  {SelectedReview.email}
                </p>
              </div>
            </div>

            {/* Product */}

            <div className="flex items-center gap-3 py-5 border-b border-[var(--cultured)]">
              <div className="w-14 h-14 rounded-lg bg-[var(--cultured)] overflow-hidden">
                <img
                  src={SelectedReview.productImage}
                  alt={SelectedReview.product}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs text-[var(--sonic-silver)]">Product</p>

                <h3 className="text-sm font-medium text-[var(--eerie-black)] mt-1">
                  {SelectedReview.product}
                </h3>

                <div className="flex items-center gap-0.5 mt-2 text-amber-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <i
                      key={index}
                      className={`bi ${
                        index < SelectedReview.rating
                          ? "bi-star-fill"
                          : "bi-star"
                      } text-sm`}
                    ></i>
                  ))}

                  <span className="text-xs text-[var(--sonic-silver)] ml-1">
                    {SelectedReview.rating}/5
                  </span>
                </div>
              </div>
            </div>

            {/* Review Content */}

            <div className="py-5">
              <p className="text-xs font-semibold text-[var(--sonic-silver)] uppercase mb-2">
                Customer Feedback
              </p>

              <p className="text-sm leading-6 text-[var(--eerie-black)]">
                {SelectedReview.review}
              </p>

              <p className="text-xs text-[var(--sonic-silver)] mt-4">
                Submitted on {SelectedReview.date}
              </p>
            </div>

            {/* Status */}

            <div className="flex items-center justify-between py-4 border-t border-[var(--cultured)]">
              <span className="text-sm text-[var(--sonic-silver)]">
                Current Status
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  SelectedReview.status === "Approved"
                    ? "bg-green-100 text-green-600"
                    : SelectedReview.status === "Pending"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {SelectedReview.status}
              </span>
            </div>

            {/* Modal Actions */}

            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="h-10 px-4 rounded-lg border border-[var(--cultured)] text-sm text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
              >
                Close
              </button>

              {SelectedReview.status !== "Approved" && (
                <button
                  type="button"
                  onClick={() =>
                    handleUpdateStatus(SelectedReview.id, "Approved")
                  }
                  className="h-10 px-4 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
                >
                  <i className="bi bi-check-lg mr-2"></i>
                  Approve
                </button>
              )}

              {SelectedReview.status !== "Rejected" && (
                <button
                  type="button"
                  onClick={() =>
                    handleUpdateStatus(SelectedReview.id, "Rejected")
                  }
                  className="h-10 px-4 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
                >
                  <i className="bi bi-x-lg mr-2"></i>
                  Reject
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}