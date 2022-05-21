import { Camera } from '../types'

export const cameraSet: { [key in string]: Camera } = {
  camera: {
    name: 'original',
    position: [0, 0, 20],
    target: [0, 0, 0]
  }
}
