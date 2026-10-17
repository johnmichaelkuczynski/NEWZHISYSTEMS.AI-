/**
 * Single, audience-independent Q&A corpus. Source snapshot: site catalogs and
 * owner uploads supplied with the October 2026 resume request.
 *
 * App descriptions are factual summaries of /utilities (home.tsx), /resume,
 * and the live Original EZ Reader landing page. Sparse listings explicitly say
 * what is not documented. Older /main catalog entries are retained separately;
 * they do not change the owner's stated current count of 47 deployed AI apps.
 * Publications: uploaded Edtech / Certification Course Systems material,
 * plus the two AI articles explicitly supplied in the Q&A rebuild request.
 * Do not treat speculative resume advice, example clients, dates or revenue
 * in uploaded conversations as verified biography.
 */
export interface KnowledgePassage {
  id: string;
  kind: "app" | "course" | "book" | "background";
  name: string;
  url: string;
  text: string;
  aliases: string[];
  evidence: string;
}

const rows = (text: string) => text.trim().split("\n").map(line => line.split("|"));
const appRows = rows(`
Living Book Creator|https://livingbookcreator.xyz/|A multi-model workbench for academic writing, document analysis, and argument reconstruction. It helps academics, authors, and researchers create study guides, outlines, podcasts, and interactive book material.
Analytic Philosophy Living Book|https://analyticphilosophy.ai|An interactive reading environment built around John-Michael Kuczynski's Analytic Philosophy. Philosophy students and readers can ask passage-level questions and generate study guides, tests, podcasts, and conceptual maps.
Book Builder|https://bookbuilder.ink|A multi-model writing and analysis engine with document rewriting, cognitive profiling, and text transformation. It is intended for serious writers, academics, and researchers working with substantial documents.
Genius Dictation|https://geniusdictation.com|Transforms written or spoken content using dictation, OCR, style-based rewriting, and text evaluation. Authors and professionals can turn raw speech into edited prose and work with source documents.
EZ Reader|https://ezreader.ai|Processes and transforms documents using multiple AI models, style transfer, and reference material. It is designed for writers, researchers, and academics refining documents through iterative instructions.
Original EZ Reader|https://originalezreader.ink|The live interface accepts text, documents, images, and audio and offers rewriting, translation, dictation, and section-by-section processing. Writers and readers can supply separate style and content sources and export processed text in multiple formats.
Classic EZ Reader|https://classicezreader.ink|A multi-provider text-processing platform for rewriting, text assessment, and document workflows. Students, academics, and professionals can process long documents with chunking and formatting controls.
EZ Story|https://ezstory.xyz|Converts fiction into nonfiction and nonfiction into fiction while retaining the source ideas. It is intended for writers, educators, and content developers adapting material between narrative and analytical forms.
Neuro Text|https://neurotext.ink/|A multi-model platform for serious writing, analysis, and document transformation. Academics, legal professionals, and researchers can restructure and rewrite substantial texts with explicit instructions.
Text Surgeon Plus|https://textsurgeonplus.xyz/|Text Surgeon extracts attributed verbatim quotations, reconstructs formal arguments, compresses books into structured databases, and rewrites manuscripts in chosen styles. It serves scholars, writers, researchers, and serious readers who need source-based analysis beyond a brief chatbot summary.
Rewrite Plus|https://rewriteplus.xyz|Rewrites, summarizes, and expands text for a specified authorial voice, reading level, and length. Writers, students, editors, and readers can process whole documents or selected pages.
GPTByPass|https://gptbypass.ink|A text-transformation platform offering rewriting, assessment, and AI-authorship detection-related tools. It is intended for writers and professionals refining prose; detection-related marketing is not evidence of guaranteed evasion.
Forensic Document Verifier|https://forensicdocumentverifier.com|Analyzes PDF metadata, software fingerprints, and structural evidence against a user's claim about a document. Lawyers, investigators, and financial reviewers can examine inconsistencies or explore metadata without a claim; its output is not proof of authenticity or a replacement for professional judgment.
JM Kuczynski|https://jmkuczynski.com|A public showcase linking John-Michael Kuczynski's AI courses, apps, and scholarly and creative profiles. Visitors can explore his work and a corpus-based dialogue interface; older counts on this landing page are not the current portfolio totals.
AI Architect Showroom|https://jmkuczynski.ai|A portfolio site identifying John-Michael Kuczynski as an AI Product Architect. It is for visitors exploring his AI work; the captured landing page did not expose detailed product capabilities.
Neoclassical Piano|https://neoclassicalpiano.com|A promotional site presenting a catalog of neoclassical music and links to recordings. Listeners can browse albums and singles across vocal, keyboard, and other styles.
Paradoxes|https://paradoxes.ink|A reference site analyzing logical, philosophical, mathematical, epistemic, and decision-theoretic paradoxes. Students and researchers can examine each setup, proposed solutions, and assessments rather than just introductory summaries.
Basic OSINT|https://basicosint.xyz|The site catalog lists Basic OSINT and its live page identifies it as Recon, an OSINT toolkit. It is relevant to open-source investigation; the supplied catalog and captured landing page do not document its detailed capabilities.
OSINT Lister|https://osintlister.xyz|The site catalog lists OSINT Lister and its live page identifies an OSINT Capability Catalog. It is relevant to people exploring open-source intelligence tools; detailed workflows were not present in the captured material.
College AI Match|https://collegeaimatch.xyz|Identifies US colleges for AI-powered course replacement and produces outreach proposals and contact information. Education providers can rank institutions by subject and manage their proposal pipeline using institutional data.
EZ Homework|https://ezhw.ink|A multi-model academic assistance platform for document-based writing and homework tasks with explicit formatting and length instructions. It supports students and other learners working with large inputs and structured outputs.
EZGrader|https://ezgrader.ai|Evaluates student work, annotates submissions, and produces grades with explanations and line-level feedback. Educators can apply their grading standards to essays, problem sets, lab reports, code, and other coursework.
Test Me|https://testme101.com|Also described as Test Yourself, it turns uploaded documents, notes, case files, and images into customized examinations. Students, professionals, and people preparing for hearings can choose question types and difficulty and receive grades, feedback, and progress analysis.
Texas Bar Prep|https://texasbarprep.ink|An AI-powered bar-exam practice platform that generates questions and grades answers with explanations. It is designed for bar-exam candidates; the site's descriptions of exam coverage are not a guarantee of current examination requirements or admission.
Genius 101|https://genius101.xyz|Also described as Ask A Thinker, it offers dialogue, debate, interviews, essays, and scholarly writing with historical thinkers. It is designed for scholars, students, writers, and curious readers, with semantic retrieval from the thinkers' actual texts grounding their simulated voices.
Freud GPT|https://freudgpt.me|A conversational platform for consulting thinkers in psychoanalysis, philosophy, and critical theory using retrieval over their writings. Scholars, researchers, students, and serious readers can pursue source-anchored dialogue, argumentation, and long-form composition.
Originality Meter|https://originality.ink|Evaluates and compares prose for originality, intelligence, cogency, and overall quality and can rewrite or generate text. It is for writers and analysts interested in conceptual contribution rather than surface polish; its evaluations are AI judgments.
Intelligence Meter|https://intelmeter.xyz|A multi-model cognitive-analysis platform for intelligence scoring, cognitive profiling, and argument stress-testing. Researchers and writers can examine reasoning in texts; its scores are not independently verified psychometric measurements.
Mind Profiler|https://mindprofiler.ink|Analyzes writing samples for cognitive patterns, reasoning style, psychological traits, and estimated intelligence. Writers and analysts receive structured profiles supported by quotations; those estimates should not be treated as clinical diagnoses.
Mind Probe|https://mindprobe.ink|Produces cognitive and psychological profiles from pasted or uploaded text using multiple AI models. It serves users exploring reasoning and writing patterns; profile scores and psychopathology-related outputs are not established medical diagnoses.
Smart Goal Tracker|https://smartgoaltracker.xyz|Also called Tally, it compares calendar-based intended tasks with completed tasks and tracks medium- and long-term goals. People managing their own commitments can review follow-through rather than only scheduling intentions.
Psychology Pro|https://psychologypro.ink|A multi-model text-analysis platform for cognitive profiling, formal axiomatization, proof checking, and argument stress-testing. Researchers and writers can assess the reasoning in documents; cognitive assessments are AI-generated judgments.
Model Transformer|https://modeltransformer.ink|Re-expresses formal models, theories, schemas, and axiom systems while aiming to preserve their meaning and constraints. Researchers and analysts can explore equivalent formulations and explicit interpretation mappings, with uncertain equivalence flagged rather than silently assumed.
LLM Plus|https://llmplus.ink|Routes scholarly conversations among multiple AI models with persistent per-project memory and recursive compression. It is intended for long-running legal cases, dissertations, research programs, and other projects whose reasoning must survive individual context windows.
FrameWise|https://framewise.ink|Diagnoses potential communication problems in a draft and rewrites it for a chosen person, relationship, or situation. Professionals and other users can work on tone and phrasing through free-form or relationship-oriented modes.
Noir Comic Generator|https://noircomics.ink|Turns writing, scripts, ideas, and imported text into black-and-white film-noir comic panels with readable dialogue. Writers, educators, and thinkers can choose a panel count and visualize a scene or argument; the resume also describes photo-based character input.
Frame Shot|https://frameshot.xyz|Also described as Frame Flow, it extracts still images from uploaded video at fixed intervals. People reviewing recordings can scan a sequence of snapshots instead of scrubbing through every frame.
Graphic Novel Creator|https://graphicnovelcreator.ink|Transforms essays, stories, and other written works into illustrated graphic novels with narrative planning and screenplay-style tools. Writers and educators can specify panels and styles while working from source material.
OCR Pro|https://ocrman.shop|Extracts text from scanned PDFs, images, and Word documents for further processing. Document-review professionals, researchers, and legal teams can use it to make otherwise image-based material available as text.
Photo Psychoanalysis|https://photopsychoanalysis.xyz|Offers AI-generated psychological interpretations of photographs. It is for exploratory image analysis, not established clinical assessment or reliable diagnosis of a person from an image.
Multiple Video Viewer|https://multivideo.ink|A browser-based media viewer with side-by-side video comparison, screenshots, and local AI organization and similarity tools. Photographers, videographers, archivists, and researchers can review local media without the described cloud-upload workflow.
Audio Transcriber Plus|https://audiotranscriber.ink|Converts uploaded MP3, WAV, M4A, and OGG recordings into readable, copy-ready transcripts. Journalists, podcasters, researchers, and professionals can turn interviews and voice notes into text for review.
Podcast Creator|https://ezpodcast.ink|Creates podcast material from supplied text through AI-assisted scripting and audio workflows. Authors, educators, and content creators can adapt written ideas into listening material.
Forex Edge|https://usdhkd.ink|Also called USD/HKD Edge, it calibrates alternative pricing models to USD/HKD history and forecasts distributions of future exchange rates across horizons. Quantitative researchers and currency analysts can compare models through walk-forward backtesting; forecasts do not guarantee trading performance.
SOXL Options Pro|https://soxlpro.xyz|An options-analysis platform for SOXL with historical charts, distribution-oriented analysis, and period backtesting. Options traders and quantitative researchers can inspect patterns and benchmark-conditioned forecasts rather than treating outputs as guaranteed trades.
SOXL Options Edge|https://soxledge.xyz|Provides SOXL options analysis and decision support. Options traders and quantitative researchers can investigate pricing and risk, but the supplied material does not establish trading returns or guaranteed performance.
`);

