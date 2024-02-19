import {
  IReservation,
  ReservationForm,
  ReservationState,
} from "../models/reservation.ts";

export const mapReservationFormToIReservation = (
  reservationForm: ReservationForm | undefined,
  reservationState: ReservationState,
): IReservation | null => {
  if (!reservationForm) {
    return null;
  }
  const optionsIds = reservationState.reservationOptions
    .filter((option) => option.isChecked)
    .map((option) => option.id);

  return {
    carId: reservationState.carId,
    days: reservationState.days,
    email: reservationForm.email,
    firstName: reservationForm.firstName,
    flightNumber: reservationForm.flightNumber,
    lastName: reservationForm.lastName,
    optionsIds: optionsIds,
    phone: reservationForm.phone,
    pickUpDate: `${reservationState.pickUpDate} ${reservationState.pickUpTime}`,
    pickUpLocation: `${reservationState.pickUpStreet}`,
    returnDate: `${reservationState.returnDate} ${reservationState.returnTime}`,
    returnLocation: `${reservationState.returnStreet}`,
    totalPrice: reservationState.total,
  };
};
