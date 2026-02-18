import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <main className="min-h-svh w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-svh w-full max-w-md items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl backdrop-blur sm:p-7">
          <header className="mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
              Восстановление пароля
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Функция будет добавлена в следующих итерациях.
            </p>
          </header>

          <div className="text-sm">
            <Link
              href="/signin"
              className="text-zinc-300 underline-offset-4 hover:underline"
            >
              Вернуться ко входу
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
