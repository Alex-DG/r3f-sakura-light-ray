import { useCallback, useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import { debugCone } from '../utils/debug/debugCone'
import { ConeMultipleRefs, ConeProps } from '../types'
import GodRayMaterial from '../canvas/Scene/shaders/GodRayMaterial'

const useCone = ({ radius }: { radius: number }) => {
  const coneRef = useRef<Mesh>(null!)
  const coneMatRef = useRef<GodRayMaterial>(null!)
  const coneRefs: ConeMultipleRefs = { coneRef, coneMatRef }

  const [props, setProps] = useState<ConeProps>({
    radius: radius
  })

  const updateCallback = useCallback((props: ConeProps) => {
    setProps(props)
  }, [])

  useEffect(() => {
    const { coneRef, coneMatRef } = coneRefs
    debugCone(coneRef.current, coneMatRef.current, props, updateCallback)
  }, [])

  return { coneRefs, radius: props.radius }
}

export default useCone
