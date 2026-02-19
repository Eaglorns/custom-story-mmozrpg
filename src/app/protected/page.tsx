import { auth, signOut } from "@/auth";
import { redirect, RedirectType } from "next/navigation";
import { Suspense } from "react";

type Props = {};

async function ProtectedContent() {
  const session = await auth();
  if (!session?.user) return redirect("/signin", RedirectType.replace);

  return (
    <div className="h-screen w-full items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="w-full"
      >
        <button
          type="submit"
          className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}

const page = (props: Props) => {
  return (
    <Suspense fallback={null}>
      <ProtectedContent />
    </Suspense>
  );
};

export default page;
