import { useEffect, useRef } from 'react'
import { SpotLight } from 'three'
import { debugLights } from '../utils/debug/debugLigths'

const useLights = () => {
  const spot1Ref = useRef<SpotLight>(null!)
  const spot2Ref = useRef<SpotLight>(null!)

  useEffect(() => {
    debugLights(spot1Ref.current, spot2Ref.current)
  }, [])

  return { spot1Ref, spot2Ref }
}

export default useLights
