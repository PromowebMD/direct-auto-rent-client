import React from "react";
import { Check } from "react-feather";
import {
  CALENDAR_CANCEL_RESERVATION,
  USER_AGE_CONFIRMATION,
} from "../utils/appText.ts";
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
      <div className="flex w-full items-center gap-1 text-sm font-normal text-white font-noToSans md:text-lg">
        <input type="checkbox" className="h-4 w-4 rounded" />
        {USER_AGE_CONFIRMATION}
      </div>
    </div>
  );
};
