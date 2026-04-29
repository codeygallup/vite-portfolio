import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { techCategories } from "../../data/technology-list";

export default function Skill() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4">
      {/* Two Column Layout */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Left Column: GitHub Stats + Certificates */}
        <div className="flex flex-col justify-between space-y-4 md:order-2">
          {/* GitHub Stats Section */}
          <div>
            <div className="flex flex-col items-center rounded bg-slate-900/40 p-3 backdrop-blur-sm">
              <h2 className="mb-3 rounded bg-slate-900/50 px-3 py-1 text-lg font-semibold text-slate-100">
                GitHub Stats
              </h2>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=codeygallup&theme=transparent&hide_border=true&title_color=F1F1EF&text_color=F1F1EF&icon_color=22D3EE&text_bold=false&layout=donut"
                alt="Github Stats"
                loading="lazy"
                className="h-60 max-w-full object-contain"
              />
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <p className="my-6 text-center text-xs text-slate-300">
              Continuing education
            </p>

            <div className="grid h-36 grid-cols-2 gap-2">
              {/* FreeCodeCamp */}
              <a
                href="https://www.freecodecamp.org/Codeyg"
                rel="noreferrer"
                target="_blank"
                className="group flex flex-col items-center justify-center gap-3 rounded bg-slate-900/40 p-4 transition-all hover:bg-cyan-600/20 hover:ring-1 hover:ring-cyan-500"
                aria-label="FreeCodeCamp"
              >
                <FontAwesomeIcon
                  icon={faFreeCodeCamp}
                  className="text-3xl text-slate-300 transition-colors group-hover:text-cyan-400 md:text-5xl"
                />
                <span className="text-md font-medium text-slate-300 group-hover:text-slate-100">
                  freeCodeCamp
                </span>
              </a>

              {/* Credly */}
              <a
                href="https://www.credly.com/users/codey-gallup"
                rel="noreferrer"
                target="_blank"
                className="group flex flex-col items-center justify-center gap-3 rounded bg-slate-900/40 p-4 transition-all hover:bg-cyan-600/20 hover:ring-1 hover:ring-cyan-500"
                aria-label="Credly"
              >
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-3xl text-slate-300 transition-colors group-hover:text-cyan-400 md:text-5xl"
                />
                <span className="text-md font-medium text-slate-300 group-hover:text-slate-100">
                  Credly
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Technologies */}
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex h-full flex-col justify-around gap-2 rounded bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 py-4">
            {/* Tech Icons by Category */}
            <div className="grid grid-cols-2 gap-3">
              {techCategories.map((cat) => (
                <div
                  key={cat.label}
                  className={`rounded bg-slate-900/30 p-3 ${cat.skills.length <= 4 ? "col-span-1" : "col-span-2"}`}
                >
                  <p className="mb-3 text-xs uppercase tracking-widest text-cyan-200">
                    {cat.label}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-3">
                    {cat.icons.map((icon) => (
                      <img
                        key={icon}
                        src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                        alt={icon}
                        className="h-10"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-slate-900/60 px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
