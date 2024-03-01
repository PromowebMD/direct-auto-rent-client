import React from "react";
import { ABOUT_CONTENT_TEXT } from "../utils/appText.ts";
import carImg from "../assets/about/car.svg";

export const AboutScreen: React.FC = () => {
  const handleOnEmailClick = () => {
    window.open("mailto:email@example.com?subject=subject");
  };

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
            <li>
              <span className="font-semibold">Program de lucru:</span>
              <span className="ml-1">24/7</span>
            </li>
            <li className="font-semibold">
              <span>Tel:</span>
              <a href="tel:+373079167777" className="ml-1">
                +373 (79) 167 777
              </a>
            </li>
            <li>
              <span className="font-semibold">Tel:</span>
              <a href="tel:+37378333100" className="ml-1">
                +373 (78) 333 100
              </a>
            </li>
            <li>
              <span className="font-semibold">E-mail:</span>
              <button className="ml-1" onClick={handleOnEmailClick}>
                autorentcarsolutions@gmail.com
              </button>
            </li>
            <li className="font-semibold">
              <a href="https://maps.app.goo.gl/2VAoMJ7QAogmhYdd8">
                str. Dacia 80/3
              </a>
            </li>
            <li className="font-semibold">
              <a href="https://maps.app.goo.gl/MVhE9uDjdqozmHVp7">
                str. Bd. Ștefan cel Mare 123
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
