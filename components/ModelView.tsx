import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";
import { StaticImageData } from "next/image";

interface ModelViewProps {
    index: number;
    groupRef: React.RefObject<any>;
    gsapType: string;
    controlRef: React.RefObject<any>;
    setRotationState: (state: number) => void;
    size: string;
    item: {
        title: string;
        color: string[];
        img: string;
      }; // You may want to replace 'any' with a more specific type
  }

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={new THREE.Vector3(index === 1 ? 15 : 17, index === 1 ? 15 : 17, index === 1 ? 15 : 17)}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView