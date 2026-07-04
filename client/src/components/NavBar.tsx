import { useAuth, useSignOut } from "@/hooks/useAuth";
import GoogleSignInButton from "@/components/GoogleSignInButton";

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
  const { user, isSignedIn, isAdmin } = useAuth();
  const signOut = useSignOut();
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
            {isAdmin && (
              <a
                href="/administrative"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Administrative
              </a>
            )}
            {isSignedIn ? (
              <span className="flex items-center gap-2">
                {user?.avatar && (
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-6 h-6 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                )}
                <span className="text-gray-600 text-sm">{user?.name || user?.email}</span>
                <button
                  onClick={() => signOut()}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign Out
                </button>
              </span>
            ) : (
              <GoogleSignInButton className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
