'use client';

import React from 'react'
import BankTransfer from './components/bankTransfer';
import QrcodeTranfer from './components/qrcodeTranfer';
import ModalUpload from './components/modalUpload';

export default function payment() {

    const pageUrl = '/';
    const cartUrl = '/account/cart';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/payment/bg-payment.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">ชำระเงิน</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li><a href={cartUrl} className="hover:text-pink1">ตะกร้าของฉัน</a></li>
                                    <li>ชำระเงิน</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5 mx-10'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg/7 font-medium text-gray1">ชำระเงินค่ามัดจำ </h3>
                </div>

                <div className='flex flex-row gap-10'>
                    <div className='bg-slate-50 mt-3 rounded-lg p-5 w-2/3 space-y-2 h-[429px]'>
                        <div>
                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                วันที่การจอง
                            </label>
                            <div className="mt-1">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    required
                                    autoComplete="date"
                                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    disabled
                                />
                            </div>
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                    ชื่อลูกค้า
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        //defaultValue={fetchedData.name || ""}  แสดงข้อมูลจากฐานข้อมูล
                                        placeholder="วิว"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                    เบอร์โทรศัพท์
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        placeholder="098-7654321" //defaultValue
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start">
                                    บริการ
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="service"
                                        name="service"
                                        type="text"
                                        required
                                        autoComplete="off"
                                        placeholder="บริการทรีตเมนต์"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start">
                                    พนักงาน
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="depositPrice"
                                        name="depositPrice"
                                        type="text"
                                        required
                                        autoComplete="off"
                                        placeholder="ช่างแมว"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start">
                                    ราคา
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        required
                                        autoComplete="off"
                                        placeholder="500"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="depositPrice" className="block text-sm/6 font-medium text-black1 text-start">
                                    ราคาค่ามัดจำการจองคิว 10%
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="depositPrice"
                                        name="depositPrice"
                                        type="number"
                                        required
                                        autoComplete="off"
                                        placeholder="50"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                        disabled
                                    //readonly ใช้ readonly แทน disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="time" className="block text-sm/6 font-medium text-black1">
                                    เวลาเริ่มต้น
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        required
                                        autoComplete="off"
                                        defaultValue="11:00"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="time" className="block text-sm/6 font-medium text-black1">
                                    เวลาสิ้นสุด
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        required
                                        autoComplete="off"
                                        defaultValue="12:30"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-50 mt-3 rounded-lg p-5 w-1/3'>
                        <div className="mt-2 space-y-3">
                            <p className="text-lg font-medium text-black1">ชำระเงิน</p>
                            <div className='flex flex-row justify-between border-b-2'>
                                <p className="text-sm text-gray1">บริการ</p>
                                <p className="text-sm text-gray1">ราคา</p>
                            </div>
                            <div className='flex flex-row justify-between border-b-2 py-3'>
                                <p className="text-base text-black1">ทรีตเมนต์มาร์คด้วยมือ + เครื่อง</p>
                                <p className="text-base text-black1">500฿</p>
                            </div>
                            <div className='flex flex-row justify-between border-b-2 py-3'>
                                <p className="text-base font-medium text-pink1">ยอดชำระค่ามัดจำ 10%</p>
                                <p className="text-base font-medium text-pink1">50฿</p>
                            </div>
                            <p className="text-lg font-medium text-black1">ช่องทางการชำระเงิน</p>
                            <div className='items-start space-y-1'>
                                <BankTransfer />
                                <QrcodeTranfer />
                            </div>

                            <p className="text-xs text-gray1">
                                ข้อมูลส่วนบุคคลของคุณจะถูกใช้เพื่อประมวลผลคำสั่งซื้อของคุณสนับสนุนประสบการณ์ของคุณในเว็บไซต์นี้และเพื่อ
                                วัตถุประสงค์อื่นๆที่อธิบายไว้ในนโยบายความเป็นส่วนตัวของเรา
                            </p>

                            <ModalUpload />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
