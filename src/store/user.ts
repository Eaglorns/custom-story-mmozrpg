import { create } from "zustand";
import { persist } from "zustand/middleware";

type SignupDraft = { name: string; email: string };

type UserStore = {
  signinEmail: string;
  setSigninEmail: (email: string) => void;
  clearSigninEmail: () => void;
  signupDraft: SignupDraft;
  setSignupDraft: (patch: Partial<SignupDraft>) => void;
  clearSignupDraft: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      signinEmail: "",
      setSigninEmail: (email) => set({ signinEmail: email }),
      clearSigninEmail: () => set({ signinEmail: "" }),
      signupDraft: { name: "", email: "" },
      setSignupDraft: (patch) =>
        set((s) => ({ signupDraft: { ...s.signupDraft, ...patch } })),
      clearSignupDraft: () => set({ signupDraft: { name: "", email: "" } }),
    }),
    { name: "user-store" }
  )
);