"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/app/signup/actions";
import { useToast } from "@/components/ui/use-toast";

export function SignupForm() {
  const { toast } = useToast();

  async function clientAction(formData: FormData) {
    //reset form
    //client side validation
    const result = await signup(formData);
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
          <h2 className="text-2xl font-semibold text-center">
            Create an account
          </h2>
          <p className="text-stone-500 text-center text-sm">
            Enter your details below to create your account
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="username">Username: </Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="example"
              required
            />
            <Label htmlFor="email">Email: </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              required
            />

            <Label htmlFor="password">Password: </Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button className="w-full bg-stone-900 hover:bg-stone-700">
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
}
