import { useState } from "react";
import TitleCard from './../../UIKIT/TitleCard';
const categories = [
  {
    icon: "/dress.png",
    name: "Clothes",
    items: [
      { name: "Shirt", count: 300 },
      { name: "Shorts & Jeans", count: 60 },
      { name: "Jacket", count: 50 },
      { name: "Dress & Frock", count: 87 },
    ],
  },
  {
    icon: "/shoes.png",
    name: "Footwear",
    items: [
      { name: "Sports", count: 45 },
      { name: "Formal", count: 75 },
      { name: "Casual", count: 35 },
      { name: "Safety Shoes", count: 26 },
    ],
  },
  {
    icon: "/jewelry.png",
    name: "Jewelry",
    items: [
      { name: "Earrings", count: 46 },
      { name: "Couple Rings", count: 73 },
      { name: "Necklace", count: 61 },
    ],
  },
  {
    icon: "/perfume.png",
    name: "Perfume",
    items: [
      { name: "Clothes Perfume", count: 12 },
      { name: "Deodorant", count: 60 },
      { name: "Jacket", count: 50 },
      { name: "Dress & Frock", count: 87 },
    ],
  },
  {
    icon: "/cosmetics.png",
    name: "Cosmetics",
    items: [
      { name: "Shampoo", count: 68 },
      { name: "Sunscreen", count: 46 },
      { name: "Body Wash", count: 79 },
      { name: "Makeup Kit", count: 23 },
    ],
  },
  {
    icon: "/glasses.png",
    name: "Glasses",
    items: [
      { name: "Sunglasses", count: 50 },
      { name: "Lenses", count: 48 },
    ],
  },
  {
    icon: "/bag.png",
    name: "Bags",
    items: [
      { name: "Shopping Bag", count: 62 },
      { name: "Gym Backpack", count: 35 },
      { name: "Purse", count: 80 },
      { name: "Wallet", count: 75 },
    ],
  },
];

function Category() {

    const [openIndex, setOpenIndex] = useState(null);
    const toggleCategory = (index) => {
            setOpenIndex(openIndex === index ? null : index);
            console.log(index)
    }

    return (
        <>
            <div className="flex gap-5 w-[90%] mx-auto">
                <div className='sidebar w-[280px] border border-gray-300 rounded-2xl p-5 '>
                    <h2 className='font-bold text-2xl mb-2'>Category</h2>
                    {categories.map((cat, index) =>(
                        <div key={index} className="sub_items mb-2">
                            <ul>
                                <li className="flex items-center justify-between w-[240px] text-[18px] text-gray-500 font-bold cursor-pointer" onClick={() => toggleCategory(index)}>
                                    <div className="flex items-center gap-2">
                                        <img className="h-5 w-5" src={cat.icon}/>
                                        <p>{cat.name}</p>
                                    </div>
                                    <div className="">
                                        {openIndex === index ? "−" : "+"}
                                        </div>
                                </li>
                            </ul>
                            {openIndex === index && cat.items && (
                              <div className=" flex flex-col gap-2 pb-3 pl-8 w-[230px]">
                                {cat.items.map((item, i) => (
                              <div key={i} className="flex justify-between text-gray-500">
                                <span>{item.name}</span>
                                <span>{item.count}</span>
                              </div>
                                ))}
                                </div>
                            )}
                          </div>
                    ))}
                </div>
                <div>
                  <div className="categories_first flex gap-5">
                    <div className="new_arrival">
                      <h2 className="font-bold text-2xl mb-2 border-b pb-3 border-gray-500">New Arrivals</h2>
                      <div>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                      </div>
                    </div>
                    <div className="trending">
                      <h2 className="font-bold text-2xl mb-2 border-b pb-3 border-gray-500 ">Trending</h2>
                      <div>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                      </div>
                    </div>
                    <div className="top_rated">
                      <h2 className="font-bold text-2xl mb-2 border-b pb-3 border-gray-500">Top Rated</h2>
                      <div>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                      </div>
                    </div>
                  </div>
                  <div className="deals_of_the_day"></div>
                  <div className="new_products"></div>
                </div>
            </div>
        </>
    )
}

export default Category
