import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../libs/context/IsPlayingContext";

const Head = () => {
  const model = useGLTF("/cute.glb");
  console.log(model)
  const animation = useAnimations(model.animations, model.scene);
  const action = animation.actions.ArmatureAction;
  // const action = animation.actions.Animation;
  // console.log(action);
  // console.log(model);
  const { isPlaying, setIsPlaying } = useContext(AppContext);
  console.log(isPlaying)

  useEffect(() => {
    if (isPlaying) {
      action?.play();
    } else {
      action?.fadeOut(0.5);
      setTimeout(() => {
        action?.stop();
      }, 500);
    }
  }, [isPlaying, action]);

  return <primitive object={model.scene} scale={10} />;
};

const ChatBotCanvas = () => {
  return (
    <>
      <div style={{ height: "30vh", position: "relative" }}>
        <Canvas
          camera={{ position: [0, 0, 15] }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <OrbitControls
            enableZoom={false}
            enableDamping
            maxPolarAngle={2}
            minAzimuthAngle={-Math.PI * 0.5}
            maxAzimuthAngle={Math.PI * 0.5}
          />
          <ambientLight />
          <Head />
        </Canvas>
      </div>
    </>
  );
};

export default ChatBotCanvas;
