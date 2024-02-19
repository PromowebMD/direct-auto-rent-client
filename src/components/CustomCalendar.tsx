import React, { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  parse,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ArrowLeft, ArrowRight, Calendar } from "react-feather";
import { DATE_FORMAT } from "../utils/dateFormats.ts";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CustomCalendarProps = {
  value: string | null;
  onChange: (date: string) => void;
  label?: string;
};

export const CustomCalendar: React.FC<CustomCalendarProps> = ({
  value,
  onChange,
  label,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value !== null ? parse(value, DATE_FORMAT, new Date()) : null,
  );
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef(null);
  useOutsideClick(calendarRef, () => setShowCalendar(false));

  const presentDate = new Date();
  const currentMonth = new Date();
  const firstDayOfTheMonth = startOfMonth(currentDate);
  const lastDayOfTheMonth = endOfMonth(currentDate);
  const startDayIndex = firstDayOfTheMonth.getDay();

  const currentMonthDays = eachDayOfInterval({
    start: firstDayOfTheMonth,
    end: lastDayOfTheMonth,
  });

  const handleOnClickDate = (date: Date) => {
    setShowCalendar(false);
    setSelectedDate(date);
    onChange(format(date, DATE_FORMAT));
  };

  const handleChangeMonth = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <div className="relative flex h-full w-full select-none">
      <button
        type="button"
        className="flex h-full w-full items-center rounded bg-white px-2"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Calendar />
        <div className="flex h-full w-fit flex-col items-start justify-between py-2 pl-1">
          <span className="text-xs font-normal text-ellipsis overflow-hidden whitespace-nowrap">
            {label}
          </span>
          <input
            className="w-full rounded"
            placeholder="dd/mm/yyyy"
            value={`${selectedDate ? format(selectedDate, DATE_FORMAT) : ""}`}
            onChange={() => {}}
          />
        </div>
      </button>

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full z-50 grid w-64 place-items-center rounded bg-white p-2 shadow-2xl"
        >
          <div className="flex w-full items-center justify-between">
            {!isSameDay(currentMonth, currentDate) && (
              <ArrowLeft
                className="cursor-pointer"
                onClick={() => handleChangeMonth(subMonths(currentDate, 1))}
              />
            )}
            <h2 className="mx-auto font-bold">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <ArrowRight
              className="cursor-pointer"
              onClick={() => handleChangeMonth(addMonths(currentDate, 1))}
            />
          </div>
          <div className="grid grid-cols-7 place-items-center gap-2">
            {WEEKDAYS.map((day) => {
              return <div key={day}>{day}</div>;
            })}

            {Array.from({ length: startDayIndex }).map((_, index) => {
              return <div key={`empty-${index}`}></div>;
            })}
            {currentMonthDays.map((day, index) => {
              return (
                <button
                  key={`day-${index}`}
                  className={`h-8 w-8 rounded-full 
                  ${!(isBefore(day, presentDate) && day.getDate() !== presentDate.getDate()) && "hover:bg-primary hover:text-white"} 
                  ${isBefore(day, presentDate) && day.getDate() !== presentDate.getDate() && "text-smoky"} 
                  ${selectedDate && isSameDay(day, selectedDate) && "bg-primary text-white"}`}
                  onClick={() => handleOnClickDate(day)}
                  disabled={
                    isBefore(day, presentDate) &&
                    day.getDate() !== presentDate.getDate()
                  }
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
