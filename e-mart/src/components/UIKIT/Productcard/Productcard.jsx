import PrimaryButton from "../PrimaryButton"

function Productcard() {
    return (
        <>
            <div>
                <div className="mt-4 flex">
                    <div className="w-[60%]">
                        <img src="/shampoo.jpg" alt="SHAMPOO, CONDITIONER & FACEWASH PACKS" />
                    </div>
                    <div className="w-[40%]">
                        <h2>SHAMPOO, CONDITIONER & FACEWASH PACKS</h2>
                        <p>Old Spice includes a variety of products designed for men's grooming needs, such as deodorants and antiperspirants, body washes, shaving creams, aftershaves and hair and beard care</p>
                        <div className="flex items-center gap-4 mt-4">
                          <span className="text-[24px] text-[var(--salmon-pink)] font-bold">$19.99</span>
                          <span className="text-[16px] text-gray-500 line-through">$29.99</span>
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
                        <PrimaryButton btnTxt="Add to cart"/>
                        <div className="offer_ends my-3">
                            <h3>Hurry Up! Offer ends in:</h3>
                            
                        </div>
                      </div>
                      
                    </div>
            </div>
        </>
    )
}

export default Productcard