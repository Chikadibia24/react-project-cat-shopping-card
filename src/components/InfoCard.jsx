import Buttons from "./Buttons"
import ColorOptions from "./ColorOptions"
import Heading from "./Heading"
import Price from "./Price"
import Ratings from "./Ratings"
import SizeOptions from "./SizeOptions"

const InfoCard = () => {
  return (
    <section className="infoCard-container bg-slate-300 flex flex-col items-center gap-[30px] md:w-[44%] w-[95%] md:h-[90%] h-[45%] md:rounded-l-lg md:rounded-tr-[0] rounded-t-lg pt-[16px] md:pt-[25px] pb-[30px] md:pb-[0]">
      <Heading />
      <Ratings />
      <ColorOptions />
      <SizeOptions />
      <Price />
      <Buttons />
    </section>
  );
}

export default InfoCard