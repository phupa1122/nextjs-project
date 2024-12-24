import React from 'react'

import { FaRegUserCircle } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

export default function login() {

    const pageUrl = '/';

    return (
        <>
            <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/login/bg-login.png')" }}>
                <div className="w-1/3 mt-10">
                    <div className='justify-center text-center'>
                        <h1 className="text-6xl font-bold text-black1">
                            บัญชีของฉัน
                        </h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>บัญชีของฉัน</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col h-auto w-1-3 bg-white1 py-5 rounded-lg mt-5'>
                            <div className='mx-5'>
                                <div className="block text-sm/6 text-black1 text-center">
                                    <h1 className="text-4xl text-black1">
                                        เข้าสู่ระบบ
                                    </h1>
                                </div>

                                <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:my-3">
                                    <form action="#" method="POST" className="space-y-3">
                                        <div>
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-black1 text-start">
                                                ชื่อผู้ใช้
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <FaRegUserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        autoComplete="email"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-start">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black1">
                                                    รหัสผ่าน
                                                </label>
                                            </div>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        required
                                                        autoComplete="current-password"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='items-start'>
                                            <fieldset>
                                                <div className=" space-y-3">
                                                    <div className="flex gap-3">
                                                        <div className="flex h-6 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                    id="comments"
                                                                    name="comments"
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray1 bg-white1 checked:border-pink1 checked:bg-pink1 indeterminate:border-pink1 indeterminate:bg-pink1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink1 disabled:border-gray1-300 disabled:bg-gray1-100 disabled:checked:bg-gray1-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white1 group-has-[:disabled]:stroke-gray1-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="text-sm/6">
                                                            <label htmlFor="comments" className="font-medium text-black1">
                                                                จดจำฉัน
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-pink1 px-3 py-1.5 text-sm/6 font-semibold text-white1 shadow-sm hover:bg-pink1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink1"
                                            >
                                                เข้าสู่ระบบ
                                            </button>
                                        </div>
                                    </form>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="text-sm">
                                            <a href="#" className="block text-sm/6 font-normal text-black1">
                                                ลืมรหัสผ่าน?
                                            </a>
                                        </div>
                                        <div className="text-sm">
                                            <a href="/login/newAccount" className="font-semibold text-pink1 hover:text-gray1">
                                                ลงทะเบียน
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
