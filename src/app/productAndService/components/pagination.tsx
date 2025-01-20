import React, { useState } from 'react';
import { data } from '../data'; // ต้องมีข้อมูลใน data
import ProductCard from './productCard';

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = data.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(data.length / pageSize);

    return (
        <div className='px-10 mx-10 border-t border-gray1'>
            {/* แสดงข้อมูล */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {currentItems.map((item, index) => (
                    <ProductCard id={item.id || index + 1}
                        name={item.name || "-"}
                        type={item.type || "-"}
                        category={item.category || "-"}
                        price={item.price || index + 1}
                        image={item.image || "-"}
                        subtitle={item.subtitle || "-"}
                    />
                ))}
            </div>

            {/* ปุ่มเปลี่ยนหน้า */}
            <div className="flex justify-center mt-6">
                <button
                    className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    ก่อนหน้า
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    ถัดไป
                </button>
            </div>
        </div>
    );
}
