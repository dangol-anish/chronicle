import { login } from "./actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import AuthCover from "../../public/AuthCover.svg";
import { OAuthButtons } from "@/components/ui/oauth-signin";

export default async function LoginPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/private");
  }
  return (
    <>
      <div className="flex h-[100vh] ">
        {/* <section className="w-[50%] bg-stone-900 flex justify-center">
          <Image
            className="object-fit"
            src={AuthCover}
            alt="Picture of the author"
          />
        </section> */}
        <section className="w-[50%]">
          <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
          </form>
          <OAuthButtons />
        </section>
      </div>
    </>
  );
}
