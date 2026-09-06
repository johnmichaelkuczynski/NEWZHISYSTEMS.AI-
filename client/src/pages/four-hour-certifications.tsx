import { useState } from "react";

const cryptographySections = [
  {
    emoji: "🔐",
    title: "What It Is",
    body: `Cryptography: Secrets, Locks, and Digital Trust is a rigorous but accessible four-hour web course taught, tutored, drilled, and graded by AI. It turns codes, ciphers, and digital trust into a structured learning experience with concrete cases, adaptive practice, grounded tutoring, and built-in academic-integrity screening.

The course explains how machines keep secrets, the idea that made the internet possible, and why real-world cryptographic systems usually fail at the human and implementation layers rather than in the mathematics itself.`,
  },
  {
    emoji: "🧭",
    title: "The Four-Hour Learning Journey",
    body: `**Hour 1 — Every Code Ever Broken Was Broken Because People Repeat Themselves** -- Letter counts, stock phrases, weather reports, and the habits that made systems such as Enigma vulnerable. The hour also distinguishes decipherment from cryptanalysis through the recovery of Linear B.

**Hour 2 — Perfect Secrecy Exists, Is Provable, and Is Worthless** -- Why an unbreakable cipher went largely unused, and why practical security is priced rather than guaranteed.

**Hour 3 — Two Strangers Can Agree on a Secret While Everyone Listens** -- The central insight behind public-key cryptography and secure communication over the internet.

**Hour 4 — Nobody Breaks the Math; Things Fall Apart at the Seams** -- Keys, people, weak randomness, leaky clocks, sloppy code, and governments: where real-world failures occur.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Three Lecture Depths** -- Every lecture is available at Short, Medium, or Long depth while preserving the same examples and learning objectives.

**Grounded AI Tutor** -- The section-scoped tutor streams answers grounded in the exact lecture passage on screen.

**Adaptive Practice** -- Generated scenario problems adjust difficulty according to recent answers and preserve difficulty across the session.

**Reasoned Application** -- Coursework combines multiple-choice questions with concise freeform responses that apply cryptographic ideas to concrete cases rather than merely reciting definitions.

**Four Graded Checkpoints** -- Two homework sets, a timed course test, and a cumulative final provide immediate percentage grades and feedback.

**Reasoning Primers and Diagnostics** -- Ungraded cryptography and general-reasoning instruments are available across multiple formats, lengths, and course phases.

**Academic Integrity** -- Every submission is checked by static text detection and diachronic keystroke-pattern analysis.`,
  },
  {
    emoji: "📦",
    title: "What Is Included",
    body: `A four-hour intensive organized around four core topics; free PDF and TXT course readers with no sign-in; exact answer persistence before grading; live diagnostics that verify generated, sent, persisted, and grading evidence; analytics for performance, mastery, activity, and weak areas; and a built-in product walkthrough video.`,
  },
  {
    emoji: "👥",
    title: "Designed For",
    body: `**Researchers and Professionals** -- A foundational but substantial introduction to cryptography compressed into a focused four-hour experience.

**Product and Engineering Teams** -- A shared language for codes, ciphers, digital trust, and the failure modes surrounding secure systems.

**Instructors and Curriculum Designers** -- A working example of AI-taught and AI-graded coursework with integrity controls.

**Academic-Integrity Researchers** -- A live demonstration of layered authorship screening in an educational product.`,
  },
  {
    emoji: "⚙️",
    title: "Under the Hood",
    body: `The course uses an OpenAPI contract as the source of truth, with React Query hooks and Zod validators generated from the same contract. Server-Sent Events deliver section-scoped tutor responses token by token.

Its adaptive-practice engine preserves and adjusts per-session difficulty. GPTZero-backed text detection is blended with structural signals, while keystroke analysis evaluates paste-and-rewrite behavior and sustained input patterns.

Operator diagnostics verify the database, course seed, model completion, JSON mode, detection, practice, grading, analytics, and answer-persistence evidence. A content marker detects subject changes and transactionally replaces stale curriculum.`,
  },
];

