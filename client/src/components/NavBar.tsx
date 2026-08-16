import zhiLogo from "@assets/zhi_logoc_1786844531458.png";

const links = [
  { href: "/nanocertifications", label: "Nanocertifications" },
  { href: "/", label: "Microcertifications" },
  { href: "/courses", label: "Certifications" },
];

const privateLinks = [
  { href: "/utilities", label: "Utilities" },
  { href: "/living-books", label: "Memos" },
  { href: "/main-page", label: "Reports" },
  { href: "/ai-higher-ed", label: "AI in Higher Ed" },
  { href: "/investor-notes", label: "Investor Notes" },
  { href: "/investor-briefings", label: "Investor Briefings" },
  { href: "/office-use", label: "Office Use" },
  { href: "/administrative", label: "Administrative" },
];

export default function NavBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-start justify-between gap-6">
          <div className="shrink-0 flex flex-col items-center gap-1">
            <a
              href="mailto:zhi@zhisystems.org"
              className="flex flex-col items-center gap-1"
            >
              <img
                src={zhiLogo}
                alt="Zhi Systems logo"
                className="w-12 h-12 rounded"
              />
              <span className="text-xs font-medium text-gray-800 tracking-wide whitespace-nowrap">
                ZHI SYSTEMS
              </span>
            </a>
            <div className="flex flex-col items-center gap-0.5 mt-1 text-lg leading-none">
              <span title="Education">🎓</span>
              <span title="Intelligence">🧠</span>
              <span title="Psychology">🧩</span>
              <span title="Finance">💰</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-0.5">
            <a
              href="mailto:zhi@zhisystems.org"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded mr-4"
            >
              ✉️ Contact Us
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {privateLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
