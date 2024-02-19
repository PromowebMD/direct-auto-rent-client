import { IRentPrice } from "../models/car.ts";

export const getRentPriceByDays = (days: number, rentList: IRentPrice) => {
  let rentPrice = rentList.days1To2;
  if (days > 2 && days <= 5) {
    rentPrice = rentList.days3To5;
  } else if (days > 5 && days <= 8) {
    rentPrice = rentList.days6To8;
  } else if (days > 8 && days <= 14) {
    rentPrice = rentList.days9To14;
  } else if (days > 14 && days <= 29) {
    rentPrice = rentList.days20Plus;
  } else if (days > 29) {
    rentPrice = rentList.days30Plus;
  }
  return rentPrice;
};
