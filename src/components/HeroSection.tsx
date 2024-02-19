import React, { ReactNode } from "react";
import heroBg from "../assets/here-background.svg";

type HeroSectionProps = {
  children?: ReactNode;
};

export const HeroSection: React.FC<HeroSectionProps> = ({children}) => {
  return (
    <div
      className="h-3/4 bg-cover bg-center bg-no-repeat md:h-[450px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="flex h-full w-full flex-col place-items-center px-4 bg-primary lg:bg-opacity-70">
        {children}
      </div>
    </div>
  );
}
