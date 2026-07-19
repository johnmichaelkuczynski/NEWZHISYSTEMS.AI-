import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
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
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import PasswordGate from "@/components/PasswordGate";
import Administrative from "@/pages/administrative";
import LivingBooks from "@/pages/living-books";
import MainPage from "@/pages/main-page";

function useVisitTracking() {
  const [location] = useLocation();
  useEffect(() => {
    if (location.startsWith("/administrative")) return;
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: location }),
    }).catch(() => {});
  }, [location]);
}

function Router() {
  useVisitTracking();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/main-page" component={MainPage} />
      <Route path="/journal/admin" component={JournalAdmin} />
      <Route path="/journal" component={Journal} />
      <Route path="/journal/vol-:volume/no-:issue" component={JournalIssue} />
      <Route path="/journal/:volume/:issue" component={JournalIssue} />
      <Route path="/podcasts" component={Podcasts} />
      <Route path="/office-use" component={OfficeUse} />
      <Route path="/ai-higher-ed">
        <PasswordGate><AiHigherEd /></PasswordGate>
      </Route>
      <Route path="/courses" component={Courses} />
      <Route path="/johnson-wales" component={JohnsonWales} />
      <Route path="/baby-living-courses" component={BabyLivingCourses} />
      <Route path="/living-books" component={LivingBooks} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/administrative">
        <PasswordGate storageKey="administrative-access">
          <Administrative />
        </PasswordGate>
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
