"use client"; // Ensure it's a client component

import InvoiceLogo from "./InvoiceLogo";
import { useTranslations } from "next-intl";

const InvoicePage = () => {
    const t = useTranslations("common"); // ✅ `t` is a function

    return (
        <div className="shadow-box w-[90%] max-w-[650px] bg-white p-6 mx-auto mt-4 !text-black">
            <section className="flex justify-between items-start">
                <InvoiceLogo />
                <div>
                    <h2 className="text-xl capitalize">{t("welcome_message")}</h2>
                </div>
            </section>
        </div>
    );
};

export default InvoicePage;
