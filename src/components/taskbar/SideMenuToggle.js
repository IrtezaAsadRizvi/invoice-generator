"use client"
import { useDispatch } from 'react-redux'
import { setSideBarExpanded } from '../../state/uiSlice'
import IconMenu from '../vector/IconMenu.js'
import { SIDE_PANELS } from '@/config/utils'


const SideMenuToggle = () => {
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(setSideBarExpanded(SIDE_PANELS.main))
    }

    return (
        <button className='icon-button'
            onClick={toggleSidebar}>
            <IconMenu/>
        </button>
    )
}

export default SideMenuToggle
