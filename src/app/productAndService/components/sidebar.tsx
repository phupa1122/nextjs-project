import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import { ChevronDown, ShoppingBag } from 'lucide-react';

export default function sidebar() {
    const [ProductDropdown, setProductDropdown] = useState(true);
    const [ServiceDropdown, setServiceDropdown] = useState(true);

    const router = useRouter();

    const PriceRangeSlider = () => {
        const [price, setPrice] = useState(500);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(Number(e.target.value));
        };

        return (
            <div className="max-w-md mx-auto">
                <h2 className="font-semibold mb-4 text-start text-black1">ราคา</h2>

                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min={0}
                        max={1000}
                        step={50}
                        value={price}
                        onChange={handleChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb:hover:bg-pink-500"
                    />

                    <div className="my-2 text-sm font-base text-pink1">
                        ราคา: {price} บาท
                    </div>


                </div>
                <p className="text-sm font-base mb-4 text-start text-gray1">ราคา: 0฿ - 1,000฿</p>
            </div>
        );
    };


    return (
        <aside className="fixed inset-y-0 left-0 w-1/4 lg:w-1/4 h-full border-l no-scrollbar overflow-y-auto border-gray-200 bg-white transform transition-transform duration-300 ease-in-out z-50 md:z-20 lg:static lg:translate-x-0 -translate-x-full drop-shadow-md">
            <div className='m-5'>
                <div className="text-start flex flex-col mx-2 gap-2">
                    <div className='flex flex-col'>

                        <div className="text-gray-600">
                            <button
                                className="w-full text-left py-2"
                                onClick={() => setProductDropdown(!ProductDropdown)}
                            >
                                <h1 className="flex items-center gap-2" >
                                    <ShoppingBag size={16} color="#EC407A" />
                                    <span className="font-semibold">สินค้า</span>
                                    <ChevronDown className={`ml-auto w-4 h-4 transform ${ProductDropdown ? "rotate-0" : "rotate-180"}`} />

                                </h1>
                            </button>
                            {ProductDropdown && (
                                <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">
                                    <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1">ครีม</button>
                                    <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" >แชมพู</button>
                                </ul>
                            )}
                        </div>

                        <div className=" text-gray-600">
                            <button
                                className="w-full text-left py-2 transition-all duration-300"
                                onClick={() => setServiceDropdown(!ServiceDropdown)}
                            >
                                <h1 className="flex items-center gap-2">
                                    <ShoppingBag size={16} color="#EC407A" />
                                    <span className="font-semibold">บริการ</span>

                                    <ChevronDown className={`ml-auto w-4 h-4 transform ${ServiceDropdown ? "rotate-0" : "rotate-180"}`} />

                                </h1>
                            </button>
                            {ServiceDropdown && (
                                <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">

                                    <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" >ทรีตเมนต์</button>
                                    <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1">สักคิ้ว</button>
                                    <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" >ทำเล็บ</button>

                                </ul>
                            )}
                        </div>
                    </div>

                    <div className=' items-center'>
                        <PriceRangeSlider />
                    </div>

                    <div className="flex w-full flex-col">
                        <div className="divider text-gray1">หรือ</div>
                    </div>

                    <button
                        className="w-full text-sm block py-2 px-4 rounded-md border text-green1 border-green1 font-normal transition bg-[#FFFFFF] hover:bg-green1 hover:text-slate-50"
                        onClick={() => router.push('/productAndService/booking')}
                    >
                        เลือกจากปฏิทิน
                    </button>
                </div>
            </div>
        </aside>
    )
}

