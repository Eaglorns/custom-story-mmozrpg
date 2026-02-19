"use client";

import { useUserStore } from "@/providers/user-store-provider";
import { CreateAccount } from "./actionts";

type SignupFormProps = {
  errorMessage: string | null;
};

export default function SignupForm({
  errorMessage,
}: Readonly<SignupFormProps>) {
  const name = useUserStore((store) => store.name);
  const email = useUserStore((store) => store.email);
  const setName = useUserStore((store) => store.setName);
  const setEmail = useUserStore((store) => store.setEmail);

  return (
    <form action={CreateAccount}>
      <div className="flex w-full flex-col gap-5">
        {errorMessage ? (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-200">
            Имя
          </label>
          <input
            name="name"
            id="name"
            placeholder="Ваше имя"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 transition outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-200">
            Email
          </label>
          <input
            name="email"
            id="email"
            placeholder="name@email.com"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 transition outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-zinc-200"
          >
            Пароль
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Создайте пароль"
            required
            className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 transition outline-none placeholder:text-zinc-500 focus:border-zinc-500"
          />
        </div>

        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          Создать аккаунт
        </button>
      </div>
    </form>
  );
}
