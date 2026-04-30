import { useState } from "react";
import projectData from "../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  project: typeof projectData[0];
  allFrozen: boolean;
  tapped: boolean;
  onTap: () => void;
}

function ProjectCard({ project, allFrozen, tapped, onTap }: ProjectCardProps) {
  const displaySrc =
    allFrozen && project.staticSrc ? project.staticSrc : project.src;

  return (
    <div
      className="image-container group relative overflow-hidden rounded-lg"
      onClick={onTap}
    >
      <img src={displaySrc} alt={project.alt} className="h-48 w-full md:h-64" />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-around gap-3 bg-black/70 p-4 text-gray-200 transition-opacity duration-200 ${tapped ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"}`}
      >
        <div className="text-center">
          <p className="text-2xl font-medium">{project.title}</p>
          {project.subtitle && (
            <p className="text-md text-gray-400">{project.subtitle}</p>
          )}
          <p className="text-md mt-1 text-gray-300">{project.tech}</p>
          {project.downloads && (
            <p className="mt-1 text-sm text-gray-400">⬇ {project.downloads}</p>
          )}
        </div>
        <div className="flex gap-20 text-3xl md:text-4xl">
          <a
            href={project.githubHref}
            rel="noreferrer"
            target="_blank"
            className="text-gray-200 transition-colors hover:text-cyan-400"
            aria-label="GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={project.link}
            rel="noreferrer"
            target="_blank"
            className="text-gray-200 transition-colors hover:text-cyan-400"
            aria-label="Live link"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Grid() {
  const [anyHovered, setAnyHovered] = useState<boolean>(false);
  const [tappedIdx, setTappedIdx] = useState<number | null>(null);

  function handleTap(idx: number) {
    setTappedIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <div
      className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      onMouseEnter={() => setAnyHovered(true)}
      onMouseLeave={() => setAnyHovered(false)}
    >
      {projectData.map((project, idx) => (
        <ProjectCard
          key={idx}
          project={project}
          allFrozen={anyHovered}
          tapped={tappedIdx === idx}
          onTap={() => handleTap(idx)}
        />
      ))}
    </div>
  );
}
