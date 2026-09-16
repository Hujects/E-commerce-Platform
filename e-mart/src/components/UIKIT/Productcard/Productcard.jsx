import CountdownTimer from "../CountdownTimer";
import PrimaryButton from "../PrimaryButton";

function Productcard() {
    return (
        <>
            <div>
                <div className="mt-7 p-3 flex border border_full rounded-2xl text-[var(--fs-7)]">
                    <div className="flex-1">
                        <img src="/shampoo.jpg" alt="SHAMPOO, CONDITIONER & FACEWASH PACKS" />
                    </div>
                    <div className="flex-1">
                        <div className="star_rating leading-loose tracking-widest text-[var(--sandy-brown)]">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <h2 className="font-bold my-2">SHAMPOO, CONDITIONER & FACEWASH PACKS</h2>
                        <p className="text-[var(--spanish-gray)] text-justify">Old Spice includes a variety of products designed for men's grooming needs, such as deodorants and antiperspirants, body washes, shaving creams, aftershaves and hair and beard care</p>
                        <div className="flex items-center gap-4 mt-4">
                          <span className="text-[24px] text-[var(--salmon-pink)] font-bold">$19.99</span>
                          <span className="text-[16px] text-gray-500 line-through">$29.99</span>
                        </div>
                        <div className="py-2">
                            <PrimaryButton btnTxt="Add to cart"/>
                        </div>
                        <div className="flex justify-between">
                            <p>Already sold: <span className="font-medium">20</span></p>
                            <p>AVAILABLE: <span className="font-medium">40</span></p>
                        </div>
                        <div className="progress_bar my-3">
                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[var(--salmon-pink)] rounded-full transition-all duration-300"style={{ width: `${33.33}%` }}></div>
                            </div>
                        </div>
                        <div className="offer_ends my-3">
                            <div className="Time">
                                <CountdownTimer targetDate="2026-08-31T23:59:59"/>
                            </div>
                        </div>
                      </div>
                    </div>
            </div>
    </>
  );
}

export default Productcard;