const evolutionaryPsychologySections = [
  {
    emoji: "🔥",
    title: "What It Is",
    body: `Four Hour Evolutionary Psychology is a focused, fascinating 4–6 hour experience exploring why humans compete, cooperate, fall in love, protect family, and pursue status.

It provides a practical framework for investigating human behavior without reducing people to simple instincts or memorizing endless terminology. Learners build explanations, test predictions, compare alternatives, and ask what the evidence actually proves.`,
  },
  {
    emoji: "🚀",
    title: "Eight Areas of Human Behavior",
    body: `**Natural Selection** -- How evolutionary pressures can shape behavioral tendencies over time.

**Mating Strategies** -- Why attraction, competition, preferences, and relationship decisions vary.

**Parenting and Families** -- How investment, conflict, relatedness, and environment influence family behavior.

**Cooperation** -- How trust, reciprocity, reputation, and punishment can sustain cooperation.

**Aggression and Warfare** -- How threats, incentives, coalitions, and competition can contribute to conflict.

**Status and Prestige** -- Why people pursue influence, recognition, dominance, and social position.

**Evolutionary Cognition** -- How learning, attention, memory, emotion, and judgment can be investigated.

**Evidence and Inference** -- How to distinguish a testable explanation from a convincing-sounding story.`,
  },
  {
    emoji: "💡",
    title: "An Active Learning Experience",
    body: `**Choose Your Learning Depth** -- Move quickly with Short lessons, explore the essentials at Medium depth, or go deeper with Long lessons.

**Focused Lessons** -- Build a strong foundation without committing to a semester-long program.

**Lesson-Grounded AI Tutor** -- Get clarification and help connected to the material currently being studied.

**Realistic Scenarios** -- Apply principles through fresh behavioral problems that require reasoning rather than one-word recall.

**Adaptive Practice** -- Strengthen understanding through practice that responds to recent performance.

**Immediate Feedback** -- Receive percentage grades and written guidance while the reasoning process is still fresh.

**Progress Tracking** -- Identify strong areas, revisit weak areas, and continue toward completion.`,
  },
  {
    emoji: "🏅",
    title: "Earn a Level 1 Certificate",
    body: `Complete all required coursework and achieve a passing overall result to earn a personalized, downloadable ZHI Systems Evolutionary Psychology Level 1 certificate.

The credential provides a clear record of successful work in evolutionary principles, behavioral reasoning, and evidence evaluation.`,
  },
  {
    emoji: "🎓",
    title: "Who It Is For",
    body: `**Students** -- Build a serious foundation before or alongside formal study.

**Educators** -- Explore an engaging model for focused, scenario-based instruction.

**Researchers Entering the Field** -- Develop a practical framework for hypotheses, predictions, and evidence.

**Professionals** -- Gain new ways to think about incentives, decisions, groups, and behavior.

**Psychology Enthusiasts and Independent Learners** -- Go beyond popular summaries and complete a substantial course on a flexible schedule. No specialized background is required.`,
  },
  {
    emoji: "🌟",
    title: "What Will Change",
    body: `Learners will be better prepared to recognize the difference between an observation and an explanation; translate evolutionary ideas into testable predictions; and compare evolutionary accounts with cultural, developmental, and situational alternatives.

The course also builds the habit of avoiding fixed-rule interpretations of probabilistic patterns and asking sharper questions about evidence, incentives, trade-offs, and context.`,
  },
];

