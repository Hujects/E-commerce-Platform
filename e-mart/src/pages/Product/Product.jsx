import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Description from "./ProductDetails/Description";
import Shiping from "./ProductDetails/ShipingAndReturn";
import ProductGallery from "./ProductDetails/ProductGallery";
import KeyFeatures from "./ProductDetails/KeyFeatures";
import Specifications from "./ProductDetails/Specifications";
import WhatsIncluded from "./ProductDetails/WhatsIncluded";
import Compatibility from "./ProductDetails/Compatibility";
import WarrantyAndSupport from "./ProductDetails/WarrantyAndSupport";
import MainProductCard from "../../components/UIKIT/MainProductCard";

let imgs = ["sports-3.jpg", "/jewellery-1.jpg", "watch-2.jpg", "shirt-1.jpg"];

export default function Product() {
  let [productDetailMenu, setproductDetailMenu] = useState("Description");
  let [ProductQuantity, setProductQuantity] = useState(1);
  let [imgPreview, setImgPreview] = useState(false);
  let [CurrentPreview, setCurrentPreview] = useState(imgs[0]);
  let ProductDetailsMenus = [
    "Description",
    "Shiping",
    "Product Gallery",
    "Key Features",
    "Specifications",
    "Whats Included",
    "Compatibility",
    "Warranty & Support",
  ];
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setImgPreview(false);
      }
      const CurrentPreviwimg = imgs.indexOf(CurrentPreview);

      if (event.key === "ArrowLeft") {
        if (CurrentPreviwimg > 0) {
          setCurrentPreview(imgs[CurrentPreviwimg - 1]);
        }
      }
      if (event.key === "ArrowRight") {
        if (imgs.length - 1 > CurrentPreviwimg) {
          setCurrentPreview(imgs[CurrentPreviwimg + 1]);
        }
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [CurrentPreview]);
  return (
    <section className="w-full flex flex-col items-center relative">
      {imgPreview && (
        <div
          className="fixed inset-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.85)] flex items-center justify-center"
          onClick={() => setImgPreview(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setImgPreview(false)}
            className="absolute top-5 right-5 w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[var(--white)] text-[var(--onyx)] hover:text-[var(--primary)] hover:shadow-lg transition-all duration-[var(--transition-timing)] cursor-pointer z-10"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="w-1/2 flex flex-col gap-5">
            {/* Main Product Image */}
            <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl overflow-hidden bg-[var(--cultured)]">
              {/* Discount Badge */}
              <span className="z-10 absolute top-5 left-5 z-20 px-3 py-1.5 rounded-[var(--border-radius-small)] bg-[var(--primary)] text-[var(--white)] text-[length:var(--fs-8)] font-[var(--weight-600)] tracking-wide">
                -20%
              </span>

              {/* Product Image */}
              <img
                className="w-[90%] h-[90%] object-contain"
                src={CurrentPreview}
                alt="Anon Wireless Headphones"
              />

              {/* Expand Button */}
              <button
                onClick={() => {
                  setImgPreview(true);
                }}
                className="absolute bottom-5 right-5 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--white)] shadow-md text-[var(--onyx)] hover:text-[var(--primary)] hover:shadow-lg transition-all duration-[var(--transition-timing)] cursor-pointer"
              >
                <i className="bi bi-arrows-fullscreen"></i>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {imgs.map((img) => {
                return (
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPreview(img);
                    }}
                    className={`w-[90px] h-[90px] object-contain rounded-2xl ${CurrentPreview == img ? "border-[3px] border-[var(--primary)] opacity-60" : "border-3 border-[var(--cultured)] hover:opacity-100 hover:border-[var(--primary)] hover:shadow-[0_0_8px_rgba(255,143,156,0.3)] transition-all duration-[var(--transition-timing)] "} cursor-pointer`}
                    src={img}
                    alt="Product"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <Header />
      <main className="w-full max-w-[var(--max-width)] py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-5 text-[length:var(--fs-7)] text-[var(--sonic-silver)] pb-[40px]">
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
          {/* Product Gallery */}
          <div className="w-1/2 flex flex-col gap-5">
            {/* Main Product Image */}
            <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl overflow-hidden bg-[var(--cultured)]">
              {/* Discount Badge */}
              <span className="z-10 absolute top-5 left-5 z-20 px-3 py-1.5 rounded-[var(--border-radius-small)] bg-[var(--primary)] text-[var(--white)] text-[length:var(--fs-8)] font-[var(--weight-600)] tracking-wide">
                -20%
              </span>

              {/* Product Image */}
              <img
                className="w-[90%] h-[90%] object-contain"
                src={CurrentPreview}
                alt="Anon Wireless Headphones"
              />

              {/* Expand Button */}
              <button
                onClick={() => {
                  setImgPreview(true);
                }}
                className="absolute bottom-5 right-5 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--white)] shadow-md text-[var(--onyx)] hover:text-[var(--primary)] hover:shadow-lg transition-all duration-[var(--transition-timing)] cursor-pointer"
              >
                <i className="bi bi-arrows-fullscreen"></i>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {imgs.map((img) => {
                return (
                  <img
                    onClick={() => {
                      setCurrentPreview(img);
                    }}
                    className={`w-[90px] h-[90px] object-contain rounded-2xl ${CurrentPreview == img ? "border-[3px] border-[var(--primary)] opacity-60" : "border-3 border-[var(--cultured)] hover:opacity-100 hover:border-[var(--primary)] hover:shadow-[0_0_8px_rgba(255,143,156,0.3)] transition-all duration-[var(--transition-timing)] "} cursor-pointer`}
                    src={img}
                    alt="Product"
                  />
                );
              })}
            </div>
          </div>

          {/*  Product Information */}
          <div className="w-1/2 flex flex-col gap-4 pt-2">
            {/* Best Seller */}
            <div className="flex items-center gap-1.5 text-[var(--sandy-brown)] text-[length:var(--fs-8)] font-[var(--weight-600)]">
              <i className="bi bi-star-fill"></i>
              <span>Best Seller</span>
            </div>

            {/* Product Title */}
            <h1 className="text-[length:var(--fs-1)] text-[var(--eerie-black)] font-[var(--weight-700)] leading-snug">
              Anon Wireless Headphones
            </h1>
            {/* Description */}
            <p className="max-w-[550px] text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.7] ">
              Experience premium sound quality with advanced noise cancellation,
              all-day comfort and long battery life. Perfect for music, calls
              and gaming.
            </p>
            {/* Price */}
            <div className="flex items-center gap-3 ">
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
            <div className="flex items-center justify-between">
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
            <div className="flex items-center gap-4">
              <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)] font-[var(--weight-600)]">
                Quantity:
              </span>

              <div className="flex items-center border border-[var(--cultured)] rounded-[var(--border-radius-small)] overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    ProductQuantity > 1
                      ? setProductQuantity(ProductQuantity - 1)
                      : null
                  }
                  className={`w-[35px] h-[35px] flex items-center justify-center text-[var(--davys-gray)] hover:bg-[var(--cultured)] hover:text-[var(--primary)] transition-all duration-[var(--transition-timing)] ${ProductQuantity == 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <i className="bi bi-dash"></i>
                </button>

                <span className="w-[40px] h-[35px] flex items-center justify-center border-x border-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--onyx)] font-[var(--weight-600)]">
                  {ProductQuantity}
                </span>

                <button
                  type="button"
                  onClick={() => setProductQuantity(ProductQuantity + 1)}
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
            <div className="grid grid-cols-2 gap-3">
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
        {/* Product Additional Details */}
        <div className="w-full mt-[60px]">
          {/* Product Details Navigation */}
          <div className="flex items-center gap-8 border-b border-[var(--cultured)]">
            {ProductDetailsMenus.map((Menu) => {
              return (
                <button
                  key={Menu}
                  onClick={() => {
                    setproductDetailMenu(Menu);
                  }}
                  className={`pb-4 text-[length:var(--fs-6)] font-[var(--weight-600)] ${productDetailMenu == Menu ? "border-b-2 border-[var(--primary)] text-[var(--primary)]" : "text-[var(--sonic-silver)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:border-b-2 hover:text-[var(--primary)]"} cursor-pointer`}
                >
                  {Menu}
                </button>
              );
            })}
          </div>
          <div className="w-full py-8 border-t border-[var(--cultured)]">
            {productDetailMenu === "Description" ? <Description /> : ""}
            {productDetailMenu === "Shiping" ? <Shiping /> : ""}
            {productDetailMenu === "Product Gallery" ? <ProductGallery /> : ""}
            {productDetailMenu === "Key Features" ? <KeyFeatures /> : ""}
            {productDetailMenu === "Specifications" ? <Specifications /> : ""}
            {productDetailMenu === "Whats Included" ? <WhatsIncluded /> : ""}
            {productDetailMenu === "Compatibility" ? <Compatibility /> : ""}
            {productDetailMenu === "Warranty & Support" ? (
              <WarrantyAndSupport />
            ) : (
              ""
            )}
          </div>

          {/*  Product Reviews  */}
          <div className="border-t border-[var(--cultured)] py-8">
            <h2 className="text-[length:var(--fs-3)] text-[var(--eerie-black)] font-[var(--weight-700)] mb-6">
              Customer Reviews
            </h2>

            <div className="flex gap-10 w-full">
              {/* Rating Summary */}
              <div className="w-[220px] h-[135px] flex flex-col items-center justify-center border border-[var(--cultured)] rounded-[var(--border-radius-medium)] p-6">
                <span className="text-[length:var(--fs-1)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                  4.8
                </span>

                <div className="flex gap-1 text-[var(--sandy-brown)] my-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>

                <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                  128 Reviews
                </span>
              </div>

              {/* Review */}
              <div className="flex flex-col gap-8 w-full">
                <div className="border-b border-[var(--cultured)] pb-5 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--eerie-black)] text-[var(--primary)] flex items-center justify-center font-[var(--weight-700)]">
                        AR
                      </div>

                      <span className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                        Alex Rahimox
                      </span>
                    </div>

                    <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                      3.5 days ago
                    </span>
                  </div>

                  <div className="flex gap-1 text-[var(--sandy-brown)] mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.7]">
                    Great product with excellent sound quality. The battery life
                    is also really good.
                  </p>
                </div>
                <div className="border-b border-[var(--cultured)] pb-5 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--eerie-black)] text-[var(--primary)] flex items-center justify-center font-[var(--weight-700)]">
                        A
                      </div>

                      <span className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                        Alex Morgan
                      </span>
                    </div>

                    <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                      2 days ago
                    </span>
                  </div>

                  <div className="flex gap-1 text-[var(--sandy-brown)] mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.7]">
                    Great product with excellent sound quality. The battery life
                    is also really good.
                  </p>
                </div>
                <div className="border-b border-[var(--cultured)] pb-5 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--eerie-black)] text-[var(--primary)] flex items-center justify-center font-[var(--weight-700)]">
                        A
                      </div>

                      <span className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
                        Alex Morgan
                      </span>
                    </div>

                    <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                      2 days ago
                    </span>
                  </div>

                  <div className="flex gap-1 text-[var(--sandy-brown)] mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.7]">
                    Great product with excellent sound quality. The battery life
                    is also really good.
                  </p>
                </div>
                <div className="text-[length:var(--fs-5)] text-[var(--primary)] font-[var(--weight-600)] cursor-pointer">
                  View More...
                </div>
              </div>
            </div>
          </div>

          {/*  Related Products  */}
          <div className="border-t border-[var(--cultured)] pt-8">
            <h2 className="text-[length:var(--fs-3)] text-[var(--eerie-black)] font-[var(--weight-700)] mb-6">
              Related Products
            </h2>

            <div className="grid grid-cols-4 gap-5">
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
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
              <MainProductCard />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
