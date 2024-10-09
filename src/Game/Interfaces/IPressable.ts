import type { Vector2 } from "three";
import type { IMouseReactive } from "./IMouseReactive";

export interface IPressable extends IMouseReactive{
    onPress():void;
    onUnpress(): void;
    isPressed: boolean;
}

export function implementsPressable(obj: any): boolean {
    return (
      typeof obj.isPressed === "boolean" &&
      typeof obj.onPress === "function" &&
      typeof obj.onUnpress === "function"
    );
  }