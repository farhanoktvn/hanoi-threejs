import React, { useRef } from 'react'

const TowerDisc = (props) => {
  const towerDiscBot = useRef()
  const towerDiscTop = useRef()

  // Object Sizing
  const innerRad = 0.5
  const thetaSegment = 8
  const discHeight = 1

  return (
    <group>
      <mesh
        position={[props.discPosition[0], stackPosition(props.stackPos, discHeight, false), props.discPosition[1]]}
        rotation={[-(Math.PI / 2), 0, 0]}
        ref={towerDiscBot}
      >
        <ringGeometry args={[innerRad, props.radius, thetaSegment]} />
        <meshBasicMaterial color={props.color} />
      </mesh>
      <mesh
        position={[props.discPosition[0], stackPosition(props.stackPos, discHeight, true), props.discPosition[1]]}
        rotation={[-(Math.PI / 2), 0, 0]}
        ref={towerDiscTop}
      >
        <ringGeometry args={[innerRad, props.radius, thetaSegment]} />
        <meshBasicMaterial color={props.color} />
      </mesh>
    </group>
  );
}

function stackPosition(order, discHeight, top) {
  return (top ? (0.55 + ((order - 0.95) * discHeight)) : (0.55 + (order * discHeight)))
}

export default TowerDisc;