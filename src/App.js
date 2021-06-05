import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import BasePlane from './components/BasePlane'
import TowerPole from './components/TowerPole'
import TowerDisc from './components/TowerDisc'

const App = () => {

  const leftTowerPos = [-15, 0]
  const centerTowerPos = [0, 0]
  const rightTowerPos = [15, 0]

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
          <TowerPole towerPosition={leftTowerPos} />
          <TowerPole towerPosition={centerTowerPos} />
          <TowerPole towerPosition={rightTowerPos} />
          {/* Tower Discs */}
          {initDiscs(8, leftTowerPos)}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function initDiscs(pieces, discPosition) {

  const maxRadius = 5
  const minRadius = 1.25
  const radiusDiff = (maxRadius - minRadius) / pieces
  const colours = [
    'firebrick', 'blueviolet', 'chocolate', 'coral', 'crimson', 'darkkhaki', 'darkorange', 'indigo'
  ]

  let comps = []

  for (let i = 0; i < pieces; i++) {
    comps.push(<TowerDisc
      radius={maxRadius - (i * radiusDiff)}
      discPosition={discPosition}
      stackPos={i + 1}
      color={colours[i]}
    />)
  }

  return comps

}

export default App;
