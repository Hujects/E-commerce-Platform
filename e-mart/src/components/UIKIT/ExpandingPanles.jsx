import { useState } from "react";

const PANELS = [
  {
    label: "WHO WE ARE",
    image:
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=600",
    columns: [
      ["About Us", "Our People", "Our Artisans", "Careers"],
      ["News & Events", "Stories", "Photos & Videos", "Lookbook"],
    ],
  },
  {
    label: "CATEGORIES",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    columns: [
      ["Men", "Women", "Kids", "Home"],
      ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
    ],
  },
  {
    label: "CUSTOMER SERVICE",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
    columns: [
      [
        "Contact Us",
        "How To Order",
        "Billing & Payments",
        "Shipping & Delivery",
        "Track Your Orders",
      ],
      ["Return & Exchanges", "Fabric Care", "Rewards", "Club", "FAQ"],
    ],
  },
  {
    label: "MORE",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
    columns: [
      [
        "Terms & Conditions",
        "Privacy Policy",
        "Customs Duty",
        "VAT Registration",
        "Licence",
      ],
      [
        "Digital Business Identity",
        "Find a Store",
        "Become a Producer",
        "Site Map",
      ],
    ],
  },
];

export default function ExpandingPanels() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex w-full h-64 md:h-72 overflow-hidden">
      {PANELS.map((panel, index) => {
        const isActive = activeIndex === index;
        const anyActive = activeIndex !== null;

        return (
          <div
            key={panel.label}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="relative h-full cursor-pointer overflow-hidden transition-[flex-grow] duration-500 ease-in-out"
            style={{
              flexGrow: isActive ? 4 : 1,
              flexBasis: 0,
              flexShrink: 1,
            }}
          >
            {/* background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.image})` }}
            />

            {/* dark overlay, lightens slightly on hover */}
            <div
              className={`absolute inset-0 transition-colors duration-300 ${
                isActive ? "bg-black/15" : "bg-black/35"
              }`}
            />

            {/* label, fades out when this panel is expanded */}
            <div
              className={`absolute bottom-6 left-0 right-0 text-center text-white text-sm font-bold tracking-wide whitespace-nowrap transition-opacity duration-300 ${
                isActive ? "opacity-0" : "opacity-100"
              }`}
            >
              {panel.label}
            </div>

            {/* menu content, only rendered/visible for the active panel */}
            <div
              className={`absolute inset-0 flex items-center justify-center gap-10 px-3 bg-black font-semibold transition-opacity duration-300 ${
                isActive ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {isActive &&
                panel.columns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex flex-col gap-3 whitespace-nowrap"
                  >
                    {col.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-white text-[length:var(--fs-9)] tracking-wide hover:text-white hover:underline"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}