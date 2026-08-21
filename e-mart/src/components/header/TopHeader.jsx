
function TopHeader() {
    return (
        <div className="w-full border-b border-[#EDEDED]">
            <div className="w-[90%] mx-auto m-2 pb-2">
        <div className="flex justify-between ">
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
            <section className="middle_text">
                <div>
                    <p>Free Shipping upto $100 order</p>
                </div>
            </section>
            <section className="right_down">
                <div className="flex gap-2">
                    <div className="currency flex gap-2">
                        <div>USD <span>$</span></div>
                        <i class="bi bi-caret-down"></i>
                    </div>
                    <div className="language flex gap-2">
                        <div>English</div>
                        <i class="bi bi-caret-down"></i>
                    </div>
                </div>
            </section>
        </div>
        </div>
        </div>
    )
}

export default TopHeader
