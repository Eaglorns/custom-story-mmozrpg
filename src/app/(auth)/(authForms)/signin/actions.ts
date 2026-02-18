"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export async function GetAccount(formData: FormData) {
  const emailEntry = formData.get("email");
  const passwordEntry = formData.get("password");

  const email = typeof emailEntry === "string" ? emailEntry.trim() : "";
  const password = typeof passwordEntry === "string" ? passwordEntry : "";

  if (!email || !password) {
    return redirect("/signin");
  }

  return await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
}
