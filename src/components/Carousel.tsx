import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { ICar } from "../models/car.ts";
import { Link } from "react-router-dom";

type CarouselProps = {
  cars: ICar[];
};

export const Carousel: React.FC<CarouselProps> = ({ cars }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [regularIndex, setRegularIndex] = useState(0);
  const carsList = cars.slice(0, 15);
  const getNextPairItems = (): number => {
    const nextStartIndex = currentIndex * 3;
    if (carsList.length - nextStartIndex > 3) {
      return nextStartIndex + 3;
    }
    return carsList.length;
  };

  const visibleItems = carsList.slice(currentIndex * 3, getNextPairItems());

  const getItemsLengthRate = (): number => {
    return Math.ceil(carsList.length / 3);
  };

  const handleNext = () => {
    if (currentIndex < getItemsLengthRate() - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (regularIndex < carsList.length - 1) {
      setRegularIndex(regularIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (regularIndex > 0) {
      setRegularIndex(regularIndex - 1);
    }
  };
  return (
    <div className="grid w-full select-none place-items-center gap-3">
      <div className="flex w-full items-center justify-center gap-3">
        <span className="cursor-pointer rounded-full text-white bg-stormDust">
          <ChevronLeft onClick={handlePrevious} />
        </span>
        <div className="hidden w-full justify-center gap-2 max-w-[800px] h-[150px] md:flex">
          {visibleItems.map((item) => {
            return (
              <Link
                to={`/cars/${item.id}`}
                key={item.id}
                className="cursor-pointer max-w-[300px]"
              >
                <img src={item.primaryImage} alt="" className="rounded" />
              </Link>
            );
          })}
        </div>
        <div className="flex md:hidden">
          <span className="cursor-pointer max-w-[300px] h-[130px]">
            {carsList[regularIndex] && (
              <img
                src={carsList[regularIndex].primaryImage}
                alt=""
                className="rounded"
              />
            )}
          </span>
        </div>
        <span className="cursor-pointer rounded-full text-white bg-stormDust">
          <ChevronRight onClick={handleNext} />
        </span>
      </div>
      <div className="hidden gap-3 md:flex">
        {Array.from({ length: getItemsLengthRate() }).map((_, index) => {
          return (
            <div
              key={`dot-${index}`}
              className={`w-[12px] h-[12px] rounded-full ${index === currentIndex ? "bg-accent" : "bg-gray-500"}`}
            ></div>
          );
        })}
      </div>
      <div className="flex gap-3 md:hidden">
        <div
          className={`w-[12px] h-[12px] rounded-full ${regularIndex === 0 ? "bg-accent" : "bg-stormDust"}`}
        ></div>
        <div
          className={`w-[12px] h-[12px] rounded-full ${regularIndex > 0 && regularIndex < carsList.length - 1 ? "bg-accent" : "bg-stormDust"}`}
        ></div>
        <div
          className={`w-[12px] h-[12px] rounded-full ${regularIndex === carsList.length - 1 ? "bg-accent" : "bg-stormDust"}`}
        ></div>
      </div>
    </div>
  );
};
