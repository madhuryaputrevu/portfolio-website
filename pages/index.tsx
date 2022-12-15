import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber'

extend({ Box: THREE.BoxGeometry })

function SpinningCube() {
  const mesh = useRef<THREE.Mesh>(null)

  var increase = true;

  useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01

        if (increase) {
          mesh.current.scale.x += 0.01
          if (mesh.current.scale.x >= 1) {
            increase = false;
          }
        } else {
          mesh.current.scale.x -= 0.01
          if (mesh.current.scale.x <= 0.2) {
            increase = true;
          }
        }
      }
  })
  return (
    <mesh ref={mesh}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color="rgb(216,180,254)" />
    </mesh>
  )
}

function App() {
  return (
    <div className={`w-full h-screen`}>
      <Canvas flat linear>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
      </Canvas>
    </div>
  )
}

export default App;