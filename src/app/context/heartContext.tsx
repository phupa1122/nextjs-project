"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// สร้าง TypeScript interface สำหรับ context
interface HeartContextType {
    heartCount: number;
    addToHeart: () => void;
    resetHeartCount: () => void; // เพิ่มฟังก์ชัน resetHeartCount ใน interface
}

// สร้าง Context
const HeartContext = createContext<HeartContextType | undefined>(undefined);

// สร้าง Provider
export const HeartProvider = ({ children }: { children: ReactNode }) => {
    const [heartCount, setHeartCount] = useState(0);
    
    const resetHeartCount = () => setHeartCount(0); // ฟังก์ชันรีเซ็ต heartCount

    const addToHeart = () => {
        setHeartCount(prevCount => prevCount + 1); // เพิ่ม heartCount
    };

    return (
        <HeartContext.Provider value={{ heartCount, addToHeart, resetHeartCount }}>
            {children}
        </HeartContext.Provider>
    );
};

// Hook สำหรับใช้งาน Context
export const useHeart = () => {
    const context = useContext(HeartContext);
    if (!context) {
        throw new Error("useHeart ต้องใช้ภายใน HeartProvider");
    }
    return context;
};
