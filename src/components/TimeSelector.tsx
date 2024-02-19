import React from "react";
import { eachHourOfInterval, endOfDay, format, startOfDay } from "date-fns";
import Select, { components, ControlProps } from "react-select";
import { Clock } from "react-feather";
import { SelectorProps } from "../models/selector.ts";

type TimeSelectorProps = {
  placeholder?: string;
  value: string | null;
  onChange: (date: string | null) => void;
};

const Control: React.FC<ControlProps<SelectorProps, false>> = ({
  children,
  ...props
}) => (
  <components.Control {...props}>
    <div className="flex items-center">
      <Clock className="lg:w-[15px] lg:h-[15px]" />
      {children}
    </div>
  </components.Control>
);

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const currentDate = new Date();
  const startDate = startOfDay(currentDate);
  const endDate = endOfDay(currentDate);

  const hoursOfDay = eachHourOfInterval({ start: startDate, end: endDate });
  const optionList = hoursOfDay.map((hour): SelectorProps => {
    return { label: format(hour, "HH:mm"), value: format(hour, "HH:mm") };
  });

  return (
    <Select
      className="h-full w-full"
      styles={{
        control: (base) => ({
          ...base,
          height: "100%",
          paddingLeft: "5px",
        }),
        indicatorsContainer: () => ({
          display: "none",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "none",
        }),
      }}
      components={{ Control }}
      value={optionList.find((option) => option.label === value)}
      options={optionList}
      placeholder={placeholder}
      onChange={(newValue) => onChange(newValue?.value ?? null)}
    />
  );
};
