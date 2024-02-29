import React from "react";
import {
  CONTACT_LIST,
  COPY_RIGHTS,
  FOOTER_INFO_TEXT,
} from "../utils/appText.ts";
import companyLogo from "../assets/footer/company_logo.svg";
import logoIcon from "../assets/logo.svg";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/footer/arow_icon.svg";

const linkList = [
  { title: "ACASĂ", link: "/" },
  { title: "DESPORE NOI", link: "/about" },
  { title: "SERVICII", link: "/services" },
  { title: "AUTOMOBILE", link: "/cars" },
];

export const FooterInfo: React.FC = () => {
  return (
    <div className="flex w-full flex-col pb-4">
      <div className="flex flex-col lg:flex-row-reverse lg:bg-footer-main lg:bg-no-repeat lg:bg-cover">
        <div className="w-full bg-cover bg-no-repeat bg-footer-main-mobile lg:bg-none lg:w-1/3">
          <div className="flex h-full flex-col gap-2 bg-white p-5 bg-opacity-85">
            <h2 className="text-xl font-semibold font-oswald">
              <span>BINE AȚI VENIT LA</span>
              <span className="ml-1 text-primary">DIRECTAUTORENT</span>
            </h2>
            <p className="text-lg font-noToSans">{FOOTER_INFO_TEXT}</p>
          </div>
        </div>
        <div className="w-full bg-cover bg-no-repeat bg-footer-secondary-mobile lg:bg-none lg:w-2/3">
          <div className="flex h-full flex-col gap-10 bg-opacity-70 px-5 py-7 bg-primary lg:flex-row lg:justify-center">
            <div className="flex flex-col gap-4">
              <img src={logoIcon} alt="" className="max-w-[209px]" />
              <div className="flex flex-col gap-2 text-xl font-semibold text-white font-oswald">
                {linkList.map((item) => {
                  return (
                    <div key={item.link} className="flex items-center gap-2">
                      <img
                        src={arrowIcon}
                        alt=""
                        className="w-full max-w-[5px]"
                      />
                      <Link to={item.link}>{item.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:mt-10">
              <h3 className="text-xl font-semibold text-white font-oswald">
                CONTACTE
              </h3>
              <div className="flex flex-col gap-2 pt-4">
                {CONTACT_LIST.map((contact, index) => {
                  return (
                    index < CONTACT_LIST.length - 2 && (
                      <div
                        key={contact.title + contact.value}
                        className="flex gap-1 text-lg text-white font-noToSans"
                      >
                        <span className="font-semibold">{contact.title}</span>
                        <span
                          className={`font-light ${index > 2 && "underline decoration-1 underline-offset-4"}`}
                        >
                          {contact.value}
                        </span>
                      </div>
                    )
                  );
                })}
                <div className="flex flex-col gap-1 text-lg text-white font-noToSans lg:flex-row lg:gap-4">
                  <span className="font-semibold">
                    {CONTACT_LIST[CONTACT_LIST.length - 2].title}
                    <span className="ml-1 font-light underline decoration-1 underline-offset-4">
                      {CONTACT_LIST[CONTACT_LIST.length - 2].value}
                    </span>
                  </span>
                  <span className="font-semibold">
                    {CONTACT_LIST[CONTACT_LIST.length - 1].title}
                    <span className="ml-1 font-light underline decoration-1 underline-offset-4">
                      {CONTACT_LIST[CONTACT_LIST.length - 1].value}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 py-5 lg:w-2/3 lg:flex-row lg:justify-between lg:self-center">
        <p className="text-sm text-gray-400">
          {COPY_RIGHTS}
          <span className="ml-1 underline">Promoweb.md</span>
        </p>
        <img src={companyLogo} alt="" className="max-w-[117px]" />
      </div>
    </div>
  );
};
