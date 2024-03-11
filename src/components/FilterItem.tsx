import React, { useState } from "react";

type FilterValueProps = {
  label: string;
  value: string;
  isChecked: boolean;
};

type FilterItemProps = {
  title: string;
  values: FilterValueProps[];
  onChange: (value: string, isChecked: boolean) => void;
};

export const FilterItem: React.FC<FilterItemProps> = ({
  title,
  values,
  onChange,
}) => {
  const [filters, setFilters] = useState(values);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(
      filters.map((filter) => {
        if (filter.value === event.target.name) {
          filter.isChecked = event.target.checked;
        }
        return filter;
      }),
    );
    onChange(event.target.name, event.target.checked);
  };

  return (
    <div className="flex flex-col gap-2 font-oswald">
      <h3 className="text-lg font-bold">{title.toUpperCase()}</h3>
      {filters.map((value) => {
        return (
          <div key={value.label} className="flex items-center gap-1">
            <input
              type="checkbox"
              name={value.value}
              className="w-[18px] h-[18px]"
              checked={value.isChecked}
              onChange={handleOnChange}
            />
            <span className="ml-1">{value.label}</span>
          </div>
        );
      })}
    </div>
  );
};
