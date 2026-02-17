import Link from "next/link";
import { CreateAccount } from "./actionts";

type Props = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

const errorMap: Record<string, string> = {
  "Missing fields": "Заполните все поля",
  "User already exists": "Пользователь с таким email уже существует",
};

const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const error = params?.error
    ? decodeURIComponent(params.error.replaceAll('+', " "))
    : undefined;
  const errorMessage = error
    ? (errorMap[error] ?? "Не удалось создать аккаунт")
    : null;

  return (
    <main className="min-h-svh w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-svh w-full max-w-md items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl backdrop-blur sm:p-7">
          <header className="mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
              Регистрация
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Создайте аккаунт, чтобы начать
            </p>
            <div className="mt-3 text-sm">
              <Link
                href="/signin"
                className="text-zinc-300 underline-offset-4 hover:underline"
              >
                Уже есть аккаунт? Войти
              </Link>
            </div>
          </header>

          <form action={CreateAccount}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-200"
                >
                  Имя
                </label>
                <input
                  name="name"
                  id="name"
                  placeholder="Ваше имя"
                  type="text"
                  required
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-200"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  placeholder="name@email.com"
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-zinc-500"
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
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-zinc-500"
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

          {errorMessage && (
            <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
