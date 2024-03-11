import React, { PropsWithChildren } from "react";
import closeIcon from "../assets/close_icon.svg";

interface FilterModalProps extends PropsWithChildren {
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed top-0 z-50 flex h-full w-full flex-col gap-4 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium font-oswald">FILTRU</h2>
        <button onClick={onClose}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <div className="flex  flex-col rounded border border-gray-300 p-4 gap-4">
        {children}
      </div>
    </div>
  );
};
