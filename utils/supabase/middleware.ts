import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Allow OAuth callback to be processed
  if (url.pathname.startsWith("/auth/callback")) {
    return NextResponse.next();
  }

  // Create Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (
      !url.pathname.startsWith("/login") &&
      !url.pathname.startsWith("/signup") &&
      !url.pathname.startsWith("/help") &&
      url.pathname !== "/"
    ) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  } else {
    if (
      url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup") ||
      url.pathname === "/"
    ) {
      // user is logged in but trying to access login, signup, or root page, redirect to a protected page
      url.pathname = "/habits";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
