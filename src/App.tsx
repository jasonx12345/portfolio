import { useState } from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react";

const BASE = import.meta.env.BASE_URL;

type Experience = {
  company: string;
  role: string;
  type?: string;
  period: string;
  location?: string;
  remote?: boolean;
  logo?: string;
  summary?: string;
};
type Project = {
  title: string;
  description: string;
  tech: string[];
  img?: string;
  imgBase?: string;
  github?: string;
  youtube?: string;
  site?: string;
};

/* Icons */
function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56v-2.18c-3.26.71-3.95-1.4-3.95-1.4-.53-1.36-1.3-1.73-1.3-1.73-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.2 1.8 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.76.41-1.26.74-1.55-2.6-.3-5.33-1.3-5.33-5.79 0-1.28.46-2.33 1.21-3.15-.12-.3-.53-1.53.12-3.18 0 0 .99-.32 3.25 1.2a11.3 11.3 0 0 1 5.92 0c2.26-1.52 3.25-1.2 3.25-1.2.65 1.65.24 2.88.12 3.18.75.82 1.21 1.87 1.21 3.15 0 4.5-2.73 5.48-5.34 5.78.43.38.8 1.12.8 2.26v3.35c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
}
function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2s-.23-1.66-.95-2.39C21.6 3 20.6 3 20.15 2.94 16.83 2.7 12 2.7 12 2.7s-4.83 0-8.15.24C3.4 3 2.4 3 1.45 3.8.73 4.54.5 6.2.5 6.2S.27 8.1.27 9.98v1.99c0 1.88.23 3.78.23 3.78s.23 1.66.95 2.39c.95.8 2.2.78 2.76.86 2 .2 7.79.26 7.79.26s4.84-.01 8.16-.26c.45-.06 1.45-.06 2.4-.86.72-.73.95-2.39.95-2.39s.23-1.9.23-3.78V9.98c0-1.88-.23-3.78-.23-3.78ZM9.75 13.86V7.97l6.02 2.95-6.02 2.94Z"/>
    </svg>
  );
}
function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <path d="M3 12h18" strokeWidth="1.5" />
      <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeWidth="1.5" />
    </svg>
  );
}

/* Data — reordered as requested */
const PROJECTS: Project[] = [
  {
    title: "ResourceHub",
    img: "logos/ResourceHub.jpg", // ensure exact filename case on disk
    description:
      "Share and discover study resources by course, allowing students to post materials and look up anything for a class by course code.",
    tech: [
      "Express (TypeScript)",
      "Prisma ORM",
      "PostgreSQL (Supabase)",
      "JWT + bcrypt",
      "REST API",
      "Docker",
      "GitHub Actions CI",
      "Render (hosting)",
    ],
    site: "https://resourcehub-kmq3.onrender.com/",
    github: "https://github.com/jasonx12345/resourcehub",
    youtube: "https://www.youtube.com/watch?v=g1RPihAumJk",
  },
  {
    title: "EatSafe Toronto",
    img: "logos/eat-safe.jpg",
    description:
      "Search Toronto restaurant inspections by name or address, see the latest result with one-click history, and check whether places meet your safety standards.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PapaParse",
      "Python (pandas ETL)",
      "SQLite (dataset)",
      "GitHub Pages",
    ],
    site: "https://jasonx12345.github.io/eat-safe/",
    github: "https://github.com/jasonx12345/eat-safe",
    youtube: "https://www.youtube.com/watch?v=ynfUIV7Yps8",
  },
  {
    title: "Remind Bot (Chrome Extension)",
    img: "logos/remind-bot.png",
    description:
      "Minimal Chrome extension for quick reminder notifications, add a title and future date/time, then mark Done or Delete.",
    tech: [
      "Chrome Extension APIs",
      "Vanilla JS",
      "HTML5",
      "CSS3",
      "Manifest V3",
      "Alarms API",
      "Storage API",
    ],
    site: "https://chromewebstore.google.com/detail/remind-bot/njohmbmmihjedeobjhcdoidngllmlege",
    github: "https://github.com/jasonx12345/Reminder-Chrome-Extension",
    youtube: "https://www.linkedin.com/feed/update/urn:li:activity:7366566280759320578/",
  },
  {
    title: "TypeWell",
    img: "logos/typewell.png",
    description:
      "Highlight text on any page and rewrite it in one click using AI integration, with a Professional tone that’s formal, clear, and business-ready.",
    tech: [
      "Vanilla JS",
      "HTML5",
      "CSS3",
      "Hugging Face Inference API",
      "gpt-oss-20b",
      "Fetch API",
      "JSON",
    ],
    github: "https://github.com/jasonx12345/Type-Well",
    youtube: "https://www.youtube.com/shorts/Z-Or5uMxxMc",
  },
];