const courses = (catalog: string, text: string) => rows(text).map(([name, url, description], i): KnowledgePassage => ({
  id: `course-${catalog}-${i}`, kind: "course", name, url,
  text: `${name}: ${description}. This is an AI-taught course platform John-Michael built, not a credential he earned.`,
  aliases: [name.replace(/\s*\(Level \d\)/, "")],
  evidence: `Site /${catalog} catalog (name, URL, and description)`,
}));

export const knowledge: KnowledgePassage[] = [
  ...appRows.map(([name, url, text], i): KnowledgePassage => ({
    id: `app-${i}`, kind: "app", name, url, text,
    aliases: ({
      "Text Surgeon Plus": ["Text Surgeon", "TextSurgeon"],
      "Genius 101": ["Genius101", "Ask A Thinker", "Ask A Philosopher"],
      "Freud GPT": ["FreudGPT"], "Forex Edge": ["USD/HKD Edge", "USD HKD"],
      "Test Me": ["Test Yourself"], "Smart Goal Tracker": ["Tally", "Goal Tracker"],
      "Audio Transcriber Plus": ["Audio Transcriber", "MP3 Transcriber"],
      "EZGrader": ["EZ Grader", "Grading Pro"], "Neuro Text": ["NeuroText", "NEUROTEXT", "Neuro Text"],
      "Frame Shot": ["Frame Flow"],
    } as Record<string, string[]>)[name] ?? [],
    evidence: name === "Original EZ Reader" ? "Live landing page https://originalezreader.ink, captured October 2026" : "Site /utilities app Details and /resume descriptions; sparse live listings noted explicitly",
  })),
  ...rows(`
Living Book Maker|https://livingbookmaker.ink|An older /main-page app listing named Living Book Maker. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Style Mimic|https://stylemimic.xyz|An older /main-page app listing named Style Mimic. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Major Brain|https://majorbrain.xyz|An older /main-page app listing named Major Brain. The captured live page says the owner suspended the service, and no detailed capabilities or audience are documented.
Text Evaluator|https://textevaluator.xyz|An older /main-page app listing named Text Evaluator. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Text IQ|https://textiq.xyz/|An older /main-page app listing named Text IQ. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Improve Your Writing|https://improveyourwriting.xyz|An older /main-page app listing named Improve Your Writing. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Cognitive Enhancer|https://cognitiveenhancer.xyz|An older /main-page app listing named Cognitive Enhancer. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
Text Genius|https://textgenius.xyz|An older /main-page app listing named Text Genius. A live description could not be retrieved, so its workflows and intended audience are not established by the available material.
EZREDIRECT|https://ezredirect.xyz|Generates callback URLs for domain names, and its captured live page identifies a Google OAuth URL Generator. Developers registering domains and integrations can use it to obtain callback endpoints.
HTML Converter|https://htmlconverter.xyz|An older /main-page app listing named HTML Converter. A live description could not be retrieved, so its supported conversions and intended audience are not established by the available material.
Law Organizer|https://laworganizer.xyz|An older /main-page app listing named Law Organizer. Its captured live page returned no readable description, so detailed legal-document capabilities and intended audience are not established.
PDF Shrinker|https://shrinkpdf.xyz|The site's Details describe browser-based PDF compression using quality presets or a target size, for people reducing document file sizes. The captured live link returned an unavailable-app page, so current availability is not confirmed.
Ask Emerson|https://askemerson.ink|Offers AI conversations inspired by Ralph Waldo Emerson and other thinkers, leaders, coaches, and strategists. It is for visitors seeking to explore ideas and thoughtful guidance through dialogue.
Astrology Plus|https://astrologyplus.xyz|An older /main-page app listing named Astrology Plus. Its captured live page exposed no readable description, so detailed capabilities and intended audience are not established.
Black Jesus|https://blackjesus.ink|The live page identifies spiritual guidance in the Black church tradition. It is relevant to visitors seeking that form of spiritual guidance, but further workflows are not documented in the captured material.
What Would Jesus Do?|https://whatwouldjesusdo.in|The live page identifies an AI spiritual-guidance application. It is for visitors exploring spiritual guidance, but further workflows are not documented in the captured material.
Originality Meter (earlier URL)|https://originalitymeter.com|An older /main-page listing uses this URL for Originality Meter, while the current /utilities catalog uses originality.ink. The current app is described as evaluating and transforming text for originality, intelligence, cogency, and quality; this earlier destination's current availability was not verified.
`).map(([name, url, text], i): KnowledgePassage => ({
    id: `legacy-app-${i}`, kind: "app", name, url, text, aliases: [],
    evidence: "Older site /main-page catalog and Details; live fetch attempted October 2026, with availability and evidence gaps noted",
  })),
  ...courses("courses", `
Geometry|https://basicgeometry.ink|Four-week course in geometric intuition and proof
Calculus|https://calculus101.ink|Four-week course exploring mathematical change
Trigonometry|https://trigonometry.ink|Right triangles, waves, identities, and rotations
Precalculus|https://precalculus101.ink|Functions, formulas, and preparation for calculus
Economics 101|https://economics101.ink|Economic ideas, choices, and trade-offs
Metaethics|https://metaethics.ink|Four-unit ethics course on goodness and moral truth
Prompt Engineering for AI Generative|https://generativeai.ink/|Four-week introduction to prompt engineering
Constructive Critical Reasoning (Level 3)|https://constructivereasoning.xyz|Drawing the strongest conclusions supported by data
Quantitative Reasoning (Level 3)|https://quantitativereasoning.ink|College quantitative reasoning with AI tutoring and assessment
Evolutionary Psychology (Level 3)|https://evopsych.xyz|Natural selection, cooperation, language, and culture
Know Thyself (Level 3)|https://knowthyself101.xyz|Four-week course in structured self-examination
Portfolio Analysis (Level 3)|https://portfolioanalysis101.ink|College portfolio analysis with tutoring and assessment
Public Speaking (Level 3)|https://publicspeaking101.xyz|Spoken-first public speaking practice and coaching
Voice-Powered KnowThySelf (Level 3)|https://voicepoweredknowthyself.xyz|Voice-based structured self-inquiry
Finance (Level 3)|https://finance101.xyz|Time value of money through company cost of capital
Business Ethics (Level 3)|https://businessethics101.ink|Four-week college business ethics
Teach Yourself Math Notation (Level 3)|https://mathnotation.ink|Symbols of mathematics, science, and engineering
Conceptual Mathematics (Level 3)|https://conceptualmath.ink|Mathematical ideas from integers to incompleteness and computation
Conceptual Physics (Level 3)|https://conceptualphysics.ink|College conceptual physics with AI tutoring and assessment
Critical Thinking (Level 3)|https://criticalthinking.ink|College critical thinking with AI practice and grading
Formal Logic (Level 3)|https://formallogic.xyz|Four-week course in logical reasoning
AI|https://ai101.ink|Artificial intelligence, agents, alignment, and its future
Developmental Mathematics (Level 3)|https://developmentalmath.ink|Place value through the start of algebra
Analytic Philosophy (Level 3)|https://analyticphilosophy101.ink|Logical form, formal truth, and the map of philosophy
Ethics (Level 3)|https://ethics101.ink|Goodness and moral truth in four units
Philosophy (Level 3)|https://philosophy101.xyz|Reasoning, mind, reality, God, and the good
`),
  ...courses("nanocertifications", `
AI Math (Level 1)|https://aimath1.xyz|Self-paced introduction to mathematics behind modern AI
Psychoanalysis|https://nanofreud.xyz|Psychoanalytic theory, history, technique, and evidence
Intelligence Booster|https://iqbooster.xyz|Reasoning skills and aptitude-test practice
AI-Assisted Grading and Assessment (Level 1)|https://aigrading1.ink|Introduction to AI-assisted grading and assessment
Generative AI Integration|https://generativeai.ink|Integrating generative models into software systems
Ethical AI & Governance Technology|https://aigovernance.ink|AI harms, values, and governance
Infinite Series|https://nanoinfiniteseries.xyz|Self-paced adult course on infinite series
Cloud Architecture|https://cloudarchitecture.ink|Reliable and secure systems using AWS and Azure
`),
  ...courses("microcertifications", `
IQ Booster (Level 2)|https://iqbooster.xyz|Reasoning and aptitude-test skills
Spatial IQ Booster (Level 2)|https://spatialiqbooster.xyz|Spatial reasoning and related test practice
Evolutionary Psychology (Level 2)|https://babyevopsych.xyz|Introductory evolutionary psychology
AI (Level 2)|https://babyartificialintelligence.xyz|Introductory artificial intelligence
AI Math (Level 2)|https://babyaimath.xyz|Accessible mathematics behind AI
Diagonalization and Incompleteness (Level 2)|https://diagonalization.xyz|Introductory diagonalization and incompleteness
Finite Math (Level 2)|https://babyfinitemath.xyz|Introductory finite mathematics
Cognitive Science 101 (Level 2)|https://babycognitivescience101.xyz|Basic course on how the mind works
Infinite Series (Level 2)|https://babyinfiniteseries.xyz|Introductory infinite series
Constructive Critical Reasoning (Level 2)|https://basicconstructivereasoning.xyz|Conclusions justified by the available data
AI Logic (Level 2)|https://ailogiccourse.xyz|Ideas behind AI, agents, and alignment
Personal Finance (Level 2)|https://personalfinance101.xyz|Money, investing, insurance, and life planning
Voice Powered Know Thyself (Level 2)|https://voicepoweredknowthyself.xyz|Voice-based structured self-knowledge
Criminal Psychology (Level 2)|https://babycrimpsych.xyz|Introductory criminal psychology
Programming (Python-based CS 1 / Computational Thinking) (Level 2)|https://python101.xyz|Python programming and computational thinking
Prompt Engineering (Level 2)|https://promptengineering.ink|Four-week introduction to prompt engineering
Data Structures and Algorithms (Level 2)|https://datastructures101.xyz|Data structures and algorithms with practice and assessment
Databases and SQL (Level 2)|https://databases101.xyz|Relational databases and SQL
Machine Learning and Applied AI (Level 2)|https://machinelearning101.xyz|Introduction to machine learning and applied AI
Computer Systems (Level 2)|https://computersystems101.xyz|Introduction to computer systems
Biology (Level 2)|https://biology101.xyz|Biology with lectures, practice, and assessment
Sociology 101 (Level 2)|https://sociology101.ink|Introductory sociology
Data Analytics (Level 2)|https://babyanalytics.xyz|Introductory data analytics
Developmental Psychology (Level 2)|https://babydevelopmentalpsychology.xyz|Introductory developmental psychology
Financial & Managerial Analytics (Level 2)|https://babyfinancialanalytics.xyz|Introductory financial and managerial analysis
Discrete Math (Level 2)|https://basicdiscretemath.xyz|Introductory discrete mathematics
Lambda Calculus (Level 2)|https://basiclambdacalculus.xyz|Introductory lambda calculus
Marketing Analytics (Level 2)|https://babymarketinganalytics.xyz|Introductory marketing analysis
Operations & Supply Chain Analytics (Level 2)|https://babysupplychain.xyz|Introductory operations and supply-chain analysis
Predictive Analytics (Level 2)|https://babypredictiveanalytics.xyz|Introductory predictive analysis
Revenue Management & Pricing Analytics (Level 2)|https://basicrevenuemanagement.xyz|Introductory revenue management and pricing
Psychodynamic Therapy 101 (Level 2)|https://psychodynamictherapy.xyz|Basic psychodynamic theory and therapy
Psychodynamic Treatment of BPD 101 (Level 2)|https://psychodynamicbpdtherapy.xyz|Basic psychodynamic treatment concepts for BPD
Psychodynamic Treatment of OCD 101 (Level 2)|https://ocd101.xyz|Basic psychodynamic treatment concepts for OCD
Restaurant & Hospitality Analytics (Level 2)|https://babyrestaurantanalytics.xyz|Introductory restaurant and hospitality analytics
Workforce Analytics (Level 2)|https://babyworkforceanalytics.xyz|Introductory workforce analytics
`),
  ...courses("four-hour-certifications", `
Aging with OCD|https://agingwithocd.ink|OCD and aging, based on The Rigid Mind Over Time
Cryptography|https://picocryptography.xyz|Secrets, locks, and digital trust
Evolutionary Psychology|https://evopsychfourhour.xyz|Evolutionary explanations of human behavior
Basic Tenets of Psychoanalysis|https://nanofreud.xyz/|Psychoanalytic theory and its basic principles
IQ Booster|https://fourhouriqbooster.xyz|Six reasoning skills in a compact course
Personal Finance|https://fourhourpersonalfinance.xyz|Personal finance in a compact certification course
Epistemology|https://onedayepistemology.xyz|Knowledge, truth, and justification
Aging with BPD|https://agingbpd.xyz|Borderline personality disorder and aging
Measurement Theory|https://measurement101.xyz|Standards, comparison, and measurement
Four-Hour BPD|https://fourhourbpd.xyz|Understanding borderline personality disorder
The Psychodynamics of BPD|https://bpd101.xyz|Psychodynamic understanding of borderline personality disorder
`),
  ...rows(`
A HISTORY OF AMERICAN FINANCIAL REGULATION|https://financialregulation.xyz
AI AND PHILOSOPHY|https://epistemicengineering.xyz
AI LOGIC|https://thelogicofartificialintelligence.xyz
ANALYTIC PHILOSOPHY (COMPLETE)|https://analyticphilosophy.xyz
BEAUTY JUNKIES (BY ALEX KUCZYNSKI)|https://beautyjunkies.ink
CAUSATION|https://causality101.xyz
DICTIONARY OF ANALYTIC PHILOSOPHY|https://dictionaryofanalyticphilosophy.xyz
EMPIRICISM AND ITS LIMITS|https://empiricismandrationalism.xyz
EPISTEMOLOGY|https://epistemology101.xyz
ETHICS|https://ethics101.ink
FREEDOM|https://humanfreedom.xyz
MATHEMATICAL LOGIC|https://mathlogic.xyz
ON THE CARDINALITY OF PROOF SPACES|https://godel101.xyz
PLATONISM|https://platonism.ink
SEMANTICS|https://semantics.ink
SYMBOLIC LOGIC|https://symboliclogic.ink
THE INCOMPLETENESS OF DEDUCTIVE LOGIC|https://incompletenessofdeduction.xyz
THEORETICAL KNOWLEDGE & INDUCTIVE INFERENCE|https://theoreticalknowledge.xyz
WHY WAS SOCRATES EXECUTED?|https://socrates.ink
ANARCHISM AND OTHER ESSAYS|https://anarchismandotheressays.xyz
ART OF WAR|https://suntzu.ink
BOOK OF MORMON|https://bookofmormon101.xyz
CIVILIZATION AND ITS DISCONTENTS|https://freudciv.xyz
DEATH OF IVAN ILYCH|https://ivanilych.xyz
DRACULA|https://draculaplus.xyz
DREAM PSYCHOLOGY|https://dreampsychology.xyz
FRANKENSTEIN|https://frankenstein.ink
INDUSTRIAL SOCIETY AND ITS FUTURE|https://industrialsocietyanditsfuture.xyz
KING JAMES BIBLE|https://kingjamesbible.xyz
OUR KNOWLEDGE OF THE EXTERNAL WORLD|https://bertrandrussell.xyz
PRINCIPLES OF PSYCHOLOGY|https://principlesofpsychologybyherbertspencer.xyz
SHAKESPEARE COMPLETE WORKS|https://shakespeare101.xyz
THE COMMUNIST MANIFESTO|https://communistmanifesto.xyz
THE LAWS|https://thelawsbyplato.xyz
TOTEM AND TABOO|https://totemandtaboo.ink
TRACTATUS LOGICO-PHILOSOPHICUS|https://tractatuslogicophilosophicus.shop
`).map(([name, url], i): KnowledgePassage => ({
    id: `book-${i}`, kind: "book", name, url, aliases: [],
    text: `An interactive living-book edition of ${name} in the Zhi Systems catalog. Building an interactive edition does not mean John-Michael authored the underlying work; authorship must not be inferred from this listing.`,
    evidence: "Site /living-books full catalog",
  })),
  ...rows(`
portfolio|Portfolio scale|https://zhisystems.ai/resume|John-Michael Kuczynski, PhD, is Founder and AI-Architect at Zhi Systems. The owner states 47 deployed AI apps, 80+ AI-taught certification courses, and 36 interactive living books. Catalog listings can share destinations across levels; these headline counts are owner-supplied, not independently measured active deployments.
services|Custom AI systems for firms|https://zhisystems.ai/resume|John-Michael offers designing and building custom AI systems for firms: document-analysis tools, quantitative finance tools, retrieval-grounded research tools, and AI-taught training courses. His work includes end-to-end architecture, implementation, deployment, and refinement of LLM applications and learning platforms. These offerings do not establish any particular paying client, contract, revenue, or business outcome. Contact jmkuczynski@yahoo.com to discuss a custom tool.
experience|Professional experience|https://zhisystems.ai/resume#resume-experience|Founder and AI-Architect at Zhi Systems, designing and shipping AI products. Madison Educational Consulting, 2015–2025: private advisory practice producing research reports and analytical writing for executives and professionals; prior self-employed ghostwriting and educational consulting. Bard College, Assistant Professor and Research Professor, 2012–2015. Virginia Commonwealth University (VCU), Assistant Professor of Philosophy, 2007–2012. No verified Zhi founding date or named client history is supplied.
education|Education|https://zhisystems.ai/resume#resume-education|PhD, University of California, Santa Barbara (UCSB). BA, University of California, Los Angeles (UCLA), summa cum laude. His 2006 UCSB dissertation is Moral Structure of Legal Obligation. The AI-taught course platforms are products he built, not additional degrees or certifications he earned.
pub-ai-2025|Evidence from Large Language Models: How AI Vindicates Classical Theories of Meaning|https://philpapers.org/s/John-Michael%20Kuczynski|John-Michael Kuczynski, Evidence from Large Language Models: How AI Vindicates Classical Theories of Meaning, Communication and Cognition, 2025. This bibliographic information was explicitly supplied by the owner in the Q&A rebuild request. No abstract, DOI, volume, pages, or article-specific URL was supplied; the link is the author's PhilPapers search, not a verified record for this article.
pub-ai-2026|On AI and Some Epistemological Issues|https://philpapers.org/s/John-Michael%20Kuczynski|John-Michael Kuczynski, On AI and Some Epistemological Issues, Communication and Cognition, 2026. This bibliographic information was explicitly supplied by the owner in the Q&A rebuild request. No abstract, DOI, volume, pages, or article-specific URL was supplied; the link is the author's PhilPapers search, not a verified record for this article.
pub-book-2007|Conceptual atomism and the computational theory of mind: a defense of content-internalism and semantic externalism|https://philpapers.org/rec/KUCCAA|Peer-reviewed book by John-Michael Kuczynski, John Benjamins & Co., 2007.
pub-book-2009|Analytic Philosophy|https://philpapers.org/rec/KUCITA|Peer-reviewed book by John-Michael Kuczynski, Kendall Hunt Publishing Company, 2009.
pub-book-2012|Empiricism and the Foundations of Psychology|https://philpapers.org/rec/KUCEAT|Peer-reviewed book by John-Michael Kuczynski, John Benjamins Publishing Company, 2012.
pub-sorites|Implicit comparatives and the Sorites|https://philpapers.org/rec/JOHICA|Peer-reviewed article by John-Michael Kuczynski, History and Philosophy of Logic 27(1), 1–8, 2006.
pub-form|Two concepts of "form" and the so-called computational theory of mind|https://philpapers.org/rec/KUCTCO|Peer-reviewed article by John-Michael Kuczynski, Philosophical Psychology 19(6), 795–821, 2006.
pub-thought|Formal operations and simulated thought|https://philpapers.org/rec/KUCFOA|Peer-reviewed article by John-Michael Kuczynski, Philosophical Explorations 9(2), 221–234, 2006.
pub-counterfactuals|Counterfactuals: The Epistemic Analysis|https://philpapers.org/rec/KUCCTE-2|Peer-reviewed article by John-Michael Kuczynski, Philosophia Scientiae 1(9-1), 83–126, 2005, as listed in the owner's bibliography.
pub-worlds|Does Possible World Semantics Turn all Propositions into Necessary ones?|https://philpapers.org/rec/KUCDPW|Peer-reviewed article by John-Michael Kuczynski, Journal of Pragmatics 39(5), 2007. The uploaded page range is inconsistent and is deliberately not repeated.
pub-intensionality|Intensionality, Modality, Rationality: Some Presemantic Considerations|https://philpapers.org/rec/KUCIMR|Peer-reviewed article by John-Michael Kuczynski, Journal of Pragmatics 42(8), 2314–2346, 2010.
pub-literal|What is Literal Meaning?|https://philpapers.org/rec/KUCWIL|Peer-reviewed article by John-Michael Kuczynski, Communication and Cognition: An Interdisciplinary Quarterly Journal 46(1–4), 2014, as supplied in the uploaded bibliography.
dissertation|Moral Structure of Legal Obligation|https://philpapers.org/rec/JOHMSO-5|John-Michael Kuczynski's doctoral dissertation, University of California, Santa Barbara, 2006.
contact|Contact|mailto:jmkuczynski@yahoo.com|Email John-Michael Kuczynski at jmkuczynski@yahoo.com about his work or a project.
`).map(([id, name, url, text]): KnowledgePassage => ({
    id, name, url, text, kind: "background", aliases: [],
    evidence: id.startsWith("pub-ai") ? "Owner Q&A rebuild request, October 2026 (bibliographic claim; article record not independently verified)" :
      id.startsWith("pub-") || id === "dissertation" ? "Uploaded Edtech / Certification Course Systems bibliography" :
        "Site /resume and owner-supplied professional history; no speculative clients or sample resume claims",
  })),
];
