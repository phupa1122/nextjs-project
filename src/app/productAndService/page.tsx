"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Noitems from "../components/noitems";
import { useRouter } from 'next/navigation';
import Pagination from "./pagination";
import ModalBooking from "./modalBooking";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const data = [
    { type: "สินค้า", name: "ครีม", title: "หน้าขาว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { type: "สินค้า", name: "ครีม", title: "ใสสะอาด", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { type: "สินค้า", name: "ครีม", title: "ลดสิว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { type: "สินค้า", name: "ครีม", title: "ผิวเนียน", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { type: "สินค้า", name: "แชมพู", title: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { type: "สินค้า", name: "แชมพู", title: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { type: "สินค้า", name: "แชมพู", title: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { type: "สินค้า", name: "แชมพู", title: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { type: "ทรีตเมนต์", name: "ทรีตเมนต์", title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { type: "ทรีตเมนต์", name: "ทรีตเมนต์", title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { type: "ทรีตเมนต์", name: "ทรีตเมนต์", title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { type: "ทรีตเมนต์", name: "ทรีตเมนต์", title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { type: "สักคิ้ว", name: "สักคิ้ว", title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", price: "150฿", image: "/images/product/Tattoo.png" },
    { type: "สักคิ้ว", name: "สักคิ้ว", title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ4", price: "150฿", image: "/images/product/Tattoo.png" },
    { type: "สักคิ้ว", name: "สักคิ้ว", title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ5", price: "150฿", image: "/images/product/Tattoo.png" },
    { type: "สักคิ้ว", name: "สักคิ้ว", title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ", price: "150฿", image: "/images/product/Tattoo.png" },
    { type: "ทำเล็บ", name: "ทำเล็บ", title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { type: "ทำเล็บ", name: "ทำเล็บ", title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { type: "ทำเล็บ", name: "ทำเล็บ", title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { type: "ทำเล็บ", name: "ทำเล็บ", title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
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

                <div className="my-2 text-sm font-base text-pink1">
                    ราคา: {price} บาท
                </div>


            </div>
            <p className="text-sm font-base mb-4 text-start text-gray1">ราคา: 0฿ - 1,000฿</p>
        </div>
    );
};


export default function productAndService() {

    const [searchText, setSearchText] = useState('');
    const [filteredProductAndServices, setFilteredProductAndServices] = useState(data);
    const router = useRouter();

    useEffect(() => {
        const filtered = data.filter((item) => {
            return item.title.includes(searchText);
        });
        setFilteredProductAndServices(filtered);
    }, [searchText]);

    const handleCream = () => {
        const filtered = data.filter((item) => {
            return item.name === 'ครีม';
            //router.push('/productAndService/product_cream');
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleShampoo = () => {
        const filtered = data.filter((item) => {
            return item.name === 'แชมพู';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleTreatment = () => {
        const filtered = data.filter((item) => {
            return item.name === 'ทรีตเมนต์';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleTattoo = () => {
        const filtered = data.filter((item) => {
            return item.name === 'สักคิ้ว';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleNail = () => {
        const filtered = data.filter((item) => {
            return item.name === 'ทำเล็บ';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };

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
                    <div className='m-5'>
                        <div className="text-start flex flex-col px-2 gap-5">
                            <div className='flex flex-col gap-2'>
                                <p className="text-black1 text-lg font-medium">สินค้า</p>
                                <button className="text-black1 text-base text-start pl-5 hover:text-pink1 focus:text-pink1" onClick={handleCream}>ครีม</button>
                                <button className="text-black1 text-base text-start pl-5 hover:text-pink1 focus:text-pink1" onClick={handleShampoo}>แชมพู</button>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className="text-black1 text-lg font-medium">บริการ</p>
                                <button className="text-black1 text-base text-start pl-5 hover:text-pink1 focus:text-pink1" onClick={handleTreatment}>ทรีตเมนต์</button>
                                <button className="text-black1 text-base text-start pl-5 hover:text-pink1 focus:text-pink1" onClick={handleTattoo}>สักคิ้ว</button>
                                <button className="text-black1 text-base text-start pl-5 hover:text-pink1 focus:text-pink1" onClick={handleNail}>ทำเล็บ</button>
                            </div>

                            <div className=' items-center'>
                                <PriceRangeSlider />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full h-auto'>
                        <div className='bg-slate-50 flex justify-center items-center h-full py-4 px-2 md:px-4 border-y border-slate-50 rounded-md bg-fixed'>
                            <input
                                id="sreach"
                                name="sreach"
                                type="text"
                                required
                                placeholder="ค้นหาสินค้าและบริการ"
                                value={searchText}
                                onChange={(event) => { setSearchText(event.target.value) }}
                                className="min-w-0 flex-auto rounded-md bg-white1/5 px-3.5 py-2 text-base text-gray1 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className='container bg-slate-50 my-5 rounded-lg'>
                        <div className='py-3'>
                            <div className='flex flex-row justify-between mx-10 items-center'>
                                <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                                <p className='text-gray1 text-xs'>ค้นพบสินค้าและบริการทั้งหมด: {filteredProductAndServices.length} รายการ</p>
                            </div>
                            <div className='px-10 mx-10 border-t border-gray1'>
                                {filteredProductAndServices.length > 0 ? (
                                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                        {filteredProductAndServices.map((item, index) => (
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

                                                    <div className='flex flex-row'>
                                                        <FaStar size={12} />
                                                        <FaStar size={12} />
                                                        <FaStar size={12} />
                                                        <FaRegStar size={12} />
                                                        <FaRegStar size={12} />
                                                    </div>

                                                    <div className="text-black1 text-xl text-justify overflow-hidden text-ellipsis mt-2" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                                                        {item.price}
                                                    </div>

                                                    <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                                                        {item.type === "สินค้า" ? (
                                                            <p className="text-gray1">สามารถซื้อได้ที่หน้าร้านเท่านั้น</p>
                                                        ) : (
                                                            <ModalBooking />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <Noitems />
                                )}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
