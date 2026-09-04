import Header from './../../components/header/Header';
import Navbar from './../../components/Navbar/Navbar';
import Herobg from './../../components/heroBg/Herobg';
import TitleCard from './../../components/UIKIT/TitleCard';
import Category from './../../components/heroBg/category/Category';
import {titleCards} from './../../data/data';
import WhatsNew from './WhatsNew';
import StayTuned from './../../components/UIKIT/StayTuned';
import ExpandingPanels from './../../components/UIKIT/ExpandingPanles';
import Footer from './../../components/footer/Footer';




function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Herobg />
            <div className='w-full flex justify-center pb-10'>
                <div className='flex gap-5 pb-4 justify-between overflow-x-auto custom-scrollbar items-start w-[90%] mx-auto'>
                    {titleCards.map((card, index) => (
                        <TitleCard key={index} icon={card.icon} name={card.name} count={card.count} />
                    ))}
                </div>
            </div>
            <Category />
            <WhatsNew/>
            <StayTuned />
            <ExpandingPanels />
            <Footer />
        </>
    )
}

export default Home;
