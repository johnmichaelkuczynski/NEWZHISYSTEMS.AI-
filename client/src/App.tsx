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
import Nanocertifications from "@/pages/nanocertifications";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import PasswordGate from "@/components/PasswordGate";
import NavBar from "@/components/NavBar";
import Administrative from "@/pages/administrative";
import LivingBooks from "@/pages/living-books";
import MainPage from "@/pages/main-page";
import Microcertifications from "@/pages/microcertifications";

function useVisitTracking() {
  const [location] = useLocation();
  useEffect(() => {
    if (location.startsWith("/administrative")) return;
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: location }),
    }).catch(() => {});
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "page_view", {
        page_path: location,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
}

const SEO_META: Record<string, { title: string; description: string; noindex?: boolean }> = {
  "/": {
    title: "Microcertifications | Zhi Systems — AI-Taught, Cheat-Proof Courses",
    description:
      "Earn microcertifications through AI-taught, AI-graded, cheat-proof courses with 24/7 built-in tutors. Level 1 Cadet: pass any course from the Zhi Systems catalog.",
  },
  "/microcertifications": {
    title: "Microcertifications | Zhi Systems — AI-Taught, Cheat-Proof Courses",
    description:
      "Earn microcertifications through AI-taught, AI-graded, cheat-proof courses with 24/7 built-in tutors.",
  },
  "/courses": {
    title: "Certifications | Zhi Systems — Self-Paced, AI-Taught College Coursework",
    description:
      "Self-paced, AI-taught, AI-graded college coursework with built-in academic-integrity enforcement: philosophy, logic, math, physics, finance, AI, and more.",
  },
  "/nanocertifications": {
    title: "Nanocertifications | Zhi Systems — AI-Taught Micro Courses",
    description:
      "Nanocertifications from Zhi Systems: compact, rigorous AI-taught courses with built-in tutors, cheat-proof assessments, and verified mastery.",
  },
  "/journal": {
    title: "Journal | Zhi Systems",
    description: "Essays and research from Zhi Systems.",
  },
  "/podcasts": {
    title: "Podcasts | Zhi Systems",
    description: "Audio briefings and podcasts from Zhi Systems.",
  },
  "/privacy-policy": { title: "Privacy Policy | Zhi Systems", description: "Zhi Systems privacy policy." },
  "/terms": { title: "Terms of Service | Zhi Systems", description: "Zhi Systems terms of service." },
  "/administrative": {
    title: "Administrative | Zhi Systems",
    description: "Private analytics.",
    noindex: true,
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function useSeoMeta() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = SEO_META[location];
    const canonicalUrl = `https://zhisystems.ai${location === "/" ? "/" : location}`;
    if (meta) {
      document.title = meta.title;
      upsertMeta("name", "description", meta.description);
      upsertMeta("property", "og:title", meta.title);
      upsertMeta("property", "og:description", meta.description);
    }
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta(
      "name",
      "robots",
      meta?.noindex || location.startsWith("/office-use") || location.startsWith("/journal/admin")
        ? "noindex, nofollow"
        : "index, follow",
    );
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [location]);
}

function Router() {
  useVisitTracking();
  useSeoMeta();
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/" component={Microcertifications} />
      <Route path="/utilities">
        <PasswordGate storageKey="utilities-access"><Home /></PasswordGate>
      </Route>
      <Route path="/main-page">
        <PasswordGate storageKey="main-page-access"><MainPage /></PasswordGate>
      </Route>
      <Route path="/journal/admin" component={JournalAdmin} />
      <Route path="/journal" component={Journal} />
      <Route path="/investor-notes" component={Journal} />
      <Route path="/investor-briefings" component={Podcasts} />
      <Route path="/journal/vol-:volume/no-:issue" component={JournalIssue} />
      <Route path="/journal/:volume/:issue" component={JournalIssue} />
      <Route path="/podcasts" component={Podcasts} />
      <Route path="/office-use" component={OfficeUse} />
      <Route path="/ai-higher-ed">
        <PasswordGate><AiHigherEd /></PasswordGate>
      </Route>
      <Route path="/courses" component={Courses} />
      <Route path="/microcertifications" component={Microcertifications} />
      <Route path="/nanocertifications" component={Nanocertifications} />
      <Route path="/living-books">
        <PasswordGate storageKey="living-books-access"><LivingBooks /></PasswordGate>
      </Route>
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/administrative">
        <Administrative />
      </Route>
      <Route component={NotFound} />
    </Switch>
    </>
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
