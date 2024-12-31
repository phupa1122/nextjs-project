"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiTicketBold } from "react-icons/pi";
import { PiHeartStraightBold } from "react-icons/pi";
import { PiHandbagBold } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

function navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div
            className={`navbar px-10 h-10 fixed top-0 left-0 z-50 transition-colors duration-700 ${isScrolled
                ? 'bg-gradient-to-b from-neutral-50 to-white1'
                : 'bg-gradient-to-b from-white1 to-neutral-50'
                }`}
        >
            <div className="navbar-start">
                <img src='/images/Logo.png' alt='Logo' />
            </div>

            <div className="navbar-center hidden lg:flex text-black1">
                <ul className="menu menu-horizontal px-1 items-center gap-5">
                    <Link href="/" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline">หน้าแรก</Link>
                    <Link href="/about" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">เกี่ยวกับเรา</Link>
                    <Link href="/employee" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">พนักงานคลินิค</Link>
                    <Link href="/productAndService" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">สินค้าและบริการ</Link>
                    <Link href="/promotion" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">โปรโมชั่น</Link>
                    <Link href="/result" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">ผลลัพธ์ลูกค้า</Link>
                    <Link href="/contact" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">ติดต่อเรา</Link>
                </ul>
            </div>

            {/* response */}
            <div className="drawer drawer-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end items-center">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost"><AiOutlineBars size={24} color='#21211F' /></label>
                </div>
                {/* {isVisible && ( */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-slate-50 text-[#21211F] min-h-full w-80">
                        {/* <div className="h-10 flex justify-end items-center bg-gray-100 p-2">
                                <RiCloseLine size={24} onClick={handleClose} className="cursor-pointer hover:text-gray-400" />
                            </div> */}
                        <div className='flex justify-center items-center mx-10'>
                            <img src='/images/Logo.png' alt='Logo' />
                        </div>
                        <li className='mt-5 hover:text-gray-400'><Link href="/">หน้าแรก</Link></li>
                        <li className='hover:text-gray-400'><Link href="/about">เกี่ยวกับเรา</Link></li>
                        <li className='hover:text-gray-400'><Link href="/employee">พนักงานคลินิค</Link></li>
                        <li className='hover:text-gray-400'><Link href="/productAndService">สินค้าและบริการ</Link></li>
                        <li className='hover:text-gray-400'><Link href="/promotion">โปรโมชั่น</Link></li>
                        <li className='hover:text-gray-400'><Link href="/result">ผลลัพธ์ลูกค้า</Link></li>
                        <li className='border-b-2 hover:text-gray-400'><Link href="/contact">ติดต่อเรา</Link></li>

                        
                        <li className="mt-3 hover:text-gray-400"><Link href="#">ค้นหา</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link href="/account/profile">คูปองของฉัน</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link href="/account/favorites">รายการโปรด</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link href="/account/cart">ตะกร้าของฉัน</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link href="/login">เข้าสุ่ระบบ</Link></li>

                    </ul>
                </div>
                {/* )} */}
            </div>

            <div className="navbar-end hidden lg:flex">
                <button className="btn btn-ghost btn-square">
                    <div className="MagnifyingGlass">
                        <Link href="#" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"><FaMagnifyingGlass size={20} color='black1' /></Link>
                    </div>
                </button>
                <button className="btn btn-ghost btn-square">
                    <div className="Ticket">
                        <Link href="#" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"><PiTicketBold size={24} color='black1' /></Link>
                    </div>
                </button>
                <button className="btn btn-ghost btn-square">
                    <div className="HeartStraight">
                        <Link href="/account/favorites" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"><PiHeartStraightBold size={24} color='black1' /></Link>
                    </div>
                </button>
                <button className="btn btn-ghost btn-square">
                    <div className="Handbag">
                        <Link href="/account/cart" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"><PiHandbagBold size={24} color='black1' /></Link>
                    </div>
                </button>
                <button className="btn btn-ghost btn-square">
                    <div className="UserCircle">
                        <Link href="/login" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"><PiUserCircleBold size={24} color='black1' /></Link>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default navbar