import { useDispatch } from "react-redux"
import { addPage } from "@/state/invoiceSlice"
import IconAdd from '../vector/IconAdd.js'
import InitialPage from '../../components/invoice/InitialPage'

const AddInvoicePage = () => {
    const dispatch = useDispatch()

    const addInvoicePage = () => {
         dispatch(addPage(InitialPage))
    }

    return (
        <button className='icon-button'
            onClick={() => {addInvoicePage()}}>
            <IconAdd />
        </button>
    )
}

export default AddInvoicePage
