import ScriptItem from "./dataset-items"

export default function ScriptList() {
    return (
        <div className="flex flex-wrap w-full mt-4">
            <ScriptItem script={{ id: 1, name: "Script 1"}} />
            <ScriptItem script={{ id: 2, name: "Script 2", description: "Hello World" }} />
            <ScriptItem script={{ id: 3, name: "Script 3"}} />
        </div>
    )
}