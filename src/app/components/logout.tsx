import React, { useState } from "react";

import { PiWarningCircle } from "react-icons/pi";

export default function logout() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <div>
            {/* Button to Open Modal */}
            <button
                onClick={handleOpen}
                className="text-black1 text-sm hover:text-gray-700 focus:text-pink1"
            >
                ออกจากระบบ
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-auto flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-50 rounded-lg shadow-lg max-w-lg w-full p-6">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b">
                            <div className="flex justify-between items-center space-x-2">
                                <PiWarningCircle size={24} color="red"/>
                                <h2 className="text-lg font-medium text-black1">ออกจากระบบ</h2>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-4 space-y-2">
                            <p className="text-black1 text-sm">หากยืนยันการออกจากระบบแล้ว</p>
                            <p className="text-gray1 text-sm">ระบบจะทำการออกจากระบบ </p>

                        </div>

                        {/* Modal Footer */}
                        <div className="mt-6 text-right space-x-2">
                            <button
                                onClick={handleClose}
                                className="bg-slate-50 text-red-500 px-2 py-1 rounded-md shadow transition outline-1 border-red-500 border-2 hover:bg-gray-200"
                            >
                                ยกเลิก
                            </button>
                            <button
                                className="bg-red-500 text-white1 px-2 py-1 rounded-md shadow transition outline-1 border-red-500 border-2 hover:bg-red-400 hover:text-white1 hover:border-red-400"
                            >
                                ออกจากระบบ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
