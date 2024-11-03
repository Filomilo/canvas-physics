import Game from '@/Game/Game'

export default class GameObject {
  public game?: Game
  public getChildObjects(): GameObject[] {
    return []
  }
  constructor() {}
  public clone(): any {
    const obj: any = {
      game: this.game
    }
    return obj
  }
}
