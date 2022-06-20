import { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import SeaMaterial from '../canvas/Scene/shaders/SeaMaterial'
import { debugSea } from '../utils/debug/debugSea'

const useSea = () => {
  const seaRef = useRef<Mesh>(null!)
  const seaMaterialRef = useRef<SeaMaterial>(null!)

  useEffect(() => {
    debugSea(seaMaterialRef.current)
  }, [])

  return { seaMaterialRef, seaRef }
}

export default useSea
