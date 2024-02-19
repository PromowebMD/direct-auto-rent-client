import { Loader } from "react-feather";
import React from "react";

type LoaderComponentProps = {
  className?: string;
};

export const LoaderComponent: React.FC<LoaderComponentProps> = ({
  className,
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader className={`animate-spin h-full ${className}`} />
    </div>
  );
};
