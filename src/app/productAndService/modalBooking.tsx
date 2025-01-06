import { time } from 'console';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import selectedService from './booking/selectedService';

const Service = ["บริการทรีตเมนต์", "บริการสักคิ้ว", "บริการทำเล็บ"];
const Times = ["11:00", "13:00", "15:00", "17:00", "10:00", "12:00", "14:00", "16:00", "09:00", "11:00", "13:00", "15:00"];

interface ModalBookingProps {
    category: string[];  // สมมติว่า 'category' เป็น array ของบริการ
}

const ModalBooking: React.FC<ModalBookingProps> = ({ category }) => {
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

    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedService, setSelectedService] = useState<string | null>(null)

    const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const employee = event.target.value;
        setSelectedEmployee(employee);
    };

    useEffect(() => {
        if (selectedEmployee === "ช่างแมว") {
            fetchAvailableTimes("ช่างแมว");
        } else if (selectedEmployee === "ช่างชาย") {
            fetchAvailableTimes("ช่างชาย");
        } else if (selectedEmployee === "ช่างหญิง") {
            fetchAvailableTimes("ช่างหญิง");
        } else {
            // ถ้าไม่มีพนักงานที่เลือก ให้ล้างเวลา
            setAvailableTimes([]);
        }
    }, [selectedEmployee]);

    const fetchAvailableTimes = async (employee: "ช่างแมว" | "ช่างชาย" | "ช่างหญิง") => {
        const times = {
            "ช่างแมว": ["11:00", "13:00", "15:00", "17:00"],
            "ช่างชาย": ["10:00", "12:00", "14:00", "16:00"],
            "ช่างหญิง": ["09:00", "11:00", "13:00", "15:00"],
        };

        // เข้าถึงเวลาตามชื่อพนักงาน
        setAvailableTimes(times[employee] || []);
    };

    const TimeFilter = (time: string) => {
        setSelectedTime(selectedTime === time ? null : time);
    };

    const ServiceFilter = (service: string) => {
        setSelectedService(selectedService === service ? null : service);
    };


    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button className="px-3 py-1 items-center text-pink1 rounded hover:bg-pink1 hover:text-slate-50" onClick={openModal}>
                จองคิว
            </button>

            <dialog id="modalBooking" className="modal">
                <div className="modal-box bg-slate-50">
                    <div className="flex justify-between items-center border-b">
                        <h3 className="font-semibold text-xl text-black1">กรอกข้อมูลการจองคิว</h3>
                        <button
                            className="btn btn-sm btn-square btn-ghost text-black1"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>

                    <div className='pt-3'>
                        <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start">
                            บริการ
                        </label>
                        <div className="flex flex-row space-x-3">
                            {category.map((cat, index) => (
                                <button
                                className='px-3 py-1 text-base font-semibold text-gray1 border rounded-md cursor-not-allowed'
                                key={index}
                                onClick={(e) => e.preventDefault()}  // ป้องกันการคลิก
                            >
                                {cat}
                            </button>
                            
                            ))}
                        </div>
                    </div>

                    <form method="dialog" className="space-y-3">
                        <div className='flex flex-row space-x-5 pt-3'>
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
                                        placeholder="ชื่อลูกค้า"
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
                                        type="number"
                                        required
                                        autoComplete="phone"
                                        placeholder="เบอร์โทรศัพท์"
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
                                        type="text"
                                        required
                                        autoComplete="price"
                                        placeholder="ราคา"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement; // แปลงประเภท e.target
                                            const price = parseFloat(target.value) || 0;
                                            const depositPrice = document.getElementById("depositPrice") as HTMLInputElement; // แปลงประเภทของ depositPrice
                                            if (depositPrice) {
                                                depositPrice.value = Math.round(price * 0.1).toString(); // แปลงเป็นจำนวนเต็มและเป็น string
                                            }

                                        }}
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
                                        type="text"
                                        required
                                        autoComplete="depositPrice"
                                        placeholder="0"
                                        readOnly
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                    วันที่การจอง
                                </label>
                                <div>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        autoComplete="off"
                                        className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start">
                                    พนักงาน
                                </label>
                                <div>
                                    <select className="select-none w-full bg-slate-50 border-2 bg-border-gray1 rounded-md px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6" onChange={handleEmployeeChange}>
                                        <option disabled selected>พนักงาน</option>
                                        <option value="ช่างแมว">ช่างแมว</option>
                                        <option value="ช่างชาย">ช่างชาย</option>
                                        <option value="ช่างหญิง">ช่างหญิง</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Display Available Times */}
                        <label htmlFor="times" className="block text-sm/6 font-medium text-black1 text-start">
                            เวลาที่สามารถจองได้
                        </label>
                        {availableTimes.length > 0 && (
                            <div className="mt-4">
                                <div className="flex flex-wrap space-x-2">
                                    {availableTimes.map((time, index) => (
                                        <button
                                            type='button'
                                            key={index}
                                            className={`py-1 px-3 text-sm font-medium ${selectedTime === time
                                                ? 'text-slate-50 border-blue1 border rounded-md px-3 py-1 dark:text-slate-50 dark:border-blue1 dark:bg-blue1'
                                                : ' hover:text-gray1 text-gray-800 border rounded-md px-3 py-1'
                                                }
                                                ${time === "13:00" ? "cursor-not-allowed bg-gray-200 text-gray1" : ""}
                                                `}
                                            onClick={() => TimeFilter(time)}
                                            disabled={time === "13:00"}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-6 text-right space-x-3">
                            <button type="button" className="py-2 px-4 text-base text-green-600 bg-slate-50 border-green-600 rounded-md hover:bg-slate-50 hover:text-gray1 hover:border-green1" onClick={closeModal}>
                                ปิด
                            </button>
                            <Link href="/payment" passHref>
                                <button
                                    type='submit'
                                    className="py-2 px-4 text-base text-slate-50 bg-green-600 border-green-600 rounded-md hover:bg-green1 hover:text-gray hover:border-gray"
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

export default ModalBooking;
