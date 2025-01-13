"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Map from "./components/map";
import './swiper.css';

import styled from 'styled-components';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { PiCurrencyBtc } from "react-icons/pi";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Modal from "./productAndService/components/modal";



const data = [
    { id: "1", type: "สินค้า", category: "ครีม", name: "หน้าขาว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "2", type: "สินค้า", category: "ครีม", name: "ใสสะอาด", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "3", type: "สินค้า", category: "ครีม", name: "ลดสิว", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "4", type: "สินค้า", title: "ครีม", name: "ผิวเนียน", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/Product.png" },
    { id: "5", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "6", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "7", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "8", type: "สินค้า", category: "แชมพู", name: "แชมพู", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", price: "299฿", image: "/images/product/shampoo.png" },
    { id: "9", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "10", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "11", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "12", type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: "350฿", image: "/images/product/Treatment.png" },
    { id: "13", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "14", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ4", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "15", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ5", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "16", type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ", price: "150฿", image: "/images/product/Tattoo.png" },
    { id: "17", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "18", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "19", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
    { id: "20", type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: "199฿", image: "/images/product/Nail.png" },
];

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #EC407A;
`;

const employees = [
    {
        id: 1,
        name: 'แมว',
        imageSrc: '/images/Employee.png',
        imageAlt: 'ทรีตเมนต์, ทำเล็บ',
    },
    {
        id: 2,
        name: 'ชาย',
        imageSrc: '/images/Employee.png',
        imageAlt: 'สักคิ้ว, ทำเล็บ'
    },
    {
        id: 3,
        name: 'หญิง',
        imageSrc: '/images/Employee.png',
        imageAlt: 'สักคิ้ว, ทรีตเมนต์'
    },
]

const dataResult = [
    {
        id: 1,
        title: 'ใบหน้ากระฉับมีสัดส่วน',
        image: "/images/product/All.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทรีตเมนต์',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'ขาวใส',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'สักคิ้ว',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทรีตเมนต์',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทำเล็บ',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'สักคิ้ว',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

];

export default function Home() {
    return (
        <>
            {/* โฆษณา */}
            <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/bg-homepage.png')" }}>
                <div className="ml-auto mr-10 w-1/3">
                    <div className="text-right">
                        <p className="md:mb-6 md:text-xl text-black1 sm:mb-2">
                            ยกกระชับผิวหน้า
                        </p>
                        <h1 className="md:text-6xl font-bold text-black1 ">
                            บำรุงผิวพรรณและความสวยงาม
                        </h1>
                        <p
                            className="md:mt-6 text-black1 sm:mt-2"
                            style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                            }}
                        >
                            ส่วนผสมจากธรรมชาติจากพืชเพื่อช่วยให้ลูกค้ามีผิวเปล่งปลั่งและมีสุขภาพดี
                        </p>
                    </div>
                </div>
            </div>

            {/* สินค้าและบริการ */}
            <div className="mx-10">
                <div className="w-full my-10">
                    <div className="ml-auto mr-auto w-fit">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">ผลิตภัณฑ์ชั้นนำ</a>
                            <a className="text-black1 text-2xl font-bold">สินค้าและบริการ</a>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center justify-center my-3">
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1" aria-current="page">ยอมนิยม</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">สินค้า</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทรีตเมนต์</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">สักคิ้ว</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทำเล็บ</a>
                    </div>

                    <div className="px-20">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true, el: ".custom-pagination" }}
                            spaceBetween={30}
                            slidesPerView={4}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className=""
                        >
                            {data.map((item, index) => (
                                <SwiperSlide className="my-4 flex justify-center" key={index}>
                                    <div className="bg-[#ffffff] p-4 w-48 lg:w-72 md:w-72 drop-shadow-md border border-gray1-300 rounded-lg mx-auto">
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
                                                <FaStar size={12} />
                                                <FaStar size={12} />
                                                <FaStar size={12} />
                                                <FaRegStar size={12} />
                                                <FaRegStar size={12} />
                                            </div>

                                            <div
                                                className="text-black1 text-xl text-justify overflow-hidden text-ellipsis mt-2"
                                                style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                                            >
                                                {item.price}
                                            </div>

                                            <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                                                {item.type === "สินค้า" ? (
                                                    <p className="text-gray1">สามารถซื้อได้ที่หน้าร้านเท่านั้น</p>
                                                ) : (
                                                    // ในหน้าหลักที่ใช้ `ModalBooking`
                                                    <Modal item={item} />

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="flex justify-center py-2">
                        <Link href="/productAndService">
                            <button className="flex-none rounded-md bg-pink1 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-pink-600 focus-pink1">
                                ดูทั้งหมด
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* โปรโมท */}
            <div className="flex flex-row items-center justify-center space-x-0">
                <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/Promote1.png')" }}>
                    <div className="flex pl-20 my-40">
                        <div className="text-left">
                            <p className="mb-4 text-sm text-black1">
                                สุดยอด
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                ผลิตภัณฑ์ดูแลผิว
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/Promote2.png')" }}>
                    <div className="flex pl-20 my-40">
                        <div className="text-left">
                            <p className="mb-4 text-sm text-black1">
                                ผลิตภัณฑ์ชั้นนำ
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                การแต่งหน้า
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* การขาย */}
            <div className="mx-10">
                <div className="w-full my-10 px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <PiPackage size={48} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                จัดส่งฟรี
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                การจัดส่งฟรีสำหรับทุกคำสั่งซื้อ โดยไม่ต้องมีการสั่งซื้อขั้นต่ำ
                            </p>
                        </div>

                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <PiChats size={48} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                สนับสนุน
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                ให้ความช่วยเหลือตลอด 24 ชั่วโมงทุกวันเพื่อตอบคำถามหรือข้อกังวลต่างๆ
                            </p>
                        </div>

                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <PiCurrencyBtc size={48} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                คืนเงิน
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                ประกันคืนเงิน 100% เพื่อความพึงพอใจของคุณ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* เกี่ยวกับเรา */}
            <div className="mx-10">
                <div className="flex flex-row items-center justify-center space-x-0 px-20 drop-shadow-md">
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center rounded-l-lg">
                        <div className="h-[400px] flex-row bg-white1 bg-center rounded-l-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex bg-slate-50 bg-center items-center justify-center rounded-r-lg">
                        <div className="w-1/2 text-center">
                            <p className="text-base text-black1">
                                เกี่ยวกับเรา
                            </p>
                            <h1 className="text-2xl font-bold text-black1 my-5">
                                ร้านค้าของเรา
                            </h1>
                            <p
                                className="text-base text-start text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 8,
                                    overflow: "hidden",
                                }}
                            >
                                เรามุ่งมั่นที่จะใช้เฉพาะส่วนผสมที่ดีที่สุดในผลิตภัณฑ์ของเราโดยเน้นที่สูตรที่เป็นธรรมชาติและปราศจาก
                                การทดลองกับสัตว์ทีมผู้เชี่ยวชาญของเราทำงาน
                                อย่างไม่รู้จักเหน็ดเหนื่อยเพื่อพัฒนาผลิตภัณฑ์นวัตกรรมที่ให้ผลลัพธ์ที่แท้จริงตั้งแต่ผลิตภัณฑ์ดูแลผิวขั้นพื้นฐานไปจนถึงเครื่องสำอางสีสันสดใส
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ความคิดเห็น */}
            <div className="m-10">
                <div className="flex flex-row items-center justify-center space-x-0 px-20 mt-10 drop-shadow-md">
                    <div className="w-1/2 h-[400px] flex flex-col bg-slate-50 bg-center items-center justify-center rounded-l-lg">
                        <div className="w-1/2 text-center space-y-2 mt-3">
                            <p className="text-base text-black1">
                                ความคิดเห็น
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                ลูกค้าของเรา
                            </h1>
                        </div>
                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 },
                                1280: { slidesPerView: 1 },
                            }}
                        >
                            {dataResult.map((item, index) => (
                                <SwiperSlide className="my-4 flex justify-start" key={index}>
                                    <div className="bg-[#ffffff] p-4 w-60 lg:w-3/5 md:w-72 drop-shadow-md border border-gray1-300 rounded-lg mx-auto">
                                        <article className="flex max-w-xl flex-col items-start justify-between">
                                            <div className="group relative w-full">
                                                <h3 className="text-xl font-semibold text-black1 justify-items-start">
                                                    <a className="block text-black1">{item.title}</a>
                                                </h3>

                                            </div>
                                            <div className="flex flex-row mt-3">
                                                <FaStar size={12} color="#EC407A" />
                                                <FaStar size={12} color="#EC407A" />
                                                <FaStar size={12} color="#EC407A" />
                                                <FaRegStar size={12} color="#EC407A" />
                                                <FaRegStar size={12} color="#EC407A" />
                                            </div>

                                            <div className="flex space-x-2 mt-3 items-center">
                                                <div className="h-10 w-10 bg-gray-300 rounded-full">
                                                    <img
                                                        alt=""
                                                        src={item.author.imageUrl}
                                                        className="size-10 rounded-full bg-gray1"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-black1 text-start">
                                                        <a>
                                                            <span className="absolute inset-0" />
                                                            {item.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex items-center gap-x-4 text-xs">
                                                        <time dateTime={item.datetime} className="text-gray1">
                                                            {item.date}
                                                        </time>
                                                        <a className="relative z-10 rounded-full bg-gray1-50 px-3 py-1 font-medium text-gray1 hover:bg-gray-100">
                                                            {item.category}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>



                                        </article>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center rounded-r-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                </div>
            </div>

            {/* พนักงานของเรา */}
            <div className="flex flex-row items-center justify-center space-x-0 px-10" id="employee">
                <div className="container">
                    <div className="flex flex-col items-center space-y-2">
                        <a className="text-black1 text-sm">ดูแลลูกค้า</a>
                        <a className="text-black1 text-2xl font-bold">พนักงานของเรา</a>
                    </div>
                    <div className="pt-10">
                        <div className="mx-auto max-w-xl px-5 py-10 sm:px-6 lg:max-w-7xl lg:px-10 flex justify-center items-center">
                            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20">
                                {employees.map((employee) => (
                                    <div className="bg-[#FFFFFF] p-5 rounded-lg drop-shadow-md">
                                        <a key={employee.id} className="group">
                                            <img
                                                alt={employee.imageAlt}
                                                src={employee.imageSrc}
                                                className="aspect-square w-60 rounded-lg bg-gray1-200 object-cover"
                                            />
                                            <h3 className="mt-4 text-lg text-black1">{employee.name}</h3>
                                            <p className="mt-1 text-sm font-medium text-gray1">{employee.imageAlt}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* โปรโมชั่น */}
            <div className="flex flex-row items-center justify-center space-x-0 mt-10">
                <div className="w-full">
                    <div className="w-full flex flex-col items-center">
                        <div className=" w-40 flex flex-col text-center space-y-2">
                            <a className="text-black1 text-sm">ประจำร้าน</a>
                            <a className="text-black1 text-2xl font-bold">โปรโมชั่น</a>
                        </div>
                    </div>


                    <div className="bg-slate-50 h-80 mt-5">
                        <Swiper
                            pagination={true}
                            navigation={true} // เปิดใช้งาน navigation
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 },
                                1280: { slidesPerView: 1 },
                            }}
                        >
                            <SwiperSlide>
                                <div
                                    className="w-full h-full bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: "url('/images/product/All.png')",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="text-start w-fit p-5">
                                        <p className="text-base text-black1"></p>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className="w-full h-80 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/Treat.png')" }}>
                                    <div className="text-start w-fit">
                                        <p className="text-base text-black1">
                                            ทรีตเมนต์
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-full h-80 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/Tattoo1.png')" }}>
                                    <div className="text-start w-fit">
                                        <p className="text-base text-black1">
                                            สักคิ้ว
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="w-full h-full bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: "url('/images/promotion/nail.jpeg')",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="text-start w-fit p-5">
                                        <p className="text-base text-black1"></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>

            {/* ติดต่อเรา */}
            <div className="m-10" id="contact-us">
                <div className="flex flex-row items-center justify-center space-x-0 px-10">
                    <div className="container">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">บริการ</a>
                            <a className="text-black1 text-2xl font-bold">ติดต่อเรา</a>
                        </div>
                        <div className='m-10'>
                            <div className="grid sm:grid-cols-1 md:flex md:items-center md:justify-between mx-20 gap-4">
                                <div className="text-start w-full sm:w-full md:w-2/6 flex flex-col gap-1 bg-slate-50 rounded-md p-3">
                                    <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                                        <PiPhoneCallFill size={24} />
                                        เบอร์โทรศัพท์
                                    </h1>
                                    <p className="text-base text-start text-gray1">
                                        090-3166790
                                    </p>
                                </div>
                                <div className="text-start w-full sm:w-full md:w-3/6 flex flex-col gap-1 bg-slate-50 rounded-md p-3">
                                    <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                                        <PiMapPinAreaFill size={24} />
                                        ที่อยู่
                                    </h1>
                                    <p className="text-base text-start text-gray1">
                                        199 2 ตำบล บ้านโฮ่ง อำเภอ บ้านโฮ่ง ลำพูน 51130
                                    </p>
                                </div>
                            </div>

                            <Map />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
