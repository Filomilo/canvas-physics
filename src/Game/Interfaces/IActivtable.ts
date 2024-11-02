export interface IActivtable {
  activate(): void
}

export function implementsActivtable(obj: any): boolean {
  return typeof obj.activate === 'function'
}