const freudSections = [
  {
    emoji: "🎭",
    title: "What It Is",
    body: `Basic Tenets of Psychoanalysis is a rigorous but accessible introduction to the ideas that transformed our understanding of motivation, conflict, dreams, symptoms, relationships, art, and culture.

It moves beyond slogans and simplified summaries. Learners build a coherent foundation, apply ideas to recognizable human situations, and consider both psychoanalysis's lasting influence and the serious debates surrounding it. No previous training is required.`,
  },
  {
    emoji: "🎉",
    title: "The 4–6 Hour Learning Journey",
    body: `**Part 1 — The Hidden Mind** -- Discover unconscious mental life, psychic conflict, repression, wishes, drives, and the competing demands that shape thought and action.

**Part 2 — Symptoms, Dreams, and Everyday Life** -- Explore defense, compromise formation, dreams, slips, errors, anxiety, and the indirect ways conflict can appear.

**Part 3 — The Analytic Encounter** -- Understand free association, resistance, transference, countertransference, interpretation, insight, and working through.

**Part 4 — Culture, Criticism, and the Modern Mind** -- Follow psychoanalysis beyond the consulting room through culture, later schools of thought, major criticisms, evidence, and contemporary mind sciences.`,
  },
  {
    emoji: "✨",
    title: "Learning and Assessment",
    body: `**Three Lecture Depths** -- Choose a concise, standard, or extended treatment as your time and curiosity change.

**Guided Learning Support** -- Ask questions and receive help connected to the material being studied.

**Scenario-Based Practice** -- Apply ideas to concrete situations instead of merely memorizing definitions.

**Assignments and Feedback** -- Test understanding and receive immediate guidance on the work.

**Progress Review** -- See where understanding is strong and where another look may help.

**Downloadable Readings** -- Continue studying away from the screen in convenient document formats.`,
  },
  {
    emoji: "🌈",
    title: "Thirty Topics, One Coherent Foundation",
    body: `**Mind and Conflict** -- The unconscious, psychic conflict, repression, drives, wishes, id, ego, superego, defense, and anxiety.

**Meaning and Interpretation** -- Symptoms, dreams, dream work, slips and errors, free association, resistance, interpretation, and insight.

**Relationship and Experience** -- Transference, countertransference, narcissism, object relations, mourning, identification, ambivalence, and repetition.

**History and Debate** -- Culture, art, religion, civilization, post-Freudian developments, evidence, criticism, and modern mind sciences.`,
  },
  {
    emoji: "👋",
    title: "Who It Is For",
    body: `**Independent Learners** -- People seeking a structured introduction to psychoanalysis.

**Writers and Artists** -- Creative thinkers interested in motive, conflict, and interpretation.

**Students and Humanities Scholars** -- Learners preparing for deeper study.

**Helping Professionals** -- Practitioners seeking historical and conceptual context.

**Curious Adults** -- Anyone who wants more than pop-psychology summaries.`,
  },
];

const iqBoosterSections = [
  {
    emoji: "🧠",
    title: "What It Is",
    body: `IQ Booster is a fast-moving, self-paced four-to-six-hour course for people who want to think more clearly, recognize patterns faster, and approach unfamiliar problems with confidence.

Concise instruction, fresh challenges, direct feedback, and focused recommendations keep learners working on the reasoning skills that matter most.`,
  },
  {
    emoji: "⚡",
    title: "Six Reasoning Skills",
    body: `**Spatial Reasoning** -- Rotation, folding, routes, viewpoints, and objects in space.

**Pattern Recognition** -- Sequences, grids, transformations, and hidden rules.

**Logical Reasoning** -- Conditions, conclusions, assumptions, and counterexamples.

**Working Memory** -- Holding, organizing, and updating information accurately.

**Quantitative Reasoning** -- Ratios, rates, percentages, equations, and numerical relationships.

**Verbal Reasoning** -- Inference, exact wording, evidence, and relationships between ideas.`,
  },
  {
    emoji: "⏱️",
    title: "The Four-to-Six-Hour Workout",
    body: `**Focus Fast** -- Ultra-short lessons introduce the mental operation needed without unnecessary material.

**Practice with Fresh Challenges** -- Newly generated reasoning problems prevent memorization of a fixed answer bank.

**Adapt as You Improve** -- Practice responds to performance and moves toward the appropriate difficulty.

**Measure What Matters** -- Homework, assessments, and diagnostics show performance across different reasoning formats.

**Attack the Weak Point** -- Weakness detection and targeted retraining direct attention to the skill that needs it most.`,
  },
  {
    emoji: "🎯",
    title: "What Is Included",
    body: `Ultra-short focus lessons; fresh adaptive practice; visual reasoning challenges; multiple-choice and written-response work; performance insights; skill-specific diagnostics; weakness detection; targeted retraining; and structured coursework and assessments.`,
  },
  {
    emoji: "👥",
    title: "Designed For",
    body: `**Students and Professionals** -- Focused training for sharper problem-solving in study and work.

**Lifelong Learners** -- A compact mental challenge without a specialized background requirement.

**Adults Returning to Structured Learning** -- Direct instruction and adaptive practice that meet the learner at the right level.

**Curious Minds** -- Anyone willing to bring sustained attention and a desire to think more effectively.`,
  },
];

