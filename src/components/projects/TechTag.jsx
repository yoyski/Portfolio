import React from "react";

export default function TechTag({ label }) {
  return (
    <span
      className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 
                     text-emerald-700 dark:text-emerald-300 
                     text-xs font-medium rounded-full 
                     border border-emerald-200 dark:border-emerald-800"
    >
      {label}
    </span>
  );
}