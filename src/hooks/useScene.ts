import { useEffect } from 'react'
import { SceneProps } from '../types'
import { debugCamera } from '../utils/debug/debugCamera'

const useScene = ({ camera }: SceneProps) => {
  useEffect(() => {
    debugCamera(camera)
  }, [])

  return null
}

export default useScene
