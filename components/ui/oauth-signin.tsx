"use client";
import { useState } from "react";
import { Provider } from "@supabase/supabase-js";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { oAuthSignIn } from "@/app/auth/actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const [pendingProvider, setPendingProvider] = useState<string | null>(null);

  const OAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "Github",
      icon: <Github className="size-5" />,
    },
    // Add more providers as needed
  ];

  async function handleOAuthSignIn(providerName: Provider) {
    setPendingProvider(providerName);
    await oAuthSignIn(providerName);
    setPendingProvider(null);
  }

  return (
    <>
      {OAuthProviders.map((provider) => (
        <Button
          className="w-full md:w-[60%] lg:w-[50%] flex items-center justify-center gap-2"
          variant="outline"
          onClick={() => handleOAuthSignIn(provider.name)}
          key={provider.name}
          disabled={pendingProvider === provider.name}
        >
          {provider.icon}
          {pendingProvider === provider.name
            ? "Signing in..."
            : provider.displayName}
        </Button>
      ))}
    </>
  );
}
