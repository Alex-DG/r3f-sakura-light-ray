import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, PerspectiveCamera } from 'three'

const RagingSea = () => {
  const { camera } = useThree()
  const seaRef = useRef<Mesh | null>(null)

  const getViewSize = () => {
    const cam = camera as PerspectiveCamera
    const fovInRadians = (cam.fov * Math.PI) / 180
    const height = Math.abs(camera.position.z * Math.tan(fovInRadians / 2) * 2)
    return { width: height * cam.aspect, height }
  }

  useEffect(() => {
    if (seaRef.current) {
      const rect = document.querySelector('canvas')?.getBoundingClientRect()

      if (rect) {
        const viewSize = getViewSize()

        // 1. Transform pixel units to camera's view units
        const widthViewUnit = (rect.width * viewSize.width) / window.innerWidth
        const heightViewUnit = (rect.height * viewSize.height) / window.innerHeight
        let xViewUnit = (rect.left * viewSize.width) / window.innerWidth
        let yViewUnit = (rect.top * viewSize.height) / window.innerHeight

        // 2. Make units relative to center instead of the top left.
        xViewUnit = xViewUnit - viewSize.width / 2
        yViewUnit = yViewUnit - viewSize.height / 2

        // 3. Make the origin of the plane's position to be the center instead of top Left.
        let x = xViewUnit + widthViewUnit / 2
        let y = -yViewUnit - heightViewUnit / 2

        // 4. Scale and position mesh
        const mesh = seaRef.current
        // Since the geometry's size is 1. The scale is equivalent to the size.
        mesh.scale.x = widthViewUnit
        mesh.scale.y = heightViewUnit
        // mesh.position.x = x
        // mesh.position.y = y
      }
    }
  }, [seaRef])

  return (
    <mesh ref={seaRef} position={[0, -2.8, -6]} rotation-x={-Math.PI * 0.455}>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <meshStandardMaterial attach="material" color={'hotpink'} />
    </mesh>
  )
}

export default RagingSea
