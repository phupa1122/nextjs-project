import React from "react";

export default function sideBar() {
    return (
        <>
            <aside className="fixed inset-y-0 left-0 w-3/4 lg:w-1/4 h-full border-l no-scrollbar overflow-y-auto border-gray-200 bg-white transform transition-transform duration-300 ease-in-out z-50 md:z-20 lg:static lg:translate-x-0 -translate-x-full">
                <div className="sticky top-0 inset-x-0 z-20 px-4 py-[11px] text-center border-y border-gray-200 bg-gray-50 flex items-center justify-between lg:justify-center md:justify-between">
                    <h1 className="text-3xl font-medium text-gray-600">กรองข้อมูล</h1>
                    <button className="text-2xl text-gray-800 hidden">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                        </svg>
                    </button>
                </div>
                <div className="w-full no-scrollbar">
                    <div className="mb-4 text-gray-600">
                        <button className="w-full text-left py-2 px-4">
                            <h1 className="flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
                                    ></path>
                                </svg>
                                <span className="font-semibold">เพศ</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    className="ml-auto w-4 h-4 transform"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                                </svg>
                            </h1>
                        </button>
                        <ul className="overflow-y-auto mt-2 flex flex-wrap gap-4 justify-start mx-4">
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ชาย
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    หญิง
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 text-gray-600">
                        <button className="w-full text-left py-2 px-4">
                            <h1 className="flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path>
                                </svg>
                                <span className="font-semibold">ตําแหน่ง</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    className="ml-auto w-4 h-4 transform"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                                </svg>
                            </h1>
                        </button>
                        <ul className="overflow-y-auto mt-2 flex flex-wrap gap-4 justify-start mx-4">
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ครูช่าง
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    นักออกแบบไทย
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ผู้เชี่ยวชาญ
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    นักออกแบบญี่ปุ่น
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ล่ามแปลภาษา
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ที่ปรึกษาไทย
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ที่ปรึกษาญี่ปุ่น
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ที่ปรึกษาอเมริกัน
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ที่ปรึกษามาเลเซีย
                                </button>
                            </li>
                            <li>
                                <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition bg-white hover:bg-gray-200 text-gray-800">
                                    ที่ปรึกษามาซิโดเนีย
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 text-gray-600">
                        <button className="w-full text-left py-2 px-4">
                            <h1 className="flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"></path>
                                </svg>
                                <span className="font-semibold">สัญชาติ</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    className="ml-auto w-4 h-4 transform"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                            </h1>
                        </button>
                    </div>
                    <div className="mb-4 text-gray-600">
                        <button className="w-full text-left py-2 px-4">
                            <h1 className="flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="font-semibold">ปี</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    className="ml-auto w-4 h-4 transform"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                            </h1>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
