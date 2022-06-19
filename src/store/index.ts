import { Vector3 } from 'three'
import { proxy } from 'valtio'
import { Loading, SceneState } from '../types'
import { cameraSet, loading, debug, lightProgress, hoveredFigure } from './defaultStates'

const { camera } = cameraSet
const cameraTargetProgress = new Vector3(...camera.target)

export const sceneState: SceneState = {
  cameraTargetProgress,
  camera,
  lightProgress,
  hoveredFigure,
  debug
}

export const loadingState = proxy<Loading>(loading)
