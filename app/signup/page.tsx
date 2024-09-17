import { Separator } from "@/components/ui/separator";
import { Kanban } from "lucide-react";
import Link from "next/link";
import { OAuthButtons } from "@/components/ui/oauth-signin";
import { SignupForm } from "@/components/SignupForm";
import Logo from "../../public/chronicles-light.svg";
import Image from "next/image";
import ManWork from "../../public/Task-bro.svg";

export default function SignupPage() {
  return (
    <>
      <div className="flex h-[100vh]">
        <section className="w-[50%]  hidden lg:flex p-10 bg-slate-900 flex-col">
          <Link href="/" className="text-white ">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="invert"
                width={40}
                height={40}
              />
              <p className="text-xl">Chronicle</p>
            </div>
          </Link>
          <div className="flex justify-center items-center h-full">
            <Image src={ManWork} alt="man-work" className="w-[80%]" />
          </div>
        </section>
        <section className="w-full lg:w-[50%] p-10 h-full">
          <div className="flex justify-between lg:justify-end">
            <Link
              href="/"
              className="flex justify-center items-center lg:hidden"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="logo"
                  className="dark:invert"
                  width={40}
                  height={40}
                />
                <p className="text-xl">Chronicle</p>
              </div>
            </Link>
            <Link href="/login" className="">
              Login
            </Link>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            <SignupForm />
            <div className="w-full md:w-[60%] lg:w-[50%] flex justify-between items-center">
              <Separator className="w-[30%]" />
              <p className="text-slate-300 font-extralight text-xs">
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
