import React from "react";

export default function CardLayout({ children }) {
  console.log(children);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4 rounded-lg h-[60vh] overflow-x-hidden">
      {children}
    </div>
  );
}
