import PrimaryButton from "./../UIKIT/PrimaryButton";
function Herobg() {
    return (
        <>
            <div className='h-full w-full  relative flex justify-center items-center '>
                <div className='w-[90%] desktop:w-[90%] mx-auto'>
                    <img src='/banner-1.jpg' alt="Banner" />
                    <div className='absolute font-medium top-1/2 -translate-y-1/2 left-[10%] flex flex-col gap-4'>
                        <h2 className='text-[var(--primary)] font-medium text-[30px] desktop:text-[length:var(--fs-1)]'>Trending Items</h2>
                        <h1 className='text-[50px] desktop:text-[30px]  leading-tight font-bold w-[45%]'>Women's latest fashion sale</h1>
                        <h3 className='text-[30px] desktop:text-[length:var(--fs-1)] leading-relaxed font-bold text-gray-400'>Starting From $20.00</h3>
                        <PrimaryButton  btnTxt="Shop now"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herobg;
