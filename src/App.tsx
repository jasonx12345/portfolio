import { useState } from "react";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;
type Experience = {
  company: string;
  role: string;
  type?: string;
  period: string;
  location?: string;
  remote?: boolean;
  logo?: string;      // e.g. 'logos/ignite.png' (relative to BASE)
  summary?: string;
};

const EXP: Experience[] = [
  {
    company: "Ignite Marketing & Productions LTD.",
    role: "Software Developer and Digital Marketer",
    type: "Internship",
    period: "May 2025 – Present · 4 mos",
    location: "Grande Prairie, Alberta, Canada",
    remote: true,
    logo: "logos/ignite.png",
    summary: "Web Development, UX design, Web Audits, and Search Engine Optimization",
  },
  {
    company: "Atlantis AI",
    role: "AI Backend/Infrastructure Developer",
    type: "Internship",
    period: "Mar 2025 – May 2025 · 3 mos",
    location: "Toronto, Ontario, Canada",
    remote: true,
    logo: "logos/atlantis.jpg",
    summary: "LLM Integration",
  },
  {
    company: "Sentick",
    role: "Front End Software Engineer",
    type: "Internship",
    period: "Jan 2025 – Mar 2025 · 3 mos",
    location: "Vancouver, British Columbia, Canada",
    remote: true,
    logo: "logos/sentick.jpg",
    summary: "Front-end development for an AI consulting firm",
  },
  {
    company: "Ontario Trade Printers Inc. (OTP Design-Works)",
    role: "Software Developer",
    type: "Internship",
    period: "Jun 2024 – Sep 2024 · 4 mos",
    logo: "logos/otp.png",
    summary: "Web development and CRM tools implementation",
  },
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden">

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/50 border-b">
        <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href={BASE} className="font-semibold">Jason</a>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href={`${BASE}resume.pdf`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">Resume</a>
          </nav>
          <button className="md:hidden px-3 py-2 rounded border text-sm" onClick={() => setMenuOpen(v => !v)}>
            Menu
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden mx-auto w-full max-w-screen-lg px-4 sm:px-6 pb-3">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#projects" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Projects</a>
              <a href="#contact"  onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Contact</a>
              <a href={`${BASE}resume.pdf`} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Resume</a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16 text-center">
        <img
          src={`${BASE}me.jpg`}
          alt="Jason Xie"
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-md"
        />
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold flex items-center justify-center gap-2">
          Hey, I’m Jason
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
            aria-hidden="true"
          >👋</motion.span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I study Computer Science at McMaster University and love building things that help people.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a className="px-3 py-2 rounded-xl border" href="https://github.com/jasonx12345">GitHub</a>
          <a className="px-3 py-2 rounded-xl border" href="https://linkedin.com/in/jason-c-xie/">LinkedIn</a>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Experience</h2>

        <ul className="mt-8 divide-y">
          {EXP.map((job) => (
            <li key={job.company + job.period} className="py-5">
              <article className="flex items-start gap-4">
                {/* Logo or fallback */}
                {job.logo ? (
                  <img
                    src={`${BASE}${job.logo}`}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-md object-contain bg-white ring-1 ring-slate-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-md bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">
                    {job.company[0]}
                  </div>
                )}

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold leading-tight">{job.role}</h3>
                  <p className="text-sm text-slate-600">
                    {job.company}
                    {job.type ? <> · {job.type}</> : null}
                  </p>
                  <p className="text-xs text-slate-500">
                    {job.period}
                    {job.location ? <> · {job.location}</> : null}
                    {job.remote ? " · Remote" : null}
                  </p>

                  {job.summary ? (
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      {job.summary}
                    </p>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>




      {/* PROJECTS */}
      <section id="projects" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <article className="w-full max-w-sm p-5 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              A short description of your project goes here.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">React</span>
              <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">TypeScript</span>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
        <p className="mt-3">
          Email: <a className="font-mono underline" href="mailto:jasonxie0827@gmail.com">jasonxie0827@gmail.com</a>
        </p>
      </section>

      <footer className="pb-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Jason Xie
      </footer>
    </main>
  );
}
