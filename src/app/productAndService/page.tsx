"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Noitems from "../components/noitems";
import { data } from "./data" // database from data.js
import Modal from "./components/modal";
import Sidebar from "./components/sidebar"
import Search from "./components/search";
import Pagination from "./components/pagination";
import ProductCard from "./components/productCard";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function productAndService() {

    const [searchText, setSearchText] = useState('');
    const [filteredProductAndServices, setFilteredProductAndServices] = useState(data);

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


                <Sidebar />


                <div className='w-full ml-10'>
                    <Search searchText={searchText} setSearchText={setSearchText} />

                    <div className='bg-slate-50 my-5 rounded-lg'>
                        <div className='py-3'>
                            <div className='flex flex-row justify-between  mx-10 items-center'>
                                <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                                <p className='text-gray1 text-xs'>ค้นพบสินค้าและบริการทั้งหมด: 20 รายการ</p>
                            </div>
                            <div className='px-10 mx-10 border-t border-gray1'>
                                {/* แสดงข้อมูล */}
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {currentItems?.map((item, index) => (

                                        <ProductCard key={item.id || index+1} name={item.name || "-"} type={item.type || "-"} category={item.category || "-"} subtitle={item.subtitle || "-"} price={item.price || "-"} image={item.image || "-"} />
                                    )
                                    )}
                                </div>
                                {/* ปุ่มเปลี่ยนหน้า */}
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
