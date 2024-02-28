import React, { useRef, useState } from "react";
import { MessageCircle } from "react-feather";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import whatsappIcon from "../assets/social/whatsapp.svg";
import viberIcon from "../assets/social/viber.svg";
import telegram from "../assets/social/telegram.svg";

const PHONE_NUMBER = import.meta.env.VITE_BASE_PHONE_NUMBER;

const enum SocialMedia {
  TELEGRAM,
  WHATSAPP,
  VIBER,
}

export const FloatingSocialButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleIconClick = (social: SocialMedia) => {
    let socialURI;
    switch (social) {
      case SocialMedia.TELEGRAM: {
        socialURI = `https://t.me/+373${PHONE_NUMBER}`;
        break;
      }
      case SocialMedia.VIBER: {
        socialURI = `https://viber://contact?number=%2B373${PHONE_NUMBER}`
        break;
      }
      case SocialMedia.WHATSAPP: {
        socialURI = `https://wa.me/${PHONE_NUMBER}`;
        break;
      }
    }
    window.open(socialURI, "_blank");
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
          <button
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
            onClick={() => handleIconClick(SocialMedia.VIBER)}
          >
            <img src={viberIcon} alt="Viber" />
          </button>
          <button
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
            onClick={() => handleIconClick(SocialMedia.WHATSAPP)}
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </button>
          <button
            className="rounded transition ease-in-out duration-400 hover:bg-blue-100"
            onClick={() => handleIconClick(SocialMedia.TELEGRAM)}
          >
            <img src={telegram} alt="Telegram" />
          </button>
        </div>
      )}
    </div>
  );
};
