export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          ZRPG — браузерная мультиплеерная история
        </h1>

        <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
          ZRPG — это браузерная многопользовательская RPG с удобным интерфейсом
          для управления персонажем, заданиями и прогрессом.
        </p>

        <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
          Текстовым в игре является только описание происходящих событий: бои,
          встречи, квесты и сюжетные развилки. Это делает прохождение понятным и
          атмосферным, при этом основное взаимодействие остаётся через
          интерфейс.
        </p>

        <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
          Проект рассчитан на спокойный темп: можно заходить в удобное время,
          принимать решения и постепенно развивать героя. Главная идея ZRPG —
          живая многопользовательская вселенная, где каждый персонаж оставляет
          заметный след в общей истории.
        </p>
      </div>
    </main>
  );
}
