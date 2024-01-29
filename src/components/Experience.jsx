import {
  Environment,
  Float,
  OrbitControls,
  //Billboard,
  //useTexture,
} from "@react-three/drei";

import { useControls } from "leva";
import { Heart } from "./Heart";
import { Banana } from "./Banana";
import { WesternBlueBird } from "./WesternBlueBird";
import { Skull } from "./Skull";

export const Experience = () => {
  // const xLogo = useTexture("/textures/x-logo.png");

  const { item } = useControls({
    item: {
      value: "heart",
      options: ["heart", "banana", "westernbluebird", "skull"],
    },
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Heart scale={0.25} visible={item === "heart"} />
        <Banana scale={0.15} visible={item === "banana"} />
        <Skull scale={0.23} visible={item === "skull"} />
        <WesternBlueBird
          scale={0.3}
          rotation-y={-Math.PI / 4}
          visible={item === "westernbluebird"}
        />
        {/* <Billboard visible={item === "westernbluebird"}>
          <mesh>
            <planeGeometry args={[0.4, 0.4]} />
            <meshBasicMaterial map={xLogo} transparent />
          </mesh>
        </Billboard> */}
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
