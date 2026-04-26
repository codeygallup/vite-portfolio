import { useState } from "react";
import Grid from "../../components/Grid";
import Carousel from "../../components/Carousel";

export default function Project() {
  const [view, setView] = useState("grid");

  const btnBase = "toggle-btn rounded-md px-3 py-1.5 text-sm transition-colors border";
  const active = "border-cyan-500 text-cyan-500 bg-cyan-500/10";
  const inactive = "border-transparent text-gray-400 hover:text-gray-200";

  return (
    <div className="w-full px-8 pb-12 fixed top-32">
      <div className="mb-6 flex justify-end gap-2">
        <button
          onClick={() => setView("grid")}
          className={`${btnBase} ${view === "grid" ? active : inactive}`}
        >
          Grid
        </button>
        <button
          onClick={() => setView("carousel")}
          className={`${btnBase} ${view === "carousel" ? active : inactive}`}
        >
          Carousel
        </button>
      </div>

      {view === "grid" ? <Grid /> : <Carousel />}
    </div>
  );
}