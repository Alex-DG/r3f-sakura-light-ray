import { SpotLight } from 'three'
import GUIController from '../gui'

const debugLights = (spot1?: SpotLight, spot2?: SpotLight) => {
  const SPOT1_FOLDER_NAME = 'SpotLight 1'
  const SPOT2_FOLDER_NAME = 'SpotLight 2'

  const INTENSITY = {
    min: 0,
    max: 10,
    step: 0.001
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
}

export { debugLights }
