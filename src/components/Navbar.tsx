import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { X } from "react-feather";
import menuIcon from "../assets/menu_icon.svg";

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const linkList = [
    { title: "ACASĂ", link: "/" },
    { title: "DESPORE NOI", link: "/about" },
    { title: "SERVICII", link: "/services" },
    { title: "AUTOMOBILE", link: "/cars" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`flex flex-col w-full py-2 px-4 lg:px-0 lg:py-0 h-fit items-center justify-center bg-primary ${className}`}
    >
      <div className="flex w-full justify-between md:gap-44 lg:justify-evenly">
        <Link to="/">
          <img src={logo} alt="logo" className="max-w-32 lg:max-w-[320px] lg:max-h-[35px]" />
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menuIcon} alt="" />
        </button>
        <div className="hidden items-center gap-10 text-base font-bold text-white font-oswald lg:flex">
          {linkList.map((item) => {
            return (
              <button
                key={item.title}
                className="h-fit rounded p-2 hover:bg-blue-700"
              >
                <Link to={item.link}>{item.title}</Link>
              </button>
            );
          })}
        </div>
        {isMenuOpen && (
          <div className="fixed right-0 z-50 h-full w-1/2 bg-primary lg:hidden">
            <div className="flex h-full flex-col items-start gap-6 px-4 pt-4 font-bold text-white font-oswald">
              <button
                className="self-end"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <X />
              </button>
              {linkList.map((item) => (
                <button key={item.title} onClick={() => setIsMenuOpen(false)}>
                  <Link to={item.link}>{item.title}</Link>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
