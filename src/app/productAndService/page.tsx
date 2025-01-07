"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Noitems from "../components/noitems";
import ModalBooking from "./modalBooking";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const data = [
    { id: "1", type: "สินค้า", category: "ครีม", name: "หน้าขาว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "2", type: "สินค้า", category: "ครีม", name: "ใสสะอาด", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "3", type: "สินค้า", category: "ครีม", name: "ลดสิว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "4", type: "สินค้า", title: "ครีม", name: "ผิวเนียน", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "5", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "6", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "7", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "8", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "9", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "10", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "11", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "12", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "13", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "14", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ4", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "15", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ5", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "16", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "17", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "18", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "19", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "20", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
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

const Product = ["ครีม", "แชมพู"];
const Service = ["ทรีตเมนต์", "สักคิ้ว", "ทำเล็บ"];


export default function productAndService() {

    const [searchText, setSearchText] = useState('');
    const [filteredProductAndServices, setFilteredProductAndServices] = useState(data);

    const [ProductDropdown, setProductDropdown] = useState(true);
    const [ServiceDropdown, setServiceDropdown] = useState(true);

    // เลือก filter ข้อมูล
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = filteredProductAndServices.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(filteredProductAndServices.length / pageSize);

    useEffect(() => {
        const filtered = data.filter((item) => {
            return item.name.includes(searchText);
        });
        setFilteredProductAndServices(filtered);
    }, [searchText]);

    const handleCream = () => {
        const filtered = data.filter((item) => {
            return item.category === 'ครีม';
            //router.push('/productAndService/product_cream');
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleShampoo = () => {
        const filtered = data.filter((item) => {
            return item.category === 'แชมพู';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };

    const handleTreatment = () => {
        const filtered = data.filter((item) => {
            return item.category === 'ทรีตเมนต์';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleTattoo = () => {
        const filtered = data.filter((item) => {
            return item.category === 'สักคิ้ว';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };
    const handleNail = () => {
        const filtered = data.filter((item) => {
            return item.category === 'ทำเล็บ';
        });
        setFilteredProductAndServices(filtered);
        console.log(filtered);
    };

    const ServiceFilter = (service: string) => {
        setSelectedService(selectedService === service ? null : service);
        setSearchText("");
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

            <div className='w-full flex flex-row pr-10 sapce-x-10'>
                <aside className="fixed inset-y-0 left-0 w-3/4 lg:w-1/4 h-full border-l no-scrollbar overflow-y-auto border-gray-200 bg-white transform transition-transform duration-300 ease-in-out z-50 md:z-20 lg:static lg:translate-x-0 -translate-x-full drop-shadow-md">
                    <div className='m-5'>
                        <div className="text-start flex flex-col mx-2 gap-5">
                            <div className='flex flex-col gap-2'>

                                <div className="mb-4 text-gray-600">
                                    <button
                                        className="w-full text-left py-2"
                                        onClick={() => setProductDropdown(!ProductDropdown)}
                                    >
                                        <h1 className="flex items-center gap-2">
                                            <PiShoppingBagOpenFill color="EC407A" />
                                            <span className="font-semibold">สินค้า</span>
                                            {ProductDropdown ? (
                                                <IoMdArrowDropup className="ml-auto w-4 h-4 transform" />
                                            ) : (
                                                <IoMdArrowDropdown className="ml-auto w-4 h-4 transform" />
                                            )}
                                        </h1>
                                    </button>
                                    {ProductDropdown && (
                                        <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">
                                            <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" onClick={handleCream}>ครีม</button>
                                            <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" onClick={handleShampoo}>แชมพู</button>
                                        </ul>
                                    )}
                                </div>

                                <div className=" text-gray-600">
                                    <button
                                        className="w-full text-left py-2"
                                        onClick={() => setServiceDropdown(!ServiceDropdown)}
                                    >
                                        <h1 className="flex items-center gap-2">
                                            <PiShoppingBagOpenFill color="EC407A" />
                                            <span className="font-semibold">บริการ</span>
                                            {ServiceDropdown ? (
                                                <IoMdArrowDropup className="ml-auto w-4 h-4 transform" />
                                            ) : (
                                                <IoMdArrowDropdown className="ml-auto w-4 h-4 transform" />
                                            )}
                                        </h1>
                                    </button>
                                    {ServiceDropdown && (
                                        <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">
                                            {/* {Service.map((items) => (
                                                <li key={items}>
                                                    <button
                                                        onClick={() => ServiceFilter(items)}
                                                        className={`text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition ${selectedService === items
                                                            ? "bg-blue1 text-white"
                                                            : "bg-white hover:bg-gray-200 text-gray-800"
                                                            }`}
                                                    >
                                                        {items}
                                                    </button>
                                                </li>
                                            ))} */}

                                            <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" onClick={handleTreatment}>ทรีตเมนต์</button>
                                            <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" onClick={handleTattoo}>สักคิ้ว</button>
                                            <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1" onClick={handleNail}>ทำเล็บ</button>

                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className=' items-center'>
                                <PriceRangeSlider />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* <SideBar /> */}
                <div className='w-full'>
                    <div className='w-full h-auto pl-10'>
                        <div className='bg-slate-50 flex justify-center items-center h-full py-4 px-2 md:px-4 border-y border-slate-50 rounded-md bg-fixed drop-shadow-md'>
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

                    <div className=' bg-slate-50 my-5 rounded-lg ml-10 h-auto drop-shadow-md'>
                        <div className='py-3'>
                            <div className='flex flex-row justify-between mx-10 items-center'>
                                <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                                <p className='text-gray1 text-xs'>ค้นพบสินค้าและบริการทั้งหมด: {currentItems.filter(item => selectedProduct === null || item.type === selectedProduct).length} รายการ</p>
                            </div>

                            <div className="px-10 mx-10 border-t border-gray1">
                                {currentItems.filter(item =>
                                    selectedProduct === null || item.type === selectedProduct &&
                                    selectedService === null || item.type === selectedService
                                ).length > 0 ? (
                                    <>
                                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                            {currentItems.filter(item => {
                                                const isProductMatch = selectedProduct === null || item.type === selectedProduct;
                                                const isServiceMatch = selectedService === null || item.type === selectedService;
                                                return isProductMatch && isServiceMatch;
                                            }).map((item, index) => (
                                                <div
                                                    className="bg-[#ffffff] p-4 w-32 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto"
                                                    key={index}
                                                    onClick={() => console.log(`Clicked card item:`, item)}
                                                >
                                                    <div className="w-full space-y-2">
                                                        <h1 className="text-black1 text-2xl text-center font-bold">{item.name}</h1>
                                                        <div className="mx-auto w-44 h-44 rounded-md overflow-hidden mb-4">
                                                            <Image
                                                                src={item.image}
                                                                alt="models"
                                                                width={200}
                                                                height={200}
                                                                priority={true}
                                                                style={{ objectFit: "cover", objectPosition: "top center" }}
                                                                className="rounded-md mx-auto"
                                                            />
                                                        </div>
                                                        <p className="text-gray1 text-start truncate">{item.subtitle}</p>

                                                        <div className="flex flex-row">
                                                            <FaStar size={12} />
                                                            <FaStar size={12} />
                                                            <FaStar size={12} />
                                                            <FaRegStar size={12} />
                                                            <FaRegStar size={12} />
                                                        </div>

                                                        <div
                                                            className="text-black1 text-xl text-justify overflow-hidden text-ellipsis mt-2"
                                                            style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                                                        >
                                                            {item.price}
                                                        </div>

                                                        <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                                                            {item.type === "สินค้า" ? (
                                                                <p className="text-gray1">สามารถซื้อได้ที่หน้าร้านเท่านั้น</p>
                                                            ) : (
                                                                // ในหน้าหลักที่ใช้ `ModalBooking`
                                                                <ModalBooking category={item.category ? [item.category] : []} />

                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>



                                        {/* Pagination */}
                                        <div className="flex justify-center mt-6">
                                            <button
                                                className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                            >
                                                ก่อนหน้า
                                            </button>
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <button
                                                    key={i}
                                                    className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"}`}
                                                    onClick={() => setCurrentPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                            <button
                                                className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                            >
                                                ถัดไป
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <Noitems />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
