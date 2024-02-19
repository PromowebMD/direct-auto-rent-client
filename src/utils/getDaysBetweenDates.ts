import { differenceInDays, parse } from "date-fns";
import { DATE_FORMAT } from "./dateFormats.ts";

export const getDaysBetweenDates = (
  startDate: string,
  endDate: string,
): number => {
  const parsedStartDate = parse(startDate, DATE_FORMAT, new Date());
  const parsedEndDate = parse(endDate, DATE_FORMAT, new Date());
  const days = differenceInDays(parsedEndDate, parsedStartDate);
  return days <= 0 ? 1 : days;
};
