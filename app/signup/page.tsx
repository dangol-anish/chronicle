import { Separator } from "@/components/ui/separator";

import { Kanban } from "lucide-react";
import Link from "next/link";

import { OAuthButtons } from "@/components/ui/oauth-signin";
import { SignupForm } from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <>
      <div className="flex h-[100vh]">
        <section className="w-[50%] bg-stone-900 hidden lg:flex p-10">
          <Link href="/" className="text-white flex justify-center">
            <Kanban size={30} />
            <p className="text-xl">Chronicle</p>
          </Link>
        </section>
        <section className="w-full lg:w-[50%] p-10 h-full">
          <div className="flex justify-between lg:justify-end">
            <Link
              href="/"
              className="flex justify-center items-center lg:hidden"
            >
              <Kanban size={25} />
              <p>Chronicle</p>
            </Link>
            <Link href="/login" className="text-stone-900">
              Login
            </Link>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            <SignupForm />
            <div className="w-full md:w-[60%] lg:w-[50%] flex justify-between items-center">
              <Separator className="w-[30%]" />
              <p className="text-stone-500 font-extralight text-xs">
                OR CONTINUE WITH
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
