"use client";

import React from "react";
import Link from 'next/link';
import { useParams } from "next/navigation";
import Calendar from "../components/calender";


interface BookingProps {
    ID: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

export default function Booking({ID}:BookingProps){
    // const route = useParams()
    const params = useParams();
    const pageUrl = '/';
    const productAndServiceUrl = '/productAndService';

    //const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    //const [selectedTime, setSelectedTime] = useState<string | null>(null)
    
    const id = params.ID;

    //console.log(id)

    return (
        <>
            <div className="hero h-96 bg-center" style={{ backgroundImage: "url('/images/product/bg-product-service.png')" }}>
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
                    <h3 className="text-lg/7 font-medium text-gray1">ไทม์ไลน์</h3>
                </div>

                <div className='flex flex-row gap-10 justify-between'>
                    <div className='bg-slate-50 my-5 rounded-lg border border-gray-200 shadow-lg w-2/3'>
                                            <Calendar />
                                        </div>

                    <div className='bg-slate-50 mt-5 rounded-lg p-5 w-1/3 drop-shadow-md'>
                        <div className='m-5'>
                            <div className="flex justify-start items-center border-b">
                                <h3 className="font-semibold text-xl text-black1">กรอกข้อมูลการจองคิว{ID}</h3>
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
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    ราคา (บาท)
                                </label>
                                <div className="mt-1">
                                    <button className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start sm:text-sm/6 cursor-not-allowed">
                                       
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="depositPrice" className="block text-sm/6 font-medium text-black1 text-start mt-3">
                                    ราคาค่ามัดจำการจองคิว 10%
                                </label>
                                <div className="mt-1">
                                    <button className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start  sm:text-sm/6 cursor-not-allowed">
                                       
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
                                        type="text"
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
                                    <select className="select-none w-full bg-slate-50 border-2 bg-border-gray1 rounded-md px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6" >
                                        <option disabled selected>พนักงาน</option>
                                        <option value="ช่างแมว">ช่างแมว</option>
                                        <option value="ช่างชาย">ช่างชาย</option>
                                        <option value="ช่างหญิง">ช่างหญิง</option>
                                    </select>
                                </div>
                            </div>

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
}

