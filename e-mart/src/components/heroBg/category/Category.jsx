import { useState } from "react";
import TitleCard from "./../../UIKIT/TitleCard";
import {
  newArrivals,
  trending,
  topRated,
  categories,
} from "../../../data/data";
import Productcard from "../../UIKIT/Productcard/Productcard";

function Category() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(index);
  };
    return (
        <>
            <div className="flex gap-5 w-full max-w-[var(--max-width)] mx-auto items-start">
              <div className="w-[90%] mx-auto flex gap-5 items-start">
                <div className='sidebar sticky top-3 w-[260px] desktop:w-[220px] flex-shrink-0 border border-gray-300 rounded-2xl p-5 '>
                    <h2 className='font-semibold text-[20px] mb-4 desktop:text-[length:var(--fs-6)]'>Category</h2>
                    {categories.map((cat, index) =>(
                        <div key={index} className="sub_items mb-4">
                            <ul>
                                <li className={`flex items-center justify-between mb-2 w-[220px] desktop:w-[180px] text-[18px] text-[#78789D] cursor-pointer ${openIndex === index ? "pb-2 border-b border_b" : ""}`} onClick={() => toggleCategory(index)}>
                                    <div className="flex items-center gap-3 ">
                                        <img className="desktop:h-3 desktop:w-3 h-5 w-5" src={cat.icon}/>
                                        <p className="desktop:text-[length:var(--fs-6)]">{cat.name}</p>
                                    </div>
                                    <div className="">
                                        {openIndex === index ? "−" : "+"}
                                        </div>
                                </li>
                            </ul>
                            {openIndex === index && cat.items && (
                              <div className=" flex flex-col gap-2 pb-3 pl-8 w-[230px]">
                                {cat.items.map((item, i) => (
                              <div key={i} className="desktop:w-[150px] flex justify-between text-gray-500 hover:text-black">
                                <span className="desktop:text-[length:var(--fs-7)]">{item.name}</span>
                                <span className="desktop:text-[length:var(--fs-7)]">{item.count}</span>
                              </div>
                                ))}
                                </div>
                            )}
                          </div>
                    ))}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="categories_first flex gap-8 overflow-x-auto custom-scrollbar">
                    <div className="new_arrival w-[290px] desktop:w-[220px]">
                      <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b desktop:text-[length:text-[var(--fs-6)]]">New Arrivals</h2>
                      <div className="grid grid-rows-4 grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-3">
                        {newArrivals.map((item, i) =>(
                          <div className="snap-start shrink-0" key={item.id}>
                              <TitleCard key={i} icon={item.icon} name={item.name} count={item.count}/>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="trending w-[290px] desktop:w-[220px]">
                      <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b desktop:text-[length:text-[var(--fs-6)]]">Trending</h2>
                      <div className="grid grid-rows-4 grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-3">
                        {trending.map((item, i) =>(
                          <div className="snap-start shrink-0" key={item.id}>
                              <TitleCard key={i} icon={item.icon} name={item.name} count={item.count}/>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="top_rated w-[290px] desktop:w-[220px]">
                      <h2 className="font-semibold text-[20px] mb-2 border-b pb-3 border_b desktop:text-[length:text-[var(--fs-6)]]">Top Rated</h2>
                      <div className="grid grid-rows-4 grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-3">
                        {topRated.map((item, i) =>(
                          <div className="snap-start shrink-0" key={item.id}>
                              <TitleCard key={i} icon={item.icon} name={item.name} count={item.count}/>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="deals_of_the_day mt-6">
                    <h2 className="pb-2 border-b border_b font-semibold">Deals of the day</h2>
                    <Productcard />
                  </div>
                  <div className="new_products"></div>
                </div>
              </div>
            </div>
          </>
  );
}

export default Category;
