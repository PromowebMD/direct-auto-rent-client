import React from "react";
import { ABOUT_CONTENT_TEXT } from "../utils/appText.ts";
import carImg from "../assets/about/car.svg";

export const AboutScreen: React.FC = () => {
  return (
    <section className="grid place-items-center place-self-center py-6 font-sans font-semibold w-[90%] md:w-[80%]">
      <h1 className="mb-4 text-3xl font-bold">DESPRE NOI</h1>
      <p className="text-base md:w-5/6 md:text-xl">{ABOUT_CONTENT_TEXT}</p>
      <div className="mt-4 grid md:flex">
        <span className="max-w-[450px]">
          <img src={carImg} alt="" />
        </span>
        <div className="text-base md:text-xl">
          <h2>Contactează-ne:</h2>
          <ul className="ml-6 list-disc">
            <li>+373 79 167 777 Whatsapp, Viber</li>
            <li>Viber +373 78 333 100 Whatsapp, Viber</li>
            <li>Email: Reservations@directautorent.md</li>
            <li>Orele de muncă: 08:00 - 19:00</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
