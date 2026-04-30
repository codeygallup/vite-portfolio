import Resume from "../assets/Resume.pdf";
import { useContactForm } from "../utils/useContactForm";

export default function Contact() {
  const {
    form,
    errorMessage,
    handleContact,
    sendEmail,
    email,
    subject,
    message,
    sent,
    loading,
  } = useContactForm();

  const inputClass =
    "peer block w-full rounded bg-slate-900/40 px-3 py-3 text-slate-100 placeholder-transparent ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

  const labelClass =
    "absolute -top-2.5 left-3 bg-slate-800 px-1 text-xs uppercase tracking-widest text-cyan-200 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:-top-2.5 peer-focus:bg-slate-800 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-cyan-200";

  return (
    <div className="mx-5 flex flex-col items-center text-center text-lg md:mt-10 md:grid md:grid-cols-5 md:gap-x-28 md:text-xl">
      {/* Left: info */}
      <div className="col-span-2 md:ml-2 md:pl-10">
        <div className="mb-10">
          <h1>Contact Me</h1>
          <p className="mb-4 text-slate-300">
            Interested in software engineering roles — also always down to
            connect on fun projects or collabs. Copy my email below or use the
            form. GitHub and LinkedIn are top right.
          </p>
          <span>Email:</span>
          <abbr
            className="ml-2 cursor-copy no-underline transition-colors hover:text-cyan-500"
            onClick={() =>
              navigator.clipboard.writeText("codey.gallup@gmail.com")
            }
            title="Click to copy"
          >
            codey.gallup@gmail.com
          </abbr>
          <address className="mt-1 not-italic text-slate-400">
            Colorado Springs, CO
          </address>
        </div>

        <div className="mb-10">
          <h1>Resume</h1>
          <p>
            View on{" "}
            <a
              href="https://my.indeed.com/p/codeyg-jl644zf"
              className="text-slate-200 no-underline transition-colors hover:text-cyan-500"
              target="_blank"
              rel="noreferrer"
            >
              Indeed
            </a>{" "}
            or{" "}
            <a
              href={Resume}
              download="Codeys Resume"
              className="text-slate-200 no-underline transition-colors hover:text-cyan-500"
            >
              download a copy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right: form or success */}
      {sent ? (
        <div className="flex min-h-64 w-full flex-col items-center justify-center gap-4 rounded bg-slate-900/40 p-10 ring-1 ring-slate-700 backdrop-blur-sm md:col-span-3">
          <svg
            className="h-12 w-12 text-cyan-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p className="text-2xl font-medium text-slate-100">Message sent!</p>
          <p className="text-slate-400">I'll be in touch.</p>
        </div>
      ) : (
        <form
          className="mb-6 w-full space-y-5 rounded bg-slate-900/40 p-6 ring-1 ring-slate-700 backdrop-blur-sm md:col-span-3 md:space-y-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="relative">
            <input
              className={inputClass}
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleContact}
              placeholder="Email"
            />
            <label className={labelClass}>Email</label>
          </div>

          <div className="relative">
            <input
              className={inputClass}
              type="text"
              name="subject"
              defaultValue={subject}
              onBlur={handleContact}
              placeholder="Subject"
            />
            <label className={labelClass}>Subject</label>
          </div>

          <div className="relative">
            <textarea
              className={inputClass}
              name="message"
              rows={8}
              defaultValue={message}
              onBlur={handleContact}
              placeholder="Message"
            />
            <label className={labelClass}>Message</label>
          </div>

          {errorMessage && (
            <p className="border-l-2 border-red-400 pl-3 text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded px-4 py-2 text-sm font-medium uppercase tracking-widest text-cyan-500 ring-1 ring-cyan-500 transition-all hover:bg-cyan-500/10 hover:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
