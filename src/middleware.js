import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;

  if (!authToken) {
    if (request.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/login"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/employee/employeeprofile", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};
