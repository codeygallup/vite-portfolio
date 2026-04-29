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
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center">
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        {/* Stage */}
        <div className="flex w-full items-center justify-center gap-8 py-6">
          {/* Prev — side on desktop */}
          <button
            onClick={() => setCurrent(prev)}
            className="hidden h-28 w-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-700/40 p-2 opacity-60 transition-all hover:opacity-100 focus:outline-none sm:flex sm:h-32 sm:w-44 md:h-36 md:w-52"
          >
            <img
              src={projectData[prev].sideSrc}
              alt={projectData[prev].alt}
              className="h-full w-full"
            />
          </button>

          {/* Center */}
          <div className="aspect-[4/3] max-h-[40vh] w-full max-w-[700px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg ring-2 ring-cyan-500 sm:max-h-[42vh] md:max-h-[44vh]">
            <img
              src={project.src}
              alt={project.alt}
              className="h-full w-full"
            />
          </div>

          {/* Next — side on desktop */}
          <button
            onClick={() => setCurrent(next)}
            className="hidden h-28 w-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-700/40 p-2 opacity-60 transition-all hover:opacity-100 focus:outline-none sm:flex sm:h-32 sm:w-44 md:h-36 md:w-52"
          >
            <img
              src={projectData[next].sideSrc}
              alt={projectData[next].alt}
              className="h-full w-full"
            />
          </button>
        </div>

        {/* Info */}
        <div className="mt-2 min-h-32 text-center">
          <h3 className="text-2xl font-medium text-slate-200">
            {project.title}
            {project.subtitle && (
              <span className="ml-2 text-sm font-normal text-slate-400">
                — {project.subtitle}
              </span>
            )}
          </h3>
          <p className="mt-1 text-md text-slate-400">{project.tech}</p>
          {project.downloads && (
            <p className="mt-1 text-xs md:text-sm text-slate-500">
              ⬇ {project.downloads}
            </p>
          )}
          <div className="mt-10 md:mt-4 flex justify-center gap-6 text-5xl md:text-3xl">
            <a
              href={project.githubHref}
              rel="noreferrer"
              target="_blank"
              className="text-slate-300 transition-colors hover:text-cyan-400"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              className="text-slate-300 transition-colors hover:text-cyan-400"
              aria-label="Live link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>

        {/* Desktop dots */}
        <div className="mt-6 hidden gap-3 sm:flex">
          {projectData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === current
                  ? "scale-125 bg-cyan-500"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-4 pb-6 sm:hidden">
        <button
          onClick={() => setCurrent(prev)}
          className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-slate-700/40 p-1.5 opacity-60 transition-all hover:opacity-100"
        >
          <img
            src={projectData[prev].sideSrc}
            alt={projectData[prev].alt}
            className="h-full w-full"
          />
        </button>
        <div className="flex items-center gap-3">
          {projectData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === current
                  ? "scale-125 bg-cyan-500"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent(next)}
          className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-slate-700/40 p-1.5 opacity-60 transition-all hover:opacity-100"
        >
          <img
            src={projectData[next].sideSrc}
            alt={projectData[next].alt}
            className="h-full w-full"
          />
        </button>
      </div>
    </div>
  );
}
