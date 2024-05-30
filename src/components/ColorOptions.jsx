
const ColorOptions = () => {
  return (
    <div className="flex items-center gap-[34px]">
      <div>
        <p className="text-slate-700  font-medium text-[18px]">Color</p>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="blue bg-indigo-400 h-[36px] w-[37px] rounded-[5px] hover:cursor-pointer hover:border-indigo-700 hover:border-solid hover:border-[0.1em]"></div>
        <div className="black bg-slate-700 h-[28px] w-[29px] rounded-[5px] hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>
        <div className="pink bg-fuchsia-400 h-[28px] w-[29px] rounded-[5px] hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>
        <div className="yellow bg-yellow-500 h-[28px] w-[29px] rounded-[5px] hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>
        <div className="green bg-lime-600 h-[28px] w-[29px] rounded-[5px] hover:cursor-pointer hover:border-indigo-500 hover:border-solid hover:border-[0.1em]"></div>
      </div>
    </div>
  );
}

export default ColorOptions