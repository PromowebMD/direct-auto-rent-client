import React from "react";
import { Check } from "react-feather";
import { CALENDAR_CANCEL_RESERVATION } from "../utils/appText.ts";
import { CalendarSelector } from "./CalendarSelector.tsx";

export const CalendarCard: React.FC = () => {
  return (
    <div className="grid w-full place-items-center">
      <div className="hidden w-full items-center text-lg font-normal text-white font-noToSans md:flex">
        <Check />
        {CALENDAR_CANCEL_RESERVATION}
      </div>
      <div className="flex w-full justify-center">
        <CalendarSelector />
      </div>
    </div>
  );
};
