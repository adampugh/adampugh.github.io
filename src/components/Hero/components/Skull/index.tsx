import { forwardRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh, MeshBasicMaterial } from 'three'
import type { Group } from 'three'

const MODEL_PATH = '/models/skull.glb'

// Confirmed from the .glb — the mouth-interior mesh is a second mesh
// named "Plane", using a material called "mouth_interior_mat".
const MOUTH_MESH_NAME = 'Plane'
const MOUTH_INTERIOR_COLOR = '#1e1e1e'

const Skull = forwardRef<Group>(function Skull(_props, ref) {
  const { scene } = useGLTF(MODEL_PATH)

  useEffect(() => {
    const mouth = scene.getObjectByName(MOUTH_MESH_NAME)

    // Swap the exported pbrMetallicRoughness material for an unlit one —
    // meshBasicMaterial ignores scene lights entirely, so this stays a
    // flat #1e1e1e no matter what.
    if (mouth instanceof Mesh && !(mouth.material instanceof MeshBasicMaterial)) {
      mouth.material = new MeshBasicMaterial({
        color: MOUTH_INTERIOR_COLOR,
        toneMapped: false,
      })
    }
  }, [scene])

  // <primitive> rather than destructured <mesh> elements — this model
  // is skinned to a jaw-bone skeleton, and primitive preserves the
  // original skin bindings/hierarchy as exported.
  return <primitive object={scene} ref={ref} dispose={null} />
})

export default Skull

useGLTF.preload(MODEL_PATH)
