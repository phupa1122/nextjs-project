'use client';

import { useState, useEffect } from 'react';

type View = 'month' | 'week' | 'day' | 'list'

export default function Calendar() {
    const [view, setView] = useState<View>('month');
    const [currentDate] = useState(new Date()); // Manage the current month and year

    // Function to go to the previous month
    // const previousMonth = () => {
    //     const newDate = new Date(currentDate)
    //     newDate.setMonth(currentDate.getMonth() - 1)
    //     setCurrentDate(newDate)
    // }

    // Function to go to the next month
    // const nextMonth = () => {
    //     const newDate = new Date(currentDate)
    //     newDate.setMonth(currentDate.getMonth() + 1)
    //     setCurrentDate(newDate)
    // }

    // Format the current month and year
    
    const monthYear = currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                {/* <div className="flex gap-2">
                    <button onClick={previousMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                        <ChevronLeft className="w-5 h-5 text-gray1" />
                    </button>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                        <ChevronRight className="w-5 h-5 text-gray1" />
                    </button>
                    <button className="px-4 py-2 bg-pink1 text-white rounded-lg hover:bg-pink-500">
                        วันนี้
                    </button>
                </div> */}

                <h2 className="text-2xl font-semibold text-gray1">
                    {view === 'list' ? '12 - 18 มกราคม 2568' :
                        view === 'day' ? '17 มกราคม 2568' :
                            view === 'week' ? '12 -18 มกราคม 2568' :
                                monthYear} {/* Display the current month and year */}
                </h2>

                <div className="flex gap-2">
                    {(['month', 'week', 'day', 'list'] as const).map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v)}
                            className={`px-4 py-2 rounded-lg ${view === v
                                ? 'bg-pink-500 text-white'
                                : 'bg-pink1 text-white hover:bg-pink-500'
                                }`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>

            {view === 'list' ? (
                <ListView />
            ) : view === 'week' ? (
                <WeekView />
            ) : view === 'day' ? (
                <DayView />
            ) : (
                <MonthView />

            )}
        </div>
    );
}

