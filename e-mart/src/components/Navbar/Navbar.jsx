
function Navbar() {
    return (
        <>
            <div className="navbar flex justify-center gap-10 text-lg font-semibold py-3 border-b-1 border-gray-400">
                <div className="home_btn nav-hover">
                    <a href="#home">Home</a>
                </div>
                <div className="categories_btn hover:text-red-500 nav-hover">
                    <a href="#categories">Categories</a>
                </div>
                <div className="Men_btn hover:text-red-500 nav-hover">
                    <a href="#men">Men's</a>
                </div>
                <div className="women_btn hover:text-red-500 nav-hover">
                    <a href="#women">Women's</a>
                </div>
                <div className="jewelry_btn hover:text-red-500 nav-hover">
                    <a href="#jewelry">Jewelry</a>
                </div>
                    <div className="perfume_btn hover:text-red-500 nav-hover">
                    <a href="#perfume">Perfume</a>
                </div>
                <div className="hotOffer_btn hover:text-red-500 nav-hover">
                    <a href="#hotOffer">Hot Offers</a>
                </div>
                <div className="about hover:text-red-500 nav-hover">
                    <a href="#about">About</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
