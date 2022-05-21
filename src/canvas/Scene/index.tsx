import { useThree } from '@react-three/fiber'
import useScene from '../../hooks/useScene'
import Box from './components/Box'
import Lights from './Lights'

const Scene = () => {
  const { camera } = useThree()
  useScene({ camera })

  return (
    <>
      <Lights />
      <Box position={[0, 0, 0]} />
    </>
  )
}

export default Scene
