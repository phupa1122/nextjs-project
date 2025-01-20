"use client";

import React, { useState } from 'react';

const bankTransfer: React.FC = () => {
    const [showBankDetails, setShowBankDetails] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowBankDetails(event.target.checked); // อัปเดตสถานะตามการเลือก checkbox
    };

    return (
        <div>
            <div className='items-start'>
                <fieldset>
                    <div className=" space-y-3">
                        <div className="flex gap-3">
                            <div className="flex h-6 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                    <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray1 bg-slate-50 checked:border-pink1 checked:bg-pink1 indeterminate:border-pink1 indeterminate:bg-pink1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink1 disabled:border-gray1-300 disabled:bg-gray1-100 disabled:checked:bg-gray1-100 forced-colors:appearance-auto"
                                        onChange={handleCheckboxChange}
                                    />
                                    <svg
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-slate-50 group-has-[:disabled]:stroke-gray1-950/25"
                                    >
                                        <path
                                            d="M3 8L6 11L11 3.5"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                        />
                                        <path
                                            d="M3 7H11"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-sm/6">
                                <label htmlFor="comments" className="text-black1">
                                    โอนเงินผ่านทางธนาคาร
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            {showBankDetails && (
                <div className="mt-2 mx-7 p-4 rounded border border-pink1 bg-slate-50">
                    <div className='flex flex-row items-center space-x-5'>
                        <div className='w-24 h-24' style={{ backgroundImage: "url('/images/payment/bank.png')" }}>

                        </div>
                        <div className='text-black1'>
                            <p>ชื่อบัญชี: มงคล ขัดปัญญา</p>
                            <p>หมายเลขบัญชี: 732-0-114981</p>
                            <p>ธนาคาร: ธนาคารกรุงเทพ</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default bankTransfer
