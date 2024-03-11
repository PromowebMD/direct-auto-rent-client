import React, { useEffect, useState } from "react";
import { EditTab } from "../components/EditTab.tsx";
import { Category, FuelType, ICar, Transmission } from "../models/car.ts";
import { getCars, getCarsByDate } from "../api/carsRequest.ts";
import { LoaderComponent } from "../components/LoaderComponent.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { FilterItem } from "../components/FilterItem.tsx";
import { CarCard } from "../components/CarCard.tsx";
import filterIcon from "../assets/cars/filter_icon.svg";

const fuelFilters = {
  title: "Tipul combustibilului",
  values: [
    { label: "Benzină", isChecked: false, value: FuelType.GASOLINE },
    { label: "Diseil", isChecked: false, value: FuelType.DIESEL },
  ],
};

const transmissionFilters = {
  title: "Transmisia",
  values: [
    { label: "Automat", isChecked: false, value: Transmission.AUTOMATE },
    { label: "Manual", isChecked: false, value: Transmission.MANUAL },
  ],
};

const categoryFilters = {
  title: "Categoria de mașini",
  values: [
    { label: "Hatchback", isChecked: false, value: Category.HATCHBACK },
    { label: "Sedan", isChecked: false, value: Category.SEDAN },
    { label: "Suv", isChecked: false, value: Category.SUV },
    { label: "Bus", isChecked: false, value: Category.BUS },
  ],
};

enum SortSearch {
  DESCENDENT,
  ASCENDED,
}

export const CarsScreen: React.FC = () => {
  const [carList, setCarList] = useState<ICar[]>([]);
  const [visibleCarList, setVisibleCarList] = useState<ICar[]>([]);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortSearch, setSortSearch] = useState<SortSearch>(SortSearch.ASCENDED);
  const pickUpDate = useSelector((state: RootState) => state.pickUpDate);
  const returnDate = useSelector((state: RootState) => state.returnDate);

  useEffect(() => {
    const fetchCarList = async () => {
      setIsLoading(true);
      let fetchResponse;
      if (pickUpDate !== null && returnDate !== null) {
        fetchResponse = await getCarsByDate({
          pickUpDate: pickUpDate,
          returnDate: returnDate,
        });
      } else {
        fetchResponse = await getCars();
      }
      if (fetchResponse.code === "success") {
        setCarList(fetchResponse.data);
        setShowMoreBtn(fetchResponse.data.length > 5);
        setVisibleCarList(fetchResponse.data.slice(0, 5));
      }
      setIsLoading(false);
    };

    fetchCarList().then();
  }, [pickUpDate, returnDate]);

  const handleShowMore = () => {
    const nextIndex = visibleCarList.length + 5;
    setVisibleCarList(carList.slice(0, nextIndex));
    setShowMoreBtn(carList.length > nextIndex);
  };

  const handleFilterSearch = (value: string, isChecked: boolean) => {
    setIsLoading(true);
    fuelFilters.values.map((item) => {
      if (item.value === value) {
        item.isChecked = isChecked;
      }
    });
    transmissionFilters.values.map((item) => {
      if (item.value === value) {
        item.isChecked = isChecked;
      }
    });
    categoryFilters.values.map((item) => {
      if (item.value === value) {
        item.isChecked = isChecked;
      }
    });
    const fuelActiveFilters = fuelFilters.values
      .filter((item) => item.isChecked)
      .map((item) => item.value);
    const transmissionActiveFilters = transmissionFilters.values
      .filter((item) => item.isChecked)
      .map((item) => item.value);
    let filteredList = carList;
    const categoryActiveFilters = categoryFilters.values
      .filter((item) => item.isChecked)
      .map((item) => item.value);

    if (fuelActiveFilters.length !== 0) {
      filteredList = filteredList.filter((car) =>
        fuelActiveFilters.includes(car.fuelType),
      );
    }

    if (transmissionActiveFilters.length !== 0) {
      filteredList = filteredList.filter((car) =>
        transmissionActiveFilters.includes(car.transmission),
      );
    }

    if (categoryActiveFilters.length !== 0) {
      filteredList = filteredList.filter((car) =>
        categoryActiveFilters.includes(car.category),
      );
    }

    setVisibleCarList(filteredList.slice(0, 5));
    setShowMoreBtn(filteredList.length > 5);
    setIsLoading(false);
  };

  const handleSortSearch = (sortValue: SortSearch) => {
    setIsLoading(true);
    let sortedSearch = carList;
    if (sortValue === SortSearch.ASCENDED) {
      setSortSearch(SortSearch.ASCENDED);
      sortedSearch = carList.sort(
        (first, second) => first.currentPrice - second.currentPrice,
      );
    } else if (sortValue === SortSearch.DESCENDENT) {
      setSortSearch(SortSearch.DESCENDENT);
      sortedSearch = carList.sort(
        (first, second) => second.currentPrice - first.currentPrice,
      );
    }
    setCarList(sortedSearch);
    setVisibleCarList(sortedSearch.slice(0, 5));
    setIsLoading(false);
  };

  return (
    <section className="mb-10 grid w-full place-items-center">
      <div className="w-full lg:mt-2">
        <EditTab />
      </div>
      <div className="w-full px-6 lg:px-0">
        <div className="mt-4 flex gap-12">
          <div className="hidden flex-shrink-0 flex-col gap-4 font-oswald lg:flex">
            <FilterItem
              title={fuelFilters.title}
              values={fuelFilters.values}
              onChange={handleFilterSearch}
            />
            <FilterItem
              title={transmissionFilters.title}
              values={transmissionFilters.values}
              onChange={handleFilterSearch}
            />
            <FilterItem
              title={categoryFilters.title}
              values={categoryFilters.values}
              onChange={handleFilterSearch}
            />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex flex-col justify-start lg:items-center gap-2 font-oswald lg:flex-row">
              <span className="flex-shrink-0 text-lg font-bold">
                SORTAȚI PREȚUL
              </span>
              <div className="flex w-full gap-4 items-center">
                <div className="flex h-fit w-full list-none flex-wrap items-center justify-center gap-2 rounded-full py-1 text-center bg-lightGray">
                  <button
                    className={`w-fit lg:w-full rounded-full px-2 max-w-[200px] hover:bg-gray-100 ${sortSearch === SortSearch.ASCENDED && "bg-white"}`}
                    onClick={() => handleSortSearch(SortSearch.ASCENDED)}
                  >
                    Ordine crescătoare
                  </button>
                  <button
                    className={`w-fit lg:w-full rounded-full px-2 max-w-[200px] hover:bg-gray-100 ${sortSearch === SortSearch.DESCENDENT && "bg-white"}`}
                    onClick={() => handleSortSearch(SortSearch.DESCENDENT)}
                  >
                    Ordine descrescătoare
                  </button>
                </div>
                <button>
                  <img src={filterIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col lg:gap-8">
              {isLoading ? (
                <LoaderComponent />
              ) : (
                visibleCarList.map((item, index) => {
                  return (
                    <div key={item.id} className="w-full">
                      <CarCard carItem={item} />
                      <span
                        className={`my-8 flex w-full bg-neutral-200 h-[1px] lg:hidden ${index === visibleCarList.length - 1 && "hidden"}`}
                      ></span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {showMoreBtn && (
        <button
          onClick={handleShowMore}
          className="mt-4 rounded px-4 text-lg text-white bg-primary"
        >
          MAI MULT
        </button>
      )}
    </section>
  );
};
