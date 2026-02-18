import React from "react";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";

type Props = { children: React.ReactNode };

const AuthCheck = async ({ children }: Props) => {
  const session = await auth();
  if (session?.user) {
    return redirect(process.env.LOGIN_REDIRECT as string, RedirectType.replace);
  }
  return <>{children}</>;
};

export default AuthCheck;