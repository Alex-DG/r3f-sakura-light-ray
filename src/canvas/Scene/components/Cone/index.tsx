import { Cone as ConeR3F } from '@react-three/drei'

import useCone from '../../../../hooks/useCone'

import '../../shaders/GodRayMaterial'

/**
 * Cone - God Ray light
 */
const Cone = ({ maxRadius }: { maxRadius: number }) => {
  const { coneRef, coneMatRef, coneRadius } = useCone({ radius: maxRadius })

  return (
    <ConeR3F ref={coneRef} position={[0, 5, 0]} args={[coneRadius, 15, 256, 1, true]}>
      <godRayMaterial ref={coneMatRef} transparent />
    </ConeR3F>
  )
}

export default Cone
