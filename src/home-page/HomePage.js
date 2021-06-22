import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import { Html, Box, OrbitControls, Text} from '@react-three/drei'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Model from "./Machine";

function Bird({ speed, factor, url, ...props }) {
    const { nodes, materials, animations } = useLoader(GLTFLoader, url)
    const group = useRef()
    const mesh = useRef()
    const [start] = useState(() => Math.random() * 5000)
    const [mixer] = useState(() => new THREE.AnimationMixer())
    useEffect(() => void mixer.clipAction(animations[0], group.current).play(), [])
    useFrame((state, delta) => {
      mesh.current.position.y = Math.sin(start + state.clock.elapsedTime) * 5
      mesh.current.rotation.x = Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10
      mesh.current.rotation.y = (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2
      group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
      mixer.update(delta * speed)
    })
    return (
      <group ref={group} dispose={null}>
        <scene name="Scene" {...props}>
          <mesh
            ref={mesh}
            scale={1.5}
            name="Object_0"
            morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
            morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
            rotation={[Math.PI / 2, 0, 0]}
            geometry={nodes.Object_0.geometry}
            material={materials.Material_0_COLOR_0}
          />
        </scene>
      </group>
    )
  }
  
  function Birds() {
    return new Array(100).fill().map((_, i) => {
      const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
      const y = -10 + Math.random() * 20
      const z = -5 + Math.random() * 10
      const bird = ['Stork', 'Parrot', 'Flamingo'][Math.round(Math.random() * 2)]
      let speed = bird === 'Stork' ? 0.25 : bird === 'Flamingo' ? 0.5 : 5
      let factor = bird === 'Stork' ? 0.5 + Math.random() : bird === 'Flamingo' ? 0.25 + Math.random() : 1 + Math.random() - 0.5
      return <Bird key={i} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} speed={speed} factor={factor} url={`C:\Users\samue\Documents\REACTworkspace\group-bank-web\src\home-page\Parrot.glb`} />
    })
  }
  
function HomePage(){
    
      
    return(
        <Canvas camera = {{position:[5,5,5], fov: 90}}>
            {/* <ambientLight intensity={2} /> */}
             <pointLight position={[10, 10, 0]} />
            <OrbitControls />
            
                
            <Text rotation= {[0, Math.PI/2, 0]} position= {[0,5,0]} color="grey" anchorX="center" anchorY="middle" fontSize = ".5">
                Welcome to the U.G.B's virtual
            </Text>
            <Model/>
        </Canvas>
    );
    
}

export default HomePage;