import React from "react";
import {
  COPY_RIGHTS,
  FOOTER_INFO_TEXT_1,
  FOOTER_INFO_TEXT_2,
} from "../utils/appText.ts";
import logoIcon from "../assets/logo.svg";
import { Link } from "react-router-dom";

const linkList = [
  { title: "Acasă", link: "/" },
  { title: "Despre noi", link: "/about" },
  { title: "Servicii", link: "/services" },
  { title: "Automobile", link: "/cars" },
];

export const FooterInfo: React.FC = () => {
  const handleOnEmailClick = () => {
    window.open("mailto:email@example.com?subject=subject");
  };

  return (
    <div className="flex w-full flex-col pb-4">
      <div className="relative flex flex-col lg:bg-footer-main lg:flex-row-reverse lg:items-center lg:justify-center lg:bg-cover lg:bg-no-repeat">
        <div className="absolute hidden h-full w-full lg:flex">
          <div className="h-full w-5/6 bg-primary bg-opacity-85"></div>
          <div className="h-full w-4/6 bg-white bg-opacity-85"></div>
        </div>
        <div className="z-50 hidden h-full justify-between self-center py-8 w-[75%] lg:flex">
          <div className="flex h-full flex-col gap-10">
            <div className="flex flex-col gap-6 p-3 lg:self-end lg:p-0">
              <img src={logoIcon} alt="" className="max-w-[131px]" />
              <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-4 lg:items-center">
                  <div className="flex flex-col gap-2 text-base font-semibold text-white font-oswald">
                    {linkList.map((item) => {
                      return (
                        <Link key={item.link} to={item.link}>
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 lg:gap-4">
                  <h3 className="text-base font-semibold text-white font-oswald">
                    Contacte
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-white font-noToSans lg:flex-row lg:gap-10">
                    <div className="flex w-fit flex-col gap-3">
                      <span>
                        <span className="font-semibold">Program de lucru:</span>
                        <span className="ml-1 font-light">24/7</span>
                      </span>
                      <span className="font-semibold">
                        <span>Tel:</span>
                        <a href="tel:+373079167777" className="ml-1 font-light">
                          +373 (79) 167 777
                        </a>
                      </span>
                      <span>
                        <span className="font-semibold">Tel:</span>
                        <a href="tel:+37378333100" className="ml-1 font-light">
                          +373 (78) 333 100
                        </a>
                      </span>
                    </div>
                    <div className="flex w-fit flex-col justify-between gap-3">
                      <span>
                        <span className="font-semibold">E-mail:</span>
                        <button
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                          onClick={handleOnEmailClick}
                        >
                          autorentcarsolutions@gmail.com
                        </button>
                      </span>
                      <span className="font-semibold">
                        str.
                        <a
                          href="https://maps.app.goo.gl/2VAoMJ7QAogmhYdd8"
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                        >
                          Dacia 80/3
                        </a>
                      </span>
                      <span className="font-semibold">
                        str.
                        <a
                          href="https://maps.app.goo.gl/MVhE9uDjdqozmHVp7"
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                        >
                          Bd. Ștefan cel Mare 123
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full w-2/5 flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold font-oswald">
              <span>BINE AȚI VENIT LA</span>
              <span className="ml-1 text-primary">DIRECTAUTORENT</span>
            </h2>
            <span className="text-sm font-noToSans">
              <p>{FOOTER_INFO_TEXT_1}</p>
              <p>{FOOTER_INFO_TEXT_2}</p>
            </span>
          </div>
        </div>
        <div className="w-full bg-cover bg-no-repeat bg-footer-main-mobile lg:hidden">
          <div className="flex h-full flex-col justify-center gap-2 bg-white p-8 bg-opacity-85">
            <h2 className="text-xl font-semibold font-oswald">
              <span>BINE AȚI VENIT LA</span>
              <span className="ml-1 text-primary">DIRECTAUTORENT</span>
            </h2>
            <span className="text-sm font-noToSans lg:w-2/3">
              <p>{FOOTER_INFO_TEXT_1}</p>
              <p>{FOOTER_INFO_TEXT_2}</p>
            </span>
          </div>
        </div>
        <div className="w-full bg-cover bg-no-repeat bg-footer-secondary-mobile lg:hidden">
          <div className="flex h-full flex-col gap-10 bg-opacity-70 px-5 py-7 bg-primary">
            <div className="flex flex-col gap-6 p-3 lg:self-end lg:p-0">
              <img src={logoIcon} alt="" className="max-w-[131px]" />
              <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-4 lg:items-center">
                  <div className="flex flex-col gap-2 text-base font-semibold text-white font-oswald">
                    {linkList.map((item) => {
                      return (
                        <Link key={item.link} to={item.link}>
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-2 lg:gap-4">
                  <h3 className="text-base font-semibold text-white font-oswald">
                    Contacte
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-white font-noToSans lg:flex-row lg:gap-10">
                    <div className="flex w-fit flex-col gap-3">
                      <span>
                        <span className="font-semibold">Program de lucru:</span>
                        <span className="ml-1 font-light">24/7</span>
                      </span>
                      <span className="font-semibold">
                        <span>Tel:</span>
                        <a href="tel:+373079167777" className="ml-1 font-light">
                          +373 (79) 167 777
                        </a>
                      </span>
                      <span>
                        <span className="font-semibold">Tel:</span>
                        <a href="tel:+37378333100" className="ml-1 font-light">
                          +373 (78) 333 100
                        </a>
                      </span>
                    </div>
                    <div className="flex w-fit flex-col justify-between gap-3">
                      <span>
                        <span className="font-semibold">E-mail:</span>
                        <button
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                          onClick={handleOnEmailClick}
                        >
                          autorentcarsolutions@gmail.com
                        </button>
                      </span>
                      <span className="font-semibold">
                        str.
                        <a
                          href="https://maps.app.goo.gl/2VAoMJ7QAogmhYdd8"
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                        >
                          Dacia 80/3
                        </a>
                      </span>
                      <span className="font-semibold">
                        str.
                        <a
                          href="https://maps.app.goo.gl/MVhE9uDjdqozmHVp7"
                          className="ml-1 font-light underline decoration-1 underline-offset-4"
                        >
                          Bd. Ștefan cel Mare 123
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-4 px-4 py-5 lg:self-center">
        <p className="text-center text-sm text-gray-400 font-roboto">
          {COPY_RIGHTS}
          <a href="https://promoweb.md/" className="ml-1 underline">
            Promoweb.md
          </a>
        </p>
      </div>
    </div>
  );
};
