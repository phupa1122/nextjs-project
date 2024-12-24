import React from 'react';
import ConfirmUpload from './confirmUpload';

import { MdAddPhotoAlternate } from "react-icons/md";

export default function modalUpload() {

    const openModal = () => {
        const dialog = document.getElementById('modalUpload') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeModal = () => {
        const dialog = document.getElementById('modalUpload') as HTMLDialogElement;
        if (dialog) {
            dialog.close();
        }
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink1 px-3 py-1.5 text-sm/6 font-semibold text-slate-50 shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink1" onClick={openModal}
            >
                ยืนยันหลักฐานการโอน
            </button>

            <dialog id="modalUpload" className="modal">
                <div className="modal-box bg-slate-50">
                    <div className="flex justify-between items-center border-b">
                        <h3 className="font-semibold text-lg text-black1">อัพโหลดหลักฐาน</h3>
                        <button
                            className="btn btn-sm btn-square btn-ghost text-black1"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>
                    

                    <form method="dialog" className="space-y-3">
                        <div className="col-span-full">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <MdAddPhotoAlternate aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-slate-50 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>อัพโหลดรูปภาพ</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">หรือลากแล้ววาง</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">รองรับไฟล์ PNG, JPG, GIF ขนาดสูงสุด 10MB</p>
                                </div>

                            </div>
                        </div>
                        <div className="mt-6 text-right space-x-3">
                            <button type='button' className="btn btn-outline btn-base-content px-4 text-sm" onClick={closeModal}>ปิด</button>
                            <button type='submit' className="btn px-4 text-sm text-slate-50 bg-green1 border-green1 hover:bg-green-500 hover:text-white hover:border-green-500">
                                บันทึกหลักฐาน
                            </button>
<ConfirmUpload />
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
