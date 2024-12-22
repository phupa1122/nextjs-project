import React from 'react'

import { MdOutlinePhotoLibrary } from "react-icons/md";

export default function promotion() {

    const pageUrl = '/';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/promotion/promotion.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">โปรโมชั่น</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>โปรโมชั่น</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-10'>
                <div className="flex space-x-4 items-center justify-center">
                    <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1" aria-current="page">ทั้งหมด</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทรีตเมนต์</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">สักคิ้ว</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทำเล็บ</a>
                </div>

                <div className='mx-60 px-10'>
                    <div className='flex flex-col gap-5 py-5'>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-center rounded-lg border border-gray1 p-2 gap-3">
                                <div className="flex flex-row text-center">
                                    <div className="container bg-[#FFFFFF] w-24 h-24 rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/promotion/all.png')" }}>
                                    </div>
                                </div>
                                <div className="flex flex-col text-start gap-1">
                                    <p className="text-lg/5 text-black1">ส่วนลด 20 % สูงสุด ฿100</p>
                                    <p className="text-xs/5 text-black1">ขั้นต่ำ ฿199</p>
                                    <div className="flex w-fit justify-center rounded text-pink1 bg-white1 border  text-xs px-1 font-normal">
                                        ลงทะเบียน
                                    </div>
                                    <p className="text-xs/5 text-gray1">ใช้ภายใน 7 วันหลังจากเก็บโค้ดส่วนลด</p>
                                </div>
                                <div className="flex items-center justify-center p-2">
                                    <button className="flex h-6 justify-center rounded bg-pink1 px-1 text-sm/6 font-light text-white1">
                                        เก็บโค้ด
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center rounded-lg border border-gray1 p-2 gap-3">
                                <div className="flex flex-row text-center">
                                    <div className="container bg-[#FFFFFF] w-24 h-24 rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/promotion/pro.png')" }}>
                                    </div>
                                </div>
                                <div className="flex flex-col text-start gap-1">
                                    <p className="text-lg/5 text-black1">ส่วนลด ฿50 จากทางร้าน</p>
                                    <p className="text-xs/5 text-black1">ขั้นต่ำ ฿0</p>
                                    <div className="flex w-fit justify-center rounded text-pink1 bg-white1 border  text-xs px-1 font-normal">
                                        ลูกค้าใหม่
                                    </div>
                                    <p className="text-xs/5 text-gray1">ใช้ภายใน 30 วันหลังจากเก็บโค้ดส่วนลด</p>
                                </div>
                                <div className="flex items-center justify-center p-2">
                                    <button className="flex h-6 justify-center rounded bg-pink1 px-1 text-sm/6 font-light text-white1">
                                        เก็บโค้ด
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                        <div className="flex justify-center rounded-lg border border-gray1 p-2 gap-3">
                                <div className="flex flex-row text-center">
                                    <div className="container bg-[#FFFFFF] w-24 h-24 rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/promotion/pro.png')" }}>
                                    </div>
                                </div>
                                <div className="flex flex-col text-start gap-1">
                                    <p className="text-lg/5 text-black1">ส่วนลด ฿50 จากทางร้าน</p>
                                    <p className="text-xs/5 text-black1">ขั้นต่ำ ฿0</p>
                                    <div className="flex w-fit justify-center rounded text-pink1 bg-white1 border  text-xs px-1 font-normal">
                                        ลูกค้าใหม่
                                    </div>
                                    <p className="text-xs/5 text-gray1">ใช้ภายใน 30 วันหลังจากเก็บโค้ดส่วนลด</p>
                                </div>
                                <div className="flex items-center justify-center p-2">
                                    <button className="flex h-6 justify-center rounded bg-pink1 px-1 text-sm/6 font-light text-white1">
                                        เก็บโค้ด
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center rounded-lg border border-gray1 p-2 gap-3">
                                <div className="flex flex-row text-center">
                                    <div className="container bg-[#FFFFFF] w-24 h-24 rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/promotion/all.png')" }}>
                                    </div>
                                </div>
                                <div className="flex flex-col text-start gap-1">
                                    <p className="text-lg/5 text-black1">ส่วนลด 20 % สูงสุด ฿100</p>
                                    <p className="text-xs/5 text-black1">ขั้นต่ำ ฿199</p>
                                    <div className="flex w-fit justify-center rounded text-pink1 bg-white1 border  text-xs px-1 font-normal">
                                        ลงทะเบียน
                                    </div>
                                    <p className="text-xs/5 text-gray1">ใช้ภายใน 7 วันหลังจากเก็บโค้ดส่วนลด</p>
                                </div>
                                <div className="flex items-center justify-center p-2">
                                    <button className="flex h-6 justify-center rounded bg-pink1 px-1 text-sm/6 font-light text-white1">
                                        เก็บโค้ด
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
