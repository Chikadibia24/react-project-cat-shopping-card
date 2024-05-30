import InfoCard from './InfoCard'
import ImageCard from './ImageCard';


const DisplayShoppingCard = () => {
  return (
    <div className="displayShoppingCard flex flex-col md:flex-row md:h-[98%] justify-center items-center w-[96%] md:w-[76%] h-[98%] bg-gray-700 rounded-lg pt-[15px] md:pt-[initial] pb-[15px] md:pb-[initial]">
      <InfoCard />
      <ImageCard />
    </div>
  );
}

export default DisplayShoppingCard