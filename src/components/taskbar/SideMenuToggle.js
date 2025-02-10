"use client"
import { useSelector, useDispatch } from 'react-redux'
import { setSideBarExpanded } from '../../state/uiSlice'
import IconMenu from '../vector/IconMenu.js'


const SideMenuToggle = () => {
    const sideBarExpanded = useSelector((state) => state.ui.sideBarExpanded)
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(setSideBarExpanded(!sideBarExpanded))
    }

    return (
        <button className='icon-button'
            onClick={toggleSidebar}>
            <IconMenu/>
        </button>
    )
}

export default SideMenuToggle
