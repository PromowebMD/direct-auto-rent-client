import React from "react";
import Select, { components, ControlProps } from "react-select";
import { Search } from "react-feather";
import { SelectorProps } from "../models/selector.ts";

type StreetSelectorProps = {
  placeholder: string;
  value: string | null;
  onChange: (value: string | null) => void;
};

const streetOptions: SelectorProps[] = [
  { label: "Aeroport", value: "Aeroport" },
  { label: "Centru", value: "Centru" },
];

const Control: React.FC<ControlProps<SelectorProps, false>> = ({
  children,
  ...props
}) => (
  <components.Control {...props}>
    <Search /> {children}
  </components.Control>
);

export const StreetSelector: React.FC<StreetSelectorProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Select
      className="h-full w-full"
      styles={{
        control: (base) => ({
          ...base,
          height: "100%",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }),
        indicatorsContainer: () => ({
          display: "none",
        }),
      }}
      components={{ Control }}
      value={streetOptions.find((option) => option.label === value)}
      onChange={(newValue) => onChange(newValue?.value ?? null)}
      options={streetOptions}
      placeholder={placeholder}
    />
  );
};
