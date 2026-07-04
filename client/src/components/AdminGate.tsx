import { useAuth } from "@/hooks/useAuth";
import NavBar from "@/components/NavBar";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto mt-24 text-center text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto mt-24 bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Restricted</h1>
          <p className="text-gray-600 mb-4">
            This section is only available to the site administrator.
          </p>
          {!isSignedIn && <GoogleSignInButton />}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
