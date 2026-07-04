import GoogleSignInButton from "@/components/GoogleSignInButton";
import NavBar from "@/components/NavBar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-md mx-auto mt-24 bg-white border border-gray-200 rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign In</h1>
        <p className="text-gray-600 mb-6">Use your Google account to continue.</p>
        <GoogleSignInButton />
      </div>
    </div>
  );
}
