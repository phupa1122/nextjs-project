import React from 'react'

export default function modalDetail() {
    return (
        <div>

            <dialog id="my_modal_2" className="modal">
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
                                ทรีตเมนต์มาร์คด้วยมือ + เครื่อง
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start">
                                ราคา (บาท)
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    500
                                </button>
                            </div>
                        </div>


                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="depositPrice" className="block text-sm/6 font-medium text-black1 text-start">
                                ราคาค่ามัดจำการจองคิว 10%
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    50
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                ชื่อลูกค้า
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    รุ่งไพลิน
                                </button>
                            </div>
                        </div>


                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                เบอร์โทรศัพท์
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    098-6789805
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                            วันที่การจอง
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    19 ม.ค 2568
                                </button>
                            </div>
                        </div>


                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start">
                            พนักงาน
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                ช่างแมว
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="times" className="block text-sm/6 font-medium text-black1 text-start">
                            เวลาที่สามารถจองได้
                            </label>
                            <div className="mt-1">
                                <button className="text-gray1 text-start sm:text-sm/6">
                                    13.00
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
    );

}
