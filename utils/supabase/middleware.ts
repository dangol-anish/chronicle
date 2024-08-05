import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Allow OAuth callback to be processed
  if (url.pathname.startsWith("/auth/callback")) {
    return NextResponse.next();
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
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
      !url.pathname.startsWith("/")
    ) {
      // no user, and trying to access a protected page, redirect to login
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  } else {
    if (
      url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup")
    ) {
      // user is logged in but trying to access login or signup page, redirect to a protected page
      url.pathname = "/private";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
