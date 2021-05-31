import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import BasePlane from './components/BasePlane'
import TowerPole from './components/TowerPole'
import TowerDisc from './components/TowerDisc'

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        camera={{ fov: 40, position: [0, 15, 40] }}
      >
        <color attach="background" args={["papayawhip"]} />
        <ambientLight color="#ffffff" intensity={0.8} />
        <Suspense>
          {/* Base of Poles */}
          <BasePlane />
          {/* Tower Poles */}
          <TowerPole towerPosition={[0, 0]} />
          <TowerPole towerPosition={[15, 0]} />
          <TowerPole towerPosition={[-15, 0]} />
          {/* Tower Discs */}
          <TowerDisc
            radius={4}
            discPosition={[0, 0]}
            stackPos={1}
            color={'aqua'}
          />
          <TowerDisc
            radius={3}
            discPosition={[0, 0]}
            stackPos={2}
            color={'cadetblue'}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
