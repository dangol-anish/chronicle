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
          {pendingProvider === provider.name ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Signing in...
            </>
          ) : (
            <>
              {provider.icon}
              {provider.displayName}
            </>
          )}
        </Button>
      ))}
    </>
  );
}
