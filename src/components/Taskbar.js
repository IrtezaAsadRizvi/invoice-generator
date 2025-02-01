"use client"; // This only applies to the client wrapper, NOT the Taskbar itself

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnableDarkmode } from "@/state/uiSlice";

const TaskbarClient = () => {
    const enableDarkmode = useSelector((state) => state.ui.enableDarkmode);
    const dispatch = useDispatch()
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        dispatch(setEnableDarkmode(!enableDarkmode))
        document.body.classList.toggle("dark");
    }

    useEffect(() => {
        setDarkMode(enableDarkmode);
    }, [enableDarkmode]);

    return (
        <div className="bg-taskbar-bg-light dark:bg-taskbar-bg-dark">
            <button onClick={darkModeHandler}>enableDarkmode: {darkMode.toString()}</button>
        </div>
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
