"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addPage } from "@/state/invoiceSlice"
import InvoicePage from "./InvoicePage"
import InitialPage from "./InitialPage"

const Invoice = () => {
    const dispatch = useDispatch()
    const pages = useSelector((state) => state.invoice.pages)

    useEffect(() => {
        /**
         * Initiating with an empty invoice when there's none.
         */
        if(pages.length === 0) dispatch(addPage(InitialPage))
    }, [pages])

    return (
        <div>
            {pages.map((page, index) => (
                <InvoicePage key={index} page={page}/>
            ))}
        </div>
    )
}

export default Invoice
