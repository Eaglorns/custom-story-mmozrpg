import NextAuth, {CredentialsSignin} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";

class UserNotFoundError extends CredentialsSignin {
  code = "user_not_found";
}

class WrongPasswordError extends CredentialsSignin {
  code = "wrong_password";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user?.password) {
            throw new UserNotFoundError();
          }

          const isValidPassword = await compare(password, user.password);
          if (!isValidPassword) {
            throw new WrongPasswordError();
          }

          return user;
        } catch (error) {
          if (error instanceof CredentialsSignin) {
            throw error;
          }

          if (error instanceof ZodError) {
            return null;
          }
          return null;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },
});
