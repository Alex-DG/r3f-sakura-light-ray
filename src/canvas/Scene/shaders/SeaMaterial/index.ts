import { ShaderMaterial, Color } from 'three'
import { extend, ReactThreeFiber } from '@react-three/fiber'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

class SeaMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uColor: { value: new Color(0xffff7f) }
      },
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

  get color() {
    return this.uniforms.uTexture.value
  }

  set color(value) {
    this.uniforms.uColor.value = value
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
