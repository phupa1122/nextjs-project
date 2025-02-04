"use client";

import React, { useState, useEffect } from "react";
import Calendar from "./components/calender";
import Link from 'next/link';

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

                <div className='flex flex-row gap-10 justify-center'>
                    <div className='bg-slate-50 my-5 rounded-lg border border-gray-200 shadow-lg w-full'>
                        <Calendar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
