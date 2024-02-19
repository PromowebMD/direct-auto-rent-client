import React, { useRef, useState } from "react";
import { MessageCircle } from "react-feather";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import whatsappIcon from "../assets/social/whatsapp.svg";
import viberIcon from "../assets/social/viber.svg";
import telegram from "../assets/social/telegram.svg";

export const FloatingSocialButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={menuRef} className="fixed right-4 bottom-4 z-50">
      <button
        className="rounded-full p-3 text-white shadow-md transition ease-in-out duration-400 bg-accent hover:bg-green-600"
        onClick={toggleMenu}
      >
        <MessageCircle className="transition ease-in-out duration-400 hover:scale-125" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 bottom-16 flex flex-col gap-2 rounded-md bg-white p-1 shadow-md">
          <a
            href="https://www.viber.com/en/?utm_source=Partner"
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
          >
            <img src={viberIcon} alt="WhatsApp" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
          >
            <img src={whatsappIcon} alt="Viber" />
          </a>
          <a
            href="https://desktop.telegram.org/?setln=en"
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
          >
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      )}
    </div>
  );
};
