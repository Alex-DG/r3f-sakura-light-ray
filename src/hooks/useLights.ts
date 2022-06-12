import { useEffect, useRef } from 'react'
import { SpotLight, Group } from 'three'
import { debugLights } from '../utils/debug/debugLigths'

const useLights = () => {
  const groupRef = useRef<Group>(null!)
  const spot1Ref = useRef<SpotLight>(null!)
  const spot2Ref = useRef<SpotLight>(null!)

  useEffect(() => {
    debugLights(spot1Ref.current, spot2Ref.current, groupRef.current)
  }, [])

  return { spot1Ref, spot2Ref, groupRef }
}

export default useLights
