import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "../App.css";

const Carousel = () => {
  return (
    <div className="carousel-container flex items-center gap-[10px]">
      <div className="icon hover:cursor-pointer">
        <SlArrowLeft />
      </div>
      <div className="dark-grey-box h-[17px] w-[17px] bg-slate-700 rounded-sm hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>

      <div className="grey-box h-[14px] w-[14px] bg-slate-300 rounded-sm hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>

      <div className="grey-box h-[14px] w-[14px] bg-slate-300 rounded-sm hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>

      <div className="grey-box h-[14px] w-[14px] bg-slate-300 rounded-sm hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>

      <div className="grey-box h-[14px] w-[14px] bg-slate-300 rounded-sm hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>

      <div className="icon hover:cursor-pointer">
        <SlArrowRight />
      </div>
    </div>
  );
};

export default Carousel;
