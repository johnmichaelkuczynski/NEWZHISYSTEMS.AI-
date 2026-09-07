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

const agingBpdSections = [
  {
    emoji: "🧭",
    title: "What It Is",
    body: `Aging with BPD Certification Course is a focused four-to-six-hour learning experience taught, tutored, practiced, and graded with AI.

The course explores the psychology of aging among people with borderline personality disorder. It presents research findings as group-level tendencies rather than predictions about any individual and emphasizes person-first language, diagnostic humility, compassionate support, and realistic hope.

Learners move through clear lectures, concrete fictional cases, adaptive practice, grounded tutoring, immediate feedback, reasoning diagnostics, progress analytics, and four graded assignments.

This course is educational. It does not provide diagnosis, treatment, therapy, clinical qualification, or licensure, and it does not ask learners to disclose personal symptoms, trauma, self-harm history, or current risk.`,
  },
  {
    emoji: "🛤️",
    title: "The Four-to-Six-Hour Learning Journey",
    body: `**Foundations — BPD Across the Lifespan** -- Understand how core BPD features may change in intensity and impact over time, why presentations can differ across ages, and why neither inevitable deterioration nor guaranteed recovery is an accurate account of aging.

**Early and Middle Adulthood — Intensity, Development, and Change** -- Examine early-adulthood patterns involving impulsivity, crisis, identity, and relationships, followed by the reductions in behavioral intensity, stronger impulse control, and accumulated coping experience often reported during middle adulthood.

**Late Adulthood — Outcomes, Sensitivity, Loss, and Resilience** -- Explore remission findings, continuing emotional sensitivity and interpersonal patterns, and the possible effects of depression, loneliness, health changes, loss, social connection, and accumulated life consequences.

**Biology, Treatment, Support, and Meaning** -- Consider normal aging and neurobiology without simplistic brain claims; age-appropriate psychotherapy; co-occurring mental and medical conditions; medication and polypharmacy; family and caregiving dynamics; stigma reduction; life narrative; and legacy.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Four Lecture Depths** -- Study every topic as Bulletin Points, Short, Medium, or Long while preserving the same central principles and learning goals.

**Grounded AI Tutor** -- Ask questions about the exact lecture being studied and receive conversational guidance rooted in that material.

**Adaptive Practice** -- Work through newly generated fictional cases that adjust to recent performance and test application rather than recitation.

**Immediate Feedback** -- Receive a percentage score and a substantive explanation after every submitted answer.

**Four Graded Checkpoints** -- Complete two homework sets, a course test, and a cumulative final.

**Reasoning Diagnostics** -- Compare subject-specific and general reasoning before, during, and after the course without affecting the course grade.

**Progress and Analytics** -- Follow lecture completion, assignment performance, practice activity, recent work, and developing strengths.

**Adjustable Learning Space** -- Resize the lecture and practice panels, connect lectures to related assignments, and use the math keyboard on every free-response and tutor input.`,
  },
  {
    emoji: "🧩",
    title: "Twenty-Four Topics in Eight Connected Areas",
    body: `**Foundations: BPD Across the Lifespan** -- Core features over time, age-related differences in presentation, and common myths.

**Early Adulthood** -- Symptom intensity, impulsivity, identity, relationships, treatment engagement, and early intervention.

**Middle Adulthood** -- Changes in emotional intensity, impulse control, relationship stability, experience, and coping.

**Late Adulthood** -- Long-term outcomes, remission, residual sensitivity, loneliness, depression, and accumulated consequences.

**Biological and Neurological Changes** -- Prefrontal maturation, neurotransmitter changes, normal aging, and careful interpretation of neurobiology.

**Psychosocial Factors** -- Relationships, social support, work, finances, satisfaction, trauma, loss, protective experiences, and resilience.

**Treatment Across Age Groups** -- Adapted psychotherapy, co-occurring conditions, medical illness, medication review, and polypharmacy.

**Supporting Aging Individuals** -- Family and caregiving, autonomy, boundaries, stigma reduction, hope, meaning, narrative, and legacy.`,
  },
  {
    emoji: "📝",
    title: "Fifty Fresh Graded Questions",
    body: `The certification uses 30 multiple-choice questions with exactly two or three meaningful options, 15 one-sentence responses, four responses of one to three sentences, and one sustained paragraph of five to seven sentences.

Questions are generated fresh for each attempt. They use concrete fictional situations, remain answerable from prior course material or information inside the prompt, and grade understanding rather than memorization. Multiple-choice responses bypass GPTZero analysis.`,
  },
  {
    emoji: "🏅",
    title: "Earn the Certification",
    body: `Complete the required coursework and meet the passing standard to receive an Aging with BPD Certification Course — Educational Completion certificate from ZHI Systems.

Each issued certificate includes a unique credential number and can be independently verified.

Study lifespan patterns. Respect individual variation. Apply the principles with care.`,
  },
  {
    emoji: "👥",
    title: "Who It Is For",
    body: `**Independent Learners** -- People interested in personality psychology and lifespan development.

**Families, Supporters, and Caregivers** -- People seeking a more careful educational framework.

**Students and Professionals** -- Learners who want a structured introduction to BPD and aging.

**Educators** -- Those exploring person-first, non-stigmatizing approaches to later-life mental health.

**Continuing Learners** -- People preparing to continue into Nano Aging with BPD.

This course does not qualify anyone to diagnose or treat BPD and is not a substitute for individualized care from qualified professionals.`,
  },
];

