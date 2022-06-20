import { ShaderMaterial, Color, Vector2 } from 'three'
import { extend, ReactThreeFiber } from '@react-three/fiber'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

const defaultUniforms = {
  time: 0.0,
  colors: {
    surfaceColor: '#b477c0',
    depthColor: '#2949a3',
    colorOffset: 0.435,
    colorMultiplier: 4
  },
  bigWaves: {
    bigWavesElevation: 0.279,
    bigWavesFrequency: [1.4, -0.6],
    bigWaveSpeed: 0.4591
  },
  smallWaves: {
    smallWavesElevation: 0.162,
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
      uniforms: {
        uTime: { value: time },

        uBigWavesSpeed: { value: bigWaveSpeed },
        uBigWavesElevation: { value: bigWavesElevation },
        uBigWavesFrequency: { value: new Vector2(bigWavesFrequency[0], bigWavesFrequency[1]) },

        uSmallWavesElevation: { value: smallWavesElevation },
        uSmallWavesFrequency: { value: smallWavesFrequency },
        uSmallWavesSpeed: { value: smallWavesSpeed },
        uSmallIterations: { value: smallIterations },

        uDepthColor: { value: new Color(depthColor) },
        uSurfaceColor: { value: new Color(surfaceColor) },
        uColorOffset: { value: colorOffset },
        uColorMultiplier: { value: colorMultiplier }
      },
      vertexShader,
      fragmentShader,
      transparent: true
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
