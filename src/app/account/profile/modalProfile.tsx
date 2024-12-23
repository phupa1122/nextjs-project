

import React from 'react';

import { PiPencilSimpleLineBold } from "react-icons/pi";

export default function modalProfile() {
    const openModal = () => {
        const dialog = document.getElementById('modalProfile') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeModal = () => {
        const dialog = document.getElementById('modalProfile') as HTMLDialogElement;
        if (dialog) {
            dialog.close();
        }
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button className="btn btn-outline btn-warning px-4 text-sm" onClick={openModal}>
                <PiPencilSimpleLineBold />
                แก้ไขข้อมูล
            </button>
            <dialog id="modalProfile" className="modal">
                <div className="modal-box bg-slate-50">
                        <div className="flex justify-between items-center border-b">
                            <h3 className="font-semibold text-lg text-black1">แก้ไขข้อมูลส่วนตัว</h3>
                            <button
                                className="btn btn-sm btn-square btn-ghost text-black1"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>

                    <form method="dialog" className="space-y-1">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                ชื่อ
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    required
                                    autoComplete="name"
                                    defaultValue="ชื่อ"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lname" className="block text-sm/6 font-medium text-black1 text-start">
                                นามสกุล
                            </label>
                            <div className="mt-1">
                                <input
                                    id="lname"
                                    name="lname"
                                    type="lname"
                                    required
                                    autoComplete="lname"
                                    defaultValue="นามสกุล"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-medium text-black1 text-start">
                                ชื่อผู้ใช้
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    required
                                    autoComplete="username"
                                    defaultValue="ชื่อผู้ใช้"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black1 text-start">
                                อีเมล์
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    defaultValue="อีเมล์"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                เบอร์โทรศัพท์
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    required
                                    autoComplete="phone"
                                    defaultValue="เบอร์โทรศัพท์"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                วัน เดือน ปีที่เกิด
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

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1">
                                รหัสผ่าน
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-black1">
                                ยืนยันรหัสผ่าน
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="mt-6 text-right space-x-3">
                            <button type='button' className="btn btn-outline btn-base-content px-4 text-sm" onClick={closeModal}>ปิด</button>
                            <button
                                className="btn btn-warning px-4 text-sm text-slate-50">
                                แก้ไขข้อมูล
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
