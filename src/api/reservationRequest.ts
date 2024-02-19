import { requestHandler } from "./requestHandler.ts";
import axios from "axios";
import { ReservationOption } from "../models/reservation.ts";

const URL = import.meta.env.VITE_BASE_API_URL + "/reservations";

export const createReservation = requestHandler<FormData, never>((params) => {
  return axios.post(URL, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });
});

export const getReservationOptions = requestHandler<never, ReservationOption[]>(
  () => axios.get(URL + "/options"),
);

export const registerForDiscount = requestHandler<
  {
    email: string;
  },
  never
>((params) => axios.post(`${URL}/discounts`, params));