const personalFinanceSections = [
  {
    emoji: "💵",
    title: "What It Is",
    body: `Personal Finance Certification Course is a focused, practical introduction to the financial decisions people face throughout adult life.

In approximately four to six hours, learners build a working foundation in cash flow, budgeting, saving, debt, credit, investing, insurance, taxes, behavioral finance, and long-term planning. The course emphasizes realistic situations, clear calculations, and reasoned decisions -- not rote memorization or one-size-fits-all financial advice.

No previous financial training is required.`,
  },
  {
    emoji: "🧭",
    title: "The 4–6 Hour Learning Journey",
    body: `**1. Foundations of Personal Finance** -- Understand income, expenses, cash flow, compound interest, the time value of money, and practical financial goal-setting.

**2. Budgeting & Saving** -- Create a workable budget, prepare for unexpected expenses, and turn saving into a repeatable habit.

**3. Debt Management** -- Evaluate different kinds of debt, understand the true cost of minimum payments, and compare avalanche and snowball payoff strategies.

**4. Credit & Credit Scores** -- Learn what influences credit scores, how to build and maintain healthy credit, and how credit affects wider financial life.

**5. Investing Fundamentals** -- Explore stocks, bonds, index funds, retirement accounts, asset allocation, diversification, risk, and the value of starting early.

**6. Risk Management & Insurance** -- Match insurance to real financial risks, prepare for financial shocks, and balance premiums, deductibles, limits, and coverage.

**7. Taxes & Tax-Advantaged Accounts** -- Understand marginal and effective tax rates, tax-advantaged savings vehicles, and the foundations of lawful tax planning.

**8. Behavioral Finance & Long-Term Planning** -- Recognize loss aversion and present bias, strengthen sustainable habits, and keep short-term choices aligned with long-term goals.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Flexible Lectures** -- Choose concise, standard, or extended lecture formats to match your time and preferred level of detail.

**Built-In AI Tutors** -- Ask questions while learning or practicing and receive help grounded in the course material.

**Fresh Scenario-Based Practice** -- Work through newly generated financial situations that require application and reasoning.

**Immediate Feedback** -- Submit answers, receive percentage grading, and understand what was correct or needs improvement.

**Assignments and Exams** -- Complete coursework, tests, diagnostics, and unlimited ungraded practice exams.

**Progress and Analytics** -- Track lecture completion, assignment results, practice activity, and topic-level strengths.

**Course Certification** -- Complete the required coursework and earn a ZHI Systems course certificate.

**Complete Course Books** -- Download the full 24-topic course book in PDF or plain-text format for offline study.`,
  },
  {
    emoji: "📚",
    title: "Twenty-Four Topics Across Eight Connected Areas",
    body: `**Foundations** -- Income, expenses and cash flow; time value of money and compound interest; setting financial goals.

**Budgeting & Saving** -- Creating and maintaining a budget; emergency funds; automating savings.

**Debt Management** -- Types of debt; cost of minimum payments; avalanche versus snowball.

**Credit & Credit Scores** -- How credit scores work; building and maintaining good credit; credit's impact on financial life.

**Investing Fundamentals** -- Stocks, bonds and index funds; 401(k) and IRA accounts; asset allocation and diversification.

**Risk Management & Insurance** -- Types of insurance; protecting against financial shocks; balancing coverage and cost.

**Taxes** -- How income taxes work; tax-advantaged savings vehicles; basic tax-planning strategies.

**Behavior & Long-Term Planning** -- Common psychological traps; the importance of early investment; sustainable financial habits.`,
  },
  {
    emoji: "🔓",
    title: "How Access Works",
    body: `Explore the public course information and download the course books.

Try up to two AI-assisted learning actions before signing in. Sign in securely with Google for three additional AI-assisted actions.

Subscribe for continued access to tutoring, feedback, practice, assignments, progress tracking, and certification. Login and subscription controls remain visible so learners can manage access at any time.`,
  },
  {
    emoji: "👥",
    title: "Who It Is For",
    body: `**Students and Young Adults** -- Build a reliable financial foundation.

**Working Adults** -- Organize saving, debt, credit, insurance, taxes, and retirement.

**Independent Learners** -- Follow a structured alternative to scattered online advice.

**Colleges, Banks, Businesses, and Community Organizations** -- Provide accessible financial-literacy education.

**Educators and Institutions** -- Explore customized courses, certifications, or learning applications.`,
  },
  {
    emoji: "ℹ️",
    title: "Important Note",
    body: `This course provides general financial education. It does not provide individualized financial, investment, tax, legal, or insurance advice.`,
  },
];

