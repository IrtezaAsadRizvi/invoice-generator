"use client"
import { useSelector, useDispatch } from 'react-redux'
import { setEnableDarkmode } from '../../state/uiSlice'
import IconLightMode from '../vector/IconLightMode.js'
import IconDarkMode from '../vector/IconDarkMode.js'


const DarkModeSwitch = () => {
    const enableDarkmode = useSelector((state) => state.ui.enableDarkmode)
    const dispatch = useDispatch()
    
    const darkModeHandler = () => {
            dispatch(setEnableDarkmode(!enableDarkmode))
            document.body.classList.toggle("dark");
    }
    return (
        <button className='icon-button'
                onClick={darkModeHandler}>
                    {enableDarkmode ? <IconLightMode/> : <IconDarkMode/>}
        </button>
    )
}

export default DarkModeSwitch
