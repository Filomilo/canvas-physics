export default class Game {
  private _ctx!: CanvasRenderingContext2D

  public init(ctx: CanvasRenderingContext2D, fillStyle: string = 'grey') {
    try {
      this._ctx = ctx
      console.log('Game init')
      console.log(this._ctx)
      requestAnimationFrame(this.gameLoop.bind(this))
    } catch (error) {
      console.error('Error intlizing game: ' + error)
    }
  }

  private gameLoop(): void {
    try {
      this.drawBackground()

      requestAnimationFrame(this.gameLoop.bind(this))
    } catch (error) {
      console.error('Error processgin game loop: ' + error)
    }
  }

  private drawBackground() {
    this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
    this._ctx.fill()
  }
}
