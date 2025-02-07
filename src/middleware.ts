import {  NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/profile", "/dashboard", "/admin","/product"];
export function middleware(request: NextRequest) {
    
    const isLogin = true;
    const path = request.nextUrl.pathname;
    if (!isLogin) {
        console.log('login',isLogin);
        
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/profile", "/dashboard", "/admin","/product"],
};