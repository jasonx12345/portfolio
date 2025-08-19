export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 backdrop-blur bg-white/60 dark:bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold">Your Name</a>
          <nav className="flex gap-4 text-sm">
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href="/resume.pdf" className="opacity-80 hover:opacity-100">Resume</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Hey, I’m Your Name</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          I build small, fast, delightful things.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="px-3 py-2 rounded-xl border" href="https://github.com/your">GitHub</a>
          <a className="px-3 py-2 rounded-xl border" href="https://linkedin.com/in/your">LinkedIn</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">{/* cards will go here */}</div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-3">Email: <span className="font-mono">you@example.com</span></p>
      </section>
    </main>
  );
}
