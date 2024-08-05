import { Separator } from "@/components/ui/separator";

import { Kanban } from "lucide-react";
import Link from "next/link";

import { OAuthButtons } from "@/components/ui/oauth-signin";
import { SignupForm } from "@/components/SignupForm";

export default function LoginPage() {
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
            <Link href="/login">Login</Link>
          </header>
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            <SignupForm />
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
