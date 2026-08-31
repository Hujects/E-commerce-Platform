import { useState } from "react";
import TitleCard from "./../../UIKIT/TitleCard";
import {
  newArrivals,
  trending,
  topRated,
  categories,
} from "../../../data/data";
import PrimaryButton from "../../UIKIT/PrimaryButton";
import Productcard from "../../UIKIT/Productcard/Productcard";

function Category() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(index);
  };

  return (
    <div className="flex gap-5 max-w-[var(--max-width)] w-full mx-auto items-start">
      <div className="sidebar sticky top-3 w-[280px] flex-shrink-0 border border-gray-300 rounded-2xl p-5 ">
        <h2 className="font-semibold text-[20px] mb-4">Category</h2>
        {categories.map((cat, index) => (
          <div key={index} className="sub_items mb-4">
            <ul>
              <li
                className={`flex items-center justify-between mb-2 w-[240px] text-[18px] text-[#78789D] cursor-pointer ${openIndex === index ? "pb-2 border-b border_b" : ""}`}
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center gap-3 ">
                  <img className="h-5 w-5" src={cat.icon} />
                  <p className="text-[var(--sonic-silver)] text-[length:var(--fs-5)] font-medium ">{cat.name}</p>
                </div>
                <div className="">{openIndex === index ? "−" : "+"}</div>
              </li>
            </ul>
            {openIndex === index && cat.items && (
              <div className=" flex flex-col gap-2 pb-3 pl-8 w-[230px]">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-gray-500 hover:text-black"
                  >
                    <span className="text-[length:var(--fs-9)]">{item.name}</span>
                    <span className="text-[length:var(--fs-9)] ">{item.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="categories_first flex gap-8 overflow-y-auto">
          <div className="new_arrival">
            <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b">
              New Arrivals
            </h2>
            <div className="flex flex-col gap-5">
              {newArrivals.map((item, i) => (
                <TitleCard
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  count={item.count}
                />
              ))}
            </div>
          </div>
          <div className="trending">
            <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b ">
              Trending
            </h2>
            <div className="flex flex-col gap-5">
              {trending.map((item, i) => (
                <TitleCard
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  count={item.count}
                />
              ))}
            </div>
          </div>
          <div className="top_rated">
            <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b">
              Top Rated
            </h2>
            <div className="flex flex-col gap-5">
              {topRated.map((item, i) => (
                <TitleCard
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  count={item.count}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="deals_of_the_day">
          <h2 className="pb-2 border-b border_b">Deals of the day</h2>
          <Productcard />
        </div>
        <div className="new_products"></div>
      </div>
    </div>
  );
}

export default Category;
