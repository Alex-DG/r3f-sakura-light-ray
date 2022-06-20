import { ShaderMaterial, Color, Vector2 } from 'three'
import { extend, ReactThreeFiber } from '@react-three/fiber'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

const defaultUniforms = {
  time: 0.0,
  colors: {
    surfaceColor: '#c1e4fe',
    depthColor: '#0066b3',
    colorOffset: 0.08,
    colorMultiplier: 1.4
  },
  bigWaves: {
    bigWavesElevation: 0.8,
    bigWavesFrequency: [0.2, 0.7],
    bigWaveSpeed: 0.75
  },
  smallWaves: {
    smallWavesElevation: 0.15,
    smallWavesFrequency: 3,
    smallWavesSpeed: 0.2,
    smallIterations: 4
  }
}

const { time } = defaultUniforms
const { bigWavesElevation, bigWavesFrequency, bigWaveSpeed } = defaultUniforms.bigWaves
const { smallWavesElevation, smallWavesFrequency, smallWavesSpeed, smallIterations } = defaultUniforms.smallWaves
const { surfaceColor, depthColor, colorOffset, colorMultiplier } = defaultUniforms.colors

class SeaMaterial extends ShaderMaterial {
  constructor() {
    super({
      transparent: true,
      uniforms: {
        uTime: { value: 0.0 },

        uBigWavesSpeed: { value: 0.75 },
        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new Vector2(4, 1.5) },

        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 4 },

        uDepthColor: { value: new Color(depthColor) },
        uSurfaceColor: { value: new Color(surfaceColor) },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 }
      },
      // uniforms: {
      //   uTime: { value: time },
      //   uBigWavesElevation: { value: bigWavesElevation },
      //   uBigWavesFrequency: { value: bigWavesFrequency },
      //   uBigWavesSpeed: { value: bigWaveSpeed },

      //   uSurfaceColor: { value: new Color(surfaceColor) },
      //   uDepthColor: { value: new Color(depthColor) },
      //   uColorOffset: { value: colorOffset },
      //   uColorMultiplier: { value: colorMultiplier },

      //   uSmallWavesElevation: { value: smallWavesElevation },
      //   uSmallWavesFrequency: { value: smallWavesFrequency },
      //   uSmallWavesSpeed: { value: smallWavesSpeed },
      //   uSmallIterations: { value: smallIterations }
      // },
      vertexShader,
      fragmentShader
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      seaMaterial: ReactThreeFiber.Object3DNode<SeaMaterial, typeof SeaMaterial>
    }
  }
}

extend({ SeaMaterial })

export default SeaMaterial