const measurementTheorySections = [
  {
    emoji: "📏",
    title: "What It Is",
    body: `Measurement Theory Certification Course is a focused four-to-six-hour learning experience taught, tutored, practiced, and graded with AI.

The course turns difficult questions about measurement into a structured journey through clear explanations, concrete cases, adaptive practice, grounded tutoring, and immediate feedback.

It begins with a deceptively simple distinction—measurement is not enumeration—and develops a connected account of standards, ordering relations, transitivity, exclusivity, congruence, scalar and vector quantities, extensive and intensive magnitudes, rational and irrational measurement, and the role of physical laws.

No previous measurement-theory or metrology training is required.`,
  },
  {
    emoji: "🛤️",
    title: "The Four-to-Six-Hour Learning Journey",
    body: `**Hour 1 — Measurement, Enumeration, and Standards** -- Distinguish measuring from counting. Learn why continuous magnitudes do not require minimal units, when additivity is justified, and why every measurement is a comparison with a standard under specified procedures.

**Hour 2 — The Axioms Behind Defensible Measurement** -- Study transitivity, exclusivity, and congruence. Examine what each relation contributes to a stable measurement system, what failures look like in practice, and why numerical assignments must preserve the underlying empirical structure.

**Hour 3 — Quantities, Magnitudes, and Meaningful Operations** -- Compare scalar and vector quantities, then distinguish extensive from intensive magnitudes. Learn why some quantities can be added directly, why others cannot, and how empirical composition determines which mathematical operations are legitimate.

**Hour 4 — Rational Measurement and Precision** -- Explore direct comparison, finite precision, rational numerical reports, approximation, and irrational values. See why an exact mathematical value and a physically obtainable reading are different kinds of claims.

**Hours 5–6 — Laws, Inference, and Conventionalism** -- Investigate provisional standards, indirect measurement through geometry and physical law, metrical and nomic conventionalism, and the empirical constraints that prevent standards and laws from becoming arbitrary.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Four Lecture Depths** -- Study every topic as Bulletin Points, Short, Medium, or Long while preserving the same central ideas and learning goals.

**Grounded AI Tutors** -- Ask questions about the exact passage you are studying and receive conversational guidance rooted in the course.

**Unlimited Practice Exams** -- Work through fresh cases that require application and reasoning rather than memorized definitions.

**Adaptive Practice** -- Receive questions that respond to recent performance and focus attention where it is most useful.

**Immediate Feedback** -- Receive a percentage score and a clear explanation after every submitted answer.

**Four Graded Checkpoints** -- Complete two homework sets, a course test, and a cumulative final.

**Reasoning Diagnostics** -- Compare subject-specific and general reasoning before, during, and after the course without affecting your grade.

**Progress and Analytics** -- Follow lecture completion, assignment performance, practice activity, and developing strengths.`,
  },
  {
    emoji: "🧩",
    title: "Twenty-Four Topics in Eight Connected Areas",
    body: `**Foundations: Measurement vs. Enumeration** -- Why measurement is not counting, continuous magnitudes, and the limits of assumed additivity.

**Relativization to Standards** -- Comparative measurement, universal and local standards, traceability, and invariance.

**Three Axioms of Measurement Theory** -- Transitivity, exclusivity, congruence, and the consequences of failed relations.

**Scalar vs. Vector Quantities and Congruence** -- Direction, magnitude, comparison procedures, and structure-preserving numerical representation.

**Provisional Standards and Physical Laws** -- Calibration, drift, independent methods, indirect measurement, and uncertainty.

**Extensive vs. Intensive Magnitudes** -- Composition, additivity, equilibrium, and the limits of ordinary arithmetic.

**Direct Measurement and Rational Numbers** -- Finite readings, precision, approximation, and irrational values.

**Metrical and Nomic Conventionalism** -- Choices of units and laws, empirical consistency, reproducibility, and non-arbitrariness.`,
  },
  {
    emoji: "📝",
    title: "Fifty Fresh Graded Questions",
    body: `The certification includes 30 multiple-choice questions with meaningful alternatives, 15 one-sentence responses, four responses of one to three sentences, and one sustained paragraph of five to seven sentences.

Every learner-facing question is freshly generated. The emphasis is always on understanding, application, and justified reasoning—not memorized vocabulary.`,
  },
  {
    emoji: "🚀",
    title: "Preparing for Nano Measurement Theory",
    body: `The course provides the conceptual foundation needed to continue into Nano Measurement Theory.

Learners develop the distinctions required to examine numerical representation, scale construction, continuity, calibration, covariance, equivalence, model-based inference, and uncertainty at greater depth.

The complete Measurement Theory Certification Course Book is available for download from the course.`,
  },
  {
    emoji: "🏅",
    title: "Earn the Certification",
    body: `Complete the required coursework and meet the passing standard to receive a ZHI Certification of Completion for the Measurement Theory Certification Course.

Each certificate includes a unique credential number and can be independently verified.

Compare the magnitude. Test the structure. Justify the number.

This is an educational completion credential and does not constitute professional metrology accreditation or licensure.`,
  },
  {
    emoji: "👥",
    title: "Who It Is For",
    body: `**Independent Learners** -- People curious about what measurement numbers really represent.

**Students** -- Learners preparing for physics, mathematics, philosophy of science, or metrology coursework.

**Professionals** -- People who work with standards, quantities, data, models, or physical measurements.

**Educators** -- Those seeking a structured introduction to measurement theory.

**Continuing Learners** -- People preparing to continue into Nano Measurement Theory.`,
  },
];

