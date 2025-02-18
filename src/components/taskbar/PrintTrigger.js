import IconPrint from "../vector/IconPrint"
import { printInvoices } from "@/helper"

const PrintTrigger = () => {
    return (
        <button className='icon-button'
            onClick={() => {printInvoices()}}>
            <IconPrint />
        </button>
    )
}

export default PrintTrigger
