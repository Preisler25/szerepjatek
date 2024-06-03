import React from "react";

export default function InfoBlock({ list }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-lg m-10">
      {list.map(({ title, text }, index) => (
        <div key={index}>
          <div className="text-xl font-bold mt-1 mb-0">{title}</div>
          <div className="text-gray-600">{text}</div>
        </div>
      ))}
    </div>
  );
}
