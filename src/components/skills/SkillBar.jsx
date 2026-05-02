import React from "react";

export default function SkillBar({ name, level }) {
  const getBarColor = () => {
    if (level >= 75)
      return "bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400";
    if (level >= 50)
      return "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400";
    return "bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {name}
        </span>
        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
        style={{ height: "6px" }}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ${getBarColor()}`}
          style={{ width: level + "%" }}
        />
      </div>
    </div>
  );
}