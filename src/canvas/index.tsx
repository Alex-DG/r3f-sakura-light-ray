import { Canvas as CanvasR3F, useThree } from '@react-three/fiber'

import { sceneState } from '../store'
import Scene from './Scene'

const Canvas = () => {
  return (
    <CanvasR3F
      dpr={window.devicePixelRatio}
      camera={{
        position: sceneState.camera.position,
        aspect: window.innerWidth / window.innerHeight,
        fov: 75,
        near: 0.01,
        far: 1000
      }}
      onCreated={({ camera }) => camera.lookAt(...sceneState.camera.target)}
      shadows>
      <Scene />
    </CanvasR3F>
  )
}

export default Canvas
