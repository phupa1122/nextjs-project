
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import thLocale from '@fullcalendar/core/locales/th';
import './styles.css';

interface EventData {
    id: string;
    title: string;
    start: string;
    end?: string;
}

const FullCalendarComponent: React.FC = () => {

    const [events, setEvents] = useState<EventData[]>([]);

    useEffect(() => {
        fetch("/api/fetch_events.php") // ดึงข้อมูลจาก API
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    return (
        <>
            <div id='calender' className='bg-white p-5 rounded-md'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale={thLocale} // ตั้งค่าเป็นภาษาไทย
                    events={[
                        {
                            title: 'ตัวอย่างอีเวนต์',
                            start: new Date().toISOString().split('T')[0],
                        },
                        {
                            title: 'ตัวอย่างอีเวนต์',
                            start: new Date().toISOString().split('T')[0],
                        },
                    ]}
                    //events={events} // โหลดข้อมูลจาก state
                />
            </div>
        </>
    );
};

export default FullCalendarComponent;
