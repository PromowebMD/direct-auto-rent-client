import React, { useEffect } from "react";
import { StreetSelector } from "./StreetSelector.tsx";
import { CustomCalendar } from "./CustomCalendar.tsx";
import { TimeSelector } from "./TimeSelector.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import {
  setPickUpDate,
  setPickUpStreet,
  setPickUpTime,
  setRentPrice,
  setReturnDate,
  setReturnStreet,
  setReturnTime,
  setTotalDays,
} from "../state/reservation/reservationSlice.ts";
import { Link } from "react-router-dom";
import { getDaysBetweenDates } from "../utils/getDaysBetweenDates.ts";

type CalendarSelectorProps = {
  isEditing?: boolean;
};

export const CalendarSelector: React.FC<CalendarSelectorProps> = ({
  isEditing,
}) => {
  const pickUpDate = useSelector((state: RootState) => state.pickUpDate);
  const carPrice = useSelector((state: RootState) => state.carPrice);
  const returnDate = useSelector((state: RootState) => state.returnDate);
  const pickUpTime = useSelector((state: RootState) => state.pickUpTime);
  const returnTime = useSelector((state: RootState) => state.returnTime);
  const pickUpStreet = useSelector((state: RootState) => state.pickUpStreet);
  const returnStreet = useSelector((state: RootState) => state.returnStreet);

  const dispatch = useDispatch();

  useEffect(() => {
    if (returnDate && pickUpDate) {
      const totalDays = getDaysBetweenDates(pickUpDate, returnDate);
      dispatch(setTotalDays(totalDays));
      if (carPrice !== null) {
        dispatch(setRentPrice(totalDays * carPrice));
      }
    }
  }, [dispatch, pickUpDate, returnDate, carPrice]);

  return (
    <div className="flex flex-col w-full items-center gap-2 rounded bg-transparent p-2 min-h-20 lg:flex-row">
      <div className="flex h-full w-full">
        <StreetSelector
          value={pickUpStreet}
          onChange={(value) => dispatch(setPickUpStreet(value))}
          placeholder="Locația de preluare"
        />
      </div>
      <div className="flex h-full w-full">
        <StreetSelector
          value={returnStreet}
          onChange={(value) => dispatch(setReturnStreet(value))}
          placeholder="Locația de predare"
        />
      </div>
      <div className="flex w-full lg:max-w-[220px] h-full gap-2">
        <div className="w-3/5 lg:w-full lg:max-w-[130px]">
          <CustomCalendar
            value={pickUpDate}
            onChange={(value) => dispatch(setPickUpDate(value))}
            label="Data de preluare"
          />
        </div>
        <div className="w-2/5 lg:w-full lg:max-w-20">
          <TimeSelector
            placeholder="Ora"
            value={pickUpTime}
            onChange={(value) => dispatch(setPickUpTime(value))}
          />
        </div>
      </div>
      <div className="flex w-full lg:max-w-[220px] h-full gap-2">
        <div className="w-3/5 lg:w-full lg:max-w-[130px]">
          <CustomCalendar
            value={returnDate}
            onChange={(value) => dispatch(setReturnDate(value))}
            label="Data de predare"
          />
        </div>
        <div className="w-2/5 lg:w-full lg:max-w-20">
          <TimeSelector
            placeholder="Ora"
            value={returnTime}
            onChange={(value) => dispatch(setReturnTime(value))}
          />
        </div>
      </div>
      {!isEditing && (
        <Link
          to="/cars"
          type="button"
          className="flex justify-center items-center h-full w-full rounded py-3 text-white bg-secondary lg:w-fit lg:px-4 lg:py-0"
        >
          Căutare
        </Link>
      )}
    </div>
  );
};
