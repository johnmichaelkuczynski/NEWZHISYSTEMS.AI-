import { useAuth } from "@/hooks/use-auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Living Courses" },
  { href: "/johnson-wales", label: "Restaurant and Hospitality" },
  { href: "/baby-living-courses", label: "Basic Living Courses" },
  { href: "/journal", label: "Investor Notes" },
  { href: "/podcasts", label: "Investor Briefings" },
  { href: "/office-use", label: "Office Use" },
  { href: "/ai-higher-ed", label: "AI in Higher Ed" },
];

export default function NavBar() {
  const { user, isAuthenticated } = useAuth();
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="mailto:zhi@zhisystems.org"
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
            {(user?.email || "").toLowerCase() === "johnmichaelkuczynski@gmail.com" && (
              <a
                href="/administrative"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Administrative
              </a>
            )}
            {isAuthenticated ? (
              <span className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">{user?.email}</span>
                <a
                  href="/api/logout"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign Out
                </a>
              </span>
            ) : (
              <a
                href="/api/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded"
              >
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
