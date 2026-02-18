import React from "react";
import AuthCheck from "./AuthCheck";

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  return (
    <React.Suspense fallback={<main className="w-full h-screen flex items-center justify-center">Loading...</main>}>
      <AuthCheck>{children}</AuthCheck>
    </React.Suspense>
  );
}