import IconDownload from "../vector/IconDownload"

const DownloadTrigger = () => {
    const triggerDownload = () => {
        console.log('start download')
    }
    return (
        <button className='icon-button'
            onClick={triggerDownload}>
            <IconDownload />
        </button>
    )
}

export default DownloadTrigger
