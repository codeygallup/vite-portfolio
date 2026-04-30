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
          aria-label="About page"
          end
          className={({ isActive }) =>
            `about-link absolute left-[15%] top-9 sm:left-[25%] ${isActive ? "active" : ""}`
          }
          to="/"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          aria-label="Skills page"
          end
          className={({ isActive }) =>
            `skill-link absolute left-[30%] top-9 sm:left-[40%] ${isActive ? "active" : ""}`
          }
          to="/skills"
        >
          <FontAwesomeIcon icon={faCode} />
        </NavLink>
        <NavLink
          aria-label="Projects page"
          end
          className={({ isActive }) =>
            `project-link absolute left-[50%] top-9 sm:left-[55%] ${isActive ? "active" : ""}`
          }
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolderOpen} />
        </NavLink>
        <NavLink
          aria-label="Contact page"
          end
          className={({ isActive }) =>
            `contact-link absolute left-[70%] top-9 ${isActive ? "active" : ""}`
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </NavLink>
        <ul className="sidebar-list text-2xl text-slate-200">
          <li>
            <a
              aria-label="Codey Gallup GitHub"
              href="https://github.com/codeygallup"
              rel="noreferrer"
              target="_blank"
              className="ga-icon absolute right-4 top-3 md:right-8"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a
              aria-label="Codey Gallup LinkedIn"
              href="https://linkedin.com/in/codey-gallup"
              rel="noreferrer"
              target="_blank"
              className="li-icon absolute right-4 top-14 sm:right-12 md:right-8"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
