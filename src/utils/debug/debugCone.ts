import { Color, Mesh } from 'three'
import GodRayMaterial from '../../canvas/Scene/shaders/GodRayMaterial'
import { ConeProps } from '../../types'
import GUIController from '../gui'

const debugCone = (coneMesh: Mesh, coneMat: GodRayMaterial, props: ConeProps, callback: (props: ConeProps) => void) => {
  const FOLDER_NAME = 'Cone'

  const POSITION = {
    min: -100,
    max: 100,
    step: 0.001
  }

  const ROTATION = {
    min: -Math.PI,
    max: Math.PI,
    step: 0.001
  }

  const RADIUS = {
    min: 0,
    max: Math.PI * 2,
    step: 0.001
  }

  GUIController.instance.addColor(coneMat.uniforms.uColor, 'value', undefined, 'mat.color', FOLDER_NAME)
  GUIController.instance.addCheckBox(coneMat, 'transparent', 'mat.transparent', FOLDER_NAME)

  GUIController.instance.addNumericSlider(coneMesh.position, 'x', POSITION.min, POSITION.max, POSITION.step, 'pX', FOLDER_NAME)
  GUIController.instance.addNumericSlider(coneMesh.position, 'y', POSITION.min, POSITION.max, POSITION.step, 'pY', FOLDER_NAME)
  GUIController.instance.addNumericSlider(coneMesh.position, 'z', POSITION.min, POSITION.max, POSITION.step, 'pZ', FOLDER_NAME)

  GUIController.instance.addNumericSlider(coneMesh.rotation, 'x', ROTATION.min, ROTATION.max, ROTATION.step, 'rX', FOLDER_NAME)
  GUIController.instance.addNumericSlider(coneMesh.rotation, 'y', ROTATION.min, ROTATION.max, ROTATION.step, 'rY', FOLDER_NAME)
  GUIController.instance.addNumericSlider(coneMesh.rotation, 'z', ROTATION.min, ROTATION.max, ROTATION.step, 'rZ', FOLDER_NAME)

  GUIController.instance
    .addNumericSlider(props, 'radius', RADIUS.min, RADIUS.max, RADIUS.step, 'Radius', FOLDER_NAME)
    .onChange((value: number) => callback({ ...props, radius: value }))

  return props
}

export { debugCone }
