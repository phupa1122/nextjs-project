import React from 'react';

import { CircleAlert } from 'lucide-react';

interface modalDeleteProps {
    id: number
}

export default function modalDelete({ id }: modalDeleteProps) {

    const deleteQueue = (id: number) => {
        fetch(`/api/deleteQueue.php?id=${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // ลบรายการจาก DOM
                    const row = document.getElementById(`row-${id}`);
                    if (row) row.remove();
                } else {
                    //console.error('ลบการจองคิวไม่สำเร็จ:', data.message);
                }
            });
            //.catch((error) => console.error('ไม่สำเร็จ:', error));
    };
    
    return (
        <div>
            <dialog id={`delete${id}`} className="modal" key={id}>
                <div className="modal-box bg-slate-50">
                    <form method="dialog">
                        <div className="flex justify-between items-center border-b">
                            <div className="flex justify-center items-center space-x-2 text-error">
                                <CircleAlert />
                                <h2 className="text-lg font-medium text-error">ลบการจองคิว</h2>
                            </div>
                            <button
                                className="text-black1"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mt-2 space-y-1 font-normal">
                            <p className="text-black1 text-sm">หากยืนยันการลบการจองคิวแล้ว</p>
                            <p className="text-gray1 text-sm">ระบบจะทำการลบการจองคิว</p>

                        </div>
                        <div className="mt-6 text-right space-x-3">
                            <button className="btn btn-outline btn-base-content px-4 text-sm">ปิด</button>
                            <button
                                className="btn btn-error px-4 text-sm text-slate-50"
                                onClick={() => deleteQueue(id)}
                            >
                                ลบการจองคิว
                            </button>
                        </div>
                    </form>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
