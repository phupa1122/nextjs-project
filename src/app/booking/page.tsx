"use client";

import React, { useState, useEffect } from "react";
import Calendar from "./components/calender";
import Link from 'next/link';

// const ScheduleCard = ({ date }: { date: string }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleExpand = () => {
//         setIsExpanded((prev) => !prev);
//     };

//     return (
//         <div className="mb-4 text-gray-600">
//             <button onClick={toggleExpand} className="w-full text-left">
//                 <h1 className="flex items-center gap-2">
//                     <span className="font-normal text-sm">{date}</span>
//                     <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 512 512"
//                         className={`ml-auto w-4 h-4 transform transition-transform ${isExpanded ? "rotate-0" : "rotate-180"
//                             }`}
//                         height="1em"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
//                     </svg>
//                 </h1>
//             </button>

//             {/* ข้อมูลในรายการ */}
//             {isExpanded && (
//                 <ul className="overflow-y-auto mt-2 flex flex-col gap-2 justify-start">
//                     <li>
//                         <ModalBooking />
//                     </li>
//                 </ul>
//             )}
//         </div>
//     );
// };

interface BookingProps {
    id: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

const Booking: React.FC<BookingProps> = ({ id, category, price }: BookingProps) => {

    const pageUrl = '/';
    const productAndServiceUrl = '/productAndService';

    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const employee = event.target.value;
        setSelectedEmployee(employee);
    };

    useEffect(() => {
        if (selectedEmployee === "ช่างแมว") {
            fetchAvailableTimes("ช่างแมว");
        } else if (selectedEmployee === "ช่างชาย") {
            fetchAvailableTimes("ช่างชาย");
        } else if (selectedEmployee === "ช่างหญิง") {
            fetchAvailableTimes("ช่างหญิง");
        } else {
            // ถ้าไม่มีพนักงานที่เลือก ให้ล้างเวลา
            setAvailableTimes([]);
        }
    }, [selectedEmployee]);

    const fetchAvailableTimes = async (employee: "ช่างแมว" | "ช่างชาย" | "ช่างหญิง") => {
        const times = {
            "ช่างแมว": ["11:00", "13:00", "15:00", "17:00"],
            "ช่างชาย": ["10:00", "12:00", "14:00", "16:00"],
            "ช่างหญิง": ["09:00", "11:00", "13:00", "15:00"],
        };

        // เข้าถึงเวลาตามชื่อพนักงาน
        setAvailableTimes(times[employee] || []);
    };

    const TimeFilter = (time: string) => {
        setSelectedTime(selectedTime === time ? null : time);
    };

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/bg-product-service.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">สินค้าและบริการ</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li><a href={productAndServiceUrl} className="hover:text-pink1">สินค้าและบริการ</a></li>
                                    <li>การจองคิว</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5 mx-10'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg/7 font-medium text-gray1">ไทม์ไลน์ </h3>
                </div>

                <div className='flex flex-row gap-10 justify-between'>
                    <div className='bg-slate-50 my-5 rounded-lg border border-gray-200 shadow-lg w-2/3'>
                        <Calendar />
                    </div>

                    <div className='bg-slate-50 mt-5 rounded-lg p-5 w-1/3 drop-shadow-md'>
                        <div className='m-5'>
                            <div className="flex justify-start items-center border-b">
                                <h3 className="font-semibold text-xl text-black1">กรอกข้อมูลการจองคิว{id}</h3>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    บริการ
                                </label>
                                <div className="flex flex-row space-x-3">
                                    <button
                                        disabled
                                        className="py-2 px-3 text-gray1 border border-gray-100 rounded-md cursor-not-allowed"
                                    >
                                        {category}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    ราคา (บาท)
                                </label>
                                <div className="mt-1">
                                    <button className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start sm:text-sm/6 cursor-not-allowed">
                                        {price}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="depositPrice" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    ราคาค่ามัดจำการจองคิว 10%
                                </label>
                                <div className="mt-1">
                                    <button className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start  sm:text-sm/6 cursor-not-allowed">
                                        {(price * 0.1).toFixed(0)}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    ชื่อลูกค้า
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="ชื่อลูกค้า"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    เบอร์โทรศัพท์
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        required
                                        autoComplete="phone"
                                        placeholder="เบอร์โทรศัพท์"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    วันที่การจอง
                                </label>
                                <div>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        autoComplete="off"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    พนักงาน
                                </label>
                                <div>
                                    <select className="select-none w-full bg-slate-50 border-2 bg-border-gray1 rounded-md px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6" onChange={handleEmployeeChange}>
                                        <option disabled selected>พนักงาน</option>
                                        <option value="ช่างแมว">ช่างแมว</option>
                                        <option value="ช่างชาย">ช่างชาย</option>
                                        <option value="ช่างหญิง">ช่างหญิง</option>
                                    </select>
                                </div>
                            </div>

                            {/* Display Available Times */}
                            <label htmlFor="times" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                เวลาที่สามารถจองได้
                            </label>
                            {availableTimes.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap space-x-2">
                                        {availableTimes.map((time, index) => (
                                            <button
                                                type='button'
                                                key={index}
                                                className={`py-1 px-3 text-sm font-medium ${selectedTime === time
                                                    ? 'text-slate-50 border-blue1 border rounded-md px-3 py-1 dark:text-slate-50 dark:border-blue1 dark:bg-blue1'
                                                    : ' hover:text-gray1 text-gray-800 border rounded-md px-3 py-1'
                                                    }
                                                ${time === "13:00" ? "cursor-not-allowed bg-gray-200 text-gray1" : ""}
                                                `}
                                                onClick={() => TimeFilter(time)}
                                                disabled={time === "13:00"}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-row justify-around mt-6 text-right space-x-3">
                                <form method="dialog">
                                    <button className="py-2 px-4 text-base text-gray1 border border-gray-200 bg-slate-50 rounded-md hover:bg-gray-200 hover:text-gray1 hover:border-gray-200">ปิด</button>
                                </form>

                                <Link href="/account/cart">
                                    <button
                                        type='submit'
                                        className="py-2 px-4 text-base text-slate-50 bg-green1 border-green1 rounded-md hover:bg-green-600 hover:text-gray hover:border-green-600"
                                    >
                                        จองคิว
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
