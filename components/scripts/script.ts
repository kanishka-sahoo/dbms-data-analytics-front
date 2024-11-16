export enum ScriptType {
  Flink = 'Flink',
  Spark = 'Spark',
}

export interface Script {
  id: number;
  scriptType: ScriptType;
  name: string;
  dataset: number;
  description?: string;
}