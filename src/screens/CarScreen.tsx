import React, { useEffect, useState } from "react";
import { EditTab } from "../components/EditTab.tsx";
import { ReservationDetails } from "../components/ReservationDetails.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { ICar } from "../models/car.ts";
import { getCarById } from "../api/carsRequest.ts";
import { setCarPrice } from "../state/reservation/reservationSlice.ts";
import { getRentPriceByDays } from "../utils/getRentPriceByDays.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { useCheckCalendarDataIsValid } from "../hooks/useCheckCalendarDataIsValid.ts";
import toast from "react-hot-toast";
import { LoaderComponent } from "../components/LoaderComponent.tsx";
import { CarReservationPreview } from "../components/CarReservationPreview.tsx";
import { ReservationPreviewCard } from "../components/ReservationPreviewCard.tsx";

export const CarScreen: React.FC = () => {
  const totalDays = useSelector((state: RootState) => state.totalDays);
  const navigation = useNavigate();
  const { carId } = useParams();
  const [carItem, setCarItem] = useState<ICar>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getCarById({ carId: carId ?? "" })
      .then((value) => {
        if (value.code === "success") {
          setCarItem(value.data);
          dispatch(
            setCarPrice(getRentPriceByDays(totalDays, value.data.rentPrice)),
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [carId, dispatch, totalDays]);

  const isCalendarDataValid = useCheckCalendarDataIsValid();
  const handleOnReservation = () => {
    if (isCalendarDataValid) {
      navigation(`/reservations/${carItem?.id}`);
    } else {
      toast.error("Completați datele necesare din calendar");
    }
  };

  return (
    <section className="mb-10 grid place-items-center gap-6">
      <div className="w-full lg:mt-2">
        <EditTab />
      </div>
      <div className="px-4">
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <div className="flex w-full flex-col justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="w-full">
              <div className="col-span-2 grid w-full place-self-center">
                {carItem && <CarReservationPreview carItem={carItem} />}
              </div>
              <div className="flex flex-col gap-3">
                <ReservationDetails />
              </div>
            </div>
            <div className="w-full lg:max-w-[300px]">
              {carItem && (
                <ReservationPreviewCard
                  carRentPrice={carItem.rentPrice}
                  onReservation={handleOnReservation}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
