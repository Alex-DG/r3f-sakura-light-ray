import { Camera as CameraR3F } from '@react-three/fiber'
import { MutableRefObject } from 'react'
import { BufferGeometry, Material, Mesh } from 'three'
import GodRayMaterial from '../canvas/Scene/shaders/GodRayMaterial'

/**
 * 3D World
 */
export type Camera = {
  name: string
  position: [number, number, number]
  target: [number, number, number]
}
export type Loading = {
  completed: boolean
  progress: number
}

export type SceneState = {
  cameraTargetProgress: THREE.Vector3
  camera: Camera
  lightProgress: number
  debug: boolean
}

export type SceneProps = {
  camera: CameraR3F
}

export type ConeProps = {
  radius: number
}

export type ConeMultipleRefs = {
  coneRef: MutableRefObject<Mesh<BufferGeometry, Material | Material[]>>
  coneMatRef: MutableRefObject<GodRayMaterial>
}
