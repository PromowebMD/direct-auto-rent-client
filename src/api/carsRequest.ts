import { requestHandler } from "./requestHandler.ts";
import axios from "axios";
import { ICar } from "../models/car.ts";

const URL = import.meta.env.VITE_BASE_API_URL + "/cars";

export const getCars = requestHandler<never, ICar[]>(() => axios.get(URL));
export const getCarsByDate = requestHandler<
  {
    pickUpDate: string;
    returnDate: string;
  },
  ICar[]
>((params) => {
  const queryParams = new URLSearchParams(params);
  const queryURL = `${URL}?${queryParams.toString()}`;
  return axios.get(queryURL);
});

export const getCarById = requestHandler<
  {
    carId: string;
  },
  ICar
>((params) => axios.get(`${URL}/${params?.carId}`));
