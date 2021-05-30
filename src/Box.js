import React, { useRef, useState } from 'react'
import { boxGeometry } from '@react-three/fiber'

function Box(props) {
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'royalblue'} />
    </mesh>
  );
}

export default Box;