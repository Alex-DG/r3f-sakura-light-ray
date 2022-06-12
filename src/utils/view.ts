import { PerspectiveCamera } from 'three'

export const getViewSize = (camera: PerspectiveCamera) => {
  const fovInRadians = (camera.fov * Math.PI) / 180
  const height = Math.abs(camera.position.z * Math.tan(fovInRadians / 2) * 2)
  return { width: height * camera.aspect, height }
}

export const scaleMeshToView = (mesh: THREE.Mesh, camera: PerspectiveCamera) => {
  const rect = document.querySelector('canvas')?.getBoundingClientRect()
  const viewSize = getViewSize(camera as PerspectiveCamera)

  if (rect) {
    // Transform pixel units to camera's view units
    const widthViewUnit = (rect.width * viewSize.width) / window.innerWidth
    const heightViewUnit = (rect.height * viewSize.height) / window.innerHeight
    mesh.scale.x = widthViewUnit
    mesh.scale.y = heightViewUnit
  }
}
