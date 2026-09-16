import { useState } from "react";


function WhatsNewCard({img, name, index, price}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='relative' key={index}>
            <img src={img} alt={name} className='h-[400px] w-[300px]' />

            {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-5 left-5 text-3xl bg-white min-h-10 min-w-10 text-center cursor-pointer rounded-full text-gray-400 flex items-center justify-center shadow-md hover:bg-gray-100 transition-all"
        >
          +
        </button>
      )}

      {isOpen && (
        <div className="absolute bottom-5 left-5 bg-white rounded-[10px] shadow-lg p-4 w-[220px] transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-lg"
          >
            &times;
          </button>
          <h3 className="font-semibold text-[var(--fs-6)] capitalize">{name}</h3>
          <p className="text-[var(--fs-7)] text-[var(--sonic-silver)] mt-1">${price}</p>
        </div>
      )}

            {/* <button key={index} className='absolute bottom-5 left-5 text-3xl bg-white min-h-10 min-w-10 text-center cursor-pointer rounded-full text-gray-400'>+</button> */}
        </div>
    )
}

export default WhatsNewCard;
