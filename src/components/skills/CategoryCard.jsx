import React from "react";
import SkillBar from "./SkillBar";

export default function CategoryCard({ label, skills }) {
  return (
    <div
      className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 
                    bg-gray-50 dark:bg-gray-800/30 
                    hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {label}
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {skills.map((s) => (
          <SkillBar key={s.name} name={s.name} level={s.level} />
        ))}
      </div>
    </div>
  );
}