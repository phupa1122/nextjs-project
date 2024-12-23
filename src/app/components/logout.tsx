import React from 'react';

import { PiWarningCircle } from "react-icons/pi";

export default function logout() {
    const openModal = () => {
        const dialog = document.getElementById('logout') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button className="text-sm text-black1" onClick={openModal}>
                ออกจากระบบ
            </button>
            <dialog id="logout" className="modal">
                <div className="modal-box bg-slate-50">
                    <form method="dialog">
                        <div className="flex justify-between items-center border-b">
                            <div className="flex justify-between items-center space-x-2 text-error">
                                <PiWarningCircle size={24} />
                                <h2 className="text-lg font-medium text-error">ออกจากระบบ</h2>
                            </div>
                            <button
                                className="btn btn-sm btn-square btn-ghost text-black1"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mt-2 space-y-1">
                            <p className="text-black1 text-sm">หากยืนยันการออกจากระบบแล้ว</p>
                            <p className="text-gray1 text-sm">ระบบจะทำการออกจากระบบ </p>

                        </div>
                        <div className="mt-6 text-right space-x-3">
                            <button className="btn btn-outline btn-base-content px-4 text-sm">ปิด</button>
                            <button onClick={() => {
                                window.location.href = '/';
                            }}
                                className="btn btn-error px-4 text-sm text-slate-50">
                                ออกจากระบบ
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
