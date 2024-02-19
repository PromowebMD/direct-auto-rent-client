export enum Transmission {
  AUTOMATE = "AUTOMATE",
  MANUAL = "MANUAL",
}

export enum FuelType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
}

export enum Category {
  HATCHBACK = "HATCHBACK",
  SEDAN = "SEDAN",
  SUV = "SUV",
  BUS = "BUS",
}

export enum CarDistanceLimit {
  UNLIMITED = "UNLIMITED",
  LIMITED = "LIMITED",
}

export interface IRentPrice {
  days1To2: number;
  days3To5: number;
  days6To8: number;
  days9To14: number;
  days20Plus: number;
  days30Plus: number;
}

export interface ICar {
  id: string;
  title: string;
  year: number;
  seats: number;
  category: Category;
  transmission: Transmission;
  fuelType: FuelType;
  smallBaggage: number;
  bigBaggage: number;
  distanceLimit: CarDistanceLimit;
  primaryImage: string;
  secondaryImages: string[];
  rentPrice: IRentPrice;
  currentPrice: number;
}
