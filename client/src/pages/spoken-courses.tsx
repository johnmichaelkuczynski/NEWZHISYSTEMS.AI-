export default function SpokenCourses() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Spoken Courses
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Courses taught by a live AI instructor you can speak with.
          Ask questions, discuss ideas, and work through the material
          in a two-way conversation with your instructor.
        </p>
        <article className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold">
            <a
              href="https://basicpsychoanalysis.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              A Short Course in Psychoanalysis
            </a>
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Five spoken lectures introduce psychoanalysis through live AI
            instruction, two-way discussion, and applied oral assessments.
            Ask questions by speaking or writing and hear your instructor
            respond aloud.
          </p>
          <details className="mt-4 text-gray-700">
            <summary className="cursor-pointer font-medium text-blue-600 hover:text-blue-800">
              Details
            </summary>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Designed for students of psychology, independent learners, and
                curious readers of Freud, this course emphasizes interpreting
                unfamiliar cases rather than memorizing lecture wording.
                Adjust the listening speed and choose a male or female lecture voice.
              </p>
              <p>
                Discuss the material with general AI professors or course-informed
                AI portrayals of Freud and Kernberg, powered by Genius 101.
                These are AI portrayals—not authentic recordings or endorsements.
                Discussion is ungraded and separate from assessment.
              </p>
              <div>
                <h3 className="font-semibold text-gray-900">Five lectures</h3>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>The Hidden Mind</li>
                  <li>Maps, Stages, and Defenses</li>
                  <li>Where the Hidden Surfaces</li>
                  <li>Cure, Conflict, and Loss</li>
                  <li>Beyond the Individual</li>
                </ol>
              </div>
              <p>
                Post-lecture assessments and a final oral examination ask you to
                weigh evidence, consider competing explanations, and defend an
                interpretation. Review your progress, assessment results, and
                recorded answers.
              </p>
              <p className="text-sm text-gray-500">
                Currently open-access, with no sign-in required. Educational
                content only—not psychotherapy, diagnosis, or medical advice.
                AI responses and assessment feedback can be mistaken.
              </p>
            </div>
          </details>
          <a
            href="https://basicpsychoanalysis.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Open course
          </a>
        </article>
      </div>
    </main>
  );
}
