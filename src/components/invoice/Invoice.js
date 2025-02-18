"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addPage } from "@/state/invoiceSlice"
import InvoicePage from "./InvoicePage"
import InitialPage from "./InitialPage"
import { useTranslations } from "next-intl";

const Invoice = () => {
    const dispatch = useDispatch()
    const t = useTranslations("common");
    const pages = useSelector((state) => state.invoice.pages)

    useEffect(() => {
        /**
         * Initiating with an empty invoice when there's none.
         */
        if(pages.length === 0) dispatch(addPage(InitialPage))
    }, [pages])

    return (
        <div className="mt-12 w-[90%] max-w-[650px] mx-auto">
            {pages.map((invoice, index) => (<div key={index}>
                <p className="mb-4 text-sm font-semibold">{`${t('page')} ${index + 1} / ${pages.length}`}</p>
                <InvoicePage key={`page_${index}`} invoice={invoice}/>
            </div>))}
        </div>
    )
}

export default Invoice
