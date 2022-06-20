import { useFrame, useThree } from '@react-three/fiber'
import { useCallback, useLayoutEffect, useEffect, useRef } from 'react'
import { Mesh, PerspectiveCamera } from 'three'
import { scaleMeshToView } from '../../../../utils/view'
import SeaMaterial from '../../shaders/SeaMaterial'

import '../../shaders/SeaMaterial'

const RagingSea = () => {
  const { camera } = useThree()
  const seaRef = useRef<Mesh>(null!)
  const seaMaterialRef = useRef<SeaMaterial>(null!)

  const updateSize = useCallback(() => {
    if (seaRef.current) scaleMeshToView(seaRef.current, camera as PerspectiveCamera, { offsetW: 0.7, offsetH: 0.7 })
  }, [])

  useEffect(() => {
    updateSize()
  }, [seaRef])

  useFrame(({ clock }) => {
    if (seaMaterialRef?.current) {
      seaMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])
  // water.rotation.x = -Math.PI * 0.5
  return (
    <mesh ref={seaRef} position={[0, -2.9, -8]} rotation-x={-Math.PI * 0.455} rotation-z={-Math.PI * 0.05}>
      <planeBufferGeometry attach="geometry" args={[2, 2, 256, 256]} />
      <seaMaterial ref={seaMaterialRef} attach="material" />
    </mesh>
  )
}

export default RagingSea
