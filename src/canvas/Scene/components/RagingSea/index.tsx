import { useThree } from '@react-three/fiber'
import { useCallback, useLayoutEffect, useEffect, useRef } from 'react'
import { Mesh, PerspectiveCamera } from 'three'
import { scaleMeshToView } from '../../../../utils/view'

const RagingSea = () => {
  const { camera } = useThree()
  const seaRef = useRef<Mesh | null>(null)

  const updateSize = useCallback(() => {
    if (seaRef.current) scaleMeshToView(seaRef.current, camera as PerspectiveCamera, { offsetW: 0.7, offsetH: 0.7 })
  }, [])

  useEffect(() => {
    updateSize()
  }, [seaRef])

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <mesh ref={seaRef} position={[0, -3, -1.5]} rotation-x={-Math.PI * 0.455} rotation-z={-Math.PI * 0.05}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial attach="material" color={'hotpink'} />
    </mesh>
  )
}

export default RagingSea
