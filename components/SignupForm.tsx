"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/app/signup/actions";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";

export function SignupForm() {
  const { toast } = useToast();

  const SignupSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(15, "Username cannot exceed 15 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  async function clientAction(formData: FormData) {
    // Convert FormData to an object
    const formValues = Object.fromEntries(formData.entries());

    const validation = SignupSchema.safeParse(formValues);

    if (!validation.success) {
      const errors = validation.error.errors.map((error) => error.message);

      toast({
        variant: "destructive",
        description: (
          <div>
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        ),
      });
      return;
    }

    const result = await signup(formData);
    if (result?.error) {
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
