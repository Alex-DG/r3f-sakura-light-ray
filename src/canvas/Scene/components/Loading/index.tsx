// import { useProgress } from '@react-three/drei'
import { useCallback, useEffect } from 'react'
import { loadingState } from '../../../../store'

const Loading = () => {
  const loadingCompleted = useCallback(() => {
    console.log('🤖', 'Experience is ready!')
    loadingState.completed = true
  }, [])

  useEffect(() => {
    return () => {
      loadingCompleted()
    }
  }, [loadingCompleted])

  return null
}

export default Loading
