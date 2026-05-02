import React from "react";

export default function SectionHeader({ label, gradientFrom, gradientTo }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div
        className={`w-5 h-0.5 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
      />
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {label}
      </h2>
    </div>
  );
}