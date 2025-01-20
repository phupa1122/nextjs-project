"use client";

import React, { useState } from "react";
import ModalBooking from "./components/modalBooking";
import Calendar from "./components/calender";

const daysOfWeek = [
    { date: "วันอาทิตย์ที่ 1 ธันวาคม 2567", key: "sunday" },
    { date: "วันจันทร์ที่ 2 ธันวาคม 2567", key: "monday" },
    { date: "วันอังคารที่ 3 ธันวาคม 2567", key: "tuesday" },
    { date: "วันพุธที่ 4 ธันวาคม 2567", key: "wednesday" },
    { date: "วันพฤหัสบดีที่ 5 ธันวาคม 2567", key: "thursday" },
    { date: "วันศุกร์ที่ 6 ธันวาคม 2567", key: "friday" },
    { date: "วันเสาร์ที่ 7 ธันวาคม 2567", key: "saturday" },
];

const ScheduleCard = ({ date }: { date: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="mb-4 text-gray-600">
            <button onClick={toggleExpand} className="w-full text-left">
                <h1 className="flex items-center gap-2">
                    <span className="font-normal text-sm">{date}</span>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className={`ml-auto w-4 h-4 transform transition-transform ${isExpanded ? "rotate-0" : "rotate-180"
                            }`}
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                    </svg>
                </h1>
            </button>

            {/* ข้อมูลในรายการ */}
            {isExpanded && (
                <ul className="overflow-y-auto mt-2 flex flex-col gap-2 justify-start">
                    <li>
                        <ModalBooking />
                    </li>
                </ul>
            )}
        </div>
    );
};


export default function booking() {

    const pageUrl = '/';
    const productAndServiceUrl = '/productAndService';

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

            <div className='w-full flex flex-row'>
                <div className='container w-1/4 mb-5 bg-slate-50'>
                    <div className='m-5 no-scrollbar'>
                        <div className="text-start flex flex-col px-2 gap-3">
                            <div className='flex flex-row justify-between items-center border-b-2'>
                                <h2 className='text-black1 text-xl font-medium'>การจองคิว</h2>
                                <a className='text-pink1 text-xs hover:text-pink-400'>ดูทั้งหมด</a>
                            </div>

                            <div>
                                {daysOfWeek.map((day, index) => (
                                    <ScheduleCard key={index} date={day.date} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full flex flex-row pt-5 pr-10'>
                    <div className='w-full ml-10'>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg/7 font-medium text-gray1">ไทม์ไลน์</h3>
                        </div>

                        <div className='bg-slate-50 my-5 rounded-lg border border-gray-200 shadow-lg'>
                            <Calendar />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
