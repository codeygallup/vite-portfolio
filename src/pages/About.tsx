import ProfilePicture from "../assets/me.webp";

export default function About() {
  return (
    <main>
      <h1 className="text-center text-4xl md:text-5xl">About Me</h1>
      <div className="mt-10 flex flex-col items-center space-x-4 md:mt-0 md:flex-row">
        <img
          src={ProfilePicture}
          alt="me"
          className="about-pic h-96 rounded-[25%] md:mx-10"
        />
        <div>
          <p className="m-8 text-xl sm:w-[80%] lg:m-24 lg:text-2xl">
            Hi, I'm Codey — a Software Development Engineer in Test based in
            Colorado Springs. I work at Clover building and maintaining API test
            suites with Karate and Gherkin, optimizing CI/CD pipelines in
            Jenkins, and keeping codebases clean and maintainable.
          </p>
          <p className="m-8 text-xl sm:w-[80%] lg:m-24 lg:text-2xl">
            Outside of work I build full-stack projects. My latest is Fatcat, a
            personal finance app built with Vue 3, Spring Boot, and PostgreSQL.
            I also published QuikLog, a productivity extension available on both
            the VS Code and JetBrains marketplaces that speeds up debug logging
            across multiple languages.
          </p>
        </div>
      </div>
    </main>
  );
}
