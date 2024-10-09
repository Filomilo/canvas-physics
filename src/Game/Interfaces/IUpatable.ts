export interface IUpdatable{
    update(dt:number ): void
}


export function implementsUpdatable(obj: any): boolean {
    return (
      typeof obj.update === "function" 
    );
  }