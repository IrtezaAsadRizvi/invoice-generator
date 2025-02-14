import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
    locales, // ['en', 'de', 'fr', ...]
    defaultLocale, // 'en'
    localeDetection: false, // Disable auto redirection
    localePrefix: "as-needed",

    // Custom rewrite rules to make `/en` as `/`
    rewrites: {
        en: "/",
    },
});

export const config = {
    matcher: ["/((?!_next|favicon.ico).*)"], // Apply to all routes except _next and static files
};
