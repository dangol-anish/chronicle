import { login } from "./actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { OAuthButtons } from "@/components/ui/oauth-signin";
import { Kanban } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
      <div className="flex h-[100vh]">
        <section className="w-[50%] bg-stone-900 flex p-10">
          <header className="text-white flex justify-center">
            <Kanban size={30} />
            <p className="text-xl">Chronicle</p>
          </header>
        </section>
        <section className="w-[50%] p-10 h-full">
          <header className=" flex justify-end">
            <Link href="/signup">Sign up</Link>
          </header>
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            {" "}
            <form className="w-[50%] flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                {" "}
                <h2 className="text-2xl font-semibold text-center">
                  Welcome back
                </h2>
                <p className="text-stone-500 text-center text-sm">
                  Enter your credentials to access your account
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="email">Email </Label>
                  <Input
                    className=""
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                  />

                  <Label htmlFor="password">Password </Label>
                  <Input
                    className=""
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <Button
                  className="w-full bg-stone-900 hover:bg-stone-700"
                  formAction={login}
                >
                  Log in
                </Button>
              </div>
            </form>
            <div className="w-[50%]  flex justify-between items-center">
              <Separator className="w-[30%]" />
              <p className="text-stone-500 font-extralight text-xs">
                {" "}
                OR CONTINUE WITH{" "}
              </p>
              <Separator className="w-[30%]" />
            </div>
            <OAuthButtons />
          </div>
        </section>
      </div>
    </>
  );
}
