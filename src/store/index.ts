import { Vector3 } from 'three'
import { SceneState } from '../types'
import { cameraSet } from './defaultStates'

export const sceneState: SceneState = {
  lightProgress: 0,
  hoveredFigure: false,
  camera: cameraSet.camera,
  cameraTargetProgress: new Vector3(...cameraSet.camera.target)
}
