import React from "react";
import AuthCheck from "./auth-check";

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  return (
    <React.Suspense
      fallback={
        <main className="flex h-screen w-full items-center justify-center">
          Loading...
        </main>
      }
    >
      <AuthCheck>{children}</AuthCheck>
    </React.Suspense>
  );
}
