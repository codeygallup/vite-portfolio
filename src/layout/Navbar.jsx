import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faEnvelopeOpenText,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar fixed top-0 z-10 min-h-28 w-screen bg-cyan-600 text-3xl text-slate-200 md:text-4xl lg:text-4xl">
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="about-link absolute left-[15%] top-9 sm:left-[25%]"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/skills"
          className="skill-link absolute left-[30%] top-9 sm:left-[40%]"
        >
          <FontAwesomeIcon icon={faCode} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/projects"
          className="project-link absolute left-[50%] top-9 sm:left-[55%]"
        >
          <FontAwesomeIcon icon={faFolderOpen} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link absolute left-[70%] top-9"
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </NavLink>
        <ul className="sidebar-list text-2xl text-slate-200 md:text-2xl">
          <a
            href="https://github.com/codeygallup"
            rel="noreferrer"
            target="_blank"
            className="ga-icon absolute right-8 top-3 sm:right-12"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://linkedin.com/in/codey-gallup"
            rel="noreferrer"
            target="_blank"
            className="li-icon absolute right-8 top-14 sm:right-12"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </ul>
      </nav>
    </>
  );
}
