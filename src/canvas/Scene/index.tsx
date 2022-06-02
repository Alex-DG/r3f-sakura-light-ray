import { Environment, Html, Sparkles } from '@react-three/drei'
import { Suspense } from 'react'
import Sakura from './components/Sakura'
import Lights from './Lights'

const Loading = () => (
  <Html>
    <h1>Loading...</h1>
  </Html>
)

const Scene = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Sakura />
      <Sparkles scale={[4, 3, 3]} position-y={-0.5} count={40} size={6} speed={0.5} />
      <Lights />
      <Environment preset="dawn" />
    </Suspense>
  )
}

export default Scene