const epistemologySections = [
  {
    emoji: "🔎",
    title: "What It Is",
    body: `Epistemology Certification Course is a focused four-to-six-hour learning experience taught, tutored, practiced, and graded with AI.

The course turns difficult philosophical questions into a structured journey through clear explanations, concrete cases, adaptive practice, grounded tutoring, and immediate feedback.

It begins with a deceptively simple question -- What is knowledge? -- and develops a connected account of propositions, truth, justification, observation, inference, theory, causal continuity, and the limits of skepticism.

No previous philosophy training is required.`,
  },
  {
    emoji: "🧭",
    title: "The Four-Hour Learning Journey",
    body: `**Hour 1 — What Knowledge Is—and Why True Belief Is Not Enough** -- Begin with truths and propositions, then examine belief and justification. Discover why justified true belief can still fall short of knowledge and what Gettier cases reveal about luck, structure, and genuine knowing.

**Hour 2 — How Observation Becomes Knowledge** -- Explore the difference between analytic and empirical knowledge. See why observation does not arrive as ready-made propositions and how classification, concepts, and articulation transform experience into something that can be known.

**Hour 3 — From Inference to Theory** -- Distinguish first-order observation from second-order inference. Learn how beliefs about the past, future, possibility, hidden structure, and systematic dependence grow into theoretical knowledge.

**Hour 4 — Causation, Continuity, and the Challenge of Skepticism** -- Investigate persistence, spatial continuity, and causal processes. Confront skepticism about perception, induction, and causation, and compare skeptical alternatives with explanations grounded in coherence, continuity, and parsimony.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Four Lecture Depths** -- Study every topic as Bulletin Points, Short, Medium, or Long while preserving the same central ideas and learning goals.

**Grounded AI Tutor** -- Ask questions about the exact passage you are studying and receive conversational guidance rooted in the course.

**Adaptive Practice** -- Work through fresh cases that adjust to recent performance and require application rather than recitation.

**Reasoned Application** -- Analyze unfamiliar situations, distinguish competing claims, and explain why a belief does or does not count as knowledge.

**Immediate Feedback** -- Receive a percentage score and a clear explanation after every submitted answer.

**Four Graded Checkpoints** -- Complete two homework sets, a course test, and a cumulative final.

**Reasoning Diagnostics** -- Compare subject-specific and general reasoning before, during, and after the course without affecting your grade.

**Progress and Analytics** -- Follow lecture completion, assignment performance, practice activity, and developing strengths.`,
  },
  {
    emoji: "📚",
    title: "Twenty-Four Topics Across Eight Connected Areas",
    body: `**Knowledge, Truth, and Propositions** -- What truths are, what propositions are, and why knowledge is knowledge of truths.

**The Structure of Knowledge** -- Belief, justification, Gettier cases, luck, and structure-preserving processes.

**Analytic and Empirical Knowledge** -- Conceptual truths, observational grounding, and the limits of pure observation.

**Observation and Articulation** -- Raw experience, classification, properties, and propositional content.

**Inference** -- Present observation, hidden structure, possibility, memory, and prediction.

**Theory** -- Integrated explanations, dependence, and systematic understanding.

**Causation and Continuity** -- Persistence, spatial occupancy, processes, and genuine causal connection.

**Skepticism** -- Hallucination, induction, coherence, parsimony, and explanatory strength.`,
  },
  {
    emoji: "📝",
    title: "Fifty Fresh Graded Questions",
    body: `The certification includes 30 multiple-choice questions with two or three meaningful options, 15 one-sentence responses, four responses of one to three sentences, and one sustained paragraph of five to seven sentences.

Every question is freshly generated for the learner. The emphasis is always on understanding, application, and justified reasoning -- not memorized vocabulary.`,
  },
  {
    emoji: "📖",
    title: "The Foundational Paper",
    body: `The course is based on "Outline of a Theory of Knowledge."

Learners can download two separate documents: the complete Epistemology Certification Course Book and the complete foundational paper, "Outline of a Theory of Knowledge."

Together, they provide both the guided learning experience and the deeper philosophical framework behind it.`,
  },
  {
    emoji: "🏆",
    title: "Earn the Certification",
    body: `Complete the required coursework and meet the passing standard to receive an Epistemology Certification Course certificate from ZHI Systems.

Each certificate includes a unique credential number and can be independently verified.`,
  },
  {
    emoji: "👥",
    title: "Who It Is For",
    body: `**Independent Learners** -- People curious about knowledge, truth, and rational belief.

**Students** -- Learners preparing for philosophy, critical-thinking, or reasoning coursework.

**Professionals** -- People who want to sharpen conceptual analysis and judgment.

**Educators** -- Instructors seeking a structured introduction to epistemology.

**Continuing Learners** -- People preparing to continue into Nano Epistemology.`,
  },
];

