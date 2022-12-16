import * as THREE from 'three'
import { useRef, useEffect, useState, Suspense, useLayoutEffect } from 'react'
import { Canvas, useThree, extend, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

extend({ Box: THREE.BoxGeometry })

// function Test() {
//   return <div className='bg-red-500'></div>
// }

function SpinningCube() {
  const { scene, nodes, materials } = useGLTF('/project_room.gltf');

  // var abc: String; // This is defining.
  // abc = "Hello, World!"; // This is assigning.

  useLayoutEffect(() => {
    Object.assign(materials.Material, {
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: new THREE.Color(0xffa500),
      envMapIntensity: 0.5 })
  }, [scene, nodes, materials]);

  return (
    <primitive object={scene} />
  )
}

function App() {
  return (
    <div className={`w-full h-screen`}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={['white']} />
        <Suspense fallback={null}>
          <Stage intensity={1}>
            <SpinningCube/>
          </Stage>
        </Suspense>
        <OrbitControls autoRotate enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} />
      </Canvas>
    </div>
  )
}

export default App;