import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { HERO_TEXT } from "../utils/appText.ts";
import { CalendarCard } from "../components/CalendarCard.tsx";
import { Carousel } from "../components/Carousel.tsx";
import { OfferCard } from "../components/OfferCard.tsx";
import { Link } from "react-router-dom";
import { FooterNav } from "../components/FooterNav.tsx";
import { ICar } from "../models/car.ts";
import { getCars } from "../api/carsRequest.ts";
import { LoaderComponent } from "../components/LoaderComponent.tsx";

export const HomeScreen: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCars()
      .then((value) => {
        if (value.code === "success") {
          setCars(value.data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="grid h-full">
      <div className="flex flex-col h-full">
        <HeroSection>
          <Navbar className="bg-transparent" />
          <div className="mt-10 flex w-4/5 justify-start text-xl font-bold text-white font-noToSans text-wrap md:justify-center lg:mt-20 lg:text-2xl">
            <p>{HERO_TEXT}</p>
          </div>
          <div className="mt-4 flex justify-center w-full self-center max-w-[1000px]">
            <CalendarCard />
          </div>
        </HeroSection>
        <div className="mt-6 flex w-4/5 flex-col items-center justify-center gap-4 self-center max-w-[1100px]">
          {isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              <Carousel cars={cars} />
              <Link
                className="w-fit rounded px-4 text-lg text-white bg-primary"
                to="/cars"
              >
                Mai mult
              </Link>
            </>
          )}
        </div>
        <div className="mt-6 h-1 lg:hidden">
          <FooterNav />
        </div>
        <div className="mt-4 flex w-4/5 justify-center self-center">
          <OfferCard />
        </div>
        <hr className="mt-10 lg:flex w-full bg-smoky" />
      </div>
    </section>
  );
};
