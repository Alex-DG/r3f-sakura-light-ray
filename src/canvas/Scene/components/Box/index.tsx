import { useRef, useState } from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'
import { Mesh } from 'three'

/**
 * Debug Box
 *
 * @param param0 MeshProps
 * @returns mesh box
 */
const Box = ({ ...props }: MeshProps) => {
  const meshRef = useRef<Mesh>(null!)

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame(() => (meshRef.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
