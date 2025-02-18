import IconDownload from "../vector/IconDownload"
import { downloadInvoices } from "@/helper"

const DownloadTrigger = () => {
    return (
        <button className='icon-button'
            onClick={() => {downloadInvoices()}}>
            <IconDownload />
        </button>
    )
}

export default DownloadTrigger
