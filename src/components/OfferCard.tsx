import React, { useState } from "react";
import cartImg from "../assets/cart.svg";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerForDiscount } from "../api/reservationRequest.ts";
import toast from "react-hot-toast";
import { LoaderComponent } from "./LoaderComponent.tsx";

const offerForm = z.object({
  email: z.string().email(),
});

type OfferForm = z.infer<typeof offerForm>;

export const OfferCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OfferForm>({ resolver: zodResolver(offerForm) });

  const handleDiscountRegistration: SubmitHandler<OfferForm> = async (data) => {
    setIsLoading(true);
    const requestResponse = await registerForDiscount(data);
    if (requestResponse.code === "success") {
      toast.success("Înregistrare cu succes");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <span className="hidden md:block">
        <img src={cartImg} alt="" />
      </span>
      <div>
        <div className="flex items-center">
          <h2 className="w-5/6 self-end font-bold font-noToSans text-[16px] lg:w-full lg:text-lg">
            ÎNSCRIEȚI-VĂ PENTRU A PRIMI{" "}
            <span className="text-salleGreen">OFERTE</span> EXCLUSIVE!
          </h2>
          <span className="flex w-1/3 md:hidden">
            <img src={cartImg} alt="" />
          </span>
        </div>
        <form
          className="flex items-center gap-2"
          onSubmit={handleSubmit(handleDiscountRegistration)}
        >
          {errors.email && (
            <span className="font-sans text-xs font-normal text-red-500">
              {"Email greșit"}
            </span>
          )}
          <input
            type="text"
            className="w-full rounded border-2 px-1 border-secondary py-0.5"
            placeholder="Adresa de e-mail..."
            {...register("email")}
          />
          <button
            type="submit"
            className="w-full rounded px-2 py-1 font-bold text-white bg-secondary max-w-[128px]"
          >
            {isLoading ? <LoaderComponent /> : "ÎNREGISTRARE"}
          </button>
        </form>
      </div>
    </div>
  );
};
