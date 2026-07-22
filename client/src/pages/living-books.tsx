import NavBar from "@/components/NavBar";

const livingBooksByKuczynski = [
  { title: "A HISTORY OF AMERICAN FINANCIAL REGULATION", url: "https://financialregulation.xyz" },
  { title: "AI AND PHILOSOPHY", url: "https://epistemicengineering.xyz" },
  { title: "AI LOGIC", url: "https://thelogicofartificialintelligence.xyz" },
  { title: "ANALYTIC PHILOSOPHY (COMPLETE)", url: "https://analyticphilosophy.xyz" },
  { title: "BEAUTY JUNKIES (BY ALEX KUCZYNSKI)", url: "https://beautyjunkies.ink" },
  { title: "CAUSATION", url: "https://causality101.xyz" },
  { title: "DICTIONARY OF ANALYTIC PHILOSOPHY", url: "https://dictionaryofanalyticphilosophy.xyz" },
  { title: "EMPIRICISM AND ITS LIMITS", url: "https://empiricismandrationalism.xyz" },
  { title: "EPISTEMOLOGY", url: "https://epistemology101.xyz" },
  { title: "ETHICS", url: "https://ethics101.ink" },
  { title: "FREEDOM", url: "https://humanfreedom.xyz" },
  { title: "MATHEMATICAL LOGIC", url: "https://mathlogic.xyz" },
  { title: "ON THE CARDINALITY OF PROOF SPACES", url: "https://godel101.xyz" },
  { title: "PLATONISM", url: "https://platonism.ink" },
  { title: "SEMANTICS", url: "https://semantics.ink" },
  { title: "SYMBOLIC LOGIC", url: "https://symboliclogic.ink" },
  { title: "THE INCOMPLETENESS OF DEDUCTIVE LOGIC", url: "https://incompletenessofdeduction.xyz" },
  { title: "THEORETICAL KNOWLEDGE & INDUCTIVE INFERENCE", url: "https://theoreticalknowledge.xyz" },
  { title: "WHY WAS SOCRATES EXECUTED?", url: "https://socrates.ink" }
];

const classicsBooks = [
  { title: "ANARCHISM AND OTHER ESSAYS", url: "https://anarchismandotheressays.xyz" },
  { title: "ART OF WAR", url: "https://suntzu.ink" },
  { title: "BOOK OF MORMON", url: "https://bookofmormon101.xyz" },
  { title: "CIVILIZATION AND ITS DISCONTENTS", url: "https://freudciv.xyz" },
  { title: "DEATH OF IVAN ILYCH", url: "https://ivanilych.xyz" },
  { title: "DRACULA", url: "https://draculaplus.xyz" },
  { title: "DREAM PSYCHOLOGY", url: "https://dreampsychology.xyz" },
  { title: "FRANKENSTEIN", url: "https://frankenstein.ink" },
  { title: "INDUSTRIAL SOCIETY AND ITS FUTURE", url: "https://industrialsocietyanditsfuture.xyz" },
  { title: "KING JAMES BIBLE", url: "https://kingjamesbible.xyz" },
  { title: "OUR KNOWLEDGE OF THE EXTERNAL WORLD", url: "https://bertrandrussell.xyz" },
  { title: "PRINCIPLES OF PSYCHOLOGY", url: "https://principlesofpsychologybyherbertspencer.xyz" },
  { title: "SHAKESPEARE COMPLETE WORKS", url: "https://shakespeare101.xyz" },
  { title: "THE COMMUNIST MANIFESTO", url: "https://communistmanifesto.xyz" },
  { title: "THE LAWS", url: "https://thelawsbyplato.xyz" },
  { title: "TOTEM AND TABOO", url: "https://totemandtaboo.ink" },
  { title: "TRACTATUS LOGICO-PHILOSOPHICUS", url: "https://tractatuslogicophilosophicus.shop" }
];

function BookItem({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
      <div className="w-full sm:w-80">
        <span className="font-medium text-gray-900">{title}</span>
      </div>
      <span className="text-gray-500 hidden sm:inline">—</span>
      <a
        href={url}
        className="text-blue-600 hover:text-blue-800 hover:underline break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
    </div>
  );
}

export default function LivingBooks() {
  return (
    <div className="font-sans bg-white text-gray-900 leading-relaxed min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Living Books
          </h2>

          {/* What's a Living Book explanation */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">What's a Living Book?</h3>
            <p className="text-gray-700 mb-3">
              A Living Book is an interactive version of any text, powered by AI. Features include:
            </p>
            <ul className="text-gray-700 space-y-1 list-disc list-inside">
              <li>Ask AI anything about the text (math notation supported)</li>
              <li>Get AI to write about the text (with full math export support)</li>
              <li>Rewrite the text using custom instructions</li>
              <li>Generate tests based on the text</li>
              <li>Take AI-generated tests</li>
              <li>Create study guides</li>
              <li>Generate podcasts from selected passages</li>
              <li>Listen to AI narration</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              BY ZHI SYSTEMS
            </h3>

            <div className="grid gap-3">
              {livingBooksByKuczynski.map((book) => (
                <BookItem key={book.title} title={book.title} url={book.url} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Classics / Public Domain
            </h3>

            <div className="grid gap-3">
              {classicsBooks.map((book) => (
                <BookItem key={book.title} title={book.title} url={book.url} />
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-gray-600 text-center">
            © Zhi Systems 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
