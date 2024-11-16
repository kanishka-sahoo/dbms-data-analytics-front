"use client";
import { Database, Settings, LayoutDashboard, Notebook, Sidebar, XIcon, FileCode } from "lucide-react";
import { useState } from "react";
import SidebarItems from "./sidebar-items";

export default function SidebarMain({ isOpened: initialIsOpened }: { isOpened: boolean }) {
    const [isOpened, setIsOpened] = useState(initialIsOpened);

    const handleClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className={`flex flex-col transition-all duration-150 px-2 py-2 flex-1 h-screen bg-neutral-700 text-white ${isOpened ? 'w-[180px]' : 'w-[64px]'}`}>
            <div className="flex p-2" onClick={handleClick}>
                {isOpened ? <XIcon size={36} /> : <Sidebar size={36} />}
            </div>
            <div className={`flex flex-col items-start justify-between`}>
                <SidebarItems isOpened={isOpened} icon={LayoutDashboard} link="/u/dashboard" label="Dashboard"/>
                <SidebarItems isOpened={isOpened} icon={Database} link="/u/datasets" label="Datasets"/>
                <SidebarItems isOpened={isOpened} icon={Notebook} link="/u/notebooks" label="Notebooks"/>
                <SidebarItems isOpened={isOpened} icon={FileCode} link="/u/scripts" label="Scripts"/>
            </div>
            <div className="flex flex-col mt-auto justify-end">
                <SidebarItems isOpened={isOpened} icon={Settings} link="/u/settings" label="Settings"/>
            </div>
        </div>
    );
}