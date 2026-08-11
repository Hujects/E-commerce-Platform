
function SecondHeader() {
    return (
        <>
            <section className="mainbody w-[90%] py-4 border-b-1 border-gray-400 pb-2">
                <div className="">
                    <div className="flex justify-between h-full">
                        <div className='logo'>
                            <p className="text-3xl font-bold">Hujects</p>
                        </div>
                        <section className="searchBox w-full flex justify-center relative">
                            <input type="text" className="p-2 border rounded w-[80%] " />
                            <button className="search_btn  text-white p-2 rounded absolute right-[11%] top-0 z-10">
                                <i class="bi bi-search text-black hover:text-red-500"></i>
                            </button>
                        </section>
                        <section className="buttons_nav">
                            <div className="flex gap-5 text-3xl">
                                <div className="hover:cursor-pointer">
                                    <i class="bi bi-person-fill"></i>
                                </div>
                                <div>
                                    <i class="bi bi-basket2-fill"></i>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecondHeader;
