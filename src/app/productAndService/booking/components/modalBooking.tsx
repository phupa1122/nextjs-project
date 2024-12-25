import Link from 'next/link';
import React from 'react';

export default function modalBooking() {
    const openModal = () => {
        const dialog = document.getElementById('modalBooking') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeModal = () => {
        const dialog = document.getElementById('modalBooking') as HTMLDialogElement;
        if (dialog) {
            dialog.close();
        }
    };

    const services = ["บริการทรีตเมนต์", "บริการสักคิ้ว", "บริการทำเล็บ"];
    const workers = {
        "บริการทรีตเมนต์": ["ช่าง A", "ช่าง B", "ช่าง C"],
        "บริการสักคิ้ว": ["ช่าง D", "ช่าง E"],
        "บริการทำเล็บ": ["ช่าง F", "ช่าง G", "ช่าง H"],
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button className="w-full text-sm block py-2 px-4 rounded-md border text-green1 border-green1 font-normal transition bg-slate-50 hover:bg-green1 hover:text-slate-50" onClick={openModal}>
                จองคิว
            </button>
            <dialog id="modalBooking" className="modal">
                <div className="modal-box bg-slate-50">
                    <div className="flex justify-between items-center border-b">
                        <h3 className="font-semibold text-lg text-black1">กรอกข้อมูลการจองคิว</h3>
                        <button
                            className="btn btn-sm btn-square btn-ghost text-black1"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>
                    <form method="dialog" className="space-y-1">
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
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
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
                                        type="name"
                                        required
                                        autoComplete="name"
                                        defaultValue="ชื่อลูกค้า"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
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
                                        type="number"
                                        required
                                        autoComplete="phone"
                                        defaultValue="เบอร์โทรศัพท์"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start">
                                บริการ
                            </label>
                            <div className="flex flex-row mt-1 space-x-3">
                                <button className="btn btn-active btn-ghost">บริการทรีตเมนต์</button>
                                <button className="btn btn-active btn-ghost">บริการสักคิ้ว</button>
                                <button className="btn btn-active btn-ghost">บริการทำเล็บ</button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start">
                                พนักงาน
                            </label>
                            <div className="mt-1">
                                <select className="select-sm w-full bg-slate-50 border-2 bg-border-gray1 rounded-md px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6">
                                    <option disabled selected>พนักงาน</option>
                                    <option>ช่างแมว</option>
                                    <option>ช่างชาย</option>
                                    <option>ช่างหญิง</option>
                                </select>
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
                                        type=""
                                        required
                                        autoComplete="promotion"
                                        defaultValue="ราคา"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
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
                                        autoComplete="depositPrice"
                                        defaultValue="0.00"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
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
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
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
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-right space-x-3">
                            <button type="button" className="btn btn-outline btn-base-content px-4 text-sm" onClick={closeModal}>
                                ปิด
                            </button>
                            <Link href="/payment" passHref>
                                <button
                                    className="btn px-4 text-sm text-slate-50 bg-green1 border-green1 hover:bg-green-600 hover:text-white hover:border-green-600"
                                >
                                    จองคิว
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
