import { CarItem } from "../components/CarItem.tsx";
import { ICar } from "../models/car.ts";
import { ReservationFormComponent } from "../components/ReservationFormComponent.tsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../api/carsRequest.ts";
import { LoaderComponent } from "../components/LoaderComponent.tsx";

export default function ReservationScreen() {
  const [carItem, setCarItem] = useState<ICar>();
  const [isLoading, setIsLoading] = useState(false);
  const { carId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCarById({ carId: carId ?? "" })
      .then((value) => {
        if (value.code === "success") {
          setCarItem(value.data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [carId]);

  return (
    <section className="flex flex-col items-center px-2 py-10">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="grid w-full place-items-center gap-4 max-w-[1200px] lg:grid-cols-2">
          {carItem && (
            <CarItem carItem={carItem} className="flex-col max-w-[80%]" />
          )}
          <ReservationFormComponent car={carItem!} />
        </div>
      )}
    </section>
  );
}
