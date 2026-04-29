import { useRef, useState } from "react";
import { validateEmail } from "../utils/helper";
import emailjs from "@emailjs/browser";
import Resume from "../assets/Resume.pdf";

export default function Contact() {
  const form = useRef();
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, subject, message } = contactFormState;

  function handleContact(e) {
    // Checks if all fields have been entered and validating email
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value);
      if (!validEmail) {
        setErrorMessage("Please enter a valid email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setContactFormState({
        ...contactFormState,
        [e.target.name]: e.target.value,
      });
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9ozccg",
        "template_i728ryi",
        e.target,
        "cRjguA3pkusSgJPh5",
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="mx-5 flex flex-col items-center text-center text-lg md:mt-10 md:grid md:grid-cols-5 md:gap-x-28 md:text-xl">
      <div className="col-span-2 md:ml-2 md:pl-10">
        <div className="mb-10">
          <h1 className="">Contact Me</h1>
          <p>
            I'm actively looking for a career in web development and would love
            to hear from you! You are always welcome to email me directly at the
            email below, clicking it will save it to your clipboard, or you can
            use the form to the left to send an email directly from here. My
            GitHub and Linkedin are both linked at the top right of the screen.
          </p>
          <span>Email:</span>
          <abbr
            className="ml-2 cursor-copy no-underline hover:text-cyan-600"
            onClick={() =>
              navigator.clipboard.writeText("codey.gallup@gmail.com")
            }
            title="Click to save to clipboard"
          >
            codey.gallup@gmail.com
          </abbr>
          <address>Colorado Springs, CO 80903</address>
        </div>

        <div className="resume-section mb-10">
          <h1>Resume</h1>
          <p>
            Below is a link directly to my Indeed resume or you can click below
            that to download the resume directly
          </p>
          <a
            className="text-gray-200 no-underline hover:text-cyan-600"
            href="https://my.indeed.com/p/codeyg-jl644zf"
            target="_blank"
            rel="noreferrer"
          >
            Click here to see resume on Indeed
          </a>
          <br />
          <a
            className="text-gray-200 no-underline hover:text-cyan-600"
            href={Resume}
            download="Codeys Resume"
          >
            Click here to download a copy
          </a>
        </div>
      </div>

      <form
        className="mb-6 w-full space-y-6 md:col-span-3 md:space-y-8"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            className="block w-full bg-slate-300 placeholder:text-gray-800 focus:outline-cyan-600"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleContact}
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">
            Subject
          </label>
          <input
            className="block w-full bg-slate-300 placeholder:text-gray-800 focus:outline-cyan-600"
            type="text"
            name="subject"
            defaultValue={subject}
            onBlur={handleContact}
            placeholder="What would you like to discuss?"
          />
        </div>
        <div className="">
          <label htmlFor="message" className="block">
            Your message
          </label>
          <textarea
            className="block w-full bg-slate-300 placeholder:text-gray-800 focus:outline-cyan-600"
            name="message"
            rows={10}
            defaultValue={message}
            onBlur={handleContact}
            placeholder="Enter message here..."
          />
        </div>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button type="submit" className="">
          Send Message
        </button>
      </form>
    </div>
  );
}
