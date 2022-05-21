import useLights from '../../hooks/useLights'
import Cone from './components/Cone'

const Lights = () => {
  const { spot1Ref, spot2Ref } = useLights()
  return (
    <group position-z={5}>
      <spotLight
        ref={spot1Ref}
        intensity={10}
        color="#fefdb2"
        position={[0, 5, 0]}
        angle={Math.PI / 12}
        distance={10}
        penumbra={0.8}
        decay={3.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight ref={spot2Ref} intensity={2} position={[0, 5, -4]} angle={Math.PI / 12} distance={10} penumbra={0.8} decay={3.5} />

      <Cone />
    </group>
  )
}

export default Lights
