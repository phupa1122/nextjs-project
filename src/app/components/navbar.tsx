"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiTicketBold } from "react-icons/pi";
import { PiHeartStraightBold } from "react-icons/pi";
import { PiHandbagBold } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";

function navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div
      className={`navbar px-10 h-10 fixed top-0 left-0 z-50 transition-colors duration-700 ${
        isScrolled
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

                    {/* <li>
                        <details className="hover:text-gray1 ">
                            <summary>สินค้าและบริการ</summary>
                            <ul className="p-2 text-black1 bg-white1 w-40 py-3 ">
                                <details className="hover:text-gray1">
                                    <summary>สินค้า</summary>
                                    <ul className="p-2 text-black1 bg-white1 ">
                                        <li className="hover:text-black1 hover:bg-pink1 rounded">
                                            <a href="/productAndService/product_cream">ครีม</a>
                                        </li>

                                        <li className="hover:text-black1 hover:bg-pink1 rounded">
                                            <a href="/productAndService/product_shampoo">แชทพู</a>
                                        </li>
                                    </ul>
                                </details>

                                <details className="hover:text-gray1">
                                    <summary>บริการ</summary>
                                    <ul className="p-2 text-black1 bg-white1">
                                        <li className="hover:text-black1 hover:bg-pink1 rounded">
                                            <a href="/productAndService/service_treatment">ทรีตเมนต์</a>
                                        </li>

                                        <li className="hover:text-black1 hover:bg-pink1 rounded">
                                            <a href="/productAndService/service_tattoo">สักคิ้ว</a>
                                        </li>

                                        <li className="hover:text-black1 hover:bg-pink1 rounded">
                                            <a href="/productAndService/service_nail">ทำเล็บ</a>
                                        </li>
                                    </ul>
                                </details>
                            </ul>
                        </details>
                    </li> */}

                </ul>
            </div>

            <div className="navbar-end">
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