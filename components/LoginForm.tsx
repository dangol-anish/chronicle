"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/app/login/actions";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const { toast } = useToast();

  async function clientAction(formData: FormData) {
    //reset form
    //client side validation
    const result = await login(formData);
    if (result?.error) {
      //show error
      toast({
        variant: "destructive",
        description: result.error,
      });
    }
  }

  return (
    <>
      <form action={clientAction} className="w-[50%] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {" "}
          <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
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
          <Button className="w-full bg-stone-900 hover:bg-stone-700">
            Log in
          </Button>
        </div>
      </form>
    </>
  );
}
