import React from "react";

export default function LegendItem({ label, range }) {
  const getColor = () => {
    if (range === "Beginner")
      return "bg-gradient-to-r from-orange-500 to-amber-500";
    if (range === "Intermediate")
      return "bg-gradient-to-r from-cyan-500 to-blue-500";
    return "bg-gradient-to-r from-emerald-500 to-teal-500";
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${getColor()}`} />
      <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
    </div>
  );
}