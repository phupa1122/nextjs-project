import React from 'react'
import { PiTrashFill } from "react-icons/pi";
import ModalDetail from './components/modalDetail';
import { useRouter } from 'next/navigation';

export default function table() {

    const router = useRouter();

    const navigateToPayment = () => {
        router.push('/payment'); // Replace '/payment' with your actual payment page route
    };

    return (
        <div className="overflow-x-auto mx-5 py-2">
            <table className="table">
                {/* หัวเรื่อง */}
                <thead>
                    <tr className='text-gray1 text-sm opacity-50'>
                        {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                        <th>บริการ</th>
                        <th>ราคา</th>
                        <th>จัดการ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-20 w-20">
                                        <img
                                            src="/images/product/Treatment.png"
                                            alt="Product" />
                                    </div>
                                </div>
                                <div className='text-black1'>
                                    <div className="text-base font-bold">ทรีตเมนต์มาร์คด้วยมือ + เครื่อง</div>

                                    <ModalDetail />

                                    <button
                                        className="text-gray1 text-xs border-b-2"
                                        onClick={() => {
                                            const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
                                            if (modal) modal.showModal();
                                        }}
                                    >
                                        รายละเอียดทั้งหมด
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='text-gray1'>
                                <div className="text-sm">500 บาท</div>
                            </div>
                        </td>
                        <td>
                            <button
                                className="text-sm text-pink1 hover:text-blue1 transition-colors duration-200"
                                onClick={navigateToPayment}
                            >
                                ชำระเงิน
                            </button>
                        </td>
                        <th className="group">
                            <PiTrashFill
                                size={24}
                                className="text-[#7A7772] group-hover:text-[#FF2D47] transition-colors duration-200"
                            />
                        </th>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
