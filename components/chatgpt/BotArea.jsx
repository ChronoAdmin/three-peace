import React from "react";
import TextToSpeech from "./TextToSpeech";
import ChatBotCanvas from "./ChatBotCanvas";
import { IsPlayingProvider } from "../../libs/context/IsPlayingContext";

const BotArea = () => {
  return (
    <>
      <IsPlayingProvider>
        <ChatBotCanvas />
        <TextToSpeech />
      </IsPlayingProvider>
    </>
  );
};

export default BotArea;
