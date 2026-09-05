import { useEffect, useState } from "react";
import zhiLogo from "@assets/zhi_logoc_1786844531458.png";

const links = [
  { href: "/four-hour-certifications", label: "Four Hour Certifications" },
  { href: "/nanocertifications", label: "Nanocertifications" },
  { href: "/", label: "Microcertifications" },
  { href: "/courses", label: "Certifications" },
  { href: "/utilities", label: "Apps" },
];

const secondaryLinks = [
  { href: "/living-books", label: "Living Books" },
  { href: "/main-page", label: "Reports" },
  { href: "/ai-higher-ed", label: "AI in Higher Ed" },
  { href: "/investor-notes", label: "Investor Notes" },
  { href: "/investor-briefings", label: "Investor Briefings" },
  { href: "/office-use", label: "Office Use" },
];

export default function NavBar() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const storageKey = "zhi-anonymous-visitor-id";
    let visitorId = localStorage.getItem(storageKey);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(storageKey, visitorId);
    }

    fetch("/api/visitor-count", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load visitor count");
        }
        return response.json() as Promise<{ count: number }>;
      })
      .then((data) => setVisitorCount(data.count))
      .catch((error) => {
        console.error("Visitor counter error:", error);
      });
  }, []);

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="shrink-0 flex flex-col items-center gap-1">
            <a
              href="mailto:contact@zhisystems.ai"
              className="flex flex-col items-center gap-1"
            >
              <img
                src={zhiLogo}
                alt="Zhi Systems logo"
                className="w-12 h-12 rounded"
              />
              <span className="text-xs font-medium text-gray-800 tracking-wide whitespace-nowrap">
                ZHI SYSTEMS
              </span>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                Visitors: {visitorCount === null ? "…" : visitorCount.toLocaleString()}
              </span>
            </a>
            <div className="flex flex-col items-start gap-1 mt-1 leading-none">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span>🎓</span>
                <span className="text-lg font-medium text-gray-800">教</span>
                <span className="text-xs text-gray-600">Education</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span>🧠</span>
                <span className="text-lg font-medium text-gray-800">智</span>
                <span className="text-xs text-gray-600">Intelligence</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span>🧩</span>
                <span className="text-lg font-medium text-gray-800">心</span>
                <span className="text-xs text-gray-600">Psychology</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span>💰</span>
                <span className="text-lg font-medium text-gray-800">财</span>
                <span className="text-xs text-gray-600">Finance</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-0.5">
            <a
              href="mailto:contact@zhisystems.ai"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded mr-4"
            >
              ✉️ Contact Us
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
