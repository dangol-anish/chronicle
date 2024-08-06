"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/app/login/actions";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  async function clientAction(formData: FormData) {
    setPending(true);
    const result = await login(formData);
    setPending(false);
    if (result?.error) {
      // Show error
      toast({
        variant: "destructive",
        description: result.error,
      });
    }
  }

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await clientAction(formData);
        }}
        className="w-full md:w-[60%] lg:w-[50%] flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
          <p className="text-stone-500 text-center text-sm">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              required
            />

            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button
            type="submit"
            disabled={pending}
            className="w-full bg-stone-900 hover:bg-stone-700 disabled:bg-stone-500"
          >
            {pending ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </form>
    </>
  );
}
