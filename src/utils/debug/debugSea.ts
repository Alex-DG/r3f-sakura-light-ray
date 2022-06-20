import { isDebug } from '.'
import SeaMaterial from '../../canvas/Scene/shaders/SeaMaterial'
import GUIController from '../gui'

const debugSea = (seaMaterial: SeaMaterial) => {
  if (!isDebug()) return null
  console.log({ seaMaterial, uniforms: seaMaterial.uniforms })

  const FOLDER_NAME = 'Sea'

  const COLOR_OFFSET = {
    min: 0,
    max: 1,
    step: 0.001
  }
  const COLOR_MULTIPLIER = {
    min: 0,
    max: 10,
    step: 1
  }
  const BIG_WAVES = {
    minElevation: 0,
    maxElevation: 2,
    stepElevation: 0.001,
    minSpeed: 0,
    maxSpeed: 1,
    stepSpeed: 0.0001,
    minFreqX: -10,
    maxFreqX: 10,
    stepFreqX: 0.01,
    minFreqY: -10,
    maxFreqY: 10,
    stepFreqY: 0.1
  }
  const SMALL_WAVES = {
    minElevation: 0,
    maxElevation: 2,
    stepElevation: 0.001,
    minSpeed: 0,
    maxSpeed: 1,
    stepSpeed: 0.0001,
    minFreq: -10,
    maxFreq: 10,
    stepFreq: 0.01,
    minIter: -10,
    maxIter: 10,
    stepIter: 0.01
  }

  /**
   * Colors
   */
  GUIController.instance.addColor(seaMaterial.uniforms.uSurfaceColor, 'value', undefined, 'surface', FOLDER_NAME)
  GUIController.instance.addColor(seaMaterial.uniforms.uDepthColor, 'value', undefined, 'depth', FOLDER_NAME)

  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uColorOffset,
    'value',
    COLOR_OFFSET.min,
    COLOR_OFFSET.max,
    COLOR_OFFSET.step,
    'offset',
    FOLDER_NAME
  )
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uColorMultiplier,
    'value',
    COLOR_MULTIPLIER.min,
    COLOR_MULTIPLIER.max,
    COLOR_MULTIPLIER.step,
    'multiplier',
    FOLDER_NAME
  )

  /**
   * Big Waves
   */
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uBigWavesElevation,
    'value',
    BIG_WAVES.minElevation,
    BIG_WAVES.maxElevation,
    BIG_WAVES.stepElevation,
    'bigWavesElevation',
    FOLDER_NAME
  )
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uBigWavesSpeed,
    'value',
    BIG_WAVES.minSpeed,
    BIG_WAVES.maxSpeed,
    BIG_WAVES.stepSpeed,
    'bigWavesSpeed',
    FOLDER_NAME
  )

  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uBigWavesFrequency.value,
    'x',
    BIG_WAVES.minFreqX,
    BIG_WAVES.maxFreqX,
    BIG_WAVES.stepFreqX,
    'bigWavesFreqX',
    FOLDER_NAME
  )
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uBigWavesFrequency.value,
    'y',
    BIG_WAVES.minFreqY,
    BIG_WAVES.maxFreqY,
    BIG_WAVES.stepFreqY,
    'bigWavesFreqY',
    FOLDER_NAME
  )

  /**
   * Small Waves
   */
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uSmallWavesElevation,
    'value',
    SMALL_WAVES.minElevation,
    SMALL_WAVES.maxElevation,
    SMALL_WAVES.stepElevation,
    'smallWavesElevation',
    FOLDER_NAME
  )
  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uSmallWavesSpeed,
    'value',
    SMALL_WAVES.minSpeed,
    SMALL_WAVES.maxSpeed,
    SMALL_WAVES.stepSpeed,
    'smallWavesSpeed',
    FOLDER_NAME
  )

  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uSmallWavesFrequency,
    'value',
    SMALL_WAVES.minFreq,
    SMALL_WAVES.maxFreq,
    SMALL_WAVES.stepFreq,
    'smallWavesFreqX',
    FOLDER_NAME
  )

  GUIController.instance.addNumericSlider(
    seaMaterial.uniforms.uSmallIterations,
    'value',
    SMALL_WAVES.minIter,
    SMALL_WAVES.maxIter,
    SMALL_WAVES.stepIter,
    'smallWavesIteration',
    FOLDER_NAME
  )
}

export { debugSea }
