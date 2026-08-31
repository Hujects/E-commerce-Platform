import PrimaryButton from "./../UIKIT/PrimaryButton";
function Herobg() {
  return (
    <div className="h-[370px] max-w-[var(--max-width)] w-full relative flex justify-center items-center rounded-[10px] overflow-hidden mb-[30px]">
      <img
        className="h-full w-full absolute"
        src="/banner-1.jpg"
        alt="Banner"
      />
      <div className="absolute left-[110px] z-50 w-full h-full flex flex-col justify-center gap-[10px]">
        <p className="text-[var(--salmon-pink)] text-[30px] font-medium capitalize tracking-[2px] ">
          Trending Item
        </p>
        <h1 className="text-[var(--eerie-black)] text-[47px] font-bold uppercase leading-[47px]">
          Women's latest <br /> fashion sale
        </h1>
        <p className="text-[var(--sonic-silver)] text-[29px]">
          Startting at $ 20.00
        </p>
        <PrimaryButton btnTxt="Shop Now" />
      </div>
    </div>
  );
}

export default Herobg;
