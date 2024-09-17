"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/app/signup/actions";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";

export function SignupForm() {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine(
      (value) => /[0-9]/.test(value),
      "Password must contain at least one number"
    )
    .refine(
      (value) => /[@$!%*?&#]/.test(value),
      "Password must contain at least one special character: @$!%*?&#"
    );

  const SignupSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(15, "Username cannot exceed 15 characters"),
    email: z.string().email("Invalid email address"),
    password: passwordSchema,
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

    setPending(true);
    const result = await signup(formData);
    setPending(false);

    if (result?.error) {
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
          <h2 className="text-2xl font-semibold text-center">
            Create an account
          </h2>
          <p className="text-slate-400 text-center text-sm">
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
          <Button
            type="submit"
            disabled={pending}
            className="w-full bg-slate-800 text-white hover:bg-slate-700 disabled:bg-slate-500"
          >
            {pending ? "Signing up..." : "Sign up"}
          </Button>
        </div>
      </form>
    </>
  );
}
