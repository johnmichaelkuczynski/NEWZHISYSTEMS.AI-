import { useState, type ReactNode } from "react";

const PASSWORD = "1234";

export default function PasswordGate({
  children,
  storageKey = "ai-higher-ed-access",
}: {
  children: ReactNode;
  storageKey?: string;
}) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(storageKey) === "granted",
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(storageKey, "granted");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={submit}
        className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 w-full max-w-sm"
      >
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Password Required
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Enter the password to view this page.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          autoFocus
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        {error && (
          <p className="text-red-600 text-sm mb-3">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
