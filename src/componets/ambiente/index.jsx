/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF, useTexture, ContactShadows   } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization';
import { useRef } from 'react';

export function Ambient(props) {
  const { nodes } = useGLTF("/models/ambient.glb");
  const {material} = useCustomization();
  const ambientRef = useRef();


  const tacoQuadrado = useTexture({
    map: "/textures/taco_encaixado/Substance_Graph_BaseColor.jpg",
    normalMap: "/textures/taco_encaixado/Substance_Graph_Normal.jpg",
    roughnessMap: "/textures/taco_encaixado/Substance_Graph_Roughness.jpg",
    aoMap: "/textures/taco_encaixado/Substance_Graph_AmbientOcclusion.jpg",
  });
  tacoQuadrado.map.repeat.set(2,3)
  tacoQuadrado.normalMap.repeat.set(2,3)
  tacoQuadrado.roughnessMap.repeat.set(2,3)
  tacoQuadrado.aoMap.repeat.set(2,3)

  tacoQuadrado.map.wrapS = THREE.RepeatWrapping
    tacoQuadrado.map.wrapT = THREE.RepeatWrapping  
    tacoQuadrado.normalMap.wrapS = THREE.RepeatWrapping 
    tacoQuadrado.normalMap.wrapT = THREE.RepeatWrapping
    tacoQuadrado.roughnessMap.wrapS = THREE.RepeatWrapping 
    tacoQuadrado.roughnessMap.wrapT = THREE.RepeatWrapping
    tacoQuadrado.aoMap.wrapS = THREE.RepeatWrapping
    tacoQuadrado.aoMap.wrapT = THREE.RepeatWrapping 
 


  return (
    <group {...props} dispose={null}>
      <mesh 
        castShadow
        receiveShadow
        ref={ambientRef}
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        scale={[2, 1, 3]}
      >
         <meshStandardMaterial {...tacoQuadrado}  side={THREE.DoubleSide} />

      </mesh>
      <mesh 
      
      position={[0,0.5,0]}
      castShadow
      receiveShadow
      ref={ambientRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color="white" roughness={0} metalness={0.1} /> 
      </mesh> 

      <mesh
      castShadow receiveShadow
      ref={ambientRef}
        geometry={nodes.wall.geometry}
        scale={[2, 1, 3]}
      >         
            <meshStandardMaterial
            
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={.5}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#9c9c9c"
        metalness={.2}
    />
        
        </mesh>
    </group>
  );
}

useGLTF.preload("/ambient.glb");