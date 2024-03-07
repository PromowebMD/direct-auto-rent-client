import locationIcon from "../assets/location_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";

export const ContactBar = () => {
  return (
    <div className="hidden h-fit w-full justify-end bg-transparent pr-2 text-sm font-normal text-white max-w-[1000px] font-noToSans lg:flex">
      <div className="flex justify-end">
        <div className="flex gap-6 py-1">
          <div className="flex items-center gap-4">
            <img src={locationIcon} alt="" className="w-[18px] h-[18px]" />
            <a href="https://maps.app.goo.gl/MVhE9uDjdqozmHVp7">
              Ștefan cel Mare 123
            </a>
            <img src={locationIcon} alt="" className="w-[18px] h-[18px]" />
            <a href="https://maps.app.goo.gl/2VAoMJ7QAogmhYdd8">Dacia 80/3</a>
          </div>
          <div className="flex items-center gap-4">
            <img src={phoneIcon} alt="" className="w-[16px] h-[16px]" />
            <a href="tel:+373079167777">+373 (79) 167 777</a>
            <a href="tel:+37378333100">+373 (78) 333 100</a>
          </div>
        </div>
      </div>
    </div>
  );
};
