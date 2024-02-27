import locationIcon from "../assets/location_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";

export const ContactBar = () => {
  return (
    <div className="hidden h-fit w-full justify-end bg-transparent pr-2 text-sm font-normal text-white max-w-[1000px] font-noToSans lg:flex">
      <div className="flex justify-end">
        <div className="flex gap-6 py-1">
          <div className="flex items-center gap-4">
            <img src={locationIcon} alt="" className="w-[18px] h-[18px]" />
            <p>Ștefan cel Mare 123</p>
            <p>Dacia 80/3</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={phoneIcon} alt="" className="w-[16px] h-[16px]" />
            <p>+373 (79) 167 777</p>
            <p>+373 (79) 167 777</p>
          </div>
        </div>
      </div>
    </div>
  );
};
