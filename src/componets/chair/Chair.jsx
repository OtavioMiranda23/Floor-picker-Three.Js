/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/chair.gltf
*/
import { useGLTF, useTexture,   } from '@react-three/drei'
import * as THREE from "three"
import { useCustomization } from '../../contexts/Customization';

export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/chair.gltf');
  const {material} = useCustomization();
 
    const leatherTextureProps = useTexture({
      map: "./textures/leather/Leather_008_Base_Color.jpg",
      normalMap: "./textures/leather/Leather_008_Normal.jpg",
      roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
      aoMap: "./textures/leather/Leather_008_Ambient_Occlusion.jpg",
    });
    leatherTextureProps.map.repeat.set(4,4)
    leatherTextureProps.normalMap.repeat.set(4,4)
    leatherTextureProps.roughnessMap.repeat.set(4,4)
    leatherTextureProps.aoMap.repeat.set(4,4)

    leatherTextureProps.map.wrapS = 
      leatherTextureProps.map.wrapT =  
      leatherTextureProps.normalMap.wrapS = 
      leatherTextureProps.normalMap.wrapT =
      leatherTextureProps.roughnessMap.wrapS = 
      leatherTextureProps.roughnessMap.wrapT =
      leatherTextureProps.aoMap.wrapS =
      leatherTextureProps.aoMap.wrapT = 
        THREE.RepeatWrapping
 
        const fabricTextureProps = useTexture({
          map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
          normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
          roughnessMap: "./textures/fabric/Fabric_Knitted_006_opacity.jpg",
          aoMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
        });

        fabricTextureProps.map.wrapS = 
        fabricTextureProps.map.wrapT =  
        fabricTextureProps.normalMap.wrapS = 
        fabricTextureProps.normalMap.wrapT =
        fabricTextureProps.roughnessMap.wrapS = 
        fabricTextureProps.roughnessMap.wrapT =
        fabricTextureProps.aoMap.wrapS =
        fabricTextureProps.aoMap.wrapT = 
          THREE.RepeatWrapping
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} castShadow>
        <meshStandardMaterial {...material === "leather" ? leatherTextureProps : fabricTextureProps} />

      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...fabricTextureProps} />

      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')
