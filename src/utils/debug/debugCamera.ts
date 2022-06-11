import { Camera } from '@react-three/fiber'
import { isDebug } from '.'
import GUIController from '../gui'

const debugCamera = (camera: Camera) => {
  if (!isDebug()) return null

  const FOLDER_NAME = 'Camera'
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

  GUIController.instance.addNumericSlider(camera.position, 'x', POSITION.min, POSITION.max, POSITION.step, 'pX', FOLDER_NAME)
  GUIController.instance.addNumericSlider(camera.position, 'y', POSITION.min, POSITION.max, POSITION.step, 'pY', FOLDER_NAME)
  GUIController.instance.addNumericSlider(camera.position, 'z', POSITION.min, POSITION.max, POSITION.step, 'pZ', FOLDER_NAME)

  GUIController.instance.addNumericSlider(camera.rotation, 'x', ROTATION.min, ROTATION.max, ROTATION.step, 'rX', FOLDER_NAME)
  GUIController.instance.addNumericSlider(camera.rotation, 'y', ROTATION.min, ROTATION.max, ROTATION.step, 'rY', FOLDER_NAME)
  GUIController.instance.addNumericSlider(camera.rotation, 'z', ROTATION.min, ROTATION.max, ROTATION.step, 'rZ', FOLDER_NAME)
}

export { debugCamera }
