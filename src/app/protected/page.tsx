import { auth, signOut } from "@/auth";
import { redirect, RedirectType } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  if (!session?.user) return redirect("/signin", RedirectType.replace);

  return (
    <div className="w-full h-screen justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="w-full"
      >
        <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700">Sign Out</button>
      </form>
    </div>
  );
};

export default page;
