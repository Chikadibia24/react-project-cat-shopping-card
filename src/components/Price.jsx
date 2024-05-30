import { FaDollarSign } from "react-icons/fa6";

const Price = () => {
  return (
    <div className="flex items-center justify-start w-[56%] md:w-[58%] text-slate-700  font-[500] text-[25px]">
      <FaDollarSign />
      <p className="pt-[2px]">
        14.99
      </p>
    </div>
  );
};

export default Price;
