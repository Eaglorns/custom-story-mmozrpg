"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function GetAccount(formData: FormData) {
  const emailEntry = formData.get("email");
  const passwordEntry = formData.get("password");

  const email = typeof emailEntry === "string" ? emailEntry.trim() : "";
  const password = typeof passwordEntry === "string" ? passwordEntry : "";

  if (!email || !password) {
    return redirect("/signin?error=missing_fields");
  }

  try {
    return await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        const code =
          typeof (error as { code?: unknown }).code === "string"
            ? (error as unknown as { code: string }).code
            : "invalid_credentials";

        if (code === "user_not_found") {
          return redirect("/signin?error=user_not_found");
        }

        if (code === "wrong_password") {
          return redirect("/signin?error=wrong_password");
        }

        return redirect("/signin?error=invalid_credentials");
      }

      return redirect("/signin?error=auth_failed");
    }

    throw error;
  }
}
