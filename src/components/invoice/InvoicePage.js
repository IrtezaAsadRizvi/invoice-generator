"use client"; // Ensure it's a client component
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import InvoiceLogo from "./InvoiceLogo";
import InvoiceDatepicker from "../controls/Datepicker";
import TextInput from "../controls/TextInput";
import TextField from "../controls/TextField";

const InvoicePage = ({ invoice }) => {
    const t = useTranslations("invoice");
    const [invoiceData, setInvoiceData] = useState(invoice)
    const currentCurrency = useSelector((state) => state.invoice.currency)

    const setInvoiceControl = (key, value) => {
        setInvoiceData((invoice) => {
            let data = { ...invoice }
            data[key] = value
            return data
        })
    }

    return (
        <div className="invoice-page w-full bg-white p-6 mx-auto mb-8 !text-black">
            <section className="flex justify-between items-start">
                <div>
                    <InvoiceLogo />
                    <TextInput
                        className="mt-2 text-lg"
                        value={invoiceData.company.name}
                        placeholder={t('company_name')}
                        onInput={(value) => { setInvoiceControl('company', { ...invoiceData.company, name: value }) }} />
                    <TextInput
                        className="mt-1 text-sm"
                        value={invoiceData.company.website}
                        placeholder={t('website')}
                        onInput={(value) => { setInvoiceControl('company', { ...invoiceData.company, website: value }) }} />
                </div>
                <div className="text-right">
                    <h2 className="text-2xl capitalize px-1">Invoice</h2>
                    <div className="flex items-center gap-2">
                        <span className="w-[120px] text-sm">Date:</span>
                        <InvoiceDatepicker align='right' onChange={(value) => { console.log(onChange) }} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-[120px] text-sm">Due Date:</span>
                        <InvoiceDatepicker align='right' onChange={(value) => { console.log(onChange) }} />
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-4 mt-10">
                <div>
                    <h2 className="text-xl capitalize px-1">{t('from')}</h2>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">Name:</span>
                        <TextInput
                            className="mt-2 col-span-3 text-base"
                            value={invoiceData.from.name}
                            placeholder={'e.g. Mr. HR'}
                            onInput={(value) => { setInvoiceControl('from', { ...invoiceData.from, name: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">Phone:</span>
                        <TextInput
                            className="mt-2 col-span-3"
                            value={invoiceData.from.phone}
                            placeholder={'e.g. +123456789'}
                            onInput={(value) => { setInvoiceControl('from', { ...invoiceData.from, phone: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">E-mail:</span>
                        <TextInput
                            className="mt-2 col-span-3"
                            value={invoiceData.from.country}
                            placeholder={'e.g. hr@example.com'}
                            onInput={(value) => { setInvoiceControl('from', { ...invoiceData.from, country: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-2 px-1">
                        <span className="w-[120px] text-sm mt-3">Address:</span>
                        <TextField
                            className="mt-2 col-span-3"
                            value={invoiceData.from.address}
                            placeholder={'e.g. 444 Brook Street...'}
                            onInput={(value) => { setInvoiceControl('from', { ...invoiceData.from, address: value }) }} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl capitalize px-1">{t('bill_to')}</h2>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">Name:</span>
                        <TextInput
                            className="mt-2 col-span-3"
                            value={invoiceData.to.name}
                            placeholder={'John Doe'}
                            onInput={(value) => { setInvoiceControl('to', { ...invoiceData.to, name: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">Phone:</span>
                        <TextInput
                            className="mt-2 col-span-3"
                            value={invoiceData.to.phone}
                            placeholder={'e.g. +987654321'}
                            onInput={(value) => { setInvoiceControl('to', { ...invoiceData.to, phone: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-baseline gap-2 px-1">
                        <span className="w-[120px] text-sm">E-mail:</span>
                        <TextInput
                            className="mt-2 col-span-3"
                            value={invoiceData.to.email}
                            placeholder={'e.g. john@example.com'}
                            onInput={(value) => { setInvoiceControl('to', { ...invoiceData.to, email: value }) }} />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-2 px-1">
                        <span className="w-[120px] text-sm mt-3">Address:</span>
                        <TextField
                            className="mt-2 col-span-3"
                            value={invoiceData.to.address}
                            placeholder={'e.g. 123 Maple Street...'}
                            onInput={(value) => { setInvoiceControl('to', { ...invoiceData.to, address: value }) }} />
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <table className="table-auto col-span-2">
                    <thead>
                        <tr>
                            <th className="text-left">Description</th>
                            <th className="text-left">Rate</th>
                            <th className="text-left">Quantity</th>
                            <th className="text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.items.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="grid col-span-3">
                                    <TextInput
                                        className="mt-2"
                                        value={item.description}
                                        placeholder="e.g. john@example.com"
                                        onInput={(value) => { }}
                                    />
                                </td>
                                <td>
                                    <TextInput
                                        className="mt-2"
                                        value={item.unit_cost}
                                        placeholder="0"
                                        showCurrency={true}
                                        onInput={(value) => { }}
                                    />
                                </td>
                                <td>
                                    <TextInput
                                        className="mt-2"
                                        value={item.quantity}
                                        placeholder="0"
                                        onInput={(value) => { }}
                                    />
                                </td>
                                <td>
                                    <TextInput
                                        className="mt-2"
                                        value={item.unit_cost * item.quantity}
                                        disabled
                                        placeholder="0"
                                        showCurrency={true}
                                        onInput={(value) => { }}
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr className="font-semibold">
                            <td></td>
                            <td></td>
                            <td className="text-right pr-2">Sub Total:</td>
                            <td>
                                <span>{currentCurrency?.currencySymbol} </span>
                                {invoiceData.items.reduce(
                                    (acc, item) => acc + parseFloat(item.unit_cost) * parseInt(item.quantity), 0
                                )}
                            </td>
                        </tr>
                        <tr className="font-semibold">
                            <td></td>
                            <td></td>
                            <td className="text-right pr-2">Tax:</td>
                            <td>
                                <span>{currentCurrency?.currencySymbol} </span>
                                {invoiceData.items.reduce(
                                    (acc, item) => acc + parseFloat(item.unit_cost) * parseInt(item.quantity), 0
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default InvoicePage;
