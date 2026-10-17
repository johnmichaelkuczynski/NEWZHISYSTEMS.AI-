import { useEffect, useState } from "react";
import { answerResumeQuestion, organizations, resumes, type Organization } from "@shared/resume-content";

function readOrganization(): Organization {
  if (typeof window === "undefined") return "general";
  const value = new URLSearchParams(window.location.search).get("for");
  return organizations.find((organization) => organization.value === value)?.value ?? "general";
}

export default function Resume() {
  const [organization, setOrganization] = useState<Organization>(readOrganization);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<ReturnType<typeof answerResumeQuestion> | null>(null);
  const [questionError, setQuestionError] = useState("");
  const audience = organizations.find((option) => option.value === organization)?.label ?? "General";

  useEffect(() => {
    const syncOrganization = () => {
      setOrganization(readOrganization());
      setAnswer(null);
      setQuestionError("");
    };
    window.addEventListener("popstate", syncOrganization);
    return () => window.removeEventListener("popstate", syncOrganization);
  }, []);

  function selectOrganization(value: Organization) {
    const url = new URL(window.location.href);
    url.searchParams.set("for", value);
    window.history.pushState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    setOrganization(value);
    setAnswer(null);
    setQuestionError("");
  }

  return (
    <main className="min-h-[100dvh] bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-medium text-gray-500">Resume</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">John-Michael Kuczynski, PhD</h1>
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
            Showing {audience}.
          </p>
        </div>

        <article aria-label={`${audience} resume`} className="rounded-lg border border-gray-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <section aria-label="Summary" className="mb-7">
            <p className="text-xl font-semibold leading-relaxed">I build AI systems that reason.</p>
            <p className="mt-2 text-base leading-relaxed text-gray-700">
              {resumes[organization].summary}
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
              {resumes[organization].projects.map((project) => (
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
                  <p className="text-gray-700">Private advisory practice producing research reports and analytical writing for executives and professionals.</p>
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

          <section aria-labelledby="resume-questions" className="mt-7 border-t border-gray-200 pt-6">
            <h2 id="resume-questions" className="text-lg font-semibold">Ask about my work</h2>
            <p id="resume-question-help" className="mt-2 text-sm leading-relaxed text-gray-600">
              Answers use indexed resume and site material only.
            </p>
            <form
              className="mt-4"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                const text = question.trim();
                if (!text) {
                  setAnswer(null);
                  setQuestionError("Enter a question about my work.");
                  return;
                }
                setQuestionError("");
                setAnswer(answerResumeQuestion(text));
              }}
            >
              <label htmlFor="resume-question" className="block text-sm font-medium mb-2">Your question</label>
              <textarea
                id="resume-question"
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                  setQuestionError("");
                }}
                maxLength={500}
                rows={3}
                aria-describedby={`resume-question-help${questionError ? " resume-question-error" : ""}`}
                aria-invalid={Boolean(questionError)}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-gray-500">{question.length}/500 characters</span>
                <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                  Ask
                </button>
              </div>
            </form>
            <div aria-live="polite" aria-atomic="true">
              {questionError && <p id="resume-question-error" className="mt-3 text-sm text-red-700">{questionError}</p>}
              {answer && (
                <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 p-4">
                  <p className="whitespace-pre-line break-words text-sm leading-relaxed text-gray-700">{answer.answer}</p>
                  {answer.sources.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold">Sources</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        {answer.sources.map((source, index) => (
                          <li key={`${source.label}-${index}`} className="break-words">
                            {source.url ? (
                              <a href={source.url} target="_blank" rel="noopener noreferrer" className="rounded-sm text-blue-600 underline underline-offset-4 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                                {source.label}<span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            ) : source.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

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
