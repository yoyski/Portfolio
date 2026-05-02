import React from "react";
import ContactIcon from "./ContactIcon";

export default function ContactInfo({ info }) {
  return (
    <a
      href={info.href}
      target={info.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg 
               border border-gray-200 dark:border-gray-700 
               bg-gray-50 dark:bg-gray-800/30 
               hover:bg-gray-100 dark:hover:bg-gray-800/50 
               transition-colors"
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-md 
                    border border-emerald-200 dark:border-emerald-800 
                    bg-emerald-50 dark:bg-emerald-900/20 
                    text-emerald-600 dark:text-emerald-400"
      >
        <ContactIcon type={info.iconType} />
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
          {info.label}
        </p>
        <p className="text-sm text-gray-900 dark:text-gray-100 mt-0.5">
          {info.value}
        </p>
      </div>
    </a>
  );
}