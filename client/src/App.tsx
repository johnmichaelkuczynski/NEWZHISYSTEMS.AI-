import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/journal/admin" component={JournalAdmin} />
      <Route path="/journal">
        <PasswordGate><Journal /></PasswordGate>
      </Route>
      <Route path="/journal/vol-:volume/no-:issue">
        <PasswordGate><JournalIssue /></PasswordGate>
      </Route>
      <Route path="/journal/:volume/:issue">
        <PasswordGate><JournalIssue /></PasswordGate>
      </Route>
      <Route path="/podcasts">
        <PasswordGate><Podcasts /></PasswordGate>
      </Route>
      <Route path="/office-use">
        <PasswordGate storageKey="office-use-access"><OfficeUse /></PasswordGate>
      </Route>
      <Route path="/ai-higher-ed">
        <PasswordGate storageKey="ai-higher-ed-access"><AiHigherEd /></PasswordGate>
      </Route>
      <Route path="/courses" component={Courses} />
      <Route path="/johnson-wales" component={JohnsonWales} />
      <Route path="/baby-living-courses" component={BabyLivingCourses} />
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
