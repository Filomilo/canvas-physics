import { Vector2 } from 'three'
import RectnagularAcivator from './RectnagularAcivator'

class WinBox extends RectnagularAcivator {
  constructor(position: Vector2) {
    super(50, 50, position, '#ffe908')
  }
}

export default WinBox
