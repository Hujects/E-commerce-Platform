import Header from "./../../components/header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Herobg from "./../../components/heroBg/Herobg";
import TitleCard from "./../../components/UIKIT/TitleCard";
import Category from "./../../components/heroBg/category/Category";
import { titleCards } from "./../../data/data";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Navbar />
      <Herobg />
      <div className="max-w-[var(--max-width)] w-full flex justify-between pb-10">
        <div className="flex gap-5 pb-4 justify-between overflow-x-auto custom-scrollbar items-start w-full">
          {titleCards.map((card, index) => (
            <TitleCard
              key={index}
              icon={card.icon}
              name={card.name}
              count={card.count}
            />
          ))}
        </div>
      </div>
      <Category />
    </div>
  );
}

export default Home;
