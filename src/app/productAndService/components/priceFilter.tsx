import React, { useState } from 'react';
import { data } from '../data.js'

import { ChevronDown, Wallet } from 'lucide-react';

const PriceFilter: React.FC = () => {
    const [PriceDropdown, setPriceDropdown] = useState(true);
    const [minPrice, setMinPrice] = useState<number>(1); // ค่าเริ่มต้น
    const [maxPrice, setMaxPrice] = useState<number>(5000); // ค่าเริ่มต้น
    const [filteredData, setFilteredData] = useState(data); // ข้อมูลที่กรองแล้ว

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) setMinPrice(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) setMaxPrice(value);
    };

    const applyFilter = () => {
        const filtered = data.filter(item => item.price >= minPrice && item.price <= maxPrice);
        setFilteredData(filtered);
    };

    return (
        <div className='flex flex-col'>
            <div className="text-black1">
                <button
                    className="w-full text-left py-2 transition-all duration-300"
                    onClick={() => setPriceDropdown(!PriceDropdown)}
                >
                    <h1 className="flex items-center gap-2">
                        <Wallet size={16} color="#EC407A" />
                        <span className="font-semibold ">ราคา</span>

                        <ChevronDown className={`ml-auto w-4 h-4 transform ${PriceDropdown ? "rotate-180" : "rotate-0"}`} />

                    </h1>
                </button>
                {PriceDropdown && (
                    <ul className="overflow-y-auto flex flex-wrap gap-2 justify-start">
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                onChange={handleMinChange}
                                className="w-full py-1 px-2 border rounded text-base bg-white text-gray1 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                placeholder="ราคา"
                            />
                            <span>–</span>
                            <input
                                type="number"
                                onChange={handleMaxChange}
                                className="w-full py-1 px-2 border rounded text-base bg-white text-gray1 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                placeholder="ราคา"
                            />
                        </div>

                        <button
                            onClick={applyFilter}
                            className="w-full bg-pink1 text-white px-4 py-1 rounded-md text-sm hover:bg-pink1"
                        >
                            คัดกรองราคา
                        </button>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PriceFilter;
