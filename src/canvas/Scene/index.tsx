import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import Loading from './components/Loading'
import RagingSea from './components/RagingSea'
import Sakura from './components/Sakura'
import Stars from './components/Stars'

import Lights from './Lights'

import { sceneState } from '../../store'

const Scene = () => {
  const camera = useThree((state) => state.camera)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Sakura />
        <Stars />
        <RagingSea />
        <Lights />

        <OrbitControls {...{ camera }} enableZoom={false} enabled={sceneState.debug} />
        {/* <fog attach="fog" color="grey" near={1} far={35} /> */}
      </Suspense>
    </>
  )
}

export default Scene
