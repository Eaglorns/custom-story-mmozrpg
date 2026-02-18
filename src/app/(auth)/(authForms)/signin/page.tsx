import Link from "next/link";
import { GetAccount } from "./actions";

type PageProps = {
  searchParams: Promise<{ error?: string }>;
};

const errorMessages: Record<string, string> = {
  missing_fields: "Введите email и пароль.",
  user_not_found: "Неверный email.",
  wrong_password: "Неверный пароль.",
  auth_failed: "Не удалось выполнить вход. Попробуйте снова.",
};

const page = async ({ searchParams }: PageProps) => {
  const { error } = await searchParams;
  const errorMessage = error ? errorMessages[error] : null;

  return (
    <main className="min-h-svh w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-svh w-full max-w-md items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl backdrop-blur sm:p-7">
          <header className="mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
              Вход
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Войдите, чтобы продолжить
            </p>
            <div className="mt-3 text-sm">
              <Link
                href="/signup"
                className="text-zinc-300 underline-offset-4 hover:underline"
              >
                Нет аккаунта? Регистрация
              </Link>
            </div>
          </header>

          <form action={GetAccount}>
            <div className="flex w-full flex-col gap-5">
              {errorMessage ? (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {errorMessage}
                </p>
              ) : null}

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
                  placeholder="Введите пароль"
                  required
                  className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-zinc-500"
                />
              </div>

              <div className="flex w-full justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-zinc-400 underline-offset-4 hover:text-zinc-200 hover:underline"
                >
                  Забыли пароль?
                </Link>
              </div>

              <button
                type="submit"
                className="h-11 w-full rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
