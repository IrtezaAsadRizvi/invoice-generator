import IconPrint from "../vector/IconPrint"

const PrintTrigger = () => {
    const triggerPrint = () => {
        console.log('start print')
    }
    return (
        <button className='icon-button'
            onClick={triggerPrint}>
            <IconPrint />
        </button>
    )
}

export default PrintTrigger
