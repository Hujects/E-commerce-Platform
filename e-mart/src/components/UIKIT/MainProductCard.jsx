
export default function MainProductCard() {
  return (
    <div className="overflow-hidden group h-auto border-[1px] border-[var(--cultured)] rounded-[var(--border-radius-medium)] transition-all duration-[var(--transition-timing)] ease-in-out hover:shadow-[0_0_10px_hsla(0,0%,0%,0.1)]">
      <div className="relative">
        <img
          className="relative z-1 group-hover:opacity-0 group-hover:scale-[1.1] transition-all duration-[var(--transition-timing)] ease-in-out transform"
          src="/jacket-3.jpg"
          alt=""
        />
        <img
          className="absolute z-2 top-0 left-0 opacity-0 group-hover:transform group-hover:scale-[1.1] group-hover:opacity-100 transition-all duration-[var(--transition-timing)] ease-in-out transform"
          src="/jacket-4.jpg"
          alt=""
        />
        <p className="absolute top-[15px] left-[15px] z-3 px-[8px] text-[var(--fs-8)] bg-[var(--ocean-green)] font-[var(--weight-500)] text-[var(--white)] rounded-[var(--border-radius-small)]">
          10%
        </p>
        <div className="flex flex-col gap-[5px] absolute top-[10px] right-[10px] translate-x-[50px] text-[20px]/0 transition-all duration-[var(--transition-timing)] ease-in-out transform  z-3 group-hover:translate-x-[0px]">
          <button className="bg-[var(--white)] text-[var(--sonic-silver)] border-[1px] border-[var(--cultured)] p-[5px] rounded-[var(--border-radius-small)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--eerie-black)] hover:text-[var(--white)] hover:border-[var(--eerie-black)]">
            <i className="bi bi-heart"></i>
          </button>
          <button className="bg-[var(--white)] text-[var(--sonic-silver)] border-[1px] border-[var(--cultured)] p-[5px] rounded-[var(--border-radius-small)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--eerie-black)] hover:text-[var(--white)] hover:border-[var(--eerie-black)]">
            <i className="bi bi-eye"></i>
          </button>
          <button className="bg-[var(--white)] text-[var(--sonic-silver)] border-[1px] border-[var(--cultured)] p-[5px] rounded-[var(--border-radius-small)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--eerie-black)] hover:text-[var(--white)] hover:border-[var(--eerie-black)]">
            <i className="bi bi-repeat"></i>
          </button>
          <button className="bg-[var(--white)] text-[var(--sonic-silver)] border-[1px] border-[var(--cultured)] p-[5px] rounded-[var(--border-radius-small)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--eerie-black)] hover:text-[var(--white)] hover:border-[var(--eerie-black)]">
            <i className="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>
      <div className="py-[15px] px-[20px] flex flex-col gap-[10px]">
        <a
          href="#"
          className="text-[var(--salmon-pink)] text-[var(--fs-9)]/0 font-[var(--weight-500)] uppercase"
        >
          shirt
        </a>
        <h3 className="text-[var(--fs-8)]/0 text-[var(--sonic-silver)] hover:text-[var(--eerie-black)] hover:cursor-pointer font-[var(--weight-300)] capitalize tracking-[1px] transition-all duration-[var(--transition-timing)] ease-in-out">
          Mens Winter Leathers Jackets
        </h3>
        <div className="flex text-[18px]/0 text-[var(--sandy-brown)]">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </div>
        <div className="flex gap-[10px] text-[var(--fs-7)] text-[var(--eerie-black)]">
          <p className="font-[var(--weight-700)] ">48.00</p>
          <del className="text-[var(--sonic-silver)]">$75.00</del>
        </div>
      </div>
    </div>
  );
}
