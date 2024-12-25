import React from 'react';

import { PiCalendarCheckBold } from "react-icons/pi";

export default function successPayment() {

    const openModal = () => {
        const dialog = document.getElementById('confirmUpload') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button type='submit' className="btn px-4 text-sm text-slate-50 bg-green1 border-green1 hover:bg-green-500 hover:text-white hover:border-green-500" onClick={openModal}>
                บันทึกหลักฐาน
            </button>
            <dialog id="confirmUpload" className="modal">
                <div className="modal-box bg-slate-50">
                    <form method="dialog">
                        <div className="flex justify-between items-center border-b">
                            <div className="flex justify-between items-center space-x-2 text-green1">
                                <h2 className="text-lg font-medium text-green1">การจองคิวสำเร็จ</h2>
                            </div>
                        </div>

                        <div className="mt-2 space-y-1 text-center">
                            <div className="flex justify-center">
                                <PiCalendarCheckBold size={48} color="#13C648" />
                            </div>
                            <p className="text-black1 text-base">บริการ: ทรีตเมนต์มาร์คด้วยมือ + เครื่อง</p>
                            <p className="text-gray1 text-sm">คุณ: วิว</p>
                            <p className="text-gray1 text-sm">วันที่: 02 ธันวาคม 2567</p>
                            <p className="text-gray1 text-sm">เวลา 11.00 - 12.30 น.</p>
                        </div>


                        <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                            <button className="px-3 items-center text-pink1 hover:text-gray1 rounded">ปิด</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
