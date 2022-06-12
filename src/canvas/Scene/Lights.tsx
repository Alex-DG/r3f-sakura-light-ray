import { Cone as ConeR3F } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { lerp } from 'three/src/math/MathUtils'

import useCone from '../../hooks/useCone'
import useLights from '../../hooks/useLights'

import { sceneState } from '../../store'

import './shaders/GodRayMaterial'

const MAX_RADIUS = 2.65

const Lights = () => {
  const { groupRef, spot1Ref, spot2Ref } = useLights()

  const {
    coneRefs: { coneRef, coneMatRef },
    radius
  } = useCone({ radius: MAX_RADIUS })

  let lightProgress = sceneState.lightProgress
  useFrame(() => {
    lightProgress = lerp(lightProgress, sceneState.lightProgress, 0.1)

    spot1Ref.current!.angle = (Math.PI / 12) * lightProgress
    spot2Ref.current!.intensity = 2 * Math.pow(lightProgress, 3)
    coneRef.current!.scale.set(lightProgress, 1, lightProgress)
  })

  return (
    <group ref={groupRef}>
      <spotLight
        ref={spot1Ref}
        intensity={8}
        color="#ffffff"
        position={[0, 7.8, 0]}
        angle={Math.PI / 10.5}
        distance={10}
        penumbra={0.25}
        decay={0.25}
      />

      <spotLight
        ref={spot2Ref}
        color="hotpink"
        intensity={6.5}
        position={[0, 2, 8]}
        angle={Math.PI / 8}
        distance={11}
        penumbra={0}
        decay={1.5}
      />

      {/**
       * God Ray
       */}
      <ConeR3F ref={coneRef} position={[0, 5, 0.3]} args={[radius, 15, 256, 1, true]}>
        <godRayMaterial ref={coneMatRef} transparent />
      </ConeR3F>
    </group>
  )
}

export default Lights