function ListView() {
    const events = [
        {
            date: 'วันพฤหัสบดี',
            fullDate: '16 มกราคม 2568'
        },
        {
            date: 'วันศุกร์',
            fullDate: '17 มกราคม 2568'
        },
        {
            date: 'วันเสาร์',
            fullDate: '18 มกราคม 2568'
        }
    ];

    return (
        <div className="border rounded-lg divide-y">
            {events.map((day) => (
                <div key={day.date}>
                    <div className="flex justify-between items-center p-4 bg-gray-50 text-gray1">
                        <div className="font-medium">{day.date}</div>
                        <div className="text-gray-500">{day.fullDate}</div>
                    </div>
                    <div className="divide-y">
                        <div className="flex items-center gap-4 p-4">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function DayView() {
    const hours = Array.from({ length: 24 }, (_, i) => i); // 0-23 hours

    return (
        <div className="border rounded-lg">
            <div className="grid grid-cols-[100px_1fr] text-gray1">
                {/* Day Header */}
                <div className="p-4 border-b border-r font-medium">
                    ทั้งวัน
                </div>
                <div className="p-4 border-b font-medium">
                    วันศุกร์
                </div>

                {/* All Day Content */}
                {/* <div className="border-r h-16" />
                <div className="h-16 relative bg-blue-500">
                    <div className="absolute inset-x-0 top-0 bottom-0 px-2 py-1 text-white">
                        Conference
                    </div>
                </div> */}

                {/* Time Grid */}
                {hours.map((hour) => (
                    <>
                        {/* Time Labels */}
                        <div key={`time-${hour}`} className="border-r border-b p-2 text-sm">
                            {hour === 0
                                ? '12am'
                                : hour === 12
                                    ? '12pm'
                                    : hour > 12
                                        ? `${hour - 12} pm`
                                        : `${hour} am`}
                        </div>

                        {/* Time Slot */}
                        <div
                            key={`slot-${hour}`}
                            className="border-b relative h-10"
                        >
                            {hour === 10 && (
                                <div className="absolute inset-x-0 top-0 h-[150%] text-white px-2 py-1">
                                </div>
                            )}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

function WeekView() {
    const hours = Array.from({ length: 13 }, (_, i) => i + 6); // 6am to 6pm
    const days = [
        'อาทิตย์',
        'จันทร์',
        'อังคาร',
        'พุธ',
        'พฤหัสบดี',
        'ศุกร์',
        'เสาร์'
    ];

    return (
        <div className="border rounded-lg">
            <div className="grid grid-cols-[100px_repeat(7,1fr)] text-gray1">
                {/* Corner Header */}
                <div className="p-4 border-b border-r font-medium">ทั้งวัน</div>

                {/* Day Headers */}
                {days.map((day) => (
                    <div key={day} className="p-4 border-b border-r last:border-r-0 font-medium text-center text-gray1">
                        {day}
                    </div>
                ))}

                {/* Time Grid */}
                {hours.map((hour) => (
                    <>
                        {/* Time Labels */}
                        <div key={`time-${hour}`} className="border-r border-b p-2 text-sm text-gray1">
                            {hour === 12 ? '12pm' : hour > 12 ? `${hour - 12}pm` : `${hour}am`}
                        </div>

                        {/* Time Slots */}
                        {days.map((day) => (
                            <div
                                key={`slot-${day}-${hour}`}
                                className="border-r border-b last:border-r-0 text-gray1"
                            />
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
}

function MonthView() {
    const [currentDate, setCurrentDate] = useState<Date>(new Date()); // กำหนด useState สำหรับ currentDate
    const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
    const [emptyDaysCount, setEmptyDaysCount] = useState<number>(0);

    useEffect(() => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const totalDays = lastDayOfMonth.getDate();
        const startDay = firstDayOfMonth.getDay(); // วันแรกของเดือนที่ตรงกับวันไหนของสัปดาห์ (0 = อาทิตย์, 6 = เสาร์)

        // เติมวันที่ของเดือนลงในอาร์เรย์
        const days = Array(totalDays).fill(null).map((_, index) => index + 1);

        // คำนวณจำนวนช่องว่างที่ต้องเติมก่อนวันที่ 1
        const emptyDays = startDay;

        setEmptyDaysCount(emptyDays); // เก็บจำนวนช่องว่าง
        setDaysInMonth(days); // เก็บวันที่ทั้งหมด
    }, [currentDate]);

    // ฟังก์ชันสำหรับการเปลี่ยนเดือน
    const changeMonth = (increment: number) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + increment); // เพิ่มหรือลดเดือน
        setCurrentDate(newDate); // อัปเดตสถานะของ currentDate
    };

    // แปลงวันที่และช่องว่างให้เป็นแถว ๆ
    const renderCalendar = () => {
        const totalDays = [...Array(emptyDaysCount).fill(null), ...daysInMonth];
        const weeks = [];

        // แบ่งวันที่ออกเป็นสัปดาห์ ๆ (7 วันต่อสัปดาห์)
        while (totalDays.length) {
            weeks.push(totalDays.splice(0, 7));
        }

        return weeks;
    };

    return (
        <div className="border rounded-lg">
            {/* ปุ่มสำหรับเปลี่ยนเดือน */}
            <div className="flex justify-between p-4">
                <button onClick={() => changeMonth(-1)} className="p-2 text-gray1">ก่อนหน้า</button>
                <span className="text-lg font-bold text-gray1">
                    {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                </span>
                <button onClick={() => changeMonth(1)} className="p-2 text-gray1">ถัดไป</button>
            </div>

            {/* หัวข้อวันในสัปดาห์ */}
            <div className="grid grid-cols-7 border-b text-gray1">
                {['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'].map((day) => (
                    <div key={day} className="p-4 text-center font-medium border-r last:border-r-0 text-gray1">
                        {day}
                    </div>
                ))}
            </div>

            {/* วันในปฏิทิน */}
            <div className="grid grid-rows-5 text-gray1">
                {renderCalendar().map((week, weekIndex) => {
                    // ถ้าเป็นสัปดาห์สุดท้าย (weekIndex คือ index ของสัปดาห์ในเดือน)
                    if (weekIndex === renderCalendar().length - 1 && week.length < 7) {
                        // เติมช่องว่างให้ครบ 7 ช่อง
                        const missingDays = 7 - week.length;
                        const emptyDays = Array(missingDays).fill(null);
                        week = [...week, ...emptyDays]; // เติมช่องว่าง
                    }

                    return (
                        <div key={weekIndex} className="flex">
                            {week.map((day, index) => (
                                <div
                                    key={index}
                                    className={`w-full p-3 h-32 border-r border-b text-end ${day ? '' : 'text-gray-300'}`}
                                >
                                    {day || ''}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

