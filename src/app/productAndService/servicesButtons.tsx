import React, { useState } from 'react';

const ServicesButtons = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (service: string) => {
    setActiveButton(service); // เก็บค่าปุ่มที่ถูกคลิก
  };

  return (
    <div className="flex flex-row mt-1 space-x-3">
      <button
        className={`btn text-black1 ${
          activeButton === 'treatment' ? 'bg-pink1 text-white' : 'btn-ghost'
        }`}
        onClick={() => handleButtonClick('treatment')}
      >
        บริการทรีตเมนต์
      </button>
      <button
        className={`btn text-black1 ${
          activeButton === 'tattoo' ? 'bg-pink1 text-white' : 'btn-ghost'
        }`}
        onClick={() => handleButtonClick('tattoo')}
      >
        บริการสักคิ้ว
      </button>
      <button
        className={`btn text-black1 ${
          activeButton === 'nails' ? 'bg-pink1 text-white' : 'btn-ghost'
        }`}
        onClick={() => handleButtonClick('nails')}
      >
        บริการทำเล็บ
      </button>
    </div>
  );
};

export default ServicesButtons;
