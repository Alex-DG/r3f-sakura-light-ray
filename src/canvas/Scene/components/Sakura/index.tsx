import * as THREE from 'three'
import { useRef } from 'react'
import { Center } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import modelSrc from '../../../../assets/models/fantasy_sakura.glb'

const Sakura = () => {
  const groupRef = useRef<THREE.Group>(null)

  const model = useLoader(GLTFLoader, modelSrc) as any // TODO: fix type check GLTF | GLTF[]

  useFrame(({ clock }) => {
    if (groupRef?.current) {
      const time = Math.sin(clock.getElapsedTime())
      groupRef.current.position.y = time * 0.1
      groupRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={model.scene} scale={[4.2, 4.2, 4.2]} />
      </group>
    </Center>
  )
}

export default Sakura
