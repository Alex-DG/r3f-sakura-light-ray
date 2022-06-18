import { Vector3 } from 'three'
import { proxy } from 'valtio'
import { Loading, SceneState } from '../types'
import { cameraSet, loading, debug, lightProgress, hoveredFigure } from './defaultStates'

export const sceneState: SceneState = {
  camera: cameraSet.camera,
  cameraTargetProgress: new Vector3(...cameraSet.camera.target),
  lightProgress,
  hoveredFigure,
  debug
}

export const loadingState = proxy<Loading>(loading)
