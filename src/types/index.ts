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

export type SceneState = {
  lightProgress: number
  hoveredFigure: boolean
  camera: Camera
  cameraTargetProgress: THREE.Vector3
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
