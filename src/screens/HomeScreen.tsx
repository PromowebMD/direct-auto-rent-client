import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { HERO_TEXT, USER_AGE_CONFIRMATION } from "../utils/appText.ts";
import { CalendarCard } from "../components/CalendarCard.tsx";
import { Carousel } from "../components/Carousel.tsx";
import { OfferCard } from "../components/OfferCard.tsx";
import { Link } from "react-router-dom";
import { FooterNav } from "../components/FooterNav.tsx";
import { ICar } from "../models/car.ts";
import { getCars } from "../api/carsRequest.ts";
import { LoaderComponent } from "../components/LoaderComponent.tsx";
import { Check } from "react-feather";

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
      <div className="flex h-full flex-col">
        <HeroSection>
          <Navbar className="bg-transparent" />
          <div className="mt-10 flex w-4/5 justify-start text-2xl font-bold text-white font-noToSans text-wrap md:justify-center lg:mt-20 lg:text-2xl">
            <p>{HERO_TEXT}</p>
          </div>
          <div className="mt-4 flex w-full justify-center self-center max-w-[1000px]">
            <CalendarCard />
          </div>
          <div className="flex w-full flex-col justify-start gap-2 text-white max-w-[1000px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-5 w-5 rounded" />
              {USER_AGE_CONFIRMATION}
            </div>
            <div className="flex items-center gap-1">
              <Check /> Anulare gratuită la majoritatea rezervărilor
            </div>
            <div className="flex items-center gap-1">
              <Check /> Condiții flexibile de închiriere
            </div>
            <div className="flex items-center gap-1">
              <Check /> Mașini comfortabile și de înalta calitate
            </div>
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
        <hr className="mt-10 w-full bg-smoky lg:flex" />
      </div>
    </section>
  );
};
