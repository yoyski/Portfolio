import React from "react";

export default function AvailabilityCard() {
  return (
    <div
      className="flex items-center gap-3 p-4 rounded-lg 
                    border border-green-200 dark:border-green-800/50 
                    bg-green-50 dark:bg-green-900/10"
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-md 
                      border border-green-200 dark:border-green-800/50 
                      bg-green-100 dark:bg-green-900/20"
      >
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Available for Work
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
          Open to freelance & full-time
        </p>
      </div>
    </div>
  );
}