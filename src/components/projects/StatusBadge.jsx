import React from "react";

export default function StatusBadge({ status }) {
  const isLive = status === "Live";
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={
          isLive
            ? "w-2 h-2 rounded-full bg-green-500 animate-pulse"
            : "w-2 h-2 rounded-full bg-yellow-500"
        }
      />
      <span
        className={
          isLive
            ? "text-sm font-medium text-green-600 dark:text-green-400"
            : "text-sm font-medium text-yellow-600 dark:text-yellow-400"
        }
      >
        {status}
      </span>
    </span>
  );
}