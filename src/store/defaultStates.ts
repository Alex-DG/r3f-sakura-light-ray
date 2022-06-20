import { Camera } from '../types'
import { isDebug } from '../utils/debug'

const cameraSet: { [key in string]: Camera } = {
  camera: {
    name: 'original',
    position: [0, 0, 10],
    target: [0, 0, 0]
  }
}

const loading = { completed: false, progress: 0 }

const debug = isDebug()

const lightProgress = 0

export { cameraSet, loading, debug, lightProgress }
