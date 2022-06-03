import Canvas from '../canvas'
import Dom from '../dom'
import { sceneState } from '../store'

const App = () => {
  const handleWheel = (evt: React.WheelEvent<HTMLDivElement>) => {
    if (evt.deltaY > 0) {
      sceneState.lightProgress -= 0.05
      sceneState.lightProgress = Math.max(sceneState.lightProgress, 0)
    } else {
      sceneState.lightProgress += 0.05
      sceneState.lightProgress = Math.min(sceneState.lightProgress, 1)
    }
  }

  return (
    <div className="app" onWheel={handleWheel}>
      <Dom />
      <Canvas />
    </div>
  )
}

export default App
