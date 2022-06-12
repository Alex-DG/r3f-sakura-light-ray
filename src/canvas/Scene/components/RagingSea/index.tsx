import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, PerspectiveCamera } from 'three'
import { scaleMeshToView } from '../../../../utils/view'

const RagingSea = () => {
  const { camera } = useThree()
  const seaRef = useRef<Mesh | null>(null)

  useEffect(() => {
    if (seaRef.current) scaleMeshToView(seaRef.current, camera as PerspectiveCamera)
  }, [seaRef])

  return (
    <mesh ref={seaRef} position={[0, -3, -1.5]} rotation-x={-Math.PI * 0.455}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial attach="material" color={'hotpink'} />
    </mesh>
  )
}

export default RagingSea
