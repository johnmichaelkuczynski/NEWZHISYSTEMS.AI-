import { useQuery } from "@tanstack/react-query";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import NavBar from "@/components/NavBar";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Counts {
  visits: number;
  unique: number;
}

interface AnalyticsData {
  totals: {
    last24h: Counts;
    last7d: Counts;
    last30d: Counts;
    allTime: Counts;
  };
  hourly: { label: string; visits: number; unique: number }[];
  daily: { label: string; visits: number; unique: number }[];
  countries: { country: string; visits: number; unique: number }[];
  cities: { city: string; region: string; country: string; visits: number }[];
  pages: { path: string; visits: number }[];
  recent: {
    id: string;
    path: string;
    ip: string;
    userAgent: string | null;
    referer: string | null;
    country: string | null;
    region: string | null;
    city: string | null;
    createdAt: string;
  }[];
}

function StatCard({ title, counts }: { title: string; counts?: Counts }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">
        {counts ? counts.visits.toLocaleString() : "--"}
      </p>
      <p className="text-xs text-gray-500">
        {counts ? `${counts.unique.toLocaleString()} unique` : ""}
      </p>
    </div>
  );
}

const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

export default function Administrative() {
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;
  return (
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/administrative">
      <SignedOut>
        <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
          <NavBar />
          <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
            <p className="text-gray-600 mb-6">Sign in to view visitor analytics.</p>
            <SignIn routing="hash" />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <AdminGate />
      </SignedIn>
    </ClerkProvider>
  );
}

function AdminGate() {
  const { user } = useUser();
  const emails = (user?.emailAddresses || []).map((e) =>
    e.emailAddress.toLowerCase(),
  );
  if (!emails.includes(ADMIN_EMAIL)) {
    return (
      <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
        <NavBar />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-red-600 mb-4">
            This account is not authorized to view analytics.
          </p>
          <SignOutButton>
            <button className="text-blue-600 underline">
              Sign out and try a different account
            </button>
          </SignOutButton>
        </div>
      </div>
    );
  }
  return <AnalyticsDashboard />;
}

function AnalyticsDashboard() {
  const { data, isLoading, error } = useQuery<AnalyticsData>({
    queryKey: ["/api/analytics"],
    refetchInterval: 60_000,
  });

  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-1">Administrative</h1>
        <p className="text-gray-600 text-sm mb-6">
          Visitor analytics for zhisystems.ai. Auto-refreshes every minute.
        </p>

        {isLoading && <p className="text-gray-600">Loading analytics...</p>}
        {error && (
          <p className="text-red-600">
            Failed to load analytics. Try refreshing the page.
          </p>
        )}

        {data && (
          <>
            {/* Totals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard title="Last 24 Hours" counts={data.totals.last24h} />
              <StatCard title="Last 7 Days" counts={data.totals.last7d} />
              <StatCard title="Last 30 Days" counts={data.totals.last30d} />
              <StatCard title="All Time" counts={data.totals.allTime} />
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Visits — Last 24 Hours</h2>
                {data.hourly.length === 0 ? (
                  <p className="text-gray-500 text-sm">No visits yet.</p>
                ) : (
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={data.hourly}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" fontSize={11} />
                      <YAxis allowDecimals={false} fontSize={11} />
                      <Tooltip />
                      <Bar dataKey="visits" fill="#2563eb" name="Visits" />
                      <Bar dataKey="unique" fill="#93c5fd" name="Unique" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Visits — Last 30 Days</h2>
                {data.daily.length === 0 ? (
                  <p className="text-gray-500 text-sm">No visits yet.</p>
                ) : (
                  <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data.daily}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" fontSize={11} />
                      <YAxis allowDecimals={false} fontSize={11} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="visits"
                        stroke="#2563eb"
                        name="Visits"
                      />
                      <Line
                        type="monotone"
                        dataKey="unique"
                        stroke="#16a34a"
                        name="Unique"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Geography */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Visits by Country</h2>
                {data.countries.length === 0 ? (
                  <p className="text-gray-500 text-sm">No visits yet.</p>
                ) : (
                  <>
                    <ResponsiveContainer width="100%" height={240}>
                      <BarChart data={data.countries.slice(0, 10)} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" allowDecimals={false} fontSize={11} />
                        <YAxis
                          type="category"
                          dataKey="country"
                          width={70}
                          fontSize={11}
                        />
                        <Tooltip />
                        <Bar dataKey="visits" fill="#2563eb" name="Visits" />
                      </BarChart>
                    </ResponsiveContainer>
                    <table className="w-full text-sm mt-3">
                      <thead>
                        <tr className="text-left text-gray-500 border-b">
                          <th className="py-1">Country</th>
                          <th className="py-1 text-right">Visits</th>
                          <th className="py-1 text-right">Unique</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.countries.map((c) => (
                          <tr key={c.country} className="border-b border-gray-100">
                            <td className="py-1">{c.country}</td>
                            <td className="py-1 text-right">{c.visits}</td>
                            <td className="py-1 text-right">{c.unique}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Top Cities</h2>
                {data.cities.length === 0 ? (
                  <p className="text-gray-500 text-sm">
                    No city-level data yet.
                  </p>
                ) : (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="py-1">City</th>
                        <th className="py-1">Region</th>
                        <th className="py-1">Country</th>
                        <th className="py-1 text-right">Visits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.cities.map((c, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-1">{c.city}</td>
                          <td className="py-1">{c.region}</td>
                          <td className="py-1">{c.country}</td>
                          <td className="py-1 text-right">{c.visits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Top pages */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
              <h2 className="font-semibold mb-3">Top Pages</h2>
              {data.pages.length === 0 ? (
                <p className="text-gray-500 text-sm">No visits yet.</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="py-1">Path</th>
                      <th className="py-1 text-right">Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pages.map((p) => (
                      <tr key={p.path} className="border-b border-gray-100">
                        <td className="py-1 font-mono text-xs">{p.path}</td>
                        <td className="py-1 text-right">{p.visits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* All visits (recent 200) */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h2 className="font-semibold mb-3">
                All Visits (most recent 200)
              </h2>
              {data.recent.length === 0 ? (
                <p className="text-gray-500 text-sm">No visits recorded yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="py-1 pr-3">Time</th>
                        <th className="py-1 pr-3">Path</th>
                        <th className="py-1 pr-3">IP</th>
                        <th className="py-1 pr-3">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.recent.map((v) => (
                        <tr key={v.id} className="border-b border-gray-100">
                          <td className="py-1 pr-3 whitespace-nowrap">
                            {new Date(v.createdAt).toLocaleString()}
                          </td>
                          <td className="py-1 pr-3 font-mono text-xs">
                            {v.path}
                          </td>
                          <td className="py-1 pr-3 font-mono text-xs">
                            {v.ip}
                          </td>
                          <td className="py-1 pr-3">
                            {[v.city, v.region, v.country]
                              .filter(Boolean)
                              .join(", ") || "Unknown"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
