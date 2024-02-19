import { z } from "zod";

export const reservationFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  flightNumber: z.string(),
  message: z.string().optional(),
  licence: z.any(),
});

export type ReservationForm = z.infer<typeof reservationFormSchema>;

export type ReservationOption = {
  id: string;
  title: string;
  price: number;
  isChecked: boolean;
};

export type ReservationState = {
  carId: string;
  pickUpDate: string;
  pickUpTime: string;
  pickUpStreet: string;
  returnDate: string;
  returnTime: string;
  returnStreet: string;
  total: number;
  days: number;
  reservationOptions: ReservationOption[];
};

export interface IReservation {
  pickUpDate: string;
  returnDate: string;
  pickUpLocation: string;
  returnLocation: string;
  days: number;
  totalPrice: number;
  carId: string;
  firstName: string;
  lastName: string;
  flightNumber: string;
  email: string;
  phone: string;
  optionsIds: string[];
}