import prisma from "@/prisma";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";

export async function CreateAccount(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password || !name)
    return redirect("/signup?error=Missing+fields");

  // Check if user exits
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) return redirect("/signup?error=User+already+exists");

  // Hashing password
  const hashedPassword = await hash(password, 12);

  // Creating new user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // Sign in automatically

  return await signIn("credentials", {
    email,
    password,
    redirect: true,
    redirectTo: process.env.LOGIN_REDIRECT as string,
  });
}
