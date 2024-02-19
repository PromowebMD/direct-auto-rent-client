import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  action: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: React.MouseEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
};
