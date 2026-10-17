import { useEffect, useState } from "react";

const organizations = [
  { value: "law", label: "Law Firm / Litigation Support" },
  { value: "finance", label: "Hedge Fund / Trading Firm" },
  { value: "operations", label: "Corporate Operations" },
  { value: "research", label: "Research Organization / Think Tank" },
  { value: "education", label: "Educational Institution" },
  { value: "general", label: "General" },
] as const;

type Organization = (typeof organizations)[number]["value"];

function readOrganization(): Organization {
  if (typeof window === "undefined") return "general";
  const value = new URLSearchParams(window.location.search).get("for");
  return organizations.find((organization) => organization.value === value)?.value ?? "general";
}

const projects = [
  {
    name: "Forensic Document Verifier",
    url: "https://forensicdocumentverifier.com",
    description: "Document verification",
  },
  {
    name: "Model Transformer",
    url: "https://modeltransformer.ink",
    description: "Alternative formulations of formal models",
  },
  {
    name: "Text Surgeon Plus",
    url: "https://textsurgeonplus.xyz/",
    description: "Text editing and rewriting",
  },
  {
    name: "Predictive Analytics",
    url: "https://babypredictiveanalytics.xyz",
    description: "AI-taught course with tutoring and assessment",
  },
];

export default function Resume() {
  const [organization, setOrganization] = useState<Organization>(readOrganization);

  useEffect(() => {
    const syncOrganization = () => setOrganization(readOrganization());
    window.addEventListener("popstate", syncOrganization);
    return () => window.removeEventListener("popstate", syncOrganization);
  }, []);

  function selectOrganization(value: Organization) {
    const url = new URL(window.location.href);
    url.searchParams.set("for", value);
    window.history.pushState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    setOrganization(value);
  }

  return (
    <main className="min-h-[100dvh] bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-medium text-gray-500">Resume</span>
            <span className="rounded border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
              Tentative draft
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Dr. Kuczynski</h1>
          <p className="mt-2 text-lg font-medium text-blue-700">AI-Architect</p>
        </header>

        <div className="mb-7 rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <label htmlFor="resume-organization" className="block text-sm font-medium mb-2">
            What kind of organization are you?
          </label>
          <select
            id="resume-organization"
            value={organization}
            onChange={(event) => selectOrganization(event.target.value as Organization)}
            aria-describedby="resume-version-notice"
            className="block w-full min-h-11 rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:max-w-md"
          >
            {organizations.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <p id="resume-version-notice" role="status" className="mt-3 text-sm leading-relaxed text-gray-600">
            {organization === "general"
              ? "Showing General."
              : "This tailored draft is not available yet. General is shown below."}
          </p>
        </div>

        <article aria-label="General resume" className="rounded-lg border border-gray-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <section aria-label="Summary" className="mb-7">
            <p className="text-xl font-semibold leading-relaxed">I build AI systems that reason.</p>
            <p className="mt-2 text-base leading-relaxed text-gray-700">
              Using AI-driven development, I design and ship production tools quickly to help organizations put AI to practical use.
            </p>
          </section>

          <section aria-labelledby="resume-zhi" className="border-t border-gray-200 pt-6">
            <h2 id="resume-zhi" className="text-lg font-semibold">Zhi Systems</h2>
            <p className="mt-1 text-sm font-medium text-blue-700">Founder · AI-Architect</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Built and deployed 90+ apps across document analysis, writing, research, finance, and education.
            </p>
            <h3 className="mt-5 text-sm font-semibold text-gray-900">Selected products built</h3>
            <ul className="mt-2 divide-y divide-gray-100">
              {projects.map((project) => (
                <li key={project.url} className="py-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-sm text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    {project.name}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-5 grid grid-cols-1 gap-7 border-t border-gray-200 pt-6 md:grid-cols-[1.5fr_1fr] md:gap-10">
            <section aria-labelledby="resume-experience">
              <h2 id="resume-experience" className="text-lg font-semibold mb-4">Prior experience</h2>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <h3 className="font-medium">Madison Educational Consulting</h3>
                  <p className="text-gray-500">2015–2025</p>
                  <p className="text-gray-700">Ghostwriting and educational consulting</p>
                </li>
                <li>
                  <h3 className="font-medium">Bard College</h3>
                  <p className="text-gray-500">2012–2015</p>
                  <p className="text-gray-700">Assistant Professor &amp; Research Professor</p>
                </li>
                <li>
                  <h3 className="font-medium">VCU</h3>
                  <p className="text-gray-500">2007–2012</p>
                  <p className="text-gray-700">Assistant Professor of Philosophy</p>
                </li>
              </ul>
            </section>
            <section aria-labelledby="resume-education">
              <h2 id="resume-education" className="text-lg font-semibold mb-4">Education</h2>
              <ul className="space-y-4 text-sm leading-relaxed text-gray-700">
                <li><span className="font-medium text-gray-900">PhD</span> · UCSB</li>
                <li>
                  <span className="font-medium text-gray-900">BA</span> · UCLA
                  <p className="italic">summa cum laude</p>
                </li>
              </ul>
            </section>
          </div>

          <footer className="mt-7 flex flex-col items-start gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
            <a href="mailto:jmkuczynski@yahoo.com" className="break-all rounded-sm text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
              jmkuczynski@yahoo.com
            </a>
            <a
              href="mailto:jmkuczynski@yahoo.com"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:w-auto"
            >
              Discuss a project
            </a>
          </footer>
        </article>
      </div>
    </main>
  );
}
