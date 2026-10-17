import { useEffect, useState } from "react";
import { answerResumeQuestion, organizations, resumes, projectsFor, coursesFor, type Organization, type ResumeProject } from "./resume-content";
import { thumbnailNotes } from "./resume-thumbnails";
import "./resume.css";

const thumbnails = import.meta.glob<string>("../assets/resume/*.jpg", { eager: true, query: "?url", import: "default" });

function ProjectCard({ project }: { project: ResumeProject }) {
  const [imageFailed, setImageFailed] = useState(false);
  const image = thumbnails[`../assets/resume/${project.id}.jpg`];
  const noir = project.id === "noir";
  return (
    <article className={`resume-card${noir ? " resume-noir" : ""}`}>
      <div className="resume-preview">
        {image && !imageFailed ? (
          <img src={image} alt={`${project.name} — screenshot of the live app`} width={1280} height={800} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="resume-preview-fallback">
            <strong>Live preview unavailable</strong>
            <span>{imageFailed ? "The saved screenshot could not be loaded." : thumbnailNotes[project.id] ?? "A screenshot could not be captured."} The live-site link is still available below.</span>
          </div>
        )}
      </div>
      <div className="resume-card-body">
        <span className="resume-card-label">{noir ? "Something different" : project.id === "genius" ? "Featured in every version" : "Zhi Systems / Deployed app"}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {image && !imageFailed && thumbnailNotes[project.id] && <p className="resume-capture-note">{thumbnailNotes[project.id]}</p>}
        {noir && <p className="resume-sample-note">Live app screenshot{image && !imageFailed ? " shown above" : " unavailable"}. Comic sample page pending — no comic artwork has been supplied.</p>}
        <a className="resume-try" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Try ${project.name} (opens in a new tab)`}>Try it <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

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
    <main className="resume-page">
      <header className="resume-band">
        <div className="resume-shell">
          <div className="resume-eyebrow">
            <span>Resume / Zhi Systems</span>
          </div>
          <h1>John-Michael Kuczynski, PhD</h1>
          <p className="resume-role">AI-Architect</p>
          <nav className="resume-scale" aria-label="Portfolio scale">
            <a href="#resume-apps"><strong>47</strong>{" "}<span>deployed AI apps <span aria-hidden="true" className="!inline">↓</span></span></a>
            <a href="#resume-courses"><strong>80+</strong>{" "}<span>AI-taught certification courses <span aria-hidden="true" className="!inline">↓</span></span></a>
            <a href="/living-books"><strong>36</strong>{" "}<span>interactive living books <span aria-hidden="true" className="!inline">↗</span></span></a>
          </nav>
        </div>
      </header>

      <div className="resume-shell">
        <div className="resume-selector">
          <div>
          <label htmlFor="resume-organization">
            What kind of organization are you?
          </label>
          <p id="resume-version-notice" role="status">Showing {audience}.</p>
          </div>
          <select
            id="resume-organization"
            value={organization}
            onChange={(event) => selectOrganization(event.target.value as Organization)}
            aria-describedby="resume-version-notice"
          >
            {organizations.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <article aria-label={`${audience} resume`}>
          <section aria-label="Summary" className="resume-summary">
            <h2>I build AI systems that reason.</h2>
            <p>
              {resumes[organization].summary}
            </p>
          </section>

          <section id="resume-apps" aria-labelledby="resume-zhi" className="resume-section">
            <div className="resume-section-heading">
              <div>
                <h2 id="resume-zhi">Zhi Systems</h2>
                <p>Founder · AI-Architect · Selected products built</p>
              </div>
              <a href="/utilities">Explore all apps <span aria-hidden="true">↗</span></a>
            </div>
            <div className="resume-grid">
              {projectsFor(organization).map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>

          <section id="resume-courses" aria-labelledby="resume-courses-heading" className="resume-section resume-courses">
            <div className="resume-section-heading">
              <div>
                <h2 id="resume-courses-heading">AI-taught courses</h2>
                <p>Complete certification courses where AI teaches, tutors, and assesses the student.</p>
              </div>
              <a href="/courses">See full catalog <span aria-hidden="true">↗</span></a>
            </div>
            <div className="resume-course-grid">
              {coursesFor(organization).map(course => (
                <a key={course.id} className="resume-course" href={course.url} target="_blank" rel="noopener noreferrer">
                  <span><small>AI-taught certification</small><strong>{course.name}</strong></span>
                  <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </section>

          <div className="resume-bottom">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.5fr_1fr] md:gap-10">
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
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) {
                    event.preventDefault();
                    if (!event.repeat) event.currentTarget.form?.requestSubmit();
                  }
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
          </div>
        </article>
      </div>
    </main>
  );
}
