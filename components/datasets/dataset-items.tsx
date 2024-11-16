"use client";
import { Dataset } from "./dataset";
import { usePathname } from "next/navigation";

export default function ScriptItem({ script }: { script: Dataset }) {
    const pathname = usePathname();
    return (
        <div className="w-full p-4 mx-auto my-4 bg-white shadow-md rounded-md">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{script.name}</h2>
                    <p>{script.description}</p>
                </div>
                <div className="flex flex-row gap-2 ml-auto my-auto">
                    <a 
                        href={`${pathname}/${script.id}`}
                        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 text-center transition-colors duration-150"
                    >
                        View
                    </a>
                </div>
            </div>
        </div>
    );
}