"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import { FaStar, FaRegStar } from "react-icons/fa";

const dataResult = [
    {
        id: 1,
        title: 'ใบหน้ากระฉับมีสัดส่วน',
        href: '#',
        image: "/images/product/All.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: { title: 'ทรีตเมนต์', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'ขาวใส',
        href: '#',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: { title: 'สักคิ้ว', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'ผิวสวย',
        href: '#',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: { title: 'ทรีตเมนต์', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'ผิวสวย',
        href: '#',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: { title: 'ทำเล็บ', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'ผิวสวย',
        href: '#',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: { title: 'สักคิ้ว', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

    // More posts...
];

export default function result() {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = dataResult.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(dataResult.length / pageSize);

    const pageUrl = '/';



    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/result/bg-result.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">ผลลัพธ์ลูกค้า</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>ผลลัพธ์ลูกค้า</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div role="tablist" className="tabs tabs-bordered px-60 text-gray1">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-gray1 focus:text-pink1 focus:font-medium" aria-label="ทั้งหมด" defaultChecked />
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-gray1 focus:text-pink1 focus:font-medium" aria-label="ทรีตเมนต์" />
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-gray1 focus:text-pink1 focus:font-medium" aria-label="สักคิ้ว" />
                        <input type="radio" name="my_tabs_1" role="tab" className="tab text-gray1 focus:text-pink1 focus:font-medium" aria-label="ทำเล็บ" />
                    </div>

                    <div className='w-full mt-3 bg-slate-50 rounded-lg drop-shadow-md'>

                        <div className='py-3 rounded-lg'>
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {dataResult.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-[#FFFFFF] p-4 w-32 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto"
                                    >
                                        <article className="flex max-w-xl flex-col items-start justify-between">
                                            <div className="group relative w-full">
                                                <h3 className="text-xl font-semibold text-black1">
                                                    <a className="block text-black1">
                                                        {item.title}
                                                    </a>
                                                </h3>

                                                <Image
                                                    src={item.image}
                                                    alt="models"
                                                    width={200}
                                                    height={200}
                                                    priority={true}
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition: "top center",
                                                        height: "200px", // กำหนดความสูงเท่ากัน
                                                        width: "100%"

                                                    }}
                                                    className="rounded-md mx-auto"
                                                />
                                            </div>
                                            <div className="flex flex-row mt-3">
                                                <FaStar size={16} color='#EC407A' />
                                                <FaStar size={16} color='#EC407A' />
                                                <FaStar size={16} color='#EC407A' />
                                                <FaRegStar size={16} color='#EC407A' />
                                                <FaRegStar size={16} color='#EC407A' />
                                            </div>
                                            <div className="relative mt-3 flex items-center gap-x-4">
                                                <img alt="" src={item.author.imageUrl} className="size-10 rounded-full bg-gray1" />
                                                <div className="text-sm/6">
                                                    <p className="font-semibold text-black1">
                                                        <a href={item.author.href}>
                                                            <span className="absolute inset-0" />
                                                            {item.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex items-center gap-x-4 text-xs">
                                                        <time dateTime={item.datetime} className="text-gray1">
                                                            {item.date}
                                                        </time>
                                                        <a
                                                            href={item.category.href}
                                                            className="relative z-10 rounded-full bg-gray1-50 px-3 py-1 font-medium text-gray1 hover:bg-gray-100"
                                                        >
                                                            {item.category.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
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
            </div >
        </>
    )
}
