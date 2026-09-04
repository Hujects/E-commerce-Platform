import Header from "../../components/header/Header";

export default function Product() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Header */}
      <Header />

      <main className="w-full max-w-[var(--max-width)] py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-5 text-[length:var(--fs-7)] text-[var(--sonic-silver)] pt-[40px]">
          <a href="#" className="hover:text-[var(--primary)]">
            Home
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Categories
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Electronics
          </a>

          <span>›</span>

          <a href="#" className="hover:text-[var(--primary)]">
            Headphones
          </a>

          <span>›</span>

          <span className="text-[var(--primary)] font-medium">
            Anon Wireless Headphones
          </span>
        </div>

        {/* Product Overview */}
        <div className="w-full flex gap-[40px]">
          {/* ================= Product Gallery */}
          <div className="w-1/2 flex flex-col gap-5">
            {/* Main Product Image */}
            <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl overflow-hidden bg-[var(--cultured)]">
              {/* Discount Badge */}
              <span className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-[var(--border-radius-small)] bg-[var(--primary)] text-[var(--white)] text-[length:var(--fs-8)] font-[var(--weight-600)] tracking-wide">
                -20%
              </span>

              {/* Product Image */}
              <img
                className="w-[90%] h-[90%] object-contain"
                src="/jewellery-1.jpg"
                alt="Anon Wireless Headphones"
              />

              {/* Expand Button */}
              <button className="absolute bottom-5 right-5 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--white)] shadow-md text-[var(--onyx)] hover:text-[var(--primary)] hover:shadow-lg transition-all duration-[var(--transition-timing)] cursor-pointer">
                <i className="bi bi-arrows-fullscreen"></i>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {/* Active Thumbnail */}
              <img
                className="w-[90px] h-[90px] object-contain rounded-2xl border-[3px] border-[var(--primary)] shadow-[0_0_10px_rgba(255,143,156,0.35)] cursor-pointer"
                src="/jewellery-1.jpg"
                alt="Product"
              />

              {/* Inactive Thumbnail */}
              <img
                className="w-[90px] h-[90px] object-contain rounded-2xl border-2 border-[var(--cultured)] opacity-60 hover:opacity-100 hover:border-[var(--primary)] hover:shadow-[0_0_8px_rgba(255,143,156,0.3)] transition-all duration-[var(--transition-timing)] cursor-pointer"
                src="/jewellery-1.jpg"
                alt="Product"
              />

              {/* Inactive Thumbnail */}
              <img
                className="w-[90px] h-[90px] object-contain rounded-2xl border-2 border-[var(--cultured)] opacity-60 hover:opacity-100 hover:border-[var(--primary)] hover:shadow-[0_0_8px_rgba(255,143,156,0.3)] transition-all duration-[var(--transition-timing)] cursor-pointer"
                src="/jewellery-1.jpg"
                alt="Product"
              />

              {/* Inactive Thumbnail */}
              <img
                className="w-[90px] h-[90px] object-contain rounded-2xl border-2 border-[var(--cultured)] opacity-60 hover:opacity-100 hover:border-[var(--primary)] hover:shadow-[0_0_8px_rgba(255,143,156,0.3)] transition-all duration-[var(--transition-timing)] cursor-pointer"
                src="/jewellery-1.jpg"
                alt="Product"
              />
            </div>
          </div>

          {/*  Product Information */}
          <div className="w-1/2 flex flex-col pt-2">
            {/* Best Seller */}
            <div className="flex items-center gap-1.5 mb-2 text-[var(--sandy-brown)] text-[length:var(--fs-8)] font-[var(--weight-600)]">
              <i className="bi bi-star-fill"></i>
              <span>Best Seller</span>
            </div>

            {/* Product Title */}
            <h1 className="text-[length:var(--fs-1)] text-[var(--eerie-black)] font-[var(--weight-700)] mb-3 leading-snug">
              Anon Wireless Headphones
            </h1>
            {/* Description */}
            <p className="max-w-[550px] text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.7] mb-5">
              Experience premium sound quality with advanced noise cancellation,
              all-day comfort and long battery life. Perfect for music, calls
              and gaming.
            </p>
            {/* Price */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <span className="text-[length:var(--fs-3)] text-[var(--bittersweet)] font-[var(--weight-700)]">
                $79.99
              </span>

              <del className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                $99.99
              </del>

              <span className="px-2 py-1 rounded-[var(--border-radius-small)] bg-[#fff0f1] text-[length:var(--fs-9)] text-[var(--bittersweet)] font-medium">
                -20%
              </span>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[var(--sandy-brown)]">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>

              <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)] font-[var(--weight-600)]">
                4.8
              </span>

              <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                (128 reviews)
              </span>

              <span className="text-[var(--cultured)]">|</span>

              <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                356 sold
              </span>
            </div>
            {/* Stock*/}
            <div className="flex items-center justify-between mt-5 mb-1">
              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                  Availability:
                </span>

                <span className="flex items-center gap-1 text-[length:var(--fs-8)] text-[var(--ocean-green)] font-[var(--weight-600)]">
                  <i className="bi bi-check-circle-fill"></i>
                  In Stock
                </span>
              </div>

              {/* Stock Count */}
              <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                24 items available
              </span>
            </div>
            {/* Quantity */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)] font-[var(--weight-600)]">
                Quantity:
              </span>

              <div className="flex items-center border border-[var(--cultured)] rounded-[var(--border-radius-small)] overflow-hidden">
                <button
                  type="button"
                  className="w-[35px] h-[35px] flex items-center justify-center text-[var(--davys-gray)] hover:bg-[var(--cultured)] hover:text-[var(--primary)] transition-all duration-[var(--transition-timing)] cursor-pointer"
                >
                  <i className="bi bi-dash"></i>
                </button>

                <span className="w-[40px] h-[35px] flex items-center justify-center border-x border-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--onyx)] font-[var(--weight-600)]">
                  1
                </span>

                <button
                  type="button"
                  className="w-[35px] h-[35px] flex items-center justify-center text-[var(--davys-gray)] hover:bg-[var(--cultured)] hover:text-[var(--primary)] transition-all duration-[var(--transition-timing)] cursor-pointer"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
            {/* Product Author */}
            <div className="w-full flex justify-start items-center gap-2">
              <img className="h-8 w-8 rounded-3xl" src="/favicon.png" alt="" />
              <a className="text-[var(--sonic-silver)] text-[length:var(--fs-7)] ">
                Author Name
              </a>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <button className="h-[45px] flex items-center justify-center gap-2 rounded-[var(--border-radius-small)] border border-[var(--primary)] bg-[var(--primary)] text-[var(--white)] text-[length:var(--fs-7)] font-[var(--weight-600)] transition-all duration-[var(--transition-timing)] hover:opacity-90 hover:shadow-[0_4px_12px_rgba(255,143,156,0.4)] cursor-pointer">
                <i className="bi bi-cart3"></i>
                Add to Cart
              </button>

              <button className="h-[45px] rounded-[var(--border-radius-small)] border border-[var(--primary)] bg-[var(--white)] text-[var(--primary)] text-[length:var(--fs-7)] font-[var(--weight-600)] transition-all duration-[var(--transition-timing)] hover:bg-[var(--primary)] hover:text-[var(--white)] hover:shadow-[0_4px_12px_rgba(255,143,156,0.4)] cursor-pointer">
                Buy Now
              </button>
            </div>

            {/* Wishlist */}
            <button className="w-fit flex items-center gap-2 mt-4 text-[length:var(--fs-8)] text-[var(--davys-gray)] hover:text-[var(--primary)] transition-colors duration-[var(--transition-timing)] cursor-pointer">
              <i className="bi bi-heart"></i>
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
        {/* product details */}
        <div className="">
            {/* product gellary */}
            <div></div>
            {/* product long description */}
            <div></div>
            {/* product review */}
            <div></div>
        </div>
        {/* Related product */}
        <div>
          
        </div>
      </main>
    </section>
  );
}
