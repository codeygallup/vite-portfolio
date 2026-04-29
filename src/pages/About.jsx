import ProfilePicture from "../assets/me.jpg";

export default function About() {
  return (
    <main>
      <h1 className="text-center text-4xl md:text-5xl">About Me</h1>
      <div className="mt-10 flex flex-col items-center space-x-4 md:mt-0 md:flex-row">
        <img
          src={ProfilePicture}
          alt="me"
          className="about-pic h-96 rounded-[25%] md:mx-10"
        ></img>
        <div className="">
          <p className="m-8 text-xl sm:w-[80%] lg:m-24 lg:text-2xl">
            Hello! My name is Codey, and I am an aspiring web developer with a
            background as an apprentice electrician. I have always had a passion
            for technology and its ability to solve complex problems, and I have
            found that web development is the perfect way for me to use my
            skills and experience to make a positive impact.
          </p>
          <p className="m-8 text-xl sm:w-[80%] lg:m-24 lg:text-2xl">
            As an apprentice electrician, I have gained hands-on experience
            working with complex systems, and I have a strong understanding of
            the technical concepts and processes that are necessary for success
            in the industry. I am excited to bring this experience to my work as
            a web developer, and I am confident that I can help businesses and
            organizations achieve their goals through cutting-edge web
            solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
