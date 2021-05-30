import React, { useRef, useState } from 'react'
import { cylinderGeometry } from '@react-three/fiber'

function Cylinder(props) {
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <cylinderGeometry args={[1.5, 1.5, 4, 25]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'royalblue'} />
    </mesh>
  );
}

export default Cylinder;