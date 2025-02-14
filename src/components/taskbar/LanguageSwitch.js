"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config"; // Ensure this is correctly imported
import IconTranslate from "../vector/IconTranslate"
import Dropdown from "../common/Dropdown";

const LanguageSwitch = () => {
    const router = useRouter();
    const pathname = usePathname(); // Get current path

    // Detect current locale from pathname
    const currentLocale = locales.includes(pathname.split("/")[1]) ? pathname.split("/")[1] : "en";

    const changeLanguage = (locale) => {
        const segments = pathname.split("/").filter(Boolean);

        if (locales.includes(segments[0])) {
            segments[0] = locale; // Replace existing locale
        } else if (locale !== "en") {
            segments.unshift(locale); // Add locale prefix (except for English)
        }

        const newPath = `/${segments.join("/")}`;
        router.push(newPath);
    };

    return (
        // <select value={currentLocale} onChange={(e) => changeLanguage(e.target.value)}>
        //     {locales.map((locale) => (
        //         <option key={locale} value={locale}>
        //             {locale.toUpperCase()}
        //         </option>
        //     ))}
        // </select>
        <Dropdown title={() => <IconTranslate/>} />
    );
};

export default LanguageSwitch;
