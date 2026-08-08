import NavBar from "@/components/NavBar";

interface Level {
  level: number;
  name: string;
  emoji: string;
  requirement: string;
  description: string;
  accent: string;
  border: string;
}

const levels: Level[] = [
  {
    level: 1,
    name: "Cadet",
    emoji: "🎖️",
    requirement: "Pass one course",
    description:
      "Complete any one of our four-week courses — from AI Logic to Biology to Sociology 101, with many more on the way. Every course is taught, tutored, and graded by AI, with built-in integrity checks, so your pass certifies genuine competence.",
    accent: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    level: 2,
    name: "Practitioner",
    emoji: "🏅",
    requirement: "Pass a sequence of three courses",
    description:
      "Complete a sequenced set of three courses — the equivalent of one of our full-length Living Courses. A Practitioner has demonstrated sustained, verified mastery across an entire discipline sequence.",
    accent: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    level: 3,
    name: "Master",
    emoji: "🏆",
    requirement: "Pass three sequences — nine courses in all",
    description:
      "Complete three full sequences of three — nine courses in total. Mastery at this level means broad, deep, independently verified competence that institutions and employers can trust.",
    accent: "bg-amber-50",
    border: "border-amber-200",
  },
];

export default function Microcertifications() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Microcertifications
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Every course you pass earns you verified credit toward a
          microcertification. There are three levels. Each one is cheat-proof
          by design — your credential certifies what you actually know.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {levels.map((l) => (
            <div
              key={l.level}
              className={`rounded-xl border ${l.border} ${l.accent} p-6 flex flex-col`}
            >
              <div className="text-4xl mb-3">{l.emoji}</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Level {l.level}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {l.name}
              </h2>
              <div className="font-semibold text-gray-800 mb-3">
                {l.requirement}
              </div>
              <p className="text-gray-600 leading-relaxed">{l.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-gray-600 max-w-3xl">
          <p>
            One course makes you a <strong>Cadet</strong>. Three sequenced
            courses make you a <strong>Practitioner</strong>. Three sequences —
            nine courses — make you a <strong>Master</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
