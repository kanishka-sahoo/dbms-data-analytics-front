"use client";
import { Sparkle, Squirrel } from "lucide-react";
import { Script, ScriptType } from "./script";
import { usePathname } from "next/navigation";

export default function ScriptItem({ script }: { script: Script }) {
    const pathname = usePathname();
    return (
        <div className="w-full p-4 mx-auto my-4 bg-white shadow-md rounded-md">
            <div className="flex flex-row">
                <div className="flex flex-col items-center my-auto  justify-center w-12 h-12">
                    {script.scriptType === ScriptType.Flink ? 
                        <Squirrel size={24} />
                        : 
                        <Sparkle size={24} />
                    }
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{script.name}</h2>
                    <p>{script.description}</p>
                    <p className="italic">Belongs to dataset {script.dataset}</p>
                </div>
                <div className="flex flex-row gap-2 ml-auto my-auto">
                    <a 
                        href={`${pathname}/${script.id}`}
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-center transition-colors duration-150"
                    >
                        View
                    </a>
                    <button 
                        onClick={() => console.log('Run script:', script.id)}
                        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 text-center transition-colors duration-150"
                    >
                        Run
                    </button>
                </div>
            </div>
        </div>
    );
}