const fourHourBpdSections = [
  {
    emoji: "🧩",
    title: "Overview",
    body: `Four Hour BPD is a complete four-to-six-hour educational certification course about Borderline Personality Disorder.

BPD is frequently reduced to stereotypes or a short list of symptoms. This course offers something more useful: a connected explanation of how emotional sensitivity, difficulty returning to baseline, fear of abandonment, unstable self-image, impulsivity, relationship patterns, and environmental influences may interact.

The course combines concise lectures, real-world scenarios, built-in tutoring, fresh practice questions, graded coursework, reasoning diagnostics, and progress analytics in one guided learning experience.

Learners can choose how deeply they want to study each topic, ask questions while reading, practice as often as needed, and earn a verifiable certificate after completing the required coursework.

No previous psychology training is required.

This course is educational. It does not diagnose BPD, replace professional care, provide therapy, or confer clinical qualification or licensure.`,
  },
  {
    emoji: "👥",
    title: "Who It’s For",
    body: `**People Who Want to Understand BPD** -- Learn without relying on social-media stereotypes, stigma, or oversimplified symptom lists.

**Family Members, Partners, and Friends** -- Gain a more compassionate framework for understanding emotional and relationship patterns.

**Students and Independent Learners** -- Get a structured introduction to BPD, treatment, recovery, and support.

**Educators and Helping Professionals** -- Explore an accessible overview grounded in careful, person-first language.

**Learners Preparing for Advanced Study** -- Build a foundation for the more detailed Nano Borderline Personality Disorder course.

**Anyone Interested in Mental Health Education** -- Learn through concrete examples, active practice, and clear explanations.`,
  },
  {
    emoji: "⚙️",
    title: "Core Capabilities",
    body: `**A Complete 4–6 Hour Course** -- Learn the foundations of BPD in an afternoon or study gradually over time.

**Twenty-Four Connected Topics** -- Move through eight organized areas covering foundations, emotional dysregulation, relationships, identity, impulsivity, risk factors, treatment, recovery, and support.

**Four Lecture Lengths** -- Read every topic as Bulletin Points, Short, Medium, or Long.

**Built-In AI Tutors** -- Ask questions directly from the lecture and receive guidance grounded in the course material.

**Unlimited Adaptive Practice** -- Work through fresh scenarios that respond to recent performance and emphasize application.

**Fifty Fresh Graded Questions** -- Complete two homework sets, a timed course test, and a cumulative final.

**Immediate, Explained Feedback** -- Receive a percentage score and a clear explanation after every submitted response.

**Reasoning Diagnostics and Analytics** -- Compare reasoning over time and track lectures, assignments, practice, mastery, and recent progress.

**Downloadable Course Materials** -- Access the course publicly and download its complete educational content in PDF or text format.

**Verifiable Certification** -- Earn a uniquely numbered ZHI Systems certificate after meeting the passing standard.`,
  },
  {
    emoji: "🎯",
    title: "What Makes It Different",
    body: `**It Explains Patterns Instead of Repeating Labels** -- See how emotions, relationships, identity, behavior, development, treatment, and recovery fit together.

**It Is Educational Without Becoming Clinical or Diagnostic** -- Build understanding without disclosing private mental-health information.

**It Uses Person-First, Non-Stigmatizing Language** -- BPD is presented with compassion, diagnostic humility, and attention to common misconceptions.

**It Teaches Through Concrete Situations** -- Practice and graded questions use realistic fictional scenarios rather than mere terminology recall.

**It Adapts to the Learner** -- Lecture depth, tutoring, and unlimited fresh practice support both quick orientation and serious study.

**It Treats Psychotherapy as Central** -- Evidence-based treatment, including DBT, is explained responsibly, while medication is accurately presented as adjunctive and symptom-targeted.

**It Includes Recovery, Not Only Symptoms** -- The course addresses skills, support, effective treatment, and meaningful improvement over time.

**It Measures Understanding, Not Just Completion** -- Coursework, diagnostics, feedback, and analytics reveal strengths and areas for practice.`,
  },
  {
    emoji: "📚",
    title: "What You’ll Learn",
    body: `**Foundations and Differential Diagnosis** -- What BPD is, how diagnosis is approached, common misconceptions, and overlap with other conditions.

**Emotional Dysregulation** -- Emotional sensitivity, intense responses, triggers, and difficulty returning to baseline.

**Interpersonal Patterns** -- Fear of abandonment, relationship instability, conflict, trust, and changing perceptions of others.

**Identity and Self-Image** -- Unstable self-concept, chronic emptiness, values, goals, and shifts in self-perception.

**Impulsivity and Self-Harm** -- High-risk behavior, distress, safety principles, and compassionate support without graphic or instructional content.

**Etiology and Risk** -- Biological sensitivity, development, environment, attachment, trauma, and why no single factor explains every person.

**Treatment** -- DBT and other psychotherapies, treatment goals, therapeutic skills, and the limited adjunctive role of medication.

**Recovery and Support** -- Improvement over time, stability, responsible support, boundaries, hope, and long-term growth.`,
  },
  {
    emoji: "📝",
    title: "How Certification Works",
    body: `The certification includes 30 multiple-choice questions with two or three meaningful options, 15 one-sentence responses, four responses of one to three sentences, and one sustained paragraph of five to seven sentences.

Questions use fictional educational and support scenarios. They test understanding, judgment, and application—not personal disclosure, diagnosis, or memorized vocabulary.

Complete the required coursework and meet the passing standard to receive a Borderline Personality Disorder Certification Course certificate from ZHI Systems.`,
  },
];

