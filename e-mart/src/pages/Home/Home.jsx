
import Header from './../../components/header/Header';
import Navbar from './../../components/Navbar/Navbar';
import Herobg from './../../components/heroBg/Herobg';
import TitleCard from './../../components/UIKIT/TitleCard';
import Category from './../../components/heroBg/category/Category';

function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Herobg />
            <div className='w-full flex justify-center pb-10'>
                <div className='flex gap-5 pb-4 justify-between overflow-x-auto custom-scrollbar items-start w-[90%]'>
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                </div>
            </div>
            <Category />
        </>
    )
}

export default Home
