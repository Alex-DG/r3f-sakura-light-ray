import { useCallback, useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import { Cone as ConeR3F } from '@react-three/drei'
import { debugCone } from '../utils/debug/debugCone'
import { ConeProps } from '../types'
import GodRayMaterial from '../canvas/Scene/shaders/GodRayMaterial'

const useCone = () => {
  const coneRef = useRef<Mesh>(null!)
  const coneMatRef = useRef<GodRayMaterial>(null!)

  const [props, setProps] = useState<ConeProps>({
    radius: 1.5
  })

  const updateCallback = useCallback((props: ConeProps) => {
    setProps(props)
  }, [])

  useEffect(() => {
    debugCone(coneRef.current, coneMatRef.current, props, updateCallback)
  }, [])

  return { coneRef, coneMatRef, radius: props.radius }
}

export default useCone
