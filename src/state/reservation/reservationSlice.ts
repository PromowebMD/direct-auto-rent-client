import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationOption } from "../../models/reservation.ts";

interface ReservationState {
  pickUpDate: string | null;
  pickUpTime: string | null;
  pickUpStreet: string | null;
  returnDate: string | null;
  returnTime: string | null;
  returnStreet: string | null;
  totalDays: number;
  carPrice: number | null;
  rentPrice: number;
  optionsPrice: number;
  reservationOptions: ReservationOption[];
}

const initialState: ReservationState = {
  pickUpDate: null,
  pickUpTime: null,
  pickUpStreet: null,
  returnDate: null,
  returnTime: null,
  returnStreet: null,
  totalDays: 0,
  carPrice: null,
  rentPrice: 0,
  optionsPrice: 0,
  reservationOptions: [],
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState: initialState,
  reducers: {
    setPickUpDate: (state, action: PayloadAction<string | null>) => {
      state.pickUpDate = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string | null>) => {
      state.returnDate = action.payload;
    },
    setPickUpTime: (state, action: PayloadAction<string | null>) => {
      state.pickUpTime = action.payload;
    },
    setReturnTime: (state, action: PayloadAction<string | null>) => {
      state.returnTime = action.payload;
    },
    setPickUpStreet: (state, action: PayloadAction<string | null>) => {
      state.pickUpStreet = action.payload;
    },
    setReturnStreet: (state, action: PayloadAction<string | null>) => {
      state.returnStreet = action.payload;
    },
    setCarPrice: (state, action: PayloadAction<number | null>) => {
      state.carPrice = action.payload;
    },
    setTotalDays: (state, action: PayloadAction<number>) => {
      state.totalDays = action.payload;
    },
    setRentPrice: (state, action: PayloadAction<number>) => {
      state.rentPrice = action.payload;
    },
    setReservationOptions: (
      state,
      action: PayloadAction<ReservationOption[]>,
    ) => {
      state.reservationOptions = action.payload;
    },
    selectReservationOption: (state, action: PayloadAction<string>) => {
      const updatedReservationOptions = state.reservationOptions;
      let rentPrice = 0;
      updatedReservationOptions.forEach((option) => {
        if (option.id === action.payload) {
          option.isChecked = !option.isChecked;
        }
        if (option.isChecked) {
          rentPrice +=
            option.price * (state.totalDays === 0 ? 1 : state.totalDays);
        }
      });
      state.reservationOptions = updatedReservationOptions;
      state.optionsPrice = rentPrice;
    },
  },
});

export const {
  setPickUpDate,
  setReturnDate,
  setPickUpTime,
  setReturnTime,
  setReturnStreet,
  setPickUpStreet,
  setTotalDays,
  setCarPrice,
  setRentPrice,
  setReservationOptions,
  selectReservationOption,
} = reservationSlice.actions;

export default reservationSlice.reducer;
