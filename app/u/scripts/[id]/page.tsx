"use client";
import { useState, useEffect } from "react";

const getScripts = async (id: string) => {
    return "scripts" + id;
}

export default function Page({params}: {params: { id: string }}) {
    const [scripts, setScripts] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [engine, setEngine] = useState<"spark" | "flink">("spark");
    const id = params.id;

    useEffect(() => {
        if (params.id) {
            getScripts(params.id).then(sc => setScripts(sc));
        }
    }, [params.id])

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full p-4 mx-auto container">
            <div className="flex flex-row w-full justify-between items-center">
                <h1 className="text-4xl font-bold">Scripts {id}</h1>
                <div className="flex items-center gap-4">
                    <select
                        value={engine}
                        onChange={(e) => setEngine(e.target.value as "spark" | "flink")}
                        className="px-4 py-2 border rounded"
                    >
                        <option value="spark">Spark</option>
                        <option value="flink">Flink</option>
                    </select>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-200 hover:bg-blue-600 text-black hover:text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Script Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border rounded"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 border rounded h-24 resize-none"
                />
                <textarea
                    className="w-full h-64 p-2 border rounded font-mono bg-gray-50"
                    value={scripts}
                    onChange={(e) => setScripts(e.target.value)}
                    spellCheck="false"
                    style={{
                        tabSize: 4,
                        lineHeight: 1,
                        resize: "vertical",
                    }}
                />
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl mb-4">Are you sure you wish to submit?</h2>
                        <p className="mb-2">Name: {name}</p>
                        <p className="mb-2">Description: {description}</p>
                        <p className="mb-4">Selected engine: {engine}</p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log(`Submitting with ${engine} engine, name: ${name}, description: ${description}`);
                                    setShowModal(false);
                                }}
                                className="bg-blue-200 hover:bg-blue-600 text-black hover:text-white px-4 py-2 rounded"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}