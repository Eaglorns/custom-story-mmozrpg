import Link from "next/link";
import SigninForm from "./SigninForm";

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

          <SigninForm errorMessage={errorMessage} />
        </div>
      </div>
    </main>
  );
};

export default page;
