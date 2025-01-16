// pages/productAndService.js
import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function ProductAndService() {
  const calendarRef = useRef();

  return (
    <div style={{ maxWidth: "1100px", margin: "40px auto" }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        initialDate="2023-11-07"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={[
          { title: "All Day Event", start: "2023-11-01" },
          { title: "Long Event", start: "2023-11-07", end: "2023-11-10" },
          { title: "Conference", start: "2023-11-11", end: "2023-11-13" },
          { title: "Meeting", start: "2023-11-12T10:30:00", end: "2023-11-12T12:30:00" },
          { title: "Lunch", start: "2023-11-12T12:00:00" },
          { title: "Birthday Party", start: "2023-11-13T07:00:00" },
          { title: "Click for Google", url: "https://google.com/", start: "2023-11-28" },
        ]}
      />
    </div>
  );
}
