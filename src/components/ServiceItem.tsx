import React from "react";

type ServiceItemProps = {
  title: string;
  image: string;
  content: string;
};

export const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  image,
  content,
}) => {
  return (
    <div className="grid grid-cols-1 font-oswald md:grid-cols-2 md:gap-2">
      <span className="order-1 hidden place-self-center max-w-[380px] md:block">
        <img src={image} alt="" className="rounded" />
      </span>
      <div className="order-2 hidden md:block">
        <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
        <p className="font-light">{content}</p>
      </div>

      <div className="grid place-items-center md:hidden">
        <h3 className="mb-2 text-lg font-normal">{title}</h3>
        <img src={image} alt="" className="rounded" />
        <p className="text-center font-light">{content}</p>
      </div>
    </div>
  );
};
