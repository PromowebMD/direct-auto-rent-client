import React from "react";

import check from "../assets/cars/check.svg";

export const ReservationDetails: React.FC = () => {
  const choiceList = [
    "Evaluarea clienților: 8,0 / 10",
    "Cozi mici",
    "Personal la ghișeu care te ajută",
    "Cea mai populară politică privind combustibilul",
    "Ghișeu ușor de găsit",
    "Mașini bine întreținute",
  ];

  return (
    <>
      <div className="col-span-2">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="grid gap-3">
            <h2 className="text-lg font-bold font-noToSans">
              O alegere excelentă!
            </h2>
            <div className="flex flex-col gap-2">
              {choiceList.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-roboto text-[13px]"
                  >
                    <img src={check} alt="" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold font-noToSans">Inclus în preț</h2>
            <div className="flex items-center gap-2 font-roboto">
              <img src={check} alt="" />
              <p className="text-[13px]">Mile/Kilometri nelimitați</p>
            </div>
            <h2 className="text-lg font-bold font-noToSans">
              Accesorii suplimentare
            </h2>
            <p className="text-[13px] font-roboto">
              Scaune pentru copil, șoferi suplimentari și multe altele.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 grid font-roboto text-[13px]">
        <p>
          Dând clic pe „PLASEAZĂ COMANDA”, confirmați faptul că ați citit,
          înțeles și acceptat{" "}
          <button className="underline underline-offset-2 text-primary">
            Termeni generali
          </button>{" "}
          și{" "}
          <button className="underline underline-offset-2 text-primary">
            Termenii de închiriere
          </button>{" "}
          ai DirectAutoRent.
        </p>
      </div>
    </>
  );
};
