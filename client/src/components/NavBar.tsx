const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Living Courses" },
  { href: "/johnson-wales", label: "Restaurant and Hospitality" },
  { href: "/baby-living-courses", label: "Basic Living Courses" },
  { href: "/investor-notes", label: "Investor Notes" },
  { href: "/investor-briefings", label: "Investor Briefings" },
  { href: "/office-use", label: "Office Use" },
  { href: "/ai-higher-ed", label: "AI in Higher Ed" },
];

export default function NavBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="mailto:contact@zhisystems.ai"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact Us
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
        </div>
      </div>
    </div>
  );
}
