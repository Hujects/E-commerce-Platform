
function SecondHeader() {
    return (
        <>
            <section className="mainbody w-[90%]">
                <div>
                    <div className="flex justify-between h-full items-center">
                        <div className='logo'>
                            <p className="text-3xl font-bold">Hujects</p>
                        </div>
                        <section className="searchBox">
                            <input type="text" className="p-1 border rounded" />
                        </section>
                        <section className="buttons_nav">
                            <div className="flex gap-5 text-3xl">
                                <div>
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

export default SecondHeader
