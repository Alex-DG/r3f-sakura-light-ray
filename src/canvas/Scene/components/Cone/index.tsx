import { Cone as ConeR3F } from '@react-three/drei'

import useCone from '../../../../hooks/useCone'

/**
 * Cone light
 *
 * @returns mesh cone
 */
const Cone = () => {
  const { coneRef, coneMatRef, radius } = useCone()

  return (
    <ConeR3F ref={coneRef} position={[0, 10, 0]} rotation-x={0.2} args={[radius, 15, 256, 1, true]}>
      <meshBasicMaterial ref={coneMatRef} color={'yellow'} />
    </ConeR3F>
  )
}

export default Cone
