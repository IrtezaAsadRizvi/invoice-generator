"use client"; // This only applies to the client wrapper, NOT the Taskbar itself

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DarkModeSwitch from "./DarkModeSwitch";
import SideMenuToggle from "./SideMenuToggle";
import DownloadTrigger from "./DownloadTrigger";
import PrintTrigger from "./PrintTrigger";
import LanguageSwitch from "./LanguageSwitch";

const TaskbarClient = () => {
    const enableDarkmode = useSelector((state) => state.ui.enableDarkmode);
    const dispatch = useDispatch()
    const [darkMode, setDarkMode] = useState(false);

   

    useEffect(() => {
        setDarkMode(enableDarkmode);
    }, [enableDarkmode]);

    return (
        <nav className="bg-taskbar-bg-light dark:bg-taskbar-bg-dark 
            w-full px-3 py-2 flex justify-between items-center">
            <div className="flex items-center justify-start">
                <SideMenuToggle/>
            </div>
            <div className="flex items-center justify-end">
                <DownloadTrigger/>
                <PrintTrigger/>
                <DarkModeSwitch/>
                <LanguageSwitch/>
            </div>
        </nav>
    );
};

const Taskbar = () => {
    return (
        <div>
            <TaskbarClient />
        </div>
    );
};

export default Taskbar;
