import { OAuthButtons } from "@/components/ui/oauth-signin";
import { Kanban } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import Logo from "../../public/chronicles-light.svg";
import ManWork2 from "../../public/Task-cuate.svg";

export default async function LoginPage() {
  return (
    <>
      <div className="flex h-[100vh]">
        <section className="w-[50%] bg-slate-900 hidden lg:flex p-10 flex-col">
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
            <Image src={ManWork2} alt="man-work" className="w-[80%]" />
          </div>
        </section>
        <section className="w-full lg:w-[50%] p-10 h-full">
          <div className="flex justify-between items-center lg:justify-end ">
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
            <Link href="/signup" className="">
              Sign up
            </Link>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            {" "}
            <LoginForm />
            <div className="w-full md:w-[60%] lg:w-[50%]   flex justify-between items-center">
              <Separator className="w-[30%]" />
              <p className="text-slate-500 font-extralight text-xs">
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
