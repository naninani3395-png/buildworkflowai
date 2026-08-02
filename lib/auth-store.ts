import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type UserSession = {
  id: string;
  name: string;
  email: string;
  company: string;
  isAuthenticated: boolean;
};

interface AuthState {
  user: UserSession | null;
  signIn: (email: string, password: string) => boolean;
  signUp: (name: string, email: string, company: string, password: string) => boolean;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      signIn: (email, password) => {
        const valid = Boolean(email && password);
        if (!valid) return false;
        set({
          user: {
            id: 'user-1',
            name: 'Karthik Rao',
            email,
            company: 'BuildFlow Labs',
            isAuthenticated: true,
          },
        });
        return true;
      },
      signUp: (name, email, company) => {
        const valid = Boolean(name && email && company);
        if (!valid) return false;
        set({
          user: {
            id: 'user-2',
            name,
            email,
            company,
            isAuthenticated: true,
          },
        });
        return true;
      },
      signOut: () => set({ user: null }),
    }),
    {
      name: 'buildflow-auth',
      storage: createJSONStorage(() => {
        if (typeof window === 'undefined') {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return window.localStorage;
      }),
    }
  )
);
