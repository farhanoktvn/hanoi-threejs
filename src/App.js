import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// import Box from './Box';
import Cylinder from './Cylinder'

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        camera={{ fov: 45, position: [15, 4, 0] }}>
        <ambientLight color="0x404040" intensity={0.8} />
        <Suspense>
          {/* Cylinder */}
          <Cylinder position={[0, 0, 0]}/>
          <Cylinder position={[0, 0, 4]}/>
          <Cylinder position={[0, 0, -4]}/>
          {/* Box */}
          {/* <Box position={[0, 0, 0]}/>
          <Box position={[0, 0, 4]}/>
          <Box position={[0, 0, -4]}/> */}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
