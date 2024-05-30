import { FaHeart } from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <button className="pr-[70px] pl-[70px] bg-slate-700">Order now</button>

      <button className="border-[0.1em] border-slate-700 border-solid rounded-lg p-[6px] ">
        <FaHeart className="text-slate-700 text-[28px]" />
      </button>
    </div>
  );
};

export default Buttons;
