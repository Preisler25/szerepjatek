import React from "react";

export default function CardLayout({ children }) {
    return (
        <div className="h-4/5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4 overflow-scroll rounded-lg">
        {children}
        </div>
    );
}