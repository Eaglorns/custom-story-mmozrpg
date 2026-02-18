"use server";

import prisma from "@/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";

export async function CreateAccount(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "").trim();

  if (!email || !password || !name) return redirect("/");

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) return redirect("/");

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
}
