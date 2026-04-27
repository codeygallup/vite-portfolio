import { useState } from "react";
import projectData from "../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const total = projectData.length;

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  const project = projectData[current];

  return (
  <div className="flex h-full flex-col items-center w-full max-w-4xl mx-auto">
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      {/* Stage */}
      <div className="flex items-center justify-center gap-8 w-full py-6">
      {/* Prev — side on desktop */}
      <button
        onClick={() => setCurrent(prev)}
        className="hidden sm:flex flex-shrink-0 w-40 h-28 sm:w-44 sm:h-32 md:w-52 md:h-36 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all focus:outline-none bg-slate-700/40 items-center justify-center p-2"
      >
        <img src={projectData[prev].sideSrc} alt={projectData[prev].alt} className="w-full h-full" />
      </button>

      {/* Center */}
      <div className="flex-shrink-0 w-full max-w-[700px] aspect-[4/3] max-h-[40vh] sm:max-h-[42vh] md:max-h-[44vh] rounded-lg overflow-hidden ring-2 ring-cyan-500 shadow-lg">
        <img src={project.src} alt={project.alt} className="w-full h-full" />
      </div>

      {/* Next — side on desktop */}
      <button
        onClick={() => setCurrent(next)}
        className="hidden sm:flex flex-shrink-0 w-40 h-28 sm:w-44 sm:h-32 md:w-52 md:h-36 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all focus:outline-none bg-slate-700/40 items-center justify-center p-2"
      >
        <img src={projectData[next].sideSrc} alt={projectData[next].alt} className="w-full h-full" />
      </button>
    </div>

    {/* Info */}
    <div className="text-center mt-2 min-h-32">
      <h3 className="text-xl font-medium text-slate-200">
        {project.title}
        {project.subtitle && (
          <span className="ml-2 text-sm font-normal text-slate-400">
            — {project.subtitle}
          </span>
        )}
      </h3>
      <p className="text-sm text-slate-400 mt-1">{project.tech}</p>
      {project.downloads && (
        <p className="text-xs text-slate-500 mt-1">⬇ {project.downloads}</p>
      )}
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a href={project.githubHref} rel="noreferrer" target="_blank" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={project.link} rel="noreferrer" target="_blank" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="Live link">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </div>
    </div>

    <div className="w-full sm:hidden flex items-center justify-center gap-4 pb-6">
      <button
        onClick={() => setCurrent(prev)}
        className="w-16 h-16 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all bg-slate-700/40 flex items-center justify-center p-1.5"
      >
        <img src={projectData[prev].sideSrc} alt={projectData[prev].alt} className="w-full h-full" />
      </button>
      <div className="flex items-center gap-3">
        {projectData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? "bg-cyan-500 scale-125" : "bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent(next)}
        className="w-16 h-16 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all bg-slate-700/40 flex items-center justify-center p-1.5"
      >
        <img src={projectData[next].sideSrc} alt={projectData[next].alt} className="w-full h-full" />
      </button>
    </div>

    <div className="hidden sm:flex gap-3 mt-6">
      {projectData.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrent(idx)}
          className={`w-2 h-2 rounded-full transition-all ${
            idx === current ? "bg-cyan-500 scale-125" : "bg-slate-600 hover:bg-slate-400"
          }`}
          aria-label={`Go to project ${idx + 1}`}
        />
      ))}
    </div>
  </div>
);
}