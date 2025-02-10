"use client"
import { useSelector, useDispatch } from 'react-redux'
import { setSideBarExpanded } from '../../state/uiSlice'
const Sidebar = () => {
    const sideBarExpanded = useSelector((state) => state.ui.sideBarExpanded) || false
    const dispatch = useDispatch()
    return (
        <>
            <div onClick={() => {dispatch(setSideBarExpanded(false))}}
                className={`fixed bg-taskbar-bg-dark dark:bg-taskbar-bg-light top-0 bottom-0 left-0 right-0 z-10
                transition-opacity ${sideBarExpanded ? 'opacity-25' : 'opacity-0 pointer-events-none'}`}>

            </div>
            <aside 
                className={`fixed bg-taskbar-bg-light dark:bg-taskbar-bg-dark top-0 bottom-0 w-full md:w-[300px] 
                max-w-[40%] md:max-w-[40%] z-20 transition-transform duration-300 ease-in-out
                ${sideBarExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
                sidebar
            </aside>
        </>
    )
}

export default Sidebar
