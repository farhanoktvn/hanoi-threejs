import React, { useRef } from 'react'
import { Shape } from 'three'

// var parts = []

// const TowerDisc = (props) => {
//   const towerDisc = useRef()

//   parts.push(<Disc {...props} top={true} />)
//   parts.push(<Disc {...props} top={false} />)
//   parts.push(<DiscWall {...props} length={props.radius - 0.5} />)

//   return (
//     <group
//       ref={towerDisc}
//     >
//       {parts}
//     </group>
//   );
// }

const TowerDisc = (props) => {
  const towerDisc = useRef()

  const innerRadius = 0.5
  const discHeight = 1
  const extrudeSettings = { depth: discHeight, curveSegments: 12, bevelEnabled: false };

  return (
    <mesh
      ref={towerDisc}
      position={[0, stackPosition(props.stackPos, discHeight), 0]}
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