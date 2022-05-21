import Box from './components/Box'

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  )
}

export default Scene
