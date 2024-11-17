import projectData from "../../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <div className="mb-2 flex h-fit w-full flex-col items-center gap-y-5 md:grid md:grid-cols-3 md:place-items-center">
      {projectData.map((project, idx) => (
        <div
          className="image-container relative h-48 w-80 min-[1800px]:h-72 min-[1800px]:w-96"
          key={idx}
        >
          <img src={project.src} alt={project.alt} className="h-full w-full" />
          <div className="overlay invisible absolute inset-0 flex flex-wrap items-center justify-center text-gray-200 opacity-0">
            <div className="text mb-2 text-center text-xl">
              {project.title}
              <br />
              {project.tech}
            </div>
            <a
              href={project.githubHref}
              rel="noreferrer"
              target="_blank"
              className="absolute bottom-3 left-28 text-3xl text-gray-200"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              className="absolute bottom-3 right-28 text-3xl text-gray-200"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}



{/* <div className="h-screen grid grid-cols-3 gap-x-10 gap-y-2 grid-rows-3 pb-28">
{projectData.map((project, idx) => (
  <div
    className="image-container  h-full flex items-center justify-center relative"
    key={idx}
  >
    <img src={project.src} alt={project.alt} className="h-full w-full object-fill" />
    <div className="overlay invisible absolute inset-0 flex flex-wrap items-center justify-center text-gray-200 opacity-0">
      <div className="text mb-2 text-center text-xl">
        {project.title}
        <br />
        {project.tech}
      </div>
      <a
        href={project.githubHref}
        rel="noreferrer"
        target="_blank"
        className="absolute bottom-3 left-28 text-3xl text-gray-200"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={project.link}
        rel="noreferrer"
        target="_blank"
        className="absolute bottom-3 right-28 text-3xl text-gray-200"
      >
        <FontAwesomeIcon icon={faLink} />
      </a>
    </div>
  </div>
))}
</div> */}