import React from "react";
import {
  COPY_RIGHTS,
  FOOTER_INFO_TEXT_1,
  FOOTER_INFO_TEXT_2,
} from "../utils/appText.ts";

export const FooterInfo: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col lg:w-1/3">
          <p>{FOOTER_INFO_TEXT_1}</p>
          <p className="mt-2">{FOOTER_INFO_TEXT_2}</p>
          <h3 className="my-6 text-sm font-normal">CONTACTEAZĂ-NE:</h3>
          <p className="text-base">reservations@directautorent.md</p>
        </div>
        <div className="flex flex-col lg:w-2/3">
          <p className="mb-4 text-sm">ADRESA:</p>
          <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex w-full flex-col gap-2">
              <p>Ștefan cel Mare 123</p>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Bloc+rezidential+bl.+Ștefan+cel+Mare+și+Sfânt,+123,+Chișinău,+Moldova&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Stefan cel Mare 123"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-md"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <p>Dacia 80/3</p>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Aeroportul+Internaţional+Chişinău,+Dacia+Boulevard,+Chișinău,+Moldova&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Aeroport"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-smoky">
        {COPY_RIGHTS}{" "}
        <a href="https://promoweb.md/" className="underline">
          Promoweb.md
        </a>{" "}
      </p>
    </div>
  );
};
