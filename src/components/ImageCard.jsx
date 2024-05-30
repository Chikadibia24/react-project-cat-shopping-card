import Carousel from "./Carousel";
import Image from "./Image";

const ImageCard = () => {
  return (
    <section className="bg-white md:w-[44%] w-[95%] md:h-[90%] h-[45%] md:rounded-r-lg md:rounded-bl-[0] rounded-b-lg flex flex-col gap-[15px] items-center justify-evenly pt-[25px] md:pt-[initial] pb-[30px] md:pb-[initial]">
      <Image />
      <Carousel />
    </section>
  );
}

export default ImageCard