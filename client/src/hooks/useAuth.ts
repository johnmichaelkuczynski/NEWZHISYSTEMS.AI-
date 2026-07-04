import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  isAdmin: boolean;
}

export function useAuth() {
  const { data, isLoading } = useQuery<AuthUser | null>({
    queryKey: ["/api/auth/me"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      if (res.status === 401) return null;
      if (!res.ok) throw new Error(`Auth check failed: ${res.status}`);
      return res.json();
    },
    staleTime: 60_000,
    retry: false,
  });

  return {
    user: data ?? null,
    isLoading,
    isSignedIn: !!data,
    isAdmin: !!data?.isAdmin,
  };
}

export function useSignOut() {
  const queryClient = useQueryClient();
  return async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } finally {
      queryClient.clear();
      window.location.href = "/";
    }
  };
}
