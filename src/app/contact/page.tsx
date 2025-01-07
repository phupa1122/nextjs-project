import React from 'react'
import Map from '../components/map';

import { PiPhoneCallFill } from "react-icons/pi";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function contact() {

    const pageUrl = '/';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/contact/bg-contact.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">ติดต่อเรา</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>ติดต่อเรา</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-10'>
                <div className="grid sm:grid-cols-1 md:flex md:items-center md:justify-between mx-20 gap-4">
                    <div className="text-start w-full sm:w-full md:w-2/6 flex flex-col gap-1 bg-slate-50 rounded-md p-3">
                        <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                            <PiPhoneCallFill size={24} />
                            เบอร์โทรศัพท์
                        </h1>
                        <p className="text-base text-start text-gray1">
                            090-3166790
                        </p>
                    </div>
                    <div className="text-start w-full sm:w-full md:w-3/6 flex flex-col gap-1 bg-slate-50 rounded-md p-3">
                        <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                            <PiMapPinAreaFill size={24} />
                            ที่อยู่
                        </h1>
                        <p className="text-base text-start text-gray1">
                            199 2 ตำบล บ้านโฮ่ง อำเภอ บ้านโฮ่ง ลำพูน 51130
                        </p>
                    </div>
                </div>

                <Map />

            </div>
        </>
    )
}
