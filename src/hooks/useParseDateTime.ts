import { parse, set } from "date-fns";
import { DATE_FORMAT } from "../utils/dateFormats.ts";

export const useParseDateTime = (
  date: string | null,
  time: string | null,
): Date => {
  if (!date || !time) {
    return set(new Date(), { hours: 0, minutes: 0 });
  }

  const parsedDate = parse(date, DATE_FORMAT, new Date());
  const [hours, minutes] = time.split(":");

  return set(parsedDate, {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
  });
};
