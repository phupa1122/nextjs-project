"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// สร้าง TypeScript interface สำหรับ context
interface CartContextType {
    cartCount: number;
    addToCart: () => void;
}

// สร้าง Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// สร้าง Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook สำหรับใช้งาน Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart ต้องใช้ภายใน CartProvider");
    }
    return context;
};
