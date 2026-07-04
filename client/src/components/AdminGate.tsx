import { useUser } from "@clerk/clerk-react";
import NavBar from "@/components/NavBar";

const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn, isLoaded } = useUser();
  const email = (user?.primaryEmailAddress?.emailAddress || "").toLowerCase();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto mt-24 text-center text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn || email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto mt-24 bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Restricted</h1>
          <p className="text-gray-600 mb-4">
            This section is only available to the site administrator.
          </p>
          {!isSignedIn && (
            <a
              href="/sign-in"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded px-6 py-2"
            >
              Sign In
            </a>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
