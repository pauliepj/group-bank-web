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
import Model1 from "./Coin";
  
function HomePage(){
    const [x, setX] = useState(0)
    useEffect(() => {
        setX(x + 0.001);
    },[x])
      
    return(
        <Canvas camera = {{position:[5,5,5], fov: 90}}>
            {/* <ambientLight intensity={2} /> */}
             <pointLight position={[10, 10, 0]} />
            <OrbitControls />
            
                
            <Text rotation= {[0, Math.PI/2 + x, 0]} position= {[0,5,0]} color="blue" anchorX="center" anchorY="middle" fontSize = ".5">
                Welcome to the U.G.B's virtual ATM
            </Text>
            <Suspense fallback={null}>
            <Model rotation= {[0, x ,0]}/>
            <Model1 />
            </Suspense>
        </Canvas>
    );
    
}

export default HomePage;