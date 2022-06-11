import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Suspense } from 'react'

import { isDebug } from '../../utils/debug'

import Sakura from './components/Sakura'
import Stars from './components/Stars'

import Lights from './Lights'

const Scene = () => {
  const { camera } = useThree()
  return (
    <Suspense fallback={null}>
      <Sakura />
      <Stars />
      <Lights />

      <OrbitControls {...{ camera }} enableZoom={false} enabled={isDebug()} />
    </Suspense>
  )
}

export default Scene