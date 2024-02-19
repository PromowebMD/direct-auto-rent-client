import { useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { isBefore, parse } from "date-fns";
import { DATE_FORMAT, TIME_FORMAT } from "../utils/dateFormats.ts";

export const useCheckCalendarDataIsValid = (): boolean => {
  const pickUpStreet = useSelector((state: RootState) => state.pickUpStreet);
  const returnStreet = useSelector((state: RootState) => state.returnStreet);
  const pickUpDate = useSelector((state: RootState) => state.pickUpDate);
  const returnDate = useSelector((state: RootState) => state.returnDate);
  const pickUpTime = useSelector((state: RootState) => state.pickUpTime);
  const returnTime = useSelector((state: RootState) => state.returnTime);

  if (
    !pickUpStreet ||
    !pickUpDate ||
    !pickUpTime ||
    !returnStreet ||
    !returnDate ||
    !returnTime
  ) {
    return false;
  }

  const pickUpParsedDate = parse(pickUpDate, DATE_FORMAT, new Date());
  const returnParsedDate = parse(returnDate, DATE_FORMAT, new Date());
  const pickUpParsedTime = parse(pickUpTime, TIME_FORMAT, pickUpParsedDate);
  const returnParsedTime = parse(returnTime, TIME_FORMAT, returnParsedDate);

  return !(
    isBefore(returnParsedDate, pickUpParsedDate) ||
    isBefore(returnParsedTime, pickUpParsedTime) ||
    isBefore(pickUpParsedTime, new Date()) ||
    isBefore(returnParsedTime, new Date())
  );
};
