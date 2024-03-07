import React from "react";
import { CalendarSelector } from "./CalendarSelector.tsx";

export const EditTab: React.FC = () => {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 py-4 bg-primary font-oswald sm:flex-col md:gap-0 lg:bg-transparent">
      <div className="grid w-full rounded font-sans lg:bg-accent">
        <CalendarSelector isEditing={true} />
      </div>
    </div>
  );
};
