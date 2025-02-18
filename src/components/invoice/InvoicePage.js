"use client"; // Ensure it's a client component
import { useState } from "react";
import { useTranslations } from "next-intl";
import InvoiceLogo from "./InvoiceLogo";
import InvoiceDatepicker from "../controls/Datepicker";
import TextInput from "../controls/TextInput";

const InvoicePage = ({invoice}) => {
    const t = useTranslations("invoice");
    const [invoiceData, setInvoiceData] = useState(invoice)

    const setInvoiceControl = (key, value) => {
        setInvoiceData((invoice) => {
            let data = {...invoice}
            data[key] = value
            return data
        })
    }

    return (
        <div className="invoice-page w-full bg-white p-6 mx-auto mb-4 !text-black">
            <section className="flex justify-between items-start">
                <div>
                    <InvoiceLogo />
                    <TextInput 
                        className="mt-2 text-lg" 
                        value={invoiceData.company.name} 
                        placeholder={t('company_name')}
                        onInput={(value) => {setInvoiceControl('company', {...invoiceData.company, name: value})}} />
                    <TextInput 
                        className="mt-1 text-sm" 
                        value={invoiceData.company.website} 
                        placeholder={t('website')}
                        onInput={(value) => {setInvoiceControl('company', {...invoiceData.company, website: value})}} />
                </div>
                <div>
                    <h2 className="text-2xl px-1 capitalize">Invoice</h2>
                    <InvoiceDatepicker/>
                </div>
            </section>
        </div>
    );
};

export default InvoicePage;
