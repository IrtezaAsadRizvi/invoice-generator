import IconPaint from "../vector/IconPaint"
import { useDispatch } from 'react-redux'
import { setSideBarExpanded } from '../../state/uiSlice'
import { SIDE_PANELS } from "@/config/utils"

const ThemePanelToggle = () => {
    const dispatch = useDispatch()

    const toggleThemePanel = () => {
        dispatch(setSideBarExpanded(SIDE_PANELS.theme))
    }

    return (
        <button className='icon-button !p-[10px]'
            onClick={() => {toggleThemePanel()}}>
            <IconPaint />
        </button>
    )
}

export default ThemePanelToggle
