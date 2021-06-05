import React, { useRef } from 'react'
import { Shape } from 'three'

const TowerDisc = (props) => {
  const towerDisc = useRef()

  const innerRadius = 0.5
  const discHeight = 1
  const extrudeSettings = { depth: discHeight, curveSegments: 12, bevelEnabled: false };

  return (
    <mesh
      ref={towerDisc}
      position={[props.discPosition[0], stackPosition(props.stackPos, discHeight), props.discPosition[1]]}
      rotation={[-(Math.PI / 2), 0, 0]}
    >
      <extrudeGeometry
        attach="geometry"
        args={[disc(props.radius, innerRadius), extrudeSettings]}
      />
      <meshBasicMaterial attach="material" color={props.color} />
    </mesh>
  );
}

function disc(radius, innerRadius) {

  const arcShape = new Shape()
    .moveTo(0, 0)
    .absarc(0, 0, radius, 0, Math.PI * 2, false);

  const holePath = new Shape()
    .moveTo(0, 0)
    .absarc(0, 0, innerRadius, 0, Math.PI * 2, true);

  arcShape.holes.push(holePath);

  return arcShape;
}

function stackPosition(order, discHeight) {
  return (0.55 + ((order - 0.95) * discHeight));
}

export default TowerDisc;