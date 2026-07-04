import { useQuery } from "@tanstack/react-query";
import NavBar from "@/components/NavBar";
import { useUser } from "@clerk/clerk-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Visit } from "@shared/schema";

const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

interface AdminData {
  visits: Visit[];
  stats: {
    allTime: number;
    last24h: number;
    lastMonth: number;
    lastYear: number;
  };
}

function buildSeries(
  visits: Visit[],
  windowMs: number | null,
  bucket: "hour" | "day" | "month",
): { label: string; count: number }[] {
  const now = new Date();
  const buckets: { label: string; start: number; end: number }[] = [];

  if (bucket === "hour") {
    for (let i = 23; i >= 0; i--) {
      const start = new Date(now.getTime() - i * 3600_000);
      start.setMinutes(0, 0, 0);
      buckets.push({
        label: start.getHours() + ":00",
        start: start.getTime(),
        end: start.getTime() + 3600_000,
      });
    }
  } else if (bucket === "day") {
    for (let i = 29; i >= 0; i--) {
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      start.setDate(start.getDate() - i);
      buckets.push({
        label: `${start.getMonth() + 1}/${start.getDate()}`,
        start: start.getTime(),
        end: start.getTime() + 86_400_000,
      });
    }
  } else {
    let monthsBack = 11;
    if (!windowMs && visits.length > 0) {
      const earliest = Math.min(...visits.map((v) => new Date(v.visitedAt).getTime()));
      const e = new Date(earliest);
      monthsBack = Math.max(
        11,
        (now.getFullYear() - e.getFullYear()) * 12 + (now.getMonth() - e.getMonth()),
      );
    }
    for (let i = monthsBack; i >= 0; i--) {
      const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
      buckets.push({
        label:
          start.toLocaleString("en-US", { month: "short" }) +
          (start.getMonth() === 0 || i === monthsBack ? ` '${String(start.getFullYear()).slice(2)}` : ""),
        start: start.getTime(),
        end: end.getTime(),
      });
    }
  }

  const cutoff = windowMs ? now.getTime() - windowMs : null;
  const times = visits
    .map((v) => new Date(v.visitedAt).getTime())
    .filter((t) => !cutoff || t >= cutoff);

  return buckets.map((b) => ({
    label: b.label,
    count: times.filter((t) => t >= b.start && t < b.end).length,
  }));
}

function VisitChart({ title, data }: { title: string; data: { label: string; count: number }[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="label" tick={{ fontSize: 11 }} interval="preserveStartEnd" />
            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} width={30} />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Message({ title, body, showSignIn }: { title: string; body: string; showSignIn?: boolean }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-md mx-auto mt-24 bg-white border border-gray-200 rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 mb-4">{body}</p>
        {showSignIn && (
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

export default function Administrative() {
  const { user, isSignedIn, isLoaded } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const isAdmin = email.toLowerCase() === ADMIN_EMAIL;

  const { data, isLoading: dataLoading, error } = useQuery<AdminData>({
    queryKey: ["/api/admin/visits"],
    queryFn: async () => {
      const res = await fetch("/api/admin/visits", {
        credentials: "include",
      });
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    },
    enabled: isAdmin,
  });

  if (!isLoaded) {
    return <Message title="Administrative" body="Checking your account..." />;
  }

  if (!isSignedIn) {
    return (
      <Message
        title="Administrative"
        body="Please sign in with your Google account to continue."
        showSignIn
      />
    );
  }

  if (!isAdmin) {
    return (
      <Message
        title="Access Denied"
        body="This page is only available to the site administrator."
      />
    );
  }

  if (dataLoading) {
    return <Message title="Administrative" body="Loading visitor data..." />;
  }

  if (error || !data) {
    return (
      <Message
        title="Administrative"
        body="Could not load visitor data. Please try again."
      />
    );
  }

  const { visits, stats } = data;

  // Per-user aggregation: last sign-in, total sign-ins, first seen
  const userMap = new Map<
    string,
    { email: string; name: string; lastSignIn: number; firstSignIn: number; count: number }
  >();
  for (const v of visits) {
    const key = v.userId || v.email || String(v.id);
    const t = new Date(v.visitedAt).getTime();
    const existing = userMap.get(key);
    if (existing) {
      existing.count += 1;
      if (t > existing.lastSignIn) existing.lastSignIn = t;
      if (t < existing.firstSignIn) existing.firstSignIn = t;
    } else {
      userMap.set(key, {
        email: v.email || "(no email)",
        name: v.name || "-",
        lastSignIn: t,
        firstSignIn: t,
        count: 1,
      });
    }
  }
  const users = Array.from(userMap.values()).sort((a, b) => b.lastSignIn - a.lastSignIn);

  // New users per day: bucket each user's first sign-in
  const newUserVisits = users.map(
    (u) => ({ visitedAt: new Date(u.firstSignIn) }) as unknown as Visit,
  );

  const statCards = [
    { label: "Total Users", value: users.length },
    { label: "All Time", value: stats.allTime },
    { label: "Last 24 Hours", value: stats.last24h },
    { label: "Last Month", value: stats.lastMonth },
    { label: "Last Year", value: stats.lastYear },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Administrative — Site Visitors</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {statCards.map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="text-gray-600 text-sm mt-1">
                {s.label === "Total Users" ? "Total Users" : `${s.label} Sign-Ins`}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <VisitChart title="Sign-Ins Per Day (last 30 days)" data={buildSeries(visits, 30 * 86_400_000, "day")} />
          <VisitChart title="New Users Per Day (last 30 days)" data={buildSeries(newUserVisits, 30 * 86_400_000, "day")} />
          <VisitChart title="Last 24 Hours (by hour)" data={buildSeries(visits, 24 * 3600_000, "hour")} />
          <VisitChart title="Last Year (by month)" data={buildSeries(visits, 365 * 86_400_000, "month")} />
          <VisitChart title="All Time (by month)" data={buildSeries(visits, null, "month")} />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">Users</h2>
        {users.length === 0 ? (
          <p className="text-gray-600 mb-8">No users yet.</p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-600">
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Last Sign-In</th>
                  <th className="px-4 py-3">Total Sign-Ins</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email + u.firstSignIn} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-900">{u.email}</td>
                    <td className="px-4 py-2 text-gray-700">{u.name}</td>
                    <td className="px-4 py-2 text-gray-600">{new Date(u.lastSignIn).toLocaleString()}</td>
                    <td className="px-4 py-2 text-gray-600">{u.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 className="text-xl font-bold text-gray-900 mb-3">Sign-In Log</h2>
        {visits.length === 0 ? (
          <p className="text-gray-600">
            No visits recorded yet. Visitors appear here after they sign in with Google.
          </p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-600">
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">When</th>
                </tr>
              </thead>
              <tbody>
                {visits.map((v) => (
                  <tr key={v.id} className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-900">{v.email || "(no email)"}</td>
                    <td className="px-4 py-2 text-gray-700">{v.name || "-"}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {new Date(v.visitedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
