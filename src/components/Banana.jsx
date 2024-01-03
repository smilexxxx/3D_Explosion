/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/banana.glb -o src/components/Banana.jsx -r public -k 
Banana by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/ahOO6wz8sV0)
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useExplode } from "../hooks/useExplode";

export function Banana(props) {
  const { nodes, materials } = useGLTF("/models/banana.glb");
  const group = useRef();

  useExplode(group, {
    distance: 6,
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group name="origin" position={[0.023, 0.008, 0.017]}>
        <mesh
          name="pasted__pCube11_group_1"
          geometry={nodes.pasted__pCube11_group_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_1_1"
          geometry={nodes.pasted__pCube11_group_1_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell"
        position={[-0.432, 2.664, 1.218]}
      >
        <mesh
          name="pasted__pCube11_group_cell039"
          geometry={nodes.pasted__pCube11_group_cell039.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell039_1"
          geometry={nodes.pasted__pCube11_group_cell039_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell001"
        position={[-0.329, -2.439, -0.076]}
      >
        <mesh
          name="pasted__pCube11_group_cell040"
          geometry={nodes.pasted__pCube11_group_cell040.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell040_1"
          geometry={nodes.pasted__pCube11_group_cell040_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell002"
        position={[0.017, 3.559, 1.284]}
      >
        <mesh
          name="pasted__pCube11_group_cell001_1"
          geometry={nodes.pasted__pCube11_group_cell001_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell001_2"
          geometry={nodes.pasted__pCube11_group_cell001_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell004"
        position={[0.698, -1.093, -0.067]}
      >
        <mesh
          name="pasted__pCube11_group_cell002_1"
          geometry={nodes.pasted__pCube11_group_cell002_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell002_2"
          geometry={nodes.pasted__pCube11_group_cell002_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell007"
        position={[-0.333, -3.587, 0.377]}
      >
        <mesh
          name="pasted__pCube11_group_cell003"
          geometry={nodes.pasted__pCube11_group_cell003.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell003_1"
          geometry={nodes.pasted__pCube11_group_cell003_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell009"
        position={[-0.257, 2.161, -0.17]}
      >
        <mesh
          name="pasted__pCube11_group_cell004_1"
          geometry={nodes.pasted__pCube11_group_cell004_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell004_2"
          geometry={nodes.pasted__pCube11_group_cell004_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell010"
        position={[-0.166, -3.909, 1.292]}
      >
        <mesh
          name="pasted__pCube11_group_cell005"
          geometry={nodes.pasted__pCube11_group_cell005.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell005_1"
          geometry={nodes.pasted__pCube11_group_cell005_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell012"
        position={[-0.473, 2.77, 0.47]}
      >
        <mesh
          name="pasted__pCube11_group_cell006"
          geometry={nodes.pasted__pCube11_group_cell006.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell006_1"
          geometry={nodes.pasted__pCube11_group_cell006_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell013"
        position={[-0.584, -3.482, 0.172]}
      >
        <mesh
          name="pasted__pCube11_group_cell007_1"
          geometry={nodes.pasted__pCube11_group_cell007_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell007_2"
          geometry={nodes.pasted__pCube11_group_cell007_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell014"
        position={[-0.004, 4.296, 2.33]}
      >
        <mesh
          name="pasted__pCube11_group_cell008"
          geometry={nodes.pasted__pCube11_group_cell008.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell008_1"
          geometry={nodes.pasted__pCube11_group_cell008_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell015"
        position={[0.281, -3.462, 0.976]}
      >
        <mesh
          name="pasted__pCube11_group_cell009_1"
          geometry={nodes.pasted__pCube11_group_cell009_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell009_2"
          geometry={nodes.pasted__pCube11_group_cell009_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell016"
        position={[0.483, -3.628, 0.684]}
      >
        <mesh
          name="pasted__pCube11_group_cell010_1"
          geometry={nodes.pasted__pCube11_group_cell010_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell010_2"
          geometry={nodes.pasted__pCube11_group_cell010_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell017"
        position={[0.142, 1.093, 0.336]}
      >
        <mesh
          name="pasted__pCube11_group_cell011"
          geometry={nodes.pasted__pCube11_group_cell011.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell011_1"
          geometry={nodes.pasted__pCube11_group_cell011_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell018"
        position={[-0.007, 2.873, 0.843]}
      >
        <mesh
          name="pasted__pCube11_group_cell012_1"
          geometry={nodes.pasted__pCube11_group_cell012_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell012_2"
          geometry={nodes.pasted__pCube11_group_cell012_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell019"
        position={[-0.379, -3.224, 0.776]}
      >
        <mesh
          name="pasted__pCube11_group_cell013_1"
          geometry={nodes.pasted__pCube11_group_cell013_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell013_2"
          geometry={nodes.pasted__pCube11_group_cell013_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell020"
        position={[-0.237, 1.896, 0.724]}
      >
        <mesh
          name="pasted__pCube11_group_cell014_1"
          geometry={nodes.pasted__pCube11_group_cell014_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell014_2"
          geometry={nodes.pasted__pCube11_group_cell014_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell022"
        position={[-0.113, -0.682, -0.968]}
      >
        <mesh
          name="pasted__pCube11_group_cell015_1"
          geometry={nodes.pasted__pCube11_group_cell015_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell015_2"
          geometry={nodes.pasted__pCube11_group_cell015_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell023"
        position={[-0.056, -3.86, 0.895]}
      >
        <mesh
          name="pasted__pCube11_group_cell016_1"
          geometry={nodes.pasted__pCube11_group_cell016_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell016_2"
          geometry={nodes.pasted__pCube11_group_cell016_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell025"
        position={[-0.364, 3.56, 0.716]}
      >
        <mesh
          name="pasted__pCube11_group_cell017_1"
          geometry={nodes.pasted__pCube11_group_cell017_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell017_2"
          geometry={nodes.pasted__pCube11_group_cell017_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell026"
        position={[-0.285, -3.261, 1.208]}
      >
        <mesh
          name="pasted__pCube11_group_cell018_1"
          geometry={nodes.pasted__pCube11_group_cell018_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell018_2"
          geometry={nodes.pasted__pCube11_group_cell018_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell027"
        position={[0.597, -3.135, 0.064]}
      >
        <mesh
          name="pasted__pCube11_group_cell019_1"
          geometry={nodes.pasted__pCube11_group_cell019_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell019_2"
          geometry={nodes.pasted__pCube11_group_cell019_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell028"
        position={[0.086, -3.956, 1.302]}
      >
        <mesh
          name="pasted__pCube11_group_cell020_1"
          geometry={nodes.pasted__pCube11_group_cell020_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell020_2"
          geometry={nodes.pasted__pCube11_group_cell020_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell029"
        position={[0.375, -2.111, 0.025]}
      >
        <mesh
          name="pasted__pCube11_group_cell021"
          geometry={nodes.pasted__pCube11_group_cell021.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell021_1"
          geometry={nodes.pasted__pCube11_group_cell021_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell031"
        position={[0.594, 1.909, -0.004]}
      >
        <mesh
          name="pasted__pCube11_group_cell022_1"
          geometry={nodes.pasted__pCube11_group_cell022_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell022_2"
          geometry={nodes.pasted__pCube11_group_cell022_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell032"
        position={[-0.019, 3.918, 1.898]}
      >
        <mesh
          name="pasted__pCube11_group_cell023_1"
          geometry={nodes.pasted__pCube11_group_cell023_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell023_2"
          geometry={nodes.pasted__pCube11_group_cell023_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell033"
        position={[0.074, 0.162, -0.637]}
      >
        <mesh
          name="pasted__pCube11_group_cell024"
          geometry={nodes.pasted__pCube11_group_cell024.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell024_1"
          geometry={nodes.pasted__pCube11_group_cell024_1.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell034"
        position={[-0.209, 3.882, 1.411]}
      >
        <mesh
          name="pasted__pCube11_group_cell025_1"
          geometry={nodes.pasted__pCube11_group_cell025_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell025_2"
          geometry={nodes.pasted__pCube11_group_cell025_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell035"
        position={[0.126, -3.383, 0.317]}
      >
        <mesh
          name="pasted__pCube11_group_cell026_1"
          geometry={nodes.pasted__pCube11_group_cell026_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell026_2"
          geometry={nodes.pasted__pCube11_group_cell026_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell037"
        position={[-0.099, -0.634, 0.11]}
      >
        <mesh
          name="pasted__pCube11_group_cell027_1"
          geometry={nodes.pasted__pCube11_group_cell027_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell027_2"
          geometry={nodes.pasted__pCube11_group_cell027_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
      <group
        name="pasted__pCube11_group_cell038"
        position={[0.887, -2.53, -0.708]}
      >
        <mesh
          name="pasted__pCube11_group_cell028_1"
          geometry={nodes.pasted__pCube11_group_cell028_1.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          name="pasted__pCube11_group_cell028_2"
          geometry={nodes.pasted__pCube11_group_cell028_2.geometry}
          material={materials.blinn2SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/banana.glb");
