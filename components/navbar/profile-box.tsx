"use client";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export default function ProfileBox({name, icon, isDropdown, handleDropdown}: {name: string, icon: string, isDropdown: boolean, handleDropdown: () => void}) {
    return (
        <div className="flex items-center space-x-2">
            <img src={icon} className="w-8 h-8 rounded-full" />
            <div className="text-white">{name}</div>
            <div onClick={handleDropdown} className="transition-all duration-200">
                {!isDropdown ? 
                    <ChevronDownIcon size={24} className="text-white font-bold"/> :
                    <ChevronUpIcon size={24} className="text-white font-bold"/>
                }
            </div>
        </div>
    )
}