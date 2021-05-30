import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'


function App() {
  const [active, setActive] = useState(false)
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight
          intensity={0.1}
        />

        <directionalLight
          color="white"
          position={[0, 0, 5]}
        />

        <mesh
          scale={active ? 1.5 : 1}
          onClick={() => setActive(!active)}
        >
          <boxGeometry
            args={[3, 3, 3]}
          />
          <meshNormalMaterial
            wireframe={true}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
