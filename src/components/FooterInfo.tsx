import React from "react";
import { COPY_RIGHTS, FOOTER_INFO_TEXT } from "../utils/appText.ts";
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
  const handleOnEmailClick = () => {
    window.open("mailto:email@example.com?subject=subject");
  };

  return (
    <div className="flex w-full flex-col pb-4">
      <div className="flex flex-col lg:bg-footer-main lg:flex-row-reverse lg:bg-cover lg:bg-no-repeat">
        <div className="w-full bg-cover bg-no-repeat bg-footer-main-mobile lg:w-1/3 lg:bg-none">
          <div className="flex h-full flex-col justify-center gap-2 bg-white p-7 bg-opacity-85">
            <h2 className="text-xl font-semibold font-oswald">
              <span>BINE AȚI VENIT LA</span>
              <span className="ml-1 text-primary">DIRECTAUTORENT</span>
            </h2>
            <p className="text-base font-noToSans">{FOOTER_INFO_TEXT}</p>
          </div>
        </div>
        <div className="w-full bg-cover bg-no-repeat bg-footer-secondary-mobile lg:w-2/3 lg:bg-none">
          <div className="flex h-full flex-col gap-10 bg-opacity-70 px-5 py-7 bg-primary lg:flex-row lg:justify-center">
            <div className="flex flex-col gap-4 lg:items-center">
              <img src={logoIcon} alt="" className="max-w-[131px]" />
              <div className="flex flex-col gap-2 text-base font-semibold text-white font-oswald">
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
            <div className="lg:mt-[1.1rem]">
              <h3 className="text-base font-semibold text-white font-oswald">
                CONTACTE
              </h3>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex flex-col gap-1 text-base text-white font-noToSans">
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
                  <span>
                    <span className="font-semibold">E-mail:</span>
                    <button
                      className="ml-1 font-light underline decoration-1 underline-offset-4"
                      onClick={handleOnEmailClick}
                    >
                      autorentcarsolutions@gmail.com
                    </button>
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-base text-white font-noToSans lg:flex-row lg:gap-8">
                  <span className="font-semibold">
                    str.
                    <a href="https://maps.app.goo.gl/2VAoMJ7QAogmhYdd8" className="ml-1 font-light underline decoration-1 underline-offset-4">
                      Dacia 80/3
                    </a>
                  </span>
                  <span className="font-semibold">
                    str.
                    <a href="https://maps.app.goo.gl/MVhE9uDjdqozmHVp7" className="ml-1 font-light underline decoration-1 underline-offset-4">
                      Bd. Ștefan cel Mare 123
                    </a>
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
          <a href="https://promoweb.md/" className="ml-1 underline">
            Promoweb.md
          </a>
        </p>
        <a href="https://promoweb.md/">
          <img src={companyLogo} alt="" className="max-w-[117px]" />
        </a>
      </div>
    </div>
  );
};
