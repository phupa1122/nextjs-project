"use client";

import React from "react";
import Link from "next/link";
import ModalProfile from "./modalProfile";
import Logout from "@/app/components/logout";

export default function profile() {

    const pageUrl = '/';
    const profileURL = '/account/profile';
    const favoritesURL = '/account/favorites';
    const cartURL = '/account/cart';
    const historyURL = '/account/history';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/profile/bg-profile.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">ข้อมูลส่วนตัว</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>บัญชีของฉัน</li>
                                    <li>ข้อมูลส่วนตัว</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row pr-10 gap-5'>
                <div className='container w-1/5 mb-5 bg-slate-50'>
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
                            <Link href={profileURL} className="text-pink1 text-sm border-b border-gray1 pb-3">ข้อมูลส่วนตัว</Link>
                            <Link href={favoritesURL} className="text-black1 text-sm">รายการโปรด</Link>
                            <Link href={cartURL} className="text-black1 text-sm">ตะกร้าของฉัน</Link>
                            <Link href={historyURL} className="text-black1 text-sm border-b border-gray1 pb-3">ประวัติของจอง</Link>
                            <Logout />
                        </div>
                    </div>
                </div>

                <div className='m-5 w-full'>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg/7 font-medium text-gray1">ข้อมูลส่วนตัว</h3>
                    </div>
                    <div className='bg-slate-50 mt-3 rounded-lg'>
                        <dl className="divide-y divide-gray1 mx-10">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">รูปโปรไฟล์</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0 flex items-center">รูปโปรไฟล์ช่วยปรับเปลี่ยนบัญชีของคุณ</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">ชื่อ</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0 flex items-center">ชื่อ</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">นามสกุล</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0">นามสกุล</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">อีเมล์</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0">อีเมล์</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">เบอร์โทรศัพท์</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0">เบอร์โทรศัพท์</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">วัน เดือน ปีที่เกิด</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0">วัน เดือน ปีที่เกิด</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">รหัสผ่าน</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0">รหัสผ่าน</dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray1">ยืนยันรหัสผ่าน</dt>
                                <dd className="mt-1 text-sm/6 text-black1 sm:col-span-2 sm:mt-0"></dd>
                            </div>

                            <div className="flex items-center justify-center py-6 bg-slate-50">
                                <ModalProfile />
                            </div>
                        </dl>
                    </div>
                </div>
            </div >
        </>
    )
}
