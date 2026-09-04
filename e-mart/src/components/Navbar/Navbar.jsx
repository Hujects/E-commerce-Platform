function Navbar() {
  return (
    <div className="navbar flex justify-center gap-10 text-lg font-semibold py-3.75">
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#home">Home</a>
      </div>
      <div className="nav-menu nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#categories">Categories</a>
      </div>
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#men">Men's</a>
      </div>
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase  ">
        <a href="#women">Women's</a>
      </div>
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#jewelry">Jewelry</a>
      </div>
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#perfume">Perfume</a>
      </div>
      <div className="nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#hotOffer">Hot Offers</a>
      </div>
      <div className="about nav-hover text-[length:var(--fs-6)] font-semibold uppercase">
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Navbar;
