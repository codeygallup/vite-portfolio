import Indicators from "./Indicators";

export default function Arrows({ prevSlide, nextSlide })  {
    return (
        <div className="carousel-arrows w-full flex items-center justify-between outline-2 mx-8 px-8 absolute top-1/2 transform -translate-y-1/2">
            <button className="carousel-arrow left-arrow text-5xl" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-arrow right-arrow text-5xl" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}