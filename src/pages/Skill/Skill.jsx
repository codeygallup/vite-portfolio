import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { techList } from "../../data/technology-list";

export default function Skill() {
  return (
    <div className="mx-8 flex flex-col gap-10 text-center text-2xl md:mx-14 md:grid md:grid-cols-3 md:gap-20 min-[1800px]:grid-cols-5">
      <div className="flex min-[1800px]:col-span-2">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=codeyg12&theme=transparent&hide_border=true&title_color=F1F1EF&text_color=F1F1EF&icon_color=F1F1EF&text_bold=false&layout=donut"
          alt="Github Stats"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col rounded-lg bg-cyan-600 py-4 md:mb-10">
        <h1 className="mb-10">Known Technologies</h1>
        <div className="m-4 grid h-full grid-cols-2 place-content-center gap-8 min-[1800px]:mx-0 min-[1800px]:place-items-center">
          {techList.map((tech) => {
            return (
              <div className="flex justify-center hover:scale-125">
                <img src={tech.url} alt={tech.title} className="shadow-xl" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-[1800px]:col-span-2">
        <h2>Certificates</h2>
        <p className="text-xl">
          Below are a few links to some apps and sites where I've earned some
          certificates. Click on any of the links to take a look!
        </p>
        <ul className="certs-list my-10 grid grid-cols-2 gap-10 text-6xl md:mt-16 md:gap-20 md:text-9xl">
          <a
            href="https://www.freecodecamp.org/Codeyg"
            rel="noreferrer"
            target="_blank"
            className="fcc-link relative"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>

          <Link to={`/grasshopper`} className="grasshopper-link relative">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <a
            href="https://www.sololearn.com/profile/25101425"
            rel="noreferrer"
            target="_blank"
            className="sololearn-link relative"
          >
            <FontAwesomeIcon icon={faArrowsSpin} />
          </a>
          <a
            href="https://www.credly.com/users/codey-gallup"
            rel="noreferrer"
            target="_blank"
            className="credly-link relative"
          >
            <FontAwesomeIcon icon={faCertificate} />
          </a>
        </ul>
      </div>
    </div>
  );
}