const EXP: Experience[] = [
  {
    company: "Ignite Marketing & Productions LTD.",
    role: "Software Developer and Digital Marketer",
    type: "Internship",
    period: "May 2025 – June 2025 · 2 mos",
    location: "Grande Prairie, Alberta, Canada",
    remote: true,
    logo: "logos/ignite.png",
    summary:
      "Web Development, UX design, Web Audits, and Search Engine Optimization",
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
    period: "Feb 2025 – April 2025 · 3 mos",
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

/* Decor */
function Decor() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(180deg,#FFC6A8 0%,#FF8DA1 50%,#C8B6FF 100%)",
        }}
      />
      <style>{`
        .decor-root{position:fixed;inset:0;z-index:5;pointer-events:none;overflow:hidden;}
        .emoji-cloud{
          position:absolute; left:-40vw; line-height:1;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,.12));
          animation-name: cloud-drift, cloud-bob;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }
        @keyframes cloud-drift{0%{left:-40vw}100%{left:120vw}}
        @keyframes cloud-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .emoji-palm{
          position:absolute; bottom:-6px; line-height:1;
          filter: drop-shadow(0 12px 24px rgba(0,0,0,.18));
          transform-origin:50% 100%;
          animation-name: palm-sway;
          animation-duration:5s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        @keyframes palm-sway{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
      `}</style>

      <div className="decor-root" aria-hidden>
        <div
          className="emoji-cloud"
          style={{
            top: "12%",
            fontSize: "clamp(44px, 9vw, 110px)",
            opacity: 0.95,
            animationDuration: "75s, 12s",
          }}
        >
          ☁️
        </div>
        <div
          className="emoji-cloud"
          style={{
            top: "38%",
            fontSize: "clamp(36px, 8vw, 96px)",
            opacity: 0.85,
            animationDuration: "95s, 13s",
            animationDelay: "0s, 2s",
          }}
        >
          ☁️
        </div>
        <div
          className="emoji-palm"
          style={{
            left: "max(-8px, 2vw)",
            fontSize: "clamp(64px, 14vw, 180px)",
            animationDuration: "4.5s",
          }}
        >
          🌴
        </div>
        <div
          className="emoji-palm"
          style={{
            right: "max(-8px, 2vw)",
            fontSize: "clamp(64px, 14vw, 180px)",
            animationDuration: "6s",
          }}
        >
          🌴
        </div>
      </div>
    </>
  );
}

