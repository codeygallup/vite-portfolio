import { useState } from "react";
import projectData from "../data/projectData";
import Arrows from "./Arrows";
import Content from "./Content";
import Indicators from "./Indicators";

const projectLength = projectData.length - 1;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(projectData);

  const selectNode = (index) => {
    console.log(`Selected index: ${index}`);
    
    return setCurrentIndex(index);
  };


  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Content projects={projectData} currentIndex={currentIndex} />
        <Arrows
          className="carousel-arrows"
          prevSlide={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? projectLength : prevIndex - 1,
            )
          }
          nextSlide={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === projectLength ? 0 : prevIndex + 1,
            )
          }
        />
        <Indicators
          className="carousel-indicators"
          currentIndex={currentIndex}
          projectData={projectData}
          selectNode={selectNode}
        />
      </div>
    </>
  );
};

export default Carousel;
