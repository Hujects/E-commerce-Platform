/* 

ei component e ekta issue ase, kag suru korar age fixed kore niyen.

*/
export default function TitleCetegoryPriceCard() {
  return (
    <div className="flex gap-[15px] items-center justify-start border-[1px] border-[var(--cultured)] rounded-[var(--border-radius-medium)] p-[15px]">
      <img className="w-[70px]" src="/jacket-3.jpg" alt="" />
      <div className="w-[calc(100%_-_85px)] min-w-0 flex flex-col gap-[2px]">
        <h4
          className="text-[var(--eerie-black)] text-[var(--fs-7)] font-[var(--weight-600)] capitalize truncate">
          Relaxed Short full sleeve t-shirt
        </h4>

        <a
          href="#"
          className=" text-[var(--davys-gray)] text-[var(--fs-8)] hover:text-[var(--salmon-pink)] capitalize">
          Clothes
        </a>
        <div className="flex items-center gap-[10px]">
            <p className="text-[var(--fs-7)] text-[var(--salmon-pink)] font-[var(--weight-700)]">$61.00</p>
            <del className="text-[var(--fs-9)] text-[var(--sonic-silver)]">$61.00</del>
        </div>
      </div>
    </div>
  );
}
