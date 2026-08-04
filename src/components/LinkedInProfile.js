import React from "react";

const profileImage = process.env.PUBLIC_URL + "/assets/profile.jpg";
const backgroundImage = process.env.PUBLIC_URL + "/assets/background.jpg";

const coreSkills = [
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Zend",
  "Node.js",
  "Express.js",
  "React.js",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Elasticsearch",
  "AI/ML",
  "IoT",
  "Blockchain",
  "Web Security",
];

const projects = [
  {
    title: "DQ200 TCU Test Bench",
    tags: ["Python", "IoT", "CAN-Bus", "Diagnostics"],
    description:
      "Automotive diagnostics and validation test-bench for DQ200 transmission control unit workflows, including automated data capture, test execution and reporting.",
  },
  {
    title: "Betfair Automation Bot",
    tags: ["Python", "Automation", "Realtime Data", "Risk Flows"],
    description:
      "Automation platform for Betfair market analysis and execution workflows with realtime data processing, backend logic and maintainable scripts.",
  },
  {
    title: "Options Derivatives / OTM Call Options Automation",
    tags: ["Python", "PHP", "JavaScript", "Web Scraping"],
    description:
      "Trading and derivatives automation scripts for OTM call-option workflows, market-data processing, scraping and fast client-request modifications.",
  },
  {
    title: "MoneyBox FinTech Support & Zend Enhancements",
    tags: ["PHP", "Zend", "MySQL", "FinTech"],
    description:
      "FinTech support and enhancement work on legacy Zend architecture, including PHP/MySQL modules, bug fixes and production workflow improvements.",
  },
  {
    title: "AI-Powered Data Analysis Web App",
    tags: ["AI/ML", "PHP", "Analytics", "Full Stack"],
    description:
      "Full-stack AI-powered analytics application with reporting screens, data-processing workflows and user-facing analysis features.",
  },
  {
    title: "Django Website Deployment & Multi-Site Setup",
    tags: ["Django", "AWS", "HTML", "Git"],
    description:
      "Deployment of two ready Django websites and setup of a third copy/environment with AWS configuration, Git workflow and production-readiness checks.",
  },
  {
    title: "Spring Boot WebFlux & OAuth Integration",
    tags: ["Java", "Spring Boot", "Spring Security", "OAuth"],
    description:
      "Backend modernization work involving Spring Boot, WebFlux patterns, authentication flows, Spring Security and Java service improvements.",
  },
  {
    title: "Elasticsearch Plugin Development & Setup",
    tags: ["Java", "Elasticsearch", "Search", "Troubleshooting"],
    description:
      "Elasticsearch plugin and environment setup with indexing/search validation, Java-based troubleshooting and integration stabilization.",
  },
  {
    title: "Full-Stack PWA Platform",
    tags: ["Spring Boot", "Vue.js", "AWS S3", "AWS RDS"],
    description:
      "Full-stack PWA platform contributions across Java backend, Vue.js frontend, mobile-friendly workflows, Amazon S3/RDS and code-quality improvements.",
  },
  {
    title: "Solana / Jito Blockchain Research & Integration",
    tags: ["Blockchain", "Solana", "Web3", "Smart Contracts"],
    description:
      "Blockchain ecosystem research and integration work around Solana/Jito concepts, repository structure, validator workflows and Web3 development context.",
  },
  {
    title: "Software Security & Penetration Testing Research",
    tags: ["Web Security", "Testing", "Research", "Secure SDLC"],
    description:
      "Security research and testing support with focus on web security, secure development practices, software testing and quality delivery.",
  },
  {
    title: "Enterprise UI Bug Fixing & Angular Improvements",
    tags: ["AngularJS", "JavaScript", "HTML", "CSS"],
    description:
      "Frontend maintenance and UI bug-fixing work for complex enterprise applications using AngularJS, JavaScript, HTML and CSS.",
  },
];

const experience = [
  {
    role: "Senior Software Developer",
    company: "AJSK Software Services",
    period: "Jun 2026 - Present",
    summary:
      "Leading full-stack development of scalable web, SaaS, FinTech, AI/ML, IoT and automation solutions for global clients.",
  },
  {
    role: "Software Engineer",
    company: "AJSK Software Services",
    period: "Feb 2021 - May 2026",
    summary:
      "Built and maintained full-stack platforms, backend services, dashboards, integrations, scheduled jobs and reporting workflows.",
  },
  {
    role: "Software Engineer",
    company: "VIRIM",
    period: "Jun 2020 - Feb 2021",
    summary:
      "Developed secure online voting workflows using Spring Boot, PostgreSQL and Spring Security.",
  },
];

const LinkedInProfile = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <img
          src={backgroundImage}
          alt="Abstract software development workspace"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/70 to-blue-950/55" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:py-24">
          <img
            src={profileImage}
            alt="Sourav Vastri"
            className="h-32 w-32 rounded-3xl border-4 border-white/20 object-cover shadow-2xl md:h-40 md:w-40"
          />

          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="h-px w-12 bg-blue-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
                Senior Software Developer
              </p>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Sourav Vastri
            </h1>
            <p className="mt-4 text-xl font-semibold text-blue-100 md:text-2xl">
              Full-Stack & Backend Engineer
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              I build production-ready web, SaaS, FinTech, AI/ML, IoT,
              automation and cloud-based applications using Java, Spring Boot,
              Python, Django, PHP, Node.js, React, AWS and modern backend
              architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/souravvastri"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
              >
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/sourav-vastri-5b23bb34b"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn Profile
              </a>
              <span className="rounded-full border border-blue-300/40 px-5 py-3 text-sm font-semibold text-blue-100">
                Available for Software Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-bold text-white">6+ Years</p>
          <p className="mt-2 text-slate-300">Software development experience</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-bold text-white">12+ Projects</p>
          <p className="mt-2 text-slate-300">FinTech, AI/ML, IoT and automation work</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-bold text-white">Full Lifecycle</p>
          <p className="mt-2 text-slate-300">Architecture, development, deployment and support</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Engineering practical, scalable products</h2>
          <p className="mt-5 leading-8 text-slate-300">
            I work across requirements, architecture, APIs, integrations,
            databases, debugging and production support. My focus is converting
            complex business problems into clean, reliable and maintainable
            software that teams can keep improving.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Technologies
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Core stack</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-50"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Selected work</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.08]"
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Professional background</h2>
        <div className="mt-8 space-y-4">
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.period}`}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-blue-200">{item.company}</p>
                </div>
                <p className="text-sm font-semibold text-slate-400">{item.period}</p>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Sourav Vastri. Built with React and Tailwind CSS.
      </footer>
    </main>
  );
};

export default LinkedInProfile;
