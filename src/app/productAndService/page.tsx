"use client";

import Image from "next/image";
import React, { useState } from 'react';

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const data = [
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 1", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 2", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 3", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 4", image: "/images/product/Bestproduct.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 5", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 6", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 7", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 8", image: "/images/product/Product.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 9", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 10", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 11", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 12", image: "/images/product/Treatment.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", description: "Description 13", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ4", description: "Description 14", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ5", description: "Description 15", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ", description: "Description 16", image: "/images/product/Tattoo.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 17", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 18", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 19", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 20", image: "/images/product/Nail.png" },
];

const PriceRangeSlider = () => {
    const [price, setPrice] = useState(500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-lg font-medium mb-4 text-start text-black1">ราคา</h2>

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

                {/* <div className="flex justify-between w-full text-sm mt-2 text-gray-600">
                    <span>0</span>
                    <span>500</span>
                    <span>1000</span>
                </div> */}

                <div className="my-2 text-sm font-base text-pink1">
                    ราคา: {price} บาท
                </div>

                
            </div>
            <p className="text-sm font-base mb-4 text-start text-gray1">ราคา: 0฿ - 1,000฿</p>
        </div>
    );
};


export default function productAndService() {

    const pageUrl = '/';

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
                                    <li>สินค้าและบริการ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row pr-10 gap-5'>
                <div className='container w-1/5 mb-5 bg-slate-50'>
                    <div className='m-5 no-scrollbar'>
                        <div className="text-start flex flex-col px-2 gap-5">
                            <div className='flex flex-col gap-2'>
                                <p className="text-black1 text-lg font-medium">สินค้า</p>
                                <p className="text-black1 text-base pl-5">ครีม</p>
                                <p className="text-black1 text-base pl-5">แชมพู</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className="text-black1 text-lg font-medium">บริการ</p>
                                <p className="text-black1 text-base pl-5">ทรีตเมนต์</p>
                                <p className="text-black1 text-base pl-5">สักคิ้ว</p>
                                <p className="text-black1 text-base border-b border-gray1 pb-3 pl-5">ทำเล็บ</p>
                            </div>
                        </div>

                        <div className='m-2 items-center'>
                            <PriceRangeSlider />
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full h-auto'>
                        <div className='bg-slate-50 flex justify-center items-center h-full py-2 px-2 md:px-4 border-y border-slate-50 rounded-md bg-fixed'>
                            <input
                                id="sreach"
                                name="sreach"
                                type="sreach"
                                required
                                placeholder="ค้บหาสินค้าและบริการ"
                                autoComplete="sreach"
                                className="min-w-0 flex-auto rounded-md bg-white1/5 px-3.5 py-2 text-base text-black1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                            />
                            <button type="submit" className="flex-none rounded-md bg-blue-500 px-10 py-2.5 text-base font-semibold text-[#FFFFFF] shadow-sm hover:bg-blue-600 focus-pink1">
                                ค้นหา
                            </button>
                        </div>

                    </div>

                    {/* <div className=" mt-5 px-4 sm:px-0">
                        <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                    </div> */}

                    <div className='bg-slate-50 my-5 rounded-lg'>
                        <div className='py-3'>
                            <div className='flex flex-row justify-between  mx-10 items-center'>
                                <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                                <p className='text-gray1 text-xs'>ค้นพบสินค้าและบริการทั้งหมด: 20 รายการ</p>
                            </div>
                            <div className='px-10 mx-10 border-t border-gray1'>
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {data.map((item, index) => (
                                        <div className="bg-[#ffffff] p-4 w-32 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto" key={index}>
                                            <div className="w-full space-y-2">
                                                <h1 className="text-black1 text-2xl text-center font-bold">{item.title}</h1>
                                                <div className="mx-auto w-44 h-44 rounded-md overflow-hidden mb-4">
                                                    <Image
                                                        src={item.image}
                                                        alt="models"
                                                        width={200}
                                                        height={200}
                                                        priority={true}
                                                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                                        className="rounded-md mx-auto"
                                                    />
                                                </div>
                                                <p className="text-gray1 text-start truncate">{item.subtitle}</p>

                                                <div className='flex flex-row '>
                                                    <FaStar size={12} />
                                                    <FaStar size={12} />
                                                    <FaStar size={12} />
                                                    <FaRegStar size={12} />
                                                    <FaRegStar size={12} />
                                                </div>

                                                <div className="text-black1 text-justify overflow-hidden text-ellipsis mt-2" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                                                    {item.description}
                                                </div>

                                                <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                                                    <button className="px-3 items-center text-pink1 hover:text-gray1 rounded">
                                                        <a href="/productAndService/booking">จองคิว</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
