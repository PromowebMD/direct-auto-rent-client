import React from "react";
import { CalendarSelector } from "./CalendarSelector.tsx";

export const EditTab: React.FC = () => {
  return (
    <div className="flex flex-row w-full flex-wrap items-center  justify-center gap-2 rounded p-4 font-oswald sm:flex-col md:gap-0">
      <div className="grid w-full rounded font-sans bg-accent max-w-[1000px]">
        <CalendarSelector isEditing={true} />
      </div>
    </div>
  );
};
