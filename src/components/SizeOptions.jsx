
const SizeOptions = () => {
  return (
    <div className="flex items-center gap-[42px]">
      <div className="">
        <p className="text-slate-700  font-medium text-[19px]">Size</p>
      </div>

      <div className="flex items-center gap-[11px]">
        <div className="h-[36px] w-[37px] rounded-[5px] border-[0.1em] border-slate-700 border-solid flex items-center justify-center hover:border-indigo-400 hover:cursor-pointer">
          <p className="text-slate-700  font-medium text-[18px]">S</p>
        </div>

        <div className="h-[36px] w-[37px] rounded-[5px] flex items-center justify-center hover:border-slate-700 hover:border-solid hover:border-[0.1em] hover:cursor-pointer">
          <p className="text-slate-700  font-medium text-[18px]">M</p>
        </div>

        <div className="h-[36px] w-[37px] rounded-[5px] flex items-center justify-center hover:border-slate-700 hover:border-solid hover:border-[0.1em] hover:cursor-pointer">
          <p className="text-slate-700  font-medium text-[18px]">L</p>
        </div>

        <div className="h-[36px] w-[37px] rounded-[5px] flex items-center justify-center hover:border-slate-700 hover:border-solid hover:border-[0.1em] hover:cursor-pointer">
          <p className="text-slate-700  font-medium text-[18px]">XL</p>
        </div>
      </div>
    </div>
  );
}

export default SizeOptions