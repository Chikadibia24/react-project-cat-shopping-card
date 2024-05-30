import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const Ratings = () => {
  return (
    <div className="flex items-center gap-[16px] ">
      <div className="flex gap-[5px] text-[30px] text-yellow-500">
        <RiStarSFill className="hover:cursor-pointer  " />
        <RiStarSFill className="hover:cursor-pointer  " />
        <RiStarSFill className="hover:cursor-pointer  " />
        <RiStarSFill className="hover:cursor-pointer  " />
        <RiStarSLine className="hover:cursor-pointer  " />
      </div>

      <div className="flex gap-1 ">
        <p className="text-slate-700">345</p>
        <p className="text-slate-700">ratings</p>
      </div>
    </div>
  );
};

export default Ratings;
