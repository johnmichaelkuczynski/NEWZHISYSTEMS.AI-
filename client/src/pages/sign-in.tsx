import { SignIn } from "@clerk/clerk-react";
import NavBar from "@/components/NavBar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex justify-center pt-16 pb-16">
        <SignIn routing="hash" forceRedirectUrl="/" />
      </div>
    </div>
  );
}
