import { NextRequest, NextResponse } from "next/server";
import { getMe } from "./services/users/user.service";

export async function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("logged");
  if (request.nextUrl.pathname.startsWith("/app")) {
    if (isLogin?.value === "true") {
      return NextResponse.rewrite(
        new URL(request.nextUrl.pathname, request.url)
      );
    } else {
      return NextResponse.rewrite(new URL("/auth/login", request.url));
    }
  }
}
