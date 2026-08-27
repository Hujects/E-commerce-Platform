function SecondHeader() {
  return (
    <div className="w-full border-b border-[#EDEDED] py-6.25">
      <section className="mainbody w-full max-w-[var(--max-width)] mx-auto py-4 pb-2">
        <div className="flex justify-between h-full">
          <div className="logo">
            <p className="text-3xl font-bold">Hujects</p>
          </div>
          <section className="searchBox w-full flex justify-center relative">
            <input placeholder="Enter your product name" type="text" className="p-2 border border-[var(--cultured)] rounded w-[80%]" />
            <button className=" text-white p-2 rounded absolute right-[11%] top-0 z-10">
              <i class="bi bi-search text-[var(--onyx)] hover:text-[var(--salmon-pink)] transition-colors duration-[var(--transition-timing)] text-[length:var(--fs-4)]"></i>
            </button>
          </section>
          <section className="buttons_nav">
            <div className="flex gap-5 text-3xl text-[var(--onyx)]">
              <div className="hover:cursor-pointer">
                <i class="bi bi-person"></i>
              </div>
              <div>
                <i class="bi bi-cart3"></i>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default SecondHeader;
