import React from "react";
import { CalendarSelector } from "./CalendarSelector.tsx";

export const CalendarCard: React.FC = () => {
  return (
    <div className="grid w-full place-items-center">
      <div className="flex w-full justify-center">
        <CalendarSelector />
      </div>
    </div>
  );
};
