import { CarDistanceLimit } from "../models/car.ts";

export const translateDistanceLimit = (distance: CarDistanceLimit) => {
  switch (distance) {
    case CarDistanceLimit.LIMITED:
      return "limitat";
    case CarDistanceLimit.UNLIMITED:
      return "nelimitat";
  }
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
