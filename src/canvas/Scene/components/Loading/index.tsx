import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'
import { loadingState } from '../../../../store'

const Loading = () => {
  const progress = useProgress((state) => state.progress)

  useEffect(() => {
    console.log('CANVAS:Loading >', { progress })
    loadingState.progress = progress
    if (progress >= 100) loadingState.completed = true
  }, [progress])

  return null
}

export default Loading
