
import WhatsNewCard from './../../components/UIKIT/whatsNewCard';
const whatsnew = [
    {
    img: "/newCard.webp",
    name: "three-peice",
    price: "1200.18",
    },
    {
    img: "/newCard.webp",
    name: "three-peice",
    price: "1200.18",
    },
    {
    img: "/newCard.webp",
    name: "three-peice",
    price: "1200.18",
    },
    {
    img: "/newCard.webp",
    name: "three-peice",
    price: "1200.18",
    },
]




function WhatsNew() {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-2 py-10'>
                <div className='w-[90%] flex flex-col justify-center items-center gap-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-[length:var(--fs-1)] font-extrabold'>What's New</h2>
                        <p className='text-[var(--fs-6)] text-[var(--sonic-silver)]'>Check out our latest products!</p>
                    </div>
                    <div className='cards flex gap-2 overflow-x-auto custom-scrollbar'>
                        {whatsnew.map((item, index)=>(
                                    <WhatsNewCard img={item.img} name={item.name} price={item.price} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsNew;
