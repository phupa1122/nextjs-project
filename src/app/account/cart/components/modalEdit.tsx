import employee from '@/app/employee/page'
import React from 'react'

interface modalEditProps {
    id: number
    title: string
    price: number
    name: string
    phone: string
    date: string
    emp: string
    time: string
}

export default function modalEdit({ id, title, price, name, phone, date, emp, time }: modalEditProps) {
    return (
        <div>
            <dialog id={`edit${id}`} className="modal" key={id}>
                <div className="modal-box bg-slate-50 space-y-2">
                    <div className="flex justify-start items-center border-b">
                        <h3 className="font-semibold text-xl text-black1">รายละเอียด</h3>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start">
                            บริการ
                        </label>
                        <div className="flex flex-row space-x-3">
                            <p
                                className="text-sm text-gray1"
                            >
                                {title}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start">
                                ราคา (บาท)
                            </label>
                            <div className="mt-1">
                                <input
                                    id="depositPrice"
                                    name="depositPrice"
                                    type="text"
                                    required
                                    autoComplete="depositPrice"
                                    
                                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start sm:text-sm/6 cursor-not-allowed"
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
                                    placeholder={(price * 0.1).toFixed(0)}
                                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start sm:text-sm/6 cursor-not-allowed"
                                />
                            </div>
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
                                    placeholder={name}
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
                                    type="text"
                                    required
                                    autoComplete="phone"
                                    placeholder={phone}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                วันที่การจอง
                            </label>
                            <div className="mt-1">
                                <input
                                    id="date"
                                    name="date"
                                    type="text"
                                    required
                                    autoComplete="date"
                                    defaultValue={date}
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
                                    id="employee"
                                    name="employee"
                                    type="text"
                                    required
                                    autoComplete="employee"
                                    placeholder={emp}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="times" className="block text-sm/6 font-medium text-black1 text-start">
                                เวลาที่สามารถจองได้
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 border rounded-md px-3 py-1">
                                    {time}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-end mt-6 text-right space-x-3">
                        <form method="dialog">
                            <button className="py-2 px-4 text-base text-gray1 border border-gray-200 bg-slate-50 rounded-md hover:bg-gray-200 hover:text-gray1 hover:border-gray-200">ปิด</button>
                        </form>
                    </div>
                </div>



                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
