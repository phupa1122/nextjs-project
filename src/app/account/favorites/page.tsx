"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import Link from "next/link";
import Noitems from '@/app/components/noitems';
import Logout from '@/app/components/logout';
import Swal from "sweetalert2";

import { Star } from 'lucide-react';

interface FavoriteProps {
    id: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

const Favorite: React.FC<FavoriteProps> = ({ id, name, type, category, price, image, subtitle }: FavoriteProps) => {

    const [currentPage, setCurrentPage] = useState(1);

    const pageUrl = '/';
    const profileURL = '/account/profile';
    const couponURL = '/account/coupon';
    const favoritesURL = '/account/favorites';
    const cartURL = '/account/cart';
    const historyURL = '/account/history';

    const items = [
        { id: 9, type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: 350, image: "/images/product/Treatment.png" },
        { id: 10, type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: 350, image: "/images/product/Treatment.png" },
        { id: 13, type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", price: 150, image: "/images/product/Tattoo.png" },
        { id: 17, type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: 199, image: "/images/product/Nail.png" }

    ];

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "ลบรายการโปรดหรือไม่?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "ลบรายการ",
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData(id);
            }
        });
    };

    const deleteData = async (id: number) => {
        try {
            const response = await fetch(`/api/delete/${id}`, { method: "DELETE" });
            if (response.ok) {
                Swal.fire("ลบสำเร็จ!", "ข้อมูลของคุณถูกลบแล้ว.", "success");
                // เพิ่มโค้ดเพื่ออัปเดตข้อมูลในตาราง
            } else {
                Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้.", "error");
            }
        } catch (error) {
            Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์.", "error");
        }
    };

    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = items.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(items.length / pageSize);

    return (
        <>
            <div className="relative w-full h-[50vh] hero bg-white1 bg-center">
                {/* ภาพพื้นหลัง */}
                <Image
                    src="/images/profile/bg-profile.png"
                    alt="bg-profile"
                    layout="fill"
                    objectFit="cover"
                />

                {/* เนื้อหาที่แสดงบนภาพพื้นหลัง */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    {/* หัวข้อ */}
                    <h1 className="text-6xl font-bold text-black1">รายการโปรด</h1>

                    {/* Breadcrumbs */}
                    <div className="mx-auto">
                        <div className="breadcrumbs text-lg text-black1">
                            <ul className="flex justify-center">
                                <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                <li>บัญชีของฉัน</li>
                                <li>รายการโปรด</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row '>
                <div className='container w-1/4 lg:w-1/4 mb-5 bg-slate-50'>
                    <div className='m-5'>
                        <div className="flex min-w-0 gap-x-4 items-center">
                            <div className='flex flex-row items-center m-2 gap-3'>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="inline-block size-10 rounded-full ring-1 ring-white1"
                                />
                                <div className="flex-auto">
                                    <p className="text-base/6 font-semibold text-black1">ชื่อผู้ใช้</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-start flex flex-col px-2 gap-3">
                            <Link href={profileURL} className="text-black1 text-sm border-b border-gray1 pb-3">ข้อมูลส่วนตัว</Link>
                            <Link href={couponURL} className="text-black1 text-sm">คูปองส่วนลด</Link>
                            <Link href={favoritesURL} className="text-pink1 text-sm">รายการโปรด</Link>
                            <Link href={cartURL} className="text-black1 text-sm">ตะกร้าของฉัน</Link>
                            <Link href={historyURL} className="text-black1 text-sm border-b border-gray1 pb-3">ประวัติของจอง</Link>
                            <Logout />
                        </div>
                    </div>
                </div>

                <div className='w-full my-5 mx-10'>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg/7 font-medium text-gray1">รายการโปรด</h3>
                    </div>


                    <div className='bg-slate-50 mt-3 rounded-lg'>
                        {items.length === 0 ? (
                            <Noitems />
                        ) : (
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {items.map((item, index) => (
                                    <div className="bg-[#ffffff] p-4 w-32 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto" key={index}>
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
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <Star key={i} size={12} color='#7A7772' />
                                                ))}
                                            </div>

                                            <div
                                                className="text-black1 text-xl text-justify overflow-hidden text-ellipsis mt-2"
                                                style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                                            >
                                                {item.price} ฿
                                            </div>

                                            <div
                                                className="cursor-pointer text-red-500 hover:text-red-700 text-center"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                ลบรายการ
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}


                        {/* ปุ่มเปลี่ยนหน้า */}
                        <div className="flex justify-center py-3">
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
            </div >
        </>
    )
}

export default Favorite
