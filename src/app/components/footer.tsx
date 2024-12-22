import React from 'react'
import Link from 'next/link';

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function footer() {
    return (
        <footer className="footer w-full bg-white1 text-black1 h-28 px-10 py-3 border-t border-gray1">
            <div className="w-full flex items-center justify-between pl-10">
                <aside>
                    <img src="/images/Logo.png" alt="Logo" className="w-60 h-12" />
                </aside>
                <div className="flex items-center py-5 gap-20">
                    <nav >
                        <div className='flex flex-col gap-2'>
                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">หน้าแรก</Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/about" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">เกี่ยวกับเรา</Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className='flex flex-col gap-2'>
                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/employee" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">พนักงานคลินิค</Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/productAndService" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">สินค้าและบริการ</Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className='flex flex-col gap-2'>
                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/promotion" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">โปรโมชั่น</Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex">
                                <IoIosArrowForward />
                                <Link href="/result" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">ผลลัพธ์ลูกค้า</Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className='flex flex-col gap-2'>
                            <div className="items-center space-x-2 inline-flex">
                                <FaFacebookSquare />
                                <a className="text-black1">View Rungpairin</a>
                            </div>

                            <div className="items-center space-x-2 inline-flex">
                                <FaPhoneAlt />
                                <a className="text-black1">090-316-6790</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default footer