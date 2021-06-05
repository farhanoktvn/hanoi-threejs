import { useRef } from 'react'

const TowerPole = (props) => {
  const towerBase = useRef()
  const towerRod = useRef()

  // Object Sizing
  const boxWidth = 12
  const boxLength = 12
  const boxHeight = 0.5

  const cylinderRadius = 0.4
  const cylinderHeight = 10
  const cylinderSegment = 25

  return (
    <group>
      <mesh
        position={[props.towerPosition[0], boxHeight / 2, props.towerPosition[1]]}
        ref={towerBase}
      >
        <boxGeometry args={[boxWidth, boxHeight, boxLength]} />
        <meshNormalMaterial color={'royalblue'} />
      </mesh>
      <mesh
        position={[props.towerPosition[0], (cylinderHeight / 2 + boxHeight / 2), props.towerPosition[1]]}
        ref={towerRod}
      >
        <cylinderGeometry args={[cylinderRadius, cylinderRadius, cylinderHeight, cylinderSegment]} />
        <meshNormalMaterial color={'royalblue'} />
      </mesh>
    </group>
  );
}

export default TowerPole;