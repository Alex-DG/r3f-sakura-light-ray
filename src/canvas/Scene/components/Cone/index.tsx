import { Cone as ConeR3F } from '@react-three/drei'

import useCone from '../../../../hooks/useCone'

import '../../shaders/GodRayMaterial'

/**
 * Cone light
 *
 * @returns mesh cone
 */
const Cone = () => {
  const { coneRef, coneMatRef, radius } = useCone()

  return (
    <ConeR3F ref={coneRef} position={[0, 10, 0]} rotation-x={0.2} args={[radius, 15, 256, 1, true]}>
      <godRayMaterial ref={coneMatRef} transparent />
    </ConeR3F>
  )
}

export default Cone
