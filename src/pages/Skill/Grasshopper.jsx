import Animation from "../../assets/GHAnimations.png";
import Animation2 from "../../assets/GHAnimations2.png";
import Array from "../../assets/GHArrayMethods.png";
import Fundamental from "../../assets/GHCodingFundamentals.png";
import Fundamental2 from "../../assets/GHCodingFundamentals2.png";
import Debug from "../../assets/GHDebugging.png";

export default function Grasshopper() {
  return (
    <div className="mb-2 flex flex-col items-center gap-5 md:mx-24 md:mt-20 md:grid md:grid-cols-3 md:justify-items-center md:gap-y-8">
      <img className="h-64 w-72" src={Animation} alt="animation" />
      <img className="h-64 w-72" src={Animation2} alt="animations 2" />
      <img className="h-64 w-72" src={Array} alt="array methods" />
      <img className="h-64 w-64" src={Fundamental} alt="fundamentals" />
      <img className="h-64 w-64" src={Fundamental2} alt="fundamentals 2" />
      <img className="h-64 w-72" src={Debug} alt="Debugging" />
    </div>
  );
}
