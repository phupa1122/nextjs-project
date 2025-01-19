"use client"

import React from 'react'
import styled from 'styled-components';
import { Leaf, Crown, HandCoins} from 'lucide-react';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #EC407A;
`;

export default function about() {

    const pageUrl = '/';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/bg-about.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="xl:text-6xl xl:font-bold sm:text-3xl sm:font-bold text-black1 ">เกี่ยวกับเรา </h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>เกี่ยวกับเรา</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full' >
                <div className='m-10'>
                    <div className="ml-auto mr-auto w-fit">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">ร้านของเรา</a>
                            <a className="text-black1 text-2xl font-bold">ภารกิจ</a>
                        </div>
                    </div>

                    <div className='w-full pt-5'>
                        <div className="flex flex-row items-center justify-center space-x-0 rounded-lg">
                            <div className="w-full h-[200px] flex bg-slate-50 bg-center rounded-l-lg items-center justify-center">
                                <div
                                    className="w-1/3 text-start overflow-hidden text-ellipsis"
                                    style={{ maxHeight: "200px", overflowY: "hidden" }}
                                >
                                    <p
                                        className="text-sm text-black1"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 8,
                                            overflow: "hidden",
                                        }}
                                    >
                                        มุมหนึ่งก็เหมือนจะบอกเล่าเรื่องราวของ
                                        ตัวเองที่จริง ๆ ชีวิต ณ วันนี้ดูยุ่งยาก ละเอียด และมีกรอบเสียเหลือเกิน (เมื่อมองอย่างผิวเผิน) แต่จากคนที่เคยรักอิสระและติสท์มากอย่างผมต้องเปลี่ยนไป มันก็ไม่ใช่การฝืนแม้แต่นิดเดียว เพียงเพราะไม่อยากเสียดายเวลาอีกแล้ว…
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-[200px] flex bg-slate-50 bg-center rounded-r-lg items-center justify-center">
                                <div
                                    className="w-1/3 text-start overflow-hidden text-ellipsis"
                                    style={{ maxHeight: "200px", overflowY: "hidden" }}
                                >
                                    <p
                                        className="text-sm text-black1"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 8,
                                            overflow: "hidden",
                                        }}
                                    >
                                        หลายคนมีต้นทุนมากจนคิดว่าเคยเติมได้ เคยเติมอยู่ประมาทและหลงลืมไปว่าแม้จะเติม
                                        ได้บ่อยครั้งกว่าคนอื่น แต่มันก็มีวันหมด เปรียบเสมือนคนที่คิดว่าตนมีต้นทุนชีวิตที่ดี ด้านการเงินด้านโอกาสแต่ที่สุดเวลาคนเราก็เท่ากัน
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-0 px-10">
                <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center rounded-l-lg">
                    <div className="h-[400px] flex-row bg-white1 bg-center rounded-l-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                    </div>
                </div>
                <div className="w-1/2 h-[400px] flex-row bg-[#FFFFFF] bg-center rounded-r-lg">
                    <div className="w-full h-[400px] flex bg-[#FFFFFF] bg-center items-center justify-center rounded-r-lg">
                        <div className="w-1/3 text-center">
                            <p className="text-sm text-black1 ">
                                สวัสดี
                            </p>
                            <h1 className="text-2xl font-bold text-black1 my-5">
                                ผู้บริหารสูงสุด
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 8,
                                    overflow: "hidden",
                                }}
                            >
                                เพื่อศึกษาองค์ประกอบของการเป็นผู้บริหารมืออาชีพและการจัดการความรู้เกี่ยวกับการบริหารการศึกษาซึ่งเป็นกลไก
                                และเป็นคุณสมบัติที่สำคัญอย่างยิ่งที่ผู้บริหารสถานศึกษาควรจะต้องมีเพื่อให้ครบองค์ประกอบและเหมาะสมทุกประการ
                                พร้อมสำหรับการเป็นผู้บริหารมืออาชีพที่จะพัฒนาทิศทางการศึกษาก้าวไปข้างหน้าอย่างเป็นระบบ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-10 px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="text-center flex flex-col gap-y-5">
                        <CenteredDiv>
                            <Leaf size={40}/>
                        </CenteredDiv>
                        <h1 className="text-2xl font-bold text-black1">
                            ธรรมชาติ
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
                            สำหรับตอนนี้พี่สาวกำลังหมั้นหมายกันในฤดูที่ดีกว่ารอก่อนเป็นครั้งคราว
                        </p>
                    </div>

                    <div className="text-center flex flex-col gap-y-5">
                        <CenteredDiv>
                            <Crown size={40} />
                        </CenteredDiv>
                        <h1 className="text-2xl font-bold text-black1">
                            คุณภาพ
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
                            บริการรับแก้ไขเรื่องความผิดให้เหมาะสม หลักการของมนุษย์ ความน่าเบื่อหน่าย อายุ คุณ ความเรียบง่าย
                        </p>
                    </div>

                    <div className="text-center flex flex-col gap-y-5">
                        <CenteredDiv>
                            <HandCoins  size={40} />
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


        </>
    )
}