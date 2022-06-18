import { useProgress } from '@react-three/drei'
import { useCallback, useEffect } from 'react'
import { loadingState } from '../../../../store'

const Loading = () => {
  const progress = useProgress((state) => state.progress)

  const loadingCompleted = useCallback(() => {
    loadingState.completed = true
  }, [])

  const loadingInProgress = useCallback(() => {
    loadingState.progress = progress
  }, [progress])

  useEffect(() => {
    loadingInProgress()
    return () => loadingCompleted()
  }, [loadingCompleted, loadingInProgress])

  return null
}

export default Loading
