import ScriptItem from "./script-items"
import {ScriptType} from "./script"

export default function ScriptList() {
    return (
        <div className="flex flex-wrap w-full mt-4">
            <ScriptItem script={{ id: 1, name: "Script 1", dataset: 101, scriptType: ScriptType.Flink}} />
            <ScriptItem script={{ id: 2, name: "Script 2", dataset: 202, description: "Hello World" , scriptType: ScriptType.Flink}} />
            <ScriptItem script={{ id: 3, name: "Script 3", dataset: 707, scriptType: ScriptType.Spark}} />
        </div>
    )
}