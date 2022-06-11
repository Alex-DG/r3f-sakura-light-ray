import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferAttribute, Points } from 'three'
import { useRef } from 'react'
import { sceneState } from '../../../../store'

const Stars = () => {
  const sparklesRef = useRef<Points>(null)

  useFrame(() => {
    const attrOpacity = sparklesRef.current!.geometry.getAttribute('opacity')
    const lightProgress = Math.min(1, Math.max(0.15, sceneState.lightProgress)) // [0.15, 1]
    const opacity = [...Array(attrOpacity.count)].map(() => lightProgress)
    sparklesRef.current!.geometry.setAttribute('opacity', new BufferAttribute(Float32Array.from(opacity), 1))
  })

  return <Sparkles ref={sparklesRef} scale={[6, 4, 3]} position-y={-0.5} count={80} size={6} speed={0.25} />
}

export default Stars
