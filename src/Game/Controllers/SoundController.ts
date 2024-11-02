import lvlUpSound from '@/assets/Sounds/lvlUp.wav'
const soundLvlUp = new Audio(lvlUpSound)
soundLvlUp.preload = 'auto'
soundLvlUp.load()

class SoundController {
  public playLvlUp() {
    soundLvlUp.play()
  }
}

export default SoundController
