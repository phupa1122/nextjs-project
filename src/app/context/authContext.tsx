"use client"; // ต้องเพิ่มคำสั่งนี้เพื่อให้เป็น Client Component

import React, { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
