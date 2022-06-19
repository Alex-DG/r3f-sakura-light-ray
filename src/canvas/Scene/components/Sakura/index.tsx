import { Group } from 'three'
import { useRef } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import modelSrc from '../../../../assets/models/sakura_tree_draco.glb'

const Sakura = () => {
  const groupRef = useRef<Group>(null)
  const model = useGLTF(modelSrc) as any // TODO: fix type check GLTF | GLTF[]

  useFrame(({ clock }) => {
    if (groupRef?.current) {
      const time = Math.sin(clock.getElapsedTime())

      groupRef.current.position.y = time * 0.1
      groupRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <Center ref={groupRef}>
      <primitive object={model.scene} scale={[4.2, 4.2, 4.2]} />
    </Center>
  )
}

export default Sakura
