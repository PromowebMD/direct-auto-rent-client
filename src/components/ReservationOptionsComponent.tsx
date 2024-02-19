import React, { useEffect } from "react";
import { getReservationOptions } from "../api/reservationRequest.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import {
  selectReservationOption,
  setReservationOptions,
} from "../state/reservation/reservationSlice.ts";

export const ReservationOptionsComponent: React.FC = () => {
  const reservationOptions = useSelector(
    (state: RootState) => state.reservationOptions,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getReservationOptions().then((value) => {
      if (value.code === "success") {
        value.data.forEach((option) => (option.isChecked = false));
        dispatch(setReservationOptions(value.data));
      }
    });
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-1">
      {reservationOptions.map((item) => {
        return (
          <div
            key={item.id}
            className="flex select-none items-center gap-2 text-base"
          >
            <input
              id={item.id}
              type="checkbox"
              className="scale-125 cursor-pointer accent-primary"
              checked={item.isChecked}
              onChange={() => dispatch(selectReservationOption(item.id))}
            />
            <label htmlFor={item.id} className="cursor-pointer">
              {`${item.title}: ${item.price}€/zi`}
            </label>
          </div>
        );
      })}
    </div>
  );
};
