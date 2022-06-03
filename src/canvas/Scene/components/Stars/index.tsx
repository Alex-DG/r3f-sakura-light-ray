import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BufferAttribute, Points } from 'three'
import { useRef } from 'react'
import { sceneState } from '../../../../store'

const Stars = () => {
  const sparklesRef = useRef<Points>(null)

  useFrame(() => {
    const attrOpacity = sparklesRef.current!.geometry.getAttribute('opacity')
    const opacity = [...Array(attrOpacity.count)].map(() => sceneState.lightProgress)
    sparklesRef.current!.geometry.setAttribute('opacity', new BufferAttribute(Float32Array.from(opacity), 1))
  })

  return <Sparkles ref={sparklesRef} scale={[4, 3, 3]} position-y={-0.5} count={40} size={6} speed={0.5} />
}

export default Stars
