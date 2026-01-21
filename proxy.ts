// app/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "it"] as const;

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get("accept-language");
    const supportedLocales = locales;

    const locale = acceptLanguage
        ? acceptLanguage
            .split(",")
            .map((lang) => lang.split(";")[0].trim())
            .find((lang) => supportedLocales.includes(lang as any))
        : "it";

    return locale || "it";
}

export const proxy = (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    // ignora asset e API
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api/") ||
        pathname.startsWith("/sitemap.xml") ||
        pathname.startsWith("/favicon.ico") ||
        /\.(.*)$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    const locale = getLocale(request);
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(newUrl);
};