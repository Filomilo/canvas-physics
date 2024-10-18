import type { Vector2 } from "three";
import type { IMouseReactive } from "./IMouseReactive";
import ISimulatable from "./ISimulatable";

export interface IAffector {
    affect(simulatable: ISimulatable): void;

}

export function implementsAffector(obj: any): boolean {
    return (
      typeof obj.affect === "function"
    );
  }