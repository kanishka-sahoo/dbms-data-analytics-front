"use client";
import ScriptList from "@/components/datasets/dataset-container";
import NewScript from "@/components/datasets/new-dataset";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full p-4 mx-auto container">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-4xl font-bold">Datasets</h1>
        <NewScript onsubmit={()=> {}}/>
      </div>
      <ScriptList />
    </div>
  );
}