function renderBody(body: string) {
  return body.split("\n\n").map((paragraph, index) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={index} className="text-gray-700">
        {parts.map((part, partIndex) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={partIndex} className="text-gray-900">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={partIndex}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export default function FourHourCertifications() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  return (
    <div className="font-sans bg-white text-gray-900 leading-relaxed min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Four Hour Certifications
          </h1>
        </header>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Cryptography
                </h2>
                <p className="text-sm text-gray-600">
                  Secrets, Locks, and Digital Trust
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "cryptography" ? null : "cryptography",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "cryptography" ? "Hide" : "Details"}
              </button>
              <a
                href="https://picocryptography.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "cryptography" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                A rigorous but accessible four-hour introduction to codes,
                ciphers, and digital trust.
              </p>
              {cryptographySections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Evolutionary Psychology
                </h2>
                <p className="text-sm text-gray-600">
                  From Evolutionary Principles to Careful Explanations of Behavior
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "evolutionary-psychology"
                      ? null
                      : "evolutionary-psychology",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "evolutionary-psychology"
                  ? "Hide"
                  : "Details"}
              </button>
              <a
                href="https://evopsychfourhour.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "evolutionary-psychology" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Learn the principles. Test the explanations. Follow the
                evidence.
              </p>
              {evolutionaryPsychologySections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛋️</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Freud in Four Hours
                </h2>
                <p className="text-sm text-gray-600">
                  Basic Tenets of Psychoanalysis
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "freud-in-four-hours"
                      ? null
                      : "freud-in-four-hours",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "freud-in-four-hours"
                  ? "Hide"
                  : "Details"}
              </button>
              <a
                href="https://nanofreud.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "freud-in-four-hours" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Begin with the unconscious. Leave with a new way to read human
                experience.
              </p>
              {freudSections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠⚡</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  IQ Booster
                </h2>
                <p className="text-sm text-gray-600">
                  Six Reasoning Skills in Four to Six Hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "iq-booster" ? null : "iq-booster",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "iq-booster" ? "Hide" : "Details"}
              </button>
              <a
                href="https://fourhouriqbooster.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "iq-booster" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Six reasoning skills, four to six hours, and a sharper way to
                think.
              </p>
              {iqBoosterSections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Personal Finance
                </h2>
                <p className="text-sm text-gray-600">
                  Practical Money Skills in Four to Six Hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "personal-finance" ? null : "personal-finance",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "personal-finance" ? "Hide" : "Details"}
              </button>
              <a
                href="https://fourhourpersonalfinance.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "personal-finance" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Learn the concepts. Practice the decisions. Earn the
                certification.
              </p>
              {personalFinanceSections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔎</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Epistemology
                </h2>
                <p className="text-sm text-gray-600">
                  Knowledge, Truth, Justification, and the Structure of Knowing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "epistemology" ? null : "epistemology",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "epistemology" ? "Hide" : "Details"}
              </button>
              <a
                href="https://onedayepistemology.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "epistemology" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                What can we know, and what makes it knowledge?
              </p>
              {epistemologySections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}