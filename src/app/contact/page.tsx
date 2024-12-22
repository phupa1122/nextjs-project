import React from 'react'

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
                <div className="flex items-center justify-between px-20">
                    <div className="text-start w-80 flex flex-col gap-3">
                        <h1 className="text-2xl font-bold text-black1">
                            เบอร์โทรศัพท์
                        </h1>
                        <p className="text-base text-start text-black1">
                            090-3166790
                        </p>
                    </div>
                    <div className="text-start w-80 flex flex-col gap-3">
                        <h1 className="text-2xl font-bold text-black1">
                            ที่อยู่
                        </h1>
                        <p className="text-base text-start text-black1">
                            199 2 ตำบล บ้านโฮ่ง อำเภอ บ้านโฮ่ง ลำพูน 51130
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center space-x-0 px-20 my-5">
                </div>

            </div>
        </>
    )
}
