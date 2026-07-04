import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Journal from "@/pages/journal";
import JournalIssue from "@/pages/journal-issue";
import JournalAdmin from "@/pages/journal-admin";
import Podcasts from "@/pages/podcasts";
import OfficeUse from "@/pages/office-use";
import AiHigherEd from "@/pages/ai-higher-ed";
import Courses from "@/pages/courses";
import JohnsonWales from "@/pages/johnson-wales";
import BabyLivingCourses from "@/pages/baby-living-courses";
import NotFound from "@/pages/not-found";
import PasswordGate from "@/components/PasswordGate";
import AdminGate from "@/components/AdminGate";
import Administrative from "@/pages/administrative";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { useAuth } from "@/hooks/useAuth";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Zhi Systems</h1>
        <p className="text-gray-600 mb-8">
          Living Books and AI-powered applications. Sign in to enter.
        </p>
        <GoogleSignInButton />
      </div>
    </div>
  );
}

function Protected({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoading } = useAuth();
  if (isLoading) return null;
  if (!isSignedIn) return <Redirect to="/" />;
  return <>{children}</>;
}

function HomeRoute() {
  const { isSignedIn, isLoading } = useAuth();
  if (isLoading) return null;
  return isSignedIn ? <Home /> : <Landing />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
      <Route path="/sign-in/:rest*">
        <Redirect to="/" />
      </Route>
      <Route path="/sign-in">
        <Redirect to="/" />
      </Route>
      <Route path="/journal/admin">
        <Protected><JournalAdmin /></Protected>
      </Route>
      <Route path="/journal">
        <Protected><PasswordGate><Journal /></PasswordGate></Protected>
      </Route>
      <Route path="/journal/vol-:volume/no-:issue">
        <Protected><PasswordGate><JournalIssue /></PasswordGate></Protected>
      </Route>
      <Route path="/journal/:volume/:issue">
        <Protected><PasswordGate><JournalIssue /></PasswordGate></Protected>
      </Route>
      <Route path="/podcasts">
        <Protected><PasswordGate><Podcasts /></PasswordGate></Protected>
      </Route>
      <Route path="/office-use">
        <Protected><AdminGate><OfficeUse /></AdminGate></Protected>
      </Route>
      <Route path="/ai-higher-ed">
        <Protected><PasswordGate storageKey="ai-higher-ed-access"><AiHigherEd /></PasswordGate></Protected>
      </Route>
      <Route path="/courses">
        <Protected><Courses /></Protected>
      </Route>
      <Route path="/johnson-wales">
        <Protected><JohnsonWales /></Protected>
      </Route>
      <Route path="/baby-living-courses">
        <Protected><BabyLivingCourses /></Protected>
      </Route>
      <Route path="/administrative">
        <Protected><Administrative /></Protected>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
