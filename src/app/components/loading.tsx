import React from 'react';

export default function loading() {
    return (
        <div className="flex justify-center items-center gap-3 p-40">
            <span className="loading loading-spinner text-pink1 w-16 h-16"></span>

            <p className="text-black1 font-medium text-lg">กำลังโหลด...</p>
        </div>
    );
}
