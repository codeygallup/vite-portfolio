import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content({ projects, currentIndex }) {
  const project = projects[currentIndex];
  return (
    <div className="carousel-content">
      {project ? (
        <div
          className="image-container w-full h-full flex items-center justify-center relative"
        >
          <img
            src={project.src}
            alt={project.alt}
            className="h-96 object-fill"
          />
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
      ) : (
        <div className="no-project">No project selected</div>
      )}
    </div>
  );
}
