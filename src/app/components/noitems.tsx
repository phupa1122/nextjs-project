import React from 'react';

import { Inbox } from 'lucide-react';

export default function noitems() {
    return (
        <>
            <div className='p-10'>
                <div className="text-center">
                    <div className="flex justify-center items-center mx-auto">
                        <Inbox size={48} color="#EC407A" />
                    </div>
                    <h1 className="mt-4 text-balance text-xl font-medium tracking-tight text-black1 sm:text-2xl">
                        ไม่มีรายการ
                    </h1>
                </div>
            </div>
        </>
    );
}
