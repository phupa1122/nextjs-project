import React, { useState } from "react";

const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="my-6">
            {/* Button to Open Modal */}
            <button
                onClick={handleOpen}
                className="bg-slate-50 text-[#FAA500] px-4 py-2 rounded-md shadow border-[#FAA500] border-2 hover:bg-gray-200"
            >
                แก้ไขข้อมูล
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-auto flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-50 rounded-lg shadow-lg max-w-lg w-full p-6">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b">
                            <h2 className="text-lg font-medium text-black1">ข้อมูลส่วนตัว</h2>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-4 space-y-2">
                            <form action="#" method="POST" className="space-y-1">
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
                                            type="confirmPassword"
                                            required
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-pink1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-pink1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div className="mt-6 text-right">
                            <button
                                onClick={handleClose}
                                className="bg-slate-50 text-[#FAA500] px-2 py-1 rounded-md shadow transition outline-1 border-[#FAA500] border-2 hover:bg-gray-200"
                            >
                                แก้ไขข้อมูล
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileModal;
