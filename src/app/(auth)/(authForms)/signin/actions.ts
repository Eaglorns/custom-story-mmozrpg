"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import prisma from "@/prisma";
import { compare } from "bcryptjs";

function handleAuthError(error: unknown): never {
  if (error instanceof AuthError) {
    if (error.type === "CredentialsSignin") {
      return redirect("/signin?error=invalid_credentials");
    }

    redirect("/signin?error=auth_failed");
  }

  throw error;
}

export async function GetAccount(formData: FormData) {
  const emailEntry = formData.get("email");
  const passwordEntry = formData.get("password");

  const email = typeof emailEntry === "string" ? emailEntry.trim() : "";
  const password = typeof passwordEntry === "string" ? passwordEntry : "";

  if (!email || !password) {
    return redirect("/signin?error=missing_fields");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      password: true,
    },
  });

  if (!user?.password) {
    return redirect("/signin?error=user_not_found");
  }

  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) {
    return redirect("/signin?error=wrong_password");
  }

  try {
    return await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    handleAuthError(error);
  }
}
