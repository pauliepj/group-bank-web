/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/coin.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
     actions.idle_wide.play();
      
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.004}>
        <skinnedMesh
          geometry={nodes.gold_coins_012.geometry}
          material={nodes.gold_coins_012.material}
          skeleton={nodes.gold_coins_012.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_023.geometry}
          material={nodes.gold_coins_023.material}
          skeleton={nodes.gold_coins_023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_034.geometry}
          material={nodes.gold_coins_034.material}
          skeleton={nodes.gold_coins_034.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_045.geometry}
          material={nodes.gold_coins_045.material}
          skeleton={nodes.gold_coins_045.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_056.geometry}
          material={nodes.gold_coins_056.material}
          skeleton={nodes.gold_coins_056.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_067.geometry}
          material={nodes.gold_coins_067.material}
          skeleton={nodes.gold_coins_067.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_078.geometry}
          material={nodes.gold_coins_078.material}
          skeleton={nodes.gold_coins_078.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_089.geometry}
          material={nodes.gold_coins_089.material}
          skeleton={nodes.gold_coins_089.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_0910.geometry}
          material={nodes.gold_coins_0910.material}
          skeleton={nodes.gold_coins_0910.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01011.geometry}
          material={nodes.gold_coins_01011.material}
          skeleton={nodes.gold_coins_01011.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01112.geometry}
          material={nodes.gold_coins_01112.material}
          skeleton={nodes.gold_coins_01112.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01213.geometry}
          material={nodes.gold_coins_01213.material}
          skeleton={nodes.gold_coins_01213.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01314.geometry}
          material={nodes.gold_coins_01314.material}
          skeleton={nodes.gold_coins_01314.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01415.geometry}
          material={nodes.gold_coins_01415.material}
          skeleton={nodes.gold_coins_01415.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01516.geometry}
          material={nodes.gold_coins_01516.material}
          skeleton={nodes.gold_coins_01516.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01617.geometry}
          material={nodes.gold_coins_01617.material}
          skeleton={nodes.gold_coins_01617.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01718.geometry}
          material={nodes.gold_coins_01718.material}
          skeleton={nodes.gold_coins_01718.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01819.geometry}
          material={nodes.gold_coins_01819.material}
          skeleton={nodes.gold_coins_01819.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_01920.geometry}
          material={nodes.gold_coins_01920.material}
          skeleton={nodes.gold_coins_01920.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02021.geometry}
          material={nodes.gold_coins_02021.material}
          skeleton={nodes.gold_coins_02021.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02122.geometry}
          material={nodes.gold_coins_02122.material}
          skeleton={nodes.gold_coins_02122.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02223.geometry}
          material={nodes.gold_coins_02223.material}
          skeleton={nodes.gold_coins_02223.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02324.geometry}
          material={nodes.gold_coins_02324.material}
          skeleton={nodes.gold_coins_02324.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02425.geometry}
          material={nodes.gold_coins_02425.material}
          skeleton={nodes.gold_coins_02425.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02526.geometry}
          material={nodes.gold_coins_02526.material}
          skeleton={nodes.gold_coins_02526.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02627.geometry}
          material={nodes.gold_coins_02627.material}
          skeleton={nodes.gold_coins_02627.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02728.geometry}
          material={nodes.gold_coins_02728.material}
          skeleton={nodes.gold_coins_02728.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02829.geometry}
          material={nodes.gold_coins_02829.material}
          skeleton={nodes.gold_coins_02829.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_02930.geometry}
          material={nodes.gold_coins_02930.material}
          skeleton={nodes.gold_coins_02930.skeleton}
        />
        <skinnedMesh
          geometry={nodes.gold_coins_03031.geometry}
          material={nodes.gold_coins_03031.material}
          skeleton={nodes.gold_coins_03031.skeleton}
        />
        <primitive object={nodes.root_jnt33} />
      </group>
    </group>
  )
}

useGLTF.preload('/coin.glb')
