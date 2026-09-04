function TopHeader() {
  return (
    <div className="w-full border-b border-[#EDEDED] flex flex-col items-center">
      <div className="max-w-[var(--max-width)] w-full flex items-center justify-between py-[10px]">
        <section className="social_links">
          <div className="flex gap-3">
            <div className="head_link">
              <i className="bi bi-facebook"></i>
            </div>
            <div className="head_link">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="head_link">
              <i className="bi bi-twitter"></i>
            </div>
            <div className="head_link">
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </section>
        <section className="">
          <p className="text-[length:var(--fs-7)] uppercase text-[var(--sonic-silver)]">
            <b className="font-medium">Free Shipping</b> This week Order Over -
            $55
          </p>
        </section>
        <section className="right_down">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <div className="text-[length:var(--fs-6)] text-[var(--sonic-silver)] ">
                USD <span>$</span>
              </div>
              <i class="bi bi-chevron-down"></i>
            </div>
            <div className="language flex gap-2 text-[length:var(--fs-6)] text-[var(--sonic-silver)]">
              <div>English</div>
              <i class="bi bi-chevron-down"></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TopHeader;