/* App */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Decor />

      <main className="relative z-10 min-h-screen bg-transparent text-[#2d2a42] dark:text-slate-100 overflow-x-hidden">
        {/* NAV */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-950/50 border-b">
          <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-3 flex items-center justify-between">
            <nav className="hidden md:flex gap-4 text-sm">
              <a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
              <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
              <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
              <a
                href={`${BASE}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >Resume</a>
            </nav>
            <button
              className="md:hidden px-3 py-2 rounded border text-sm"
              onClick={() => setMenuOpen((v) => !v)}
            >Menu</button>
          </div>
          {menuOpen && (
            <nav className="md:hidden mx-auto w-full max-w-screen-lg px-4 sm:px-6 pb-3">
              <div className="flex flex-col gap-2 text-sm">
                <a href="#experience" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Experience</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">Contact</a>
                <a
                  href={`${BASE}resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                >Resume</a>
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
          <h1
            className="mt-6 text-4xl sm:text-5xl tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,.25)] flex items-center justify-center gap-2"
            style={{ fontFamily: '"Bungee", system-ui, -apple-system, Segoe UI' }}
          >
            Hey, I’m Jason
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
              aria-hidden="true"
            >👋</motion.span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            I study Computer Science at McMaster University and love building things that help people.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a className="px-3 py-2 rounded-xl border bg-white/70 backdrop-blur hover:bg-white/90" href="https://github.com/jasonx12345" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="px-3 py-2 rounded-xl border bg-white/70 backdrop-blur hover:bg-white/90" href="https://linkedin.com/in/jason-c-xie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16">
          <h2
            className="text-2xl sm:text-3xl text-white drop-shadow-[0_4px_14px_rgba(0,0,0,.22)] text-center"
            style={{ fontFamily: '"Bungee", system-ui, -apple-system, Segoe UI' }}
          >Experience</h2>
          <ul className="mt-8 divide-y divide-white/20">
            {EXP.map((job) => (
              <li key={job.company + job.period} className="py-5">
                <article className="flex items-start gap-4">
                  {job.logo ? (
                    <img
                      src={`${BASE}${job.logo}`}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-md object-contain bg-white ring-1 ring-white/40"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-md bg-white/70 flex items-center justify-center text-slate-700 font-semibold">
                      {job.company[0]}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold leading-tight text-white">{job.role}</h3>
                    <p className="text-sm text-white/90">
                      {job.company}{job.type ? <> · {job.type}</> : null}
                    </p>
                    <p className="text-xs text-white/80">
                      {job.period}{job.location ? <> · {job.location}</> : null}{job.remote ? " · Remote" : null}
                    </p>
                    {job.summary ? <p className="mt-2 text-sm text-white/90">{job.summary}</p> : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECTS — list style like Experience */}
        <section id="projects" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16">
          <h2
            className="text-2xl sm:text-3xl text-white drop-shadow-[0_4px_14px_rgba(0,0,0,.22)] text-center"
            style={{ fontFamily: '"Bungee", system-ui, -apple-system, Segoe UI' }}
          >Projects</h2>

          <ul className="mt-8 divide-y divide-white/20">
            {PROJECTS.map((p) => (
              <li key={p.title} className="py-5">
                <article className="flex items-start gap-4">
                  {/* small logo/thumbnail */}
                  {p.img ? (
                    <img
                      src={`${BASE}${p.img}`}
                      alt={`${p.title} logo`}
                      className="w-12 h-12 rounded-md object-contain bg-white ring-1 ring-white/40"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-md bg-white/70 flex items-center justify-center text-slate-700 font-semibold">
                      {p.title[0]}
                    </div>
                  )}

                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold leading-tight text-white">
                      {p.site ? (
                        <a href={p.site} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>

                    <p className="text-sm text-white/90">{p.description}</p>

                    {/* tech chips */}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/70 text-slate-800 ring-1 ring-white/40">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* links row */}
                    <div className="mt-3 flex items-center gap-3">
                      {p.site && (
                        <a
                          href={p.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.title} live site`}
                          title="Open live site"
                          className="p-1 rounded text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          <IconGlobe className="w-5 h-5" />
                          <span className="sr-only">Live</span>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repo for ${p.title}`}
                          title="View code on GitHub"
                          className="p-1 rounded text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          <IconGitHub className="w-5 h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {p.youtube && (
                        <a
                          href={p.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`YouTube demo for ${p.title}`}
                          title="Watch demo"
                          className="p-1 rounded text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          <IconYouTube className="w-5 h-5" />
                          <span className="sr-only">YouTube</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 py-16 text-center">
          <h2
            className="text-2xl sm:text-3xl text-white drop-shadow-[0_4px_14px_rgba(0,0,0,.22)]"
            style={{ fontFamily: '"Bungee", system-ui, -apple-system, Segoe UI' }}
          >Contact</h2>
          <p className="mt-3 text-white/90">
            Email:{" "}
            <a className="font-mono underline" href="mailto:jasonxie0827@gmail.com">
              jasonxie0827@gmail.com
            </a>
          </p>
        </section>

        <footer className="pb-10 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Jason Xie ( Made with React, TypeScript, and Tailwind CSS )
        </footer>
      </main>
    </>
  );
}
