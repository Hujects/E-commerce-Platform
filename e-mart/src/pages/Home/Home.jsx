
import Header from './../../components/header/Header';
import Navbar from './../../components/Navbar/Navbar';
import Herobg from './../../components/heroBg/Herobg';
import TitleCard from './../../components/UIKIT/TitleCard';

function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Herobg />
            <div className='w-full flex justify-center pb-10'>
                <div className='flex flex-wrap justify-between items-start w-[90%]'>
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                    <TitleCard />
                </div>
            </div>
        </>
    )
}

export default Home
