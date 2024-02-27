import { MapPin, Phone } from "react-feather";

export const ContactBar = () => {
  return (
    <div className="hidden h-fit w-full max-w-[1000px] justify-end text-sm font-normal text-white bg-transparent font-noToSans lg:flex">
      <div className="flex justify-end">
        <div className="flex gap-6 py-1">
          <div className="flex items-center gap-4">
            <MapPin className="w-[20px] h-[20px]" />
            <p>Ștefan cel Mare 123</p>
            <p>Dacia 80/3</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-[20px] h-[20px]" />
            <p>+373 (79) 167 777</p>
            <p>+373 (79) 167 777</p>
          </div>
        </div>
      </div>
    </div>
  );
};
