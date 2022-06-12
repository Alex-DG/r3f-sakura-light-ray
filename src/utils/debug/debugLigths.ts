import { Group, SpotLight } from 'three'
import { isDebug } from '.'
import GUIController from '../gui'

const debugLights = (spot1?: SpotLight, spot2?: SpotLight, group?: Group) => {
  if (!isDebug()) return null

  const LIGHT_GROUP_FOLDER_NAME = 'Light Group'
  const SPOT1_FOLDER_NAME = 'SpotLight 1'
  const SPOT2_FOLDER_NAME = 'SpotLight 2'

  const INTENSITY = {
    min: 0,
    max: 10,
    step: 0.001
  }

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

  if (group) {
    GUIController.instance.addNumericSlider(group.position, 'x', POSITION.min, POSITION.max, POSITION.step, 'pX', LIGHT_GROUP_FOLDER_NAME)
    GUIController.instance.addNumericSlider(group.position, 'y', POSITION.min, POSITION.max, POSITION.step, 'pY', LIGHT_GROUP_FOLDER_NAME)
    GUIController.instance.addNumericSlider(group.position, 'z', POSITION.min, POSITION.max, POSITION.step, 'pZ', LIGHT_GROUP_FOLDER_NAME)

    GUIController.instance.addNumericSlider(group.rotation, 'x', ROTATION.min, ROTATION.max, ROTATION.step, 'rX', LIGHT_GROUP_FOLDER_NAME)
    GUIController.instance.addNumericSlider(group.rotation, 'y', ROTATION.min, ROTATION.max, ROTATION.step, 'rY', LIGHT_GROUP_FOLDER_NAME)
    GUIController.instance.addNumericSlider(group.rotation, 'z', ROTATION.min, ROTATION.max, ROTATION.step, 'rZ', LIGHT_GROUP_FOLDER_NAME)
  }

  if (spot1)
    GUIController.instance.addNumericSlider(
      spot1,
      'intensity',
      INTENSITY.min,
      INTENSITY.max,
      INTENSITY.step,
      'intensity',
      SPOT1_FOLDER_NAME
    )

  if (spot1?.position && spot1?.rotation) {
    GUIController.instance.addNumericSlider(spot1.position, 'x', POSITION.min, POSITION.max, POSITION.step, 'pX', SPOT1_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot1.position, 'y', POSITION.min, POSITION.max, POSITION.step, 'pY', SPOT1_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot1.position, 'z', POSITION.min, POSITION.max, POSITION.step, 'pZ', SPOT1_FOLDER_NAME)

    GUIController.instance.addNumericSlider(spot1.rotation, 'x', ROTATION.min, ROTATION.max, ROTATION.step, 'rX', SPOT1_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot1.rotation, 'y', ROTATION.min, ROTATION.max, ROTATION.step, 'rY', SPOT1_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot1.rotation, 'z', ROTATION.min, ROTATION.max, ROTATION.step, 'rZ', SPOT1_FOLDER_NAME)
  }

  if (spot2)
    GUIController.instance.addNumericSlider(
      spot2,
      'intensity',
      INTENSITY.min,
      INTENSITY.max,
      INTENSITY.step,
      'intensity',
      SPOT2_FOLDER_NAME
    )

  if (spot2?.position && spot2?.rotation) {
    GUIController.instance.addNumericSlider(spot2.position, 'x', POSITION.min, POSITION.max, POSITION.step, 'pX', SPOT2_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot2.position, 'y', POSITION.min, POSITION.max, POSITION.step, 'pY', SPOT2_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot2.position, 'z', POSITION.min, POSITION.max, POSITION.step, 'pZ', SPOT2_FOLDER_NAME)

    GUIController.instance.addNumericSlider(spot2.rotation, 'x', ROTATION.min, ROTATION.max, ROTATION.step, 'rX', SPOT2_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot2.rotation, 'y', ROTATION.min, ROTATION.max, ROTATION.step, 'rY', SPOT2_FOLDER_NAME)
    GUIController.instance.addNumericSlider(spot2.rotation, 'z', ROTATION.min, ROTATION.max, ROTATION.step, 'rZ', SPOT2_FOLDER_NAME)
  }
}

export { debugLights }
