'use client'
import React from 'react'


import { useState } from 'react';
import axios from 'axios';
import { PiUserRectangle } from "react-icons/pi";
import { IoKeyOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import { PiEnvelope } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { PiCake } from "react-icons/pi";
import { PiLockKey } from "react-icons/pi";

export default function signup() {

    const pageUrl = '/';
    const loginUrl = '/login';


    const [form, setForm] = useState({ firstname: "", lastname: "", username: "", password: "", role: "user" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/register", form);
            alert("Registration successful!!!");
            window.location.href = "/login";
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <>
            <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/login/bg-login.png')" }}>
                <div className="w-1/3 mt-20 mb-5">
                    <div className='justify-center text-center'>
                        <h1 className="text-6xl font-bold text-black1">
                            ลงทะเบียน
                        </h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li><a href={loginUrl} className="hover:text-pink1">บัญชีของฉัน</a></li>
                                    <li>ลงทะเบียน</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col h-auto w-1-3 bg-white1 py-5 rounded-lg mt-5'>
                            <div className='mx-5'>
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:my-3">
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div>
                                            <label htmlFor="firstname" className="block text-sm/6 font-medium text-black1 text-start">
                                                ชื่อ
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiUserRectangle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 size-5" />
                                                    <input
                                                        id="firstname"
                                                        name="firstname"
                                                        type="text"
                                                        required
                                                        onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="lastname" className="block text-sm/6 font-medium text-black1 text-start">
                                                นามสกุล
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiUserRectangle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 size-5" />
                                                    <input
                                                        id="lastname"
                                                        name="lastname"
                                                        type="text"
                                                        required
                                                        onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="username" className="block text-sm/6 font-medium text-black1 text-start">
                                                ชื่อผู้ใช้
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiUserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 size-5" />
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        required
                                                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
 
                                        {/* <div>
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-black1 text-start">
                                                อีเมล์
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 size-5" />
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
                                        </div> */}

                                        {/* <div>
                                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                                เบอร์โทรศัพท์
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 size-5" />
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="phone"
                                                        required
                                                        autoComplete="phone"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div> */}



                                        <div>
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1">
                                                รหัสผ่าน
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <IoKeyOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        required
                                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div>
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1">
                                                ยืนยันรหัสผ่าน
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <PiLockKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
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
                                        </div> */}


                                        <div className='mx-10'>
                                            <div className="flex items-center justify-between mt-3">
                                                <a href="/login" className="flex w-24 justify-center bg-white1 text-gray1 px-2 py-1 rounded-md shadow transition outline-1 border-gray1 border-2 hover:bg-gray1 hover:text-white1 hover:border-gray1">
                                                    ยกเลิก
                                                </a>
                                                <button type="submit" className="flex w-24 justify-center bg-white1 text-pink1 px-2 py-1 rounded-md shadow transition outline-1 border-pink1 border-2 hover:bg-pink1 hover:text-white1 hover:border-pink1">
                                                    ลงทะเบียน
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
