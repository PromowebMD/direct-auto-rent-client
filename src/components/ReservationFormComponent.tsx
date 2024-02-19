import React, { ChangeEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ReservationForm,
  reservationFormSchema,
} from "../models/reservation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { createReservation } from "../api/reservationRequest.ts";
import { useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { mapReservationFormToIReservation } from "../utils/mapReservationFormToIReservation.ts";
import { ICar } from "../models/car.ts";
import toast from "react-hot-toast";
import { LoaderComponent } from "./LoaderComponent.tsx";

type ReservationFormComponentProps = {
  car: ICar;
};

export const ReservationFormComponent: React.FC<ReservationFormComponentProps> = ({car}) => {
  const pickUpDate = useSelector((state: RootState) => state.pickUpDate);
  const returnDate = useSelector((state: RootState) => state.returnDate);
  const pickUpTime = useSelector((state: RootState) => state.pickUpTime);
  const returnTime = useSelector((state: RootState) => state.returnTime);
  const pickUpStreet = useSelector((state: RootState) => state.pickUpStreet);
  const returnStreet = useSelector((state: RootState) => state.returnStreet);
  const rentPrice = useSelector((state: RootState) => state.rentPrice);
  const optionPrice = useSelector((state: RootState) => state.optionsPrice);
  const totalDays = useSelector((state: RootState) => state.totalDays);
  const reservationOptions = useSelector(
    (state: RootState) => state.reservationOptions,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationForm>({
    resolver: zodResolver(reservationFormSchema),
  });

  const [licenceFile, setLicenceFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const onClickUploadHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const licence = e.target.files ? e.target.files[0] : null;
    setLicenceFile(licence);
  };

  const onSubmit: SubmitHandler<ReservationForm> = async (data) => {
    setIsLoading(true);
    data.licence = licenceFile;
    const reservation = mapReservationFormToIReservation(data, {
      carId: car.id,
      pickUpDate: pickUpDate ?? "",
      pickUpStreet: pickUpStreet ?? "",
      pickUpTime: pickUpTime ?? "",
      returnDate: returnDate ?? "",
      returnStreet: returnStreet ?? "",
      returnTime: returnTime ?? "",
      days: totalDays,
      total: rentPrice + optionPrice,
      reservationOptions: reservationOptions,
    });
    const formData = new FormData();
    formData.append(
      "reservation",
      new Blob([JSON.stringify(reservation)], {
        type: "application/json",
      }),
    );
    formData.append("licence", data?.licence);

    const response = await createReservation(formData);
    if (response.code === "success") {
      toast.success("Rezervare cu succes");
    } else {
      toast.error("Eroare rezervare");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col rounded-md border bg-white p-4 shadow-xl w-[95%] max-w-[700px] md:w-full">
      <div className="grid font-oswald">
        <h2 className="text-2xl font-medium">Plasarea comenzii</h2>
        <h3>Îndepliniți formularul</h3>
        <form
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid">
            {errors.firstName && (
              <span className="font-sans text-xs font-normal text-red-500">
                {"Numărul de caractere > 2"}
              </span>
            )}
            <input
              id="firstName"
              className="form-input"
              placeholder="Numele"
              {...register("firstName")}
            />
          </div>
          <div className="grid">
            {errors.lastName && (
              <span className="font-sans text-xs font-normal text-red-500">
                {"Numărul de caractere > 2"}
              </span>
            )}
            <input
              id="lastName"
              placeholder="Prenumele"
              className="form-input"
              {...register("lastName")}
            />
          </div>
          <div className="grid">
            {errors.email && (
              <span className="font-sans text-xs font-normal text-red-500">
                {"Email invalid"}
              </span>
            )}
            <input
              id="email"
              placeholder="Email"
              className="form-input"
              {...register("email")}
            />
          </div>
          <div className="grid">
            {errors.phone && (
              <span className="font-sans text-xs font-normal text-red-500">
                {"Numărul de cifre > 9"}
              </span>
            )}
            <PhoneInput
              id="phone-input"
              international
              defaultCountry="MD"
              placeholder="Telefon"
              className="form-input"
              {...register("phone")}
              onChange={() => {}}
            />
          </div>
          <div className="grid">
            {errors.flightNumber && (
              <span className="font-sans text-xs font-normal text-red-500">
                {"Numărul de caractere > 2"}
              </span>
            )}
            <input
              id="flightNumber"
              placeholder="Numărul zborului"
              className="form-input"
              {...register("flightNumber")}
            />
          </div>
          <div className="grid">
            <input
              id="message"
              placeholder="Mesaj"
              className="form-input"
              {...register("message")}
            />
          </div>
          <div className="grid">
            <input
              id="fileUpload"
              type="file"
              hidden={true}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={onClickUploadHandler}
              className="w-full rounded bg-gray-200 p-2 text-start"
            >
              {licenceFile?.name ?? "Permisul de conducere"}
            </button>
          </div>
          <button
            type="submit"
            className="rounded py-2 text-sm font-bold text-white bg-accent"
          >
            {isLoading ? <LoaderComponent /> : "PLASEAZĂ COMANDA"}
          </button>
        </form>
      </div>
    </div>
  );
};