const psychodynamicsBpdSections = [
  {
    emoji: "🧩",
    title: "Overview",
    body: `The Psychodynamics of BPD is a focused online course for people who want a deeper, more organized way to understand Borderline Personality Disorder.

Rather than asking learners to memorize disconnected definitions, the course builds a working model of how personality organization, early fixation, trauma, splitting, repression, oscillating states, mature capacities, infantile states, and relationships may fit together. Every topic is taught through concrete situations, careful distinctions, and application-based questions.

The experience is intellectually serious without becoming inaccessible. Learners can move quickly through concise bullet points, slow down for a long-form lecture, ask the built-in tutor for help, practice as often as needed, and receive immediate feedback on their reasoning.

The course uses person-first, non-stigmatizing language and treats psychodynamic formulations as thoughtful interpretive tools—not universal facts about every person diagnosed with BPD.

No previous psychoanalytic or clinical training is required.`,
  },
  {
    emoji: "👥",
    title: "Who It’s For",
    body: `**Psychology and Counseling Students** -- Build a coherent framework connecting development, defenses, emotional states, and relationships.

**Mental-Health Professionals and Trainees** -- Revisit familiar clinical patterns through a structured psychodynamic lens.

**Educators and Support Professionals** -- Gain language for discussing difficult behavior without reducing a person to a diagnosis.

**Independent Learners** -- Move beyond social-media summaries and develop a more disciplined understanding of BPD.

**Families, Partners, and Curious Readers** -- Explore the concepts respectfully without being asked to diagnose anyone.

**Continuing Learners** -- Prepare for Nano Psychodynamic Understanding of BPD.`,
  },
  {
    emoji: "✨",
    title: "Core Capabilities",
    body: `**Four Lecture Formats** -- Read every lecture as Bullet Points, Short, Medium, or Long without losing the central ideas.

**Adjustable Reading and Tutor Panel** -- Resize the workspace to fit the preferred way of studying.

**Built-In AI Tutor** -- Ask questions about the exact lecture and receive conversational guidance grounded in the material.

**Concrete Starter Questions** -- Begin each section with application questions built around situations rather than abstract definitions.

**Unlimited Practice Exams** -- Generate fresh practice that does not lower the course grade.

**Fresh Scenario-Based Questions** -- Practice interpretation, distinction, and reasoning instead of one-word recall.

**Immediate Scores and Feedback** -- Receive a percentage and direct explanation after every answer.

**Related Assignment Links** -- Move directly from a lecture to its related homework, test, final, or practice activity.

**Progress, Analytics, and Diagnostics** -- Track completion, performance, mastery, practice, and changes in reasoning over time.`,
  },
  {
    emoji: "🧭",
    title: "The Eight-Topic Journey",
    body: `**1. The Dual Operating System Model** -- Explore movement between a reflective adult or mature mode and an earlier, developmentally fixed mode as a conceptual model—not a claim that a person contains two minds.

**2. Fixation and Trauma** -- Examine unmet needs, overwhelming experiences, repetition, and adaptation without claiming that one event explains every feature of BPD.

**3. Splitting vs. Repression** -- Distinguish keeping contradictory self-and-other experiences apart from pushing a conflict out of awareness.

**4. Oscillation Between States** -- Study rapid shifts in feeling, expectation, memory, attachment, and action.

**5. Adult and Mature Capacities** -- Identify capacities supporting reflection, reciprocity, delay, complexity, responsibility, and mixed feelings.

**6. Infantile and Fixated States** -- Understand developmentally earlier needs and defenses without reducing an adult person to a childish stereotype.

**7. BPD vs. Psychopathy** -- Compare attachment, empathy, guilt, aggression, manipulation, emotional reactivity, and personality organization without sensationalism.

**8. Clinical Implications** -- Explore transference, countertransference, boundaries, rupture and repair, diagnostic humility, psychotherapy, and the adjunctive role of medication.`,
  },
  {
    emoji: "📝",
    title: "Fifty Fresh Graded Questions",
    body: `The certification includes exactly 30 multiple-choice questions with two or three meaningful options, 15 one-sentence responses, four responses of one to three sentences, and one sustained paragraph of five to seven sentences.

The questions are distributed across two homework assignments, a course test, and a cumulative final. Multiple-choice answers are graded deterministically. Written answers are evaluated for whether the learner applies the course material to the situation presented.

Every attempt uses fresh questions. The goal is to become more precise at recognizing structures, comparing explanations, and defending a reasoned interpretation.`,
  },
  {
    emoji: "🎯",
    title: "What Makes It Different",
    body: `**A Model, Not a List** -- Connect states, defenses, development, attachment, and relationships beneath the diagnostic criteria.

**Application Over Recitation** -- Work through concrete situations instead of repeating isolated vocabulary.

**Depth Without Forced Pacing** -- Choose a fast map or a detailed lecture depending on the moment.

**Tutoring Beside the Text** -- Turn a confusing passage into a grounded conversation.

**Practice Without Punishment** -- Be wrong, revise, and try again before graded work.

**Feedback That Explains the Percentage** -- See what was understood, what was missed, and how to improve.

**Respectful Clinical Language** -- Avoid presenting trauma, aggression, psychopathy comparisons, or interpretations as universal truths.`,
  },
  {
    emoji: "🏆",
    title: "Earn a ZHI Systems Certificate of Completion",
    body: `Complete the required coursework and meet the passing standard to earn the ZHI Systems Certificate of Completion in The Psychodynamics of BPD.

Each certificate includes a unique credential number and an independent verification page.

Understand the states. Distinguish the defenses. Follow the dynamics. Apply the model carefully.

This certificate documents educational completion. It is not professional licensure, clinical qualification, diagnosis, treatment, therapy, or authorization to practice.`,
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

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
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

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Aging with Borderline Personality Disorder
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "aging-bpd" ? null : "aging-bpd",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "aging-bpd" ? "Hide" : "Details"}
              </button>
              <a
                href="https://agingbpd.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "aging-bpd" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Understand change without reducing a person to a diagnosis.
                Aging is individual. Evidence is probabilistic. Dignity is
                constant.
              </p>
              {agingBpdSections.map((section) => (
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
              <span className="text-2xl">📏</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Measurement Theory
                </h2>
                <p className="text-sm text-gray-600">
                  Standards, Comparison, Quantities, and the Structure of
                  Measurement
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "measurement-theory"
                      ? null
                      : "measurement-theory",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "measurement-theory" ? "Hide" : "Details"}
              </button>
              <a
                href="https://measurement101.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "measurement-theory" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                A rigorous but accessible introduction to the foundations of
                measurement.
              </p>
              {measurementTheorySections.map((section) => (
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
                  BPD in Four Hours
                </h2>
                <p className="text-sm text-gray-600">
                  Understand Borderline Personality Disorder with Clarity,
                  Compassion, and Practical Context
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "four-hour-bpd" ? null : "four-hour-bpd",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "four-hour-bpd" ? "Hide" : "Details"}
              </button>
              <a
                href="https://fourhourbpd.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "four-hour-bpd" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Go beyond labels. Understand the person, the patterns, and the
                path forward.
              </p>
              {fourHourBpdSections.map((section) => (
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
              <span className="text-2xl">🧠</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  The Psychodynamics of BPD
                </h2>
                <p className="text-sm text-gray-600">
                  A Vivid, Practical Journey into the Inner Dynamics of
                  Borderline Personality Disorder
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "psychodynamics-bpd"
                      ? null
                      : "psychodynamics-bpd",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "psychodynamics-bpd" ? "Hide" : "Details"}
              </button>
              <a
                href="https://bpd101.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "psychodynamics-bpd" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                Go beyond the symptom list. Learn to think dynamically about
                states, defenses, development, relationships, and change.
              </p>
              {psychodynamicsBpdSections.map((section) => (
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