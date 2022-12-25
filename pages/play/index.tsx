import { NextPage } from "next";
import * as THREE from 'three'
import { useRef, useEffect, useState, Suspense, useLayoutEffect } from 'react'
import { Canvas, useThree, extend, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

function SpinningCube() {
    const { scene, nodes, materials } = useGLTF('/DesignChair1.gltf');

    Object.assign(
        materials.Material, {
          roughness: 10,
          metalness: 0,
          emissive: new THREE.Color(0x000000),
          color: new THREE.Color(0x96C3EB),
          envMapIntensity: 0.5
        }
      )
    
      return (
        <primitive object={scene} />
      )
    }
    
    function Play() {
      return (
        <div className={`w-full h-screen`}>
          <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
            <color attach="background" args={['white']} />
            <Suspense fallback={null}>
              <Stage intensity={1}>
                <SpinningCube/>
              </Stage>
            </Suspense>
            <OrbitControls autoRotate enableZoom minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} />
          </Canvas>
        </div>
      )
    }

export default Play;