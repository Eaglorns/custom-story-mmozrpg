"use server";

import prisma from "@/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import { AuthError } from "next-auth";

export async function CreateAccount(formData: FormData) {
  const emailEntry = formData.get("email");
  const passwordEntry = formData.get("password");
  const nameEntry = formData.get("name");

  const email = typeof emailEntry === "string" ? emailEntry.trim() : "";
  const password = typeof passwordEntry === "string" ? passwordEntry : "";
  const name = typeof nameEntry === "string" ? nameEntry.trim() : "";

  if (!email || !password || !name) return redirect("/signup?error=missing_fields");

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) return redirect("/signup?error=email_taken");

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  try {
    return await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return redirect("/signin?error=invalid_credentials");
      }

      return redirect("/signup?error=auth_failed");
    }

    throw error;
  }
